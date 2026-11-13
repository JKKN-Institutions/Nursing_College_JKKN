// The enquiry form as a full-width page section (user's call 2026-11-13). The 2026-11-13 scan found 9
// admission pages with no form of their own - the five M.Sc specialisation pages, scholarships, FAQ,
// placement and the Tamil Nadu colleges list - only jkkn.ai Apply links that leave the site, or nothing.
// One component so every one of them shows the same section, tagged by its own sourcePage
// (CRM utm_campaign nursing-<sourcePage>). The card inside is the NursingEnquiryForm the Contact page carries.
//
// Solid brand green, not the green-to-mint gradient of the Contact frame: white heading text on the mint end
// (#7cb983) would sit near 2.3:1, below the 4.5:1 text minimum.

import NursingEnquiryForm from "@/components/lead/NursingEnquiryForm"

type Props = {
  /** Tags the lead in the CRM as utm_campaign nursing-<sourcePage>. */
  sourcePage: string
  heading?: string
  subheading?: string
  /** Pre-selected programme id (lib/nursing-programmes.ts). Only for a page about exactly one programme. */
  programmeId?: string
}

export default function EnquirySection({
  sourcePage,
  heading = "Get Nursing Fee & Admission Details",
  subheading = "Fill your details, then call or WhatsApp our admission team right away.",
  programmeId,
}: Props) {
  return (
    <section className="bg-[#006837] py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-3 min-[640px]:px-4">
        <h2 className="text-white text-xl md:text-3xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-white/85 text-center text-sm mb-6 md:mb-8">{subheading}</p>
        <NursingEnquiryForm sourcePage={sourcePage} defaultProgrammeId={programmeId} />
      </div>
    </section>
  )
}
