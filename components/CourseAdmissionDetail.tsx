import Link from "next/link";
import { APPLY_URL, type CourseAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";
import NursingEnquiryForm from "@/components/lead/NursingEnquiryForm";
import { DEFAULT_PROGRAMME_BY_COURSE_KEY } from "@/lib/nursing-programmes";

interface Props {
  course: CourseAdmission;
}

export default function CourseAdmissionDetail({ course }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white pt-44 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Admissions 2026-27 · INC Approved · TNMGRMU Affiliated
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {course.short} Admission 2026-27
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-2">
            {course.full}
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {course.tagline}
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#006837] font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-base shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Apply Now
          </a>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Duration", value: course.duration, icon: "⏱️" },
              { label: "Total Seats", value: course.seats, icon: "🎓" },
              { label: "Intake", value: course.intake, icon: "📅" },
              { label: "Age Limit", value: course.ageLimit.split("·")[0].trim(), icon: "👤" },
            ].map((s) => (
              <div key={s.label} className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-5 text-center shadow-sm">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">{s.label}</p>
                <p className="text-sm font-bold text-[#0b7845]">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY + FEES */}
      <section className="bg-[#FBFBEE] py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#d4eadb] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#006837] rounded-lg flex items-center justify-center text-white text-lg">✓</div>
                <h2 className="text-xl font-bold text-[#0b7845]">Eligibility Criteria</h2>
              </div>
              <ul className="space-y-2.5">
                {course.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#006837] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-[#e8f5e9] text-sm">
                <p className="font-semibold text-[#0b7845] mb-1">Entrance Exam</p>
                <p className="text-gray-600">{course.entranceExam}</p>
              </div>
              <div className="mt-4 text-sm">
                <p className="font-semibold text-[#0b7845] mb-1">Reservation Policy</p>
                <p className="text-gray-600">{course.reservation}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#d4eadb] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#006837] rounded-lg flex items-center justify-center text-white text-lg">₹</div>
                <h2 className="text-xl font-bold text-[#0b7845]">Fee Structure</h2>
              </div>
              <div className="space-y-2.5">
                {course.feeDetailed.map((f, i) => (
                  <div key={i} className="flex justify-between gap-3 py-2 border-b border-[#f0faf3] last:border-0 text-sm">
                    <span className="text-gray-700">{f.label}</span>
                    <span className="font-semibold text-[#006837] text-right">{f.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500 italic">
                Fees are indicative and reviewed annually. Final fees as per TNMGRMU/Govt notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS (M.Sc only) */}
      {course.specializations && (
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">M.Sc Nursing Specializations</h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">5 INC-approved clinical specializations — choose your area of expertise</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {course.specializations.map((sp, i) => (
                <div key={i} className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-5 text-sm font-semibold text-[#0b7845] text-center hover:shadow-md transition-shadow">
                  {sp}
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-gray-500">
              Each specialization has 5 seats. Selection based on entrance rank + preference order.
            </p>
          </div>
        </section>
      )}

      {/* ADMISSION PROCESS */}
      <section className={`${course.specializations ? "bg-[#FBFBEE]" : "bg-white"} py-14 md:py-20`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">Admission Process — Step by Step</h2>
            <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Follow these 6 steps to secure your seat in {course.short}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.process.map((p, i) => (
              <div
                key={i}
                className={`${course.specializations ? "bg-white" : "bg-[#FBFBEE]"} border border-[#d4eadb] rounded-xl p-5 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#006837] text-white font-bold flex items-center justify-center">{i + 1}</div>
                  <h3 className="font-bold text-[#0b7845] text-sm">{p.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS + DATES */}
      <section className={`${course.specializations ? "bg-white" : "bg-[#FBFBEE]"} py-14 md:py-20`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${course.specializations ? "bg-[#FBFBEE]" : "bg-white"} rounded-2xl border border-[#d4eadb] p-6 sm:p-7 shadow-sm`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#006837] rounded-lg flex items-center justify-center text-white text-lg">📄</div>
                <h2 className="text-xl font-bold text-[#0b7845]">Required Documents</h2>
              </div>
              <ul className="space-y-2">
                {course.documents.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#006837] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${course.specializations ? "bg-[#FBFBEE]" : "bg-white"} rounded-2xl border border-[#d4eadb] p-6 sm:p-7 shadow-sm`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#006837] rounded-lg flex items-center justify-center text-white text-lg">📅</div>
                <h2 className="text-xl font-bold text-[#0b7845]">Important Dates 2026-27</h2>
              </div>
              <div className="space-y-3">
                {course.dates.map((d, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 bg-white border-l-4 border-[#7cb983] rounded-r-lg px-4 py-3">
                    <span className="text-sm text-gray-700 font-medium">{d.label}</span>
                    <span className="text-sm font-bold text-[#006837] whitespace-nowrap">{d.date}</span>
                  </div>
                ))}
              </div>
              {/* N-11. Was "Dates are tentative" for a table that now carries government-published,
                  firm dates - the notification, the closing time and the rank list are facts, not
                  guesses, and calling them tentative told a reader to distrust the one accurate
                  thing on the page. The volatile rows carry their own observation date instead. */}
              <p className="mt-4 text-xs text-gray-500 italic">Government-quota dates are set by the Selection Committee, Directorate of Medical Education and Research, Tamil Nadu, and published at tnmedicalselection.net. Management-quota admission at JKKN runs separately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS COURSE */}
      <section className={`${course.specializations ? "bg-[#FBFBEE]" : "bg-white"} py-14 md:py-20`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">Why {course.short} at JKKN?</h2>
            <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">What makes JKKN the right choice for your nursing education</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {course.whyThis.map((w, i) => (
              <div key={i} className="bg-white border border-[#d4eadb] rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#0b7845] text-base mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER OUTCOMES */}
      <section className={`${course.specializations ? "bg-white" : "bg-[#FBFBEE]"} py-14 md:py-20`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">Career Outcomes After {course.short}</h2>
            <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">Where our graduates work — across India and abroad</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#d4eadb] p-6 sm:p-8 shadow-sm">
            <ul className="space-y-3">
              {course.career.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`${course.specializations ? "bg-[#FBFBEE]" : "bg-white"} py-14 md:py-20`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">{course.short} Admission FAQs</h2>
            <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">Most asked questions about {course.short} admission at JKKN</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {course.faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-[#d4eadb] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
                  <h3 className="font-semibold text-[#0b7845] text-base sm:text-lg pr-2">{f.q}</h3>
                  <svg className="w-5 h-5 text-[#006837] flex-shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed border-t border-[#e8f5e9] pt-4">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: course.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* OTHER COURSES */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">Other Nursing Programs at JKKN</h2>
            <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">Explore admission details for other courses</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* N-11. The pair link back to this course's OWN course page. Measured 2026-08-27:
                of the six possible directions between the three admission pages and their three
                course pages, only ONE existed (/bsc-nursing -> /admissions/bsc-nursing). This
                single card supplies three of the five missing directions at once, because slug
                is already "bsc-nursing" / "msc-nursing" / "pbsc-nursing".
                The two pages serve different intents and MUST NOT be merged: this admission page
                owns 2,112 GSC queries to the course page's 14, and only 15 in-market queries see
                both. Honest note - N-10 measured that inbound-link COUNT does not predict
                impressions on this site, so this is here to serve a reader who wants syllabus
                and career after reading dates and fees, NOT as a ranking lever. */}
            <Link
              href={`/${course.slug}`}
              className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 hover:border-[#7cb983] hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-[#0b7845] text-lg mb-2">{course.short} Course, Syllabus and Career</h3>
              <p className="text-gray-600 text-sm mb-3">What you study, year by year, and where the degree leads →</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006837]">
                View the course page
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            {(["bsc", "msc", "pbsc"] as const)
              .filter((k) => k !== course.key)
              .map((k) => {
                const slug =
                  k === "bsc" ? "bsc-nursing" : k === "msc" ? "msc-nursing" : "pbsc-nursing";
                const short =
                  k === "bsc" ? "B.Sc Nursing" : k === "msc" ? "M.Sc Nursing" : "Post Basic B.Sc Nursing";
                return (
                  <Link
                    key={k}
                    href={`/admissions/${slug}`}
                    className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 hover:border-[#7cb983] hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-[#0b7845] text-lg mb-2">{short} Admission</h3>
                    <p className="text-gray-600 text-sm mb-3">View eligibility, fees, dates, and process →</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006837]">
                      View Details
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Apply for {course.short}?</h2>
          <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Seats are limited. Leave your details and our admission team will call you within 24 hours.
          </p>

          {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser cannot POST there
              directly because the endpoint sends no Access-Control-Allow-Origin. */}
          <div className="max-w-2xl mx-auto text-left">
            <NursingEnquiryForm
              sourcePage={course.slug}
              defaultProgrammeId={DEFAULT_PROGRAMME_BY_COURSE_KEY[course.key]}
            />
          </div>

          <p className="text-white/70 text-sm mt-8 pt-8 border-t border-white/20 max-w-2xl mx-auto">
            Prefer the full application form?{" "}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline"
            >
              Apply Now
            </a>
          </p>
        </div>
      </section>

      {/* Course JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.full,
            description: course.tagline,
            url: `${SITE_URL}/admissions/${course.slug}`,
            provider: {
              "@type": "EducationalOrganization",
              "@id": `${SITE_URL}/#organization`,
              name: "JKKN College of Nursing",
              url: SITE_URL,
            },
            educationalCredentialAwarded: course.full,
            timeRequired: course.durationISO,
            coursePrerequisites: course.eligibility[0],
            offers: {
              "@type": "Offer",
              url: APPLY_URL,
              category: "Admission",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
}
