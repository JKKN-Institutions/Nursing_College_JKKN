/**
 * Fees + eligibility block for the city landing pages. N-06, 2026-08-25.
 *
 * WHY IT EXISTS
 *   Every city page carried travel directions, facilities and placement copy but NO fee amount
 *   and NO eligibility rule, while the queries landing on them are fee and eligibility queries.
 *   /coimbatore alone takes 125 register keywords and 3,364 mobile impressions and held exactly
 *   ONE #1. Aggregators win those searches by answering the question; a brochure section cannot.
 *
 * WHY IT IS A COMPONENT AND NOT COPY IN EACH PAGE
 *   Fifteen city pages render through CityLandingPage, but five - coimbatore, erode, namakkal,
 *   salem, tiruppur, which are the highest-impression ones - are bespoke. Writing this block
 *   into each of the six places would be six copies of the same facts, drifting apart over time.
 *   That is not hypothetical: this repo already carried B.Sc intake as 100 on the city pages and
 *   60 in its own schema, homepage and course-page FAQ, because the number had been copied
 *   rather than shared.
 *
 * EVERY FIGURE HAS A PRIMARY SOURCE. NONE IS INVENTED.
 *   fees         config/official-fees.md - government quota and management quota are the same
 *                for nursing, and the figure includes uniform, hospital training and the kit
 *   seats        config/facts-master.csv, Verified=Y - B.Sc 60, M.Sc 25, Post Basic 50
 *   eligibility  Government of Tamil Nadu prospectus for admission to the B.Sc (Nursing) degree
 *                course, 2026-27 session, G.O. (D) No.657 dated 03.06.2026. That document
 *                mentions NEET zero times in 294,263 characters and builds the merit list from
 *                the 10+2 marks normalised to a base of 200.
 */
export default function CityFeesEligibility({ cityName }: { cityName: string }) {
  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Fees and Eligibility for {cityName} Applicants
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            The same fees and the same entry rules apply wherever you travel from
          </p>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#e8f5ee]">
                <th className="p-3 text-left font-semibold text-gray-900">Course</th>
                <th className="p-3 text-left font-semibold text-gray-900">Seats</th>
                <th className="p-3 text-left font-semibold text-gray-900">Tuition per year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">B.Sc Nursing</td>
                <td className="p-3">60</td>
                <td className="p-3">&#8377;1,50,000 (female) &middot; &#8377;1,75,000 (male)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3 font-medium">M.Sc Nursing</td>
                <td className="p-3">25</td>
                <td className="p-3">&#8377;75,000 &ndash; &#8377;1,00,000 by specialisation</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Post Basic B.Sc Nursing</td>
                <td className="p-3">50</td>
                <td className="p-3">&#8377;65,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm mb-8">
          Government quota and management quota carry the same tuition for nursing, and the
          figure already includes uniform, hospital training and the nursing kit. Hostel, mess
          and examination charges are billed separately.
        </p>

        <div className="bg-[#FBFBEE] rounded-2xl p-5 sm:p-7">
          <h3 className="font-bold text-gray-900 text-lg mb-4">
            Who can apply for B.Sc Nursing
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc pl-5">
            <li>
              Passed the Higher Secondary Course with English, and with Physics, Chemistry and
              Biology &mdash; or Physics, Chemistry, Botany and Zoology
            </li>
            <li>
              Minimum aggregate <strong>45%</strong> for OC, and <strong>40%</strong> for
              BC / BCM / MBC &amp; DNC and for SC / SCA / ST
            </li>
            <li>
              Completed <strong>17 years</strong> of age as on 31 December of the admission year
            </li>
            <li>
              <strong>No entrance exam.</strong> There is no NEET requirement for B.Sc Nursing in
              Tamil Nadu &mdash; the merit list is built from the 10+2 marks in the prescribed
              subjects, normalised to a base of 200
            </li>
            <li>
              Candidates from boards other than the Tamil Nadu State Board or CBSE must produce
              an eligibility certificate from The Tamil Nadu Dr. M.G.R. Medical University before
              joining
            </li>
          </ul>
          <p className="text-gray-500 text-xs sm:text-sm mt-4">
            Source: Government of Tamil Nadu prospectus for admission to the B.Sc (Nursing)
            degree course, 2026&ndash;27 session.
          </p>
        </div>
      </div>
    </section>
  );
}
