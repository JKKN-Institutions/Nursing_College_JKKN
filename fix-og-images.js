#!/usr/bin/env node
/*
 * fix-og-images.js
 * Scans all app/[route]/layout.tsx files
 * (excluding root app/layout.tsx and app/admin/ paths)
 * and adds default OG images where missing.
 *
 * Case 1: openGraph block exists but has NO images array -> insert images after last field
 * Case 2: metadata exists but has NO openGraph block at all -> insert full openGraph block after description
 * Case 3: openGraph already has images -> skip (no change)
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname);
const APP_DIR = path.join(PROJECT_ROOT, "app");

const DEFAULT_OG_IMAGE = `images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],`;

const stats = {
  scanned: 0,
  alreadyHasImages: 0,
  addedToExistingOG: 0,
  addedFullOGBlock: 0,
  noMetadata: 0,
  errors: [],
};

/*
 * Recursively collect all layout.tsx files under app/,
 * excluding app/layout.tsx (root) and app/admin/ paths.
 */
function collectLayoutFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip admin directory entirely
      if (entry.name === "admin") continue;
      collectLayoutFiles(fullPath, results);
    } else if (entry.name === "layout.tsx") {
      // Skip root app/layout.tsx
      if (fullPath === path.join(APP_DIR, "layout.tsx")) continue;
      results.push(fullPath);
    }
  }
  return results;
}

/*
 * Case 1: openGraph block present but missing images.
 *
 * Strategy: find the closing brace of the openGraph block and insert images just before it.
 * We locate the openGraph: { opening, then track brace depth to find its closing brace,
 * then insert the images array before that closing brace.
 */
function insertImagesIntoExistingOG(content) {
  // Find position of `openGraph: {`
  const ogStart = content.indexOf("openGraph: {");
  if (ogStart === -1) return null;

  // Walk from ogStart, track brace depth
  let braceDepth = 0;
  let i = ogStart;
  let ogOpenBrace = -1;
  let ogCloseBrace = -1;

  while (i < content.length) {
    if (content[i] === "{") {
      braceDepth++;
      if (braceDepth === 1 && ogOpenBrace === -1) {
        ogOpenBrace = i;
      }
    } else if (content[i] === "}") {
      braceDepth--;
      if (braceDepth === 0) {
        ogCloseBrace = i;
        break;
      }
    }
    i++;
  }

  if (ogCloseBrace === -1) return null;

  // Get the slice of the openGraph block (between braces, exclusive)
  const ogBlockContent = content.slice(ogOpenBrace + 1, ogCloseBrace);

  // Double-check: no images key inside
  if (/\bimages\s*:/.test(ogBlockContent)) return null;

  // Detect the indentation of the openGraph line to match style
  // Find line start of ogStart
  const lineStart = content.lastIndexOf("\n", ogStart) + 1;
  const ogLineIndent = content.slice(lineStart, ogStart).match(/^(\s*)/)[1];
  // Fields inside OG block are one level deeper
  const fieldIndent = ogLineIndent + "  ";

  // Build the images string with matching indentation
  const imagesBlock = `\n${fieldIndent}${DEFAULT_OG_IMAGE}`;

  // Insert just before the closing brace of the openGraph block.
  // Walk backward from ogCloseBrace to find the last non-whitespace character.
  let lastNonWS = ogCloseBrace - 1;
  while (lastNonWS > ogOpenBrace && /[\s]/.test(content[lastNonWS])) {
    lastNonWS--;
  }
  // insertPos is the character right after the last non-whitespace content
  const insertPos = lastNonWS + 1;

  // Only add a separator comma if the last non-whitespace character is NOT already a comma
  const lastChar = content[lastNonWS];
  const separator = lastChar === "," ? "" : ",";

  const newContent =
    content.slice(0, insertPos) +
    separator +
    imagesBlock +
    "\n" +
    ogLineIndent +
    content.slice(ogCloseBrace);

  return newContent;
}

/*
 * Case 2: metadata exists but no openGraph block.
 *
 * Strategy: find the description field inside the metadata object,
 * find end of that line, then insert the full openGraph block after it.
 *
 * We extract the title and description from the metadata to populate the OG block.
 */
function insertFullOGBlock(content) {
  // Extract title value from metadata
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const descriptionMatch = content.match(/description:\s*"([^"]+)"/);

  if (!titleMatch || !descriptionMatch) return null;

  const title = titleMatch[1];
  const description = descriptionMatch[1];

  // Find the metadata object opening
  const metaStart = content.indexOf("export const metadata");
  if (metaStart === -1) return null;

  // Find the description field line end within metadata block
  // We need to find where the description line ends
  const descIndex = content.indexOf('description: "', metaStart);
  if (descIndex === -1) return null;

  // Find end of the description line (after the closing quote + comma if any)
  // Walk forward from descIndex to find newline
  let lineEnd = content.indexOf("\n", descIndex);
  if (lineEnd === -1) lineEnd = content.length;

  // Detect indentation of the description line
  const descLineStart = content.lastIndexOf("\n", descIndex) + 1;
  const descIndent = content.slice(descLineStart, descIndex).match(/^(\s*)/)[1];

  // Build openGraph block with matching indentation
  const ogBlock = `
${descIndent}openGraph: {
${descIndent}  title: "${title}",
${descIndent}  description: "${description}",
${descIndent}  type: "website",
${descIndent}  siteName: "JKKN College of Nursing",
${descIndent}  ${DEFAULT_OG_IMAGE}
${descIndent}},`;

  const newContent =
    content.slice(0, lineEnd) + ogBlock + content.slice(lineEnd);

  return newContent;
}

/*
 * Process a single layout.tsx file.
 */
function processFile(filePath) {
  stats.scanned++;
  const relativePath = path.relative(PROJECT_ROOT, filePath);

  let content;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    stats.errors.push(`READ ERROR: ${relativePath} — ${err.message}`);
    return;
  }

  // Check if file has metadata at all
  if (!content.includes("export const metadata")) {
    stats.noMetadata++;
    console.log(`  SKIP (no metadata): ${relativePath}`);
    return;
  }

  const hasOG = content.includes("openGraph: {");
  const hasOGImages = hasOG && /openGraph:\s*\{[^}]*?\bimages\s*:/s.test(content);

  // More reliable check: scan inside the openGraph block for images key
  let ogHasImages = false;
  if (hasOG) {
    const ogStart = content.indexOf("openGraph: {");
    let depth = 0;
    let j = ogStart;
    let ogOpen = -1;
    let ogClose = -1;
    while (j < content.length) {
      if (content[j] === "{") {
        depth++;
        if (depth === 1 && ogOpen === -1) ogOpen = j;
      } else if (content[j] === "}") {
        depth--;
        if (depth === 0) { ogClose = j; break; }
      }
      j++;
    }
    if (ogOpen !== -1 && ogClose !== -1) {
      const ogBody = content.slice(ogOpen + 1, ogClose);
      ogHasImages = /\bimages\s*:/.test(ogBody);
    }
  }

  if (hasOG && ogHasImages) {
    // Case 3: already has images — skip
    stats.alreadyHasImages++;
    console.log(`  SKIP (has images): ${relativePath}`);
    return;
  }

  if (hasOG && !ogHasImages) {
    // Case 1: openGraph present but missing images
    const newContent = insertImagesIntoExistingOG(content);
    if (!newContent) {
      stats.errors.push(`PARSE ERROR (Case 1): ${relativePath}`);
      console.log(`  ERROR (parse failed, Case 1): ${relativePath}`);
      return;
    }
    try {
      fs.writeFileSync(filePath, newContent, "utf8");
      stats.addedToExistingOG++;
      console.log(`  UPDATED (added images to existing OG): ${relativePath}`);
    } catch (err) {
      stats.errors.push(`WRITE ERROR: ${relativePath} — ${err.message}`);
    }
    return;
  }

  if (!hasOG) {
    // Case 2: no openGraph block at all
    const newContent = insertFullOGBlock(content);
    if (!newContent) {
      stats.errors.push(`PARSE ERROR (Case 2): ${relativePath}`);
      console.log(`  ERROR (parse failed, Case 2): ${relativePath}`);
      return;
    }
    try {
      fs.writeFileSync(filePath, newContent, "utf8");
      stats.addedFullOGBlock++;
      console.log(`  UPDATED (added full OG block): ${relativePath}`);
    } catch (err) {
      stats.errors.push(`WRITE ERROR: ${relativePath} — ${err.message}`);
    }
    return;
  }
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

console.log("=".repeat(70));
console.log("fix-og-images.js — JKKN College of Nursing");
console.log("=".repeat(70));
console.log(`Project root : ${PROJECT_ROOT}`);
console.log(`App dir      : ${APP_DIR}`);
console.log("");

const files = collectLayoutFiles(APP_DIR);
console.log(`Found ${files.length} layout.tsx files (excl. root + admin)\n`);

for (const file of files) {
  processFile(file);
}

console.log("\n" + "=".repeat(70));
console.log("RESULTS SUMMARY");
console.log("=".repeat(70));
console.log(`Total scanned          : ${stats.scanned}`);
console.log(`Already had images     : ${stats.alreadyHasImages}`);
console.log(`Added images to OG     : ${stats.addedToExistingOG}  ← Case 1`);
console.log(`Added full OG block    : ${stats.addedFullOGBlock}  ← Case 2`);
console.log(`No metadata (skipped)  : ${stats.noMetadata}`);
console.log(`Errors                 : ${stats.errors.length}`);

if (stats.errors.length > 0) {
  console.log("\nERRORS:");
  stats.errors.forEach((e) => console.log("  " + e));
}

const totalUpdated = stats.addedToExistingOG + stats.addedFullOGBlock;
console.log(`\nTotal files updated    : ${totalUpdated}`);
console.log("=".repeat(70));
