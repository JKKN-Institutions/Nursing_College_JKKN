// Mobile sticky Call / WhatsApp / Apply strip for the admission pages (10,300-lead plan, Nursing
// Step 3, 2026-11-02).
//
// WHY. GA4 property 370644479, 2026-08-04..11-01: the three course admission pages had 3,658
// sessions, 2,629 of them (72%) on mobile, and the only enquiry form sat at about 80% of the page
// depth (9,894 px down a 12,359 px page at 375 px). Over the same 90 days those pages logged 7
// phone_click, 7 whatsapp_click and 11 lead_form_submit.
//
// WHERE. Below lg (1024 px) only, stacked ON TOP of the bottom nav (56 px plus the safe-area
// inset, measured live at 320 / 375 / 768). From lg up the course pages and the hub carry the form
// in the hero, and the bottom nav was not found at 1024 in testing, so the strip stops at lg. The
// nav is untouched. The strip stays hidden until the hero has scrolled away, because the hero
// already carries an Apply button.
//
// TRACKING. Nothing new is fired here. tel: and wa.me clicks are counted by
// components/analytics/ConversionTracking.tsx (phone_click / whatsapp_click, with link_text
// "Call" / "WhatsApp"). Apply opens the existing enquiry dialog with source page
// "sticky-<page>", so a lead from here reaches GA4 (lead_form_submit.source_page) and the CRM
// (utm_campaign nursing-sticky-<page>) under its own name.
//
// The scroll-to-top button (components/FloatingButtons.tsx, used site-wide) would sit on the
// strip's right end, so while the strip shows, a scoped style lifts it. FloatingButtons itself is
// not edited (repo CLAUDE.md rule 2: no edits to a component used in 3+ places).

"use client"

import { useEffect, useState } from "react"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { useEnquiryModal } from "@/components/lead/EnquiryModal"
import { APPLY_URL } from "@/data/courseWiseAdmissionData"

const ADMISSION_PHONE = "+919345855001"
const NAV_HEIGHT = 56 // components/BottomNav/bottom-navbar.tsx, measured at 320 / 375 / 768 px
const STRIP_HEIGHT = 56

type Props = {
  /** Tags the lead: GA4 source_page and CRM utm_campaign "nursing-<sourcePage>". */
  sourcePage: string
  /** Course name for the WhatsApp message, e.g. "B.Sc Nursing". Omit on the hub. */
  courseName?: string
  /** Scroll depth (px) after which the strip appears - roughly the hero height. */
  showAfter?: number
}

export default function StickyAdmissionCTA({ sourcePage, courseName, showAfter = 600 }: Props) {
  const modal = useEnquiryModal()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > showAfter)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [showAfter])

  const message = courseName
    ? `Hi, I would like details about ${courseName} admission at JKKN College of Nursing and Research.`
    : "Hi, I would like details about nursing admission at JKKN College of Nursing and Research."
  const whatsappHref = `https://wa.me/${ADMISSION_PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`

  const btn =
    "flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg text-sm font-bold transition-colors"

  return (
    <>
      {/* Room at the end of the page so the strip never covers the last lines of the footer. */}
      <div aria-hidden="true" className="lg:hidden" style={{ height: STRIP_HEIGHT }} />

      {show && (
        <style>{`@media (max-width: 1023.98px){button[aria-label="Scroll to top"]{bottom:calc(${
          NAV_HEIGHT + STRIP_HEIGHT + 12
        }px + env(safe-area-inset-bottom, 0px)) !important;transition:bottom .2s}}`}</style>
      )}

      <div
        role="region"
        aria-label="Contact the admission office"
        aria-hidden={!show}
        className={`fixed left-0 right-0 z-[70] lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-3 py-1.5 transition-all duration-200 ${
          show ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-3 invisible pointer-events-none"
        }`}
        style={{ bottom: `calc(${NAV_HEIGHT}px + env(safe-area-inset-bottom, 0px))` }}
      >
        <div className="flex gap-2 max-w-xl mx-auto">
          <a href={`tel:${ADMISSION_PHONE}`} className={`${btn} border-2 border-[#006837] text-[#006837] hover:bg-[#e8f5e9]`}>
            <FaPhoneAlt className="w-4 h-4" aria-hidden="true" />
            Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} bg-[#25D366] text-white hover:bg-[#1ebe5a]`}
          >
            <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
            WhatsApp
          </a>
          {modal ? (
            <button type="button" onClick={() => modal.openEnquiry(sourcePage)} className={`${btn} bg-[#006837] text-white hover:bg-[#095d36]`}>
              Apply
            </button>
          ) : (
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className={`${btn} bg-[#006837] text-white hover:bg-[#095d36]`}>
              Apply
            </a>
          )}
        </div>
      </div>
    </>
  )
}
