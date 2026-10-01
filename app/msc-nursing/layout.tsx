// 2026-10-01: this layout used to export a second metadata object (dead - page.tsx's metadata wins)
// and inject a second Course JSON-LD with the same @id as the page's Course but different content
// (legal-name provider, other prerequisites). Both removed; app/msc-nursing/page.tsx is the single
// source for metadata and schema. The earlier FAQPage removal (2026-09-18) followed the same rule.

export default function MScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
