// Call / WhatsApp form gate (ported 2026-11-04 from the Dental site, where it went live 2026-11-03 /
// 2026-11-04 and the user tested it on a phone).
//
// WHY. Every Call and WhatsApp button on the site points at ONE number, +91 93458 55001, and a
// tap on it left no trace in the CRM: GA4 counted the tap (phone_click / whatsapp_click) but a tap
// carries no phone number, so no call or chat could be tied to a website visit. With the gate, a
// tap opens the 3-box enquiry form first; its button ("Call Counsellor" / "Chat on WhatsApp")
// sends the lead to the CRM AND opens the dialer / WhatsApp in the same tap. So every gated
// contact has a CRM "website" lead created a moment before it.
//
// User's choices (Dental, 2026-11-03 / 11-04, the same for every college): every 93458 55001 button
// is gated, the form is a must (no skip link), the visitor picks a course the CRM holds (the 7
// Nursing programmes in lib/nursing-programmes.ts). Any other phone number never matches, so it
// stays direct (here: the committee members' mobiles on the anti-ragging / ICC pages).
//
// Not gated on this site:
//  - /add-on-course and /value-added-course: certificate courses the CRM form cannot take (none of
//    them is one of the 7 CRM programmes) - the Dental "DSA page" rule.
//  - /admin (the CMS panel): staff, not visitors. The listeners do nothing there at all.
//  - No careers / jobs page exists on this site (checked 2026-11-04).
//
// Plain module: no React, no server code - the modal, the form and the button all import it.

import { NURSING_PROGRAMMES } from "@/lib/nursing-programmes"

export type GateIntent = "call" | "whatsapp"

export const GATE_PHONE = "+919345855001"
export const GATE_PHONE_DISPLAY = "+91 93458 55001"
const GATE_DIGITS = "9345855001"

/** Paths where a tap must reach the number directly. */
const UNGATED_PATH_PREFIXES = ["/add-on-course", "/value-added-course"]

function matchesPrefix(pathname: string, prefixes: readonly string[]): boolean {
  const p = pathname.toLowerCase()
  return prefixes.some((prefix) => p === prefix || p.startsWith(`${prefix}/`))
}

export function isUngatedPath(pathname: string): boolean {
  return matchesPrefix(pathname, UNGATED_PATH_PREFIXES)
}

/** The CMS panel: no gate and no plain-text dialling (an editor clicks numbers while editing). */
export function isGateOffPath(pathname: string): boolean {
  return matchesPrefix(pathname, ["/admin"])
}

/**
 * Which gate a link belongs to, or null for any other link.
 * tel: links match when their digits end in the admission number (so "tel:+91 93458 55001",
 * "tel:9345855001" and "tel: +91 93458 55001" all count, and any other number does not).
 * WhatsApp links match wa.me/<number> and api.whatsapp.com/send?phone=<number>.
 */
export function gateIntentForHref(rawHref: string): GateIntent | null {
  const href = rawHref.trim().toLowerCase()
  if (href.startsWith("tel:")) {
    const digits = href.slice(4).replace(/\D/g, "")
    return digits.endsWith(GATE_DIGITS) ? "call" : null
  }
  const wa = href.match(/^https?:\/\/(?:wa\.me\/(\d+)|(?:api|web)\.whatsapp\.com\/send\/?\?(?:.*&)?phone=(\d+))/)
  if (wa) {
    const digits = wa[1] ?? wa[2] ?? ""
    return digits.endsWith(GATE_DIGITS) ? "whatsapp" : null
  }
  return null
}

/** Short page tag for the CRM source and the WhatsApp reference, e.g. "-contact" or "-home". */
export function pageTag(pathname: string): string {
  return pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
}

const segment = (p: string, slug: string) => new RegExp(`(^|/)${slug}(/|$)`).test(p)

/**
 * Pre-selects the course on a course page, so the B.Sc page opens on B.Sc Nursing.
 * The M.Sc hub (/msc-nursing, /admissions/msc-nursing) opens on "Select a Programme" on purpose:
 * M.Sc has five specialisations in the CRM and no single right default (lib/nursing-programmes.ts).
 * Each M.Sc specialisation page opens on its own specialisation. The dept-* pages do not
 * pre-select: a department teaches B.Sc students too, so its visitor's course is not known.
 */
export function programmeForPath(pathname: string): string | undefined {
  const p = pathname.toLowerCase()
  const find = (word: string) => NURSING_PROGRAMMES.find((x) => x.label.toLowerCase().includes(word))?.id
  if (segment(p, "pbsc-nursing")) return find("post basic")
  if (segment(p, "bsc-nursing")) return find("b.sc nursing (4 years)")
  if (segment(p, "course-msc-medical-surgical")) return find("medical surgical")
  if (segment(p, "course-msc-child-health")) return find("child health")
  if (segment(p, "course-msc-community-health")) return find("community health")
  if (segment(p, "course-msc-mental-health")) return find("mental health")
  if (segment(p, "course-msc-obstetrics-gynecological")) return find("obstetrics")
  return undefined
}

/** "B.Sc Nursing" or "M.Sc Child Health Nursing" - the course as a parent would type it. */
export function courseShort(programmeId: string): string {
  const label = NURSING_PROGRAMMES.find((x) => x.id === programmeId)?.label ?? ""
  const [head, tail] = label.replace(/\s*\([^)]*\)\s*$/, "").split(" — ")
  if (!head) return "B.Sc / M.Sc Nursing"
  return head === "M.Sc Nursing" && tail ? `M.Sc ${tail}` : head
}

/**
 * WhatsApp link with the course and a page reference typed into the box.
 * No name and no phone in it, ever: a link like this can end up in analytics or logs.
 */
export function whatsappGateUrl(programmeId: string, pathname: string): string {
  const ref = pageTag(pathname).replace(/^-/, "").replace(/[^a-z0-9-]/gi, "").slice(0, 30) || "home"
  const text = `Hi, ${courseShort(programmeId)} admission details venum. Ref: WEB-NURSING-${ref}`
  return `https://wa.me/${GATE_PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`
}

export const telGateUrl = `tel:${GATE_PHONE}`

// Plain-text numbers. The site prints the number as plain text in many places (FAQ answers, the
// admissions summary, page copy); iPhone used to turn those into dial links of its own, outside the
// gate. The layout now switches that off, and EnquiryModal reads a tap on such a number with
// numberAtOffset(). Indian mobiles only, as a visitor reads them: "+91 93458 55001", "93458 55001",
// "9345855001", "+91-9345855001".
const PLAIN_MOBILE = /(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/g

/** The 10-digit mobile number that a character offset of a text falls inside, or null. */
export function numberAtOffset(text: string, offset: number): string | null {
  for (const m of text.matchAll(PLAIN_MOBILE)) {
    const start = m.index ?? 0
    if (offset >= start && offset <= start + m[0].length) return m[0].replace(/\D/g, "").slice(-10)
  }
  return null
}

/** True for the admission number - the one number the gate applies to. */
export function isGateNumber(digits: string): boolean {
  return digits === GATE_DIGITS
}

export function telUrlFor(digits: string): string {
  return `tel:+91${digits}`
}
