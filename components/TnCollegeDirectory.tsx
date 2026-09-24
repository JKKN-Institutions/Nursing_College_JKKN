import { TN_DISTRICTS, TN_SOURCE, TN_TOTALS } from "@/data/tn-nursing-colleges-2026-27";

/** Our own institution code on the university's list. Marked, never moved or ranked up. */
const JKKN_CODE = "262";

/**
 * Every B.Sc Nursing college the university lists for 2026-2027, by district.
 *
 * Districts are ordered alphabetically and colleges within them alphabetically. That is a
 * choice, not a default: the university publishes approval and sanctioned intake and no
 * measure of quality, so any other order would be a ranking we invented. JKKN's own row
 * sits in Namakkal in the same alphabetical position as everyone else, marked so a reader
 * can find it, not promoted.
 */
export default function TnCollegeDirectory() {
  return (
    <section className="bg-white py-12 sm:py-16 px-4" id="district-wise">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight text-center">
          B.Sc Nursing Colleges in Tamil Nadu, District by District
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-8">
          All <strong>{TN_TOTALS.colleges}</strong> colleges on the university&apos;s affiliated
          list for {TN_SOURCE.academicYear}, with their sanctioned intake, across{" "}
          <strong>{TN_TOTALS.districts}</strong> districts. Listed alphabetically within each
          district — this is the university&apos;s approval list, not a ranking.
        </p>

        {/* jump list */}
        <nav aria-label="Jump to a district" className="mb-10">
          <ul className="flex flex-wrap gap-2 justify-center">
            {TN_DISTRICTS.map((d) => (
              <li key={d.district}>
                <a
                  href={`#d-${slug(d.district)}`}
                  className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs sm:text-sm text-gray-700 hover:border-[#006837] hover:text-[#006837]"
                >
                  {d.district} <span className="text-gray-400">{d.colleges.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-10">
          {TN_DISTRICTS.map((d) => (
            <div key={d.district} id={`d-${slug(d.district)}`} className="scroll-mt-24">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {d.district}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>{d.colleges.length}</strong>{" "}
                {d.colleges.length === 1 ? "college" : "colleges"} ·{" "}
                <strong>{d.seats.toLocaleString("en-IN")}</strong> sanctioned seats ·{" "}
                {d.governmentCount > 0
                  ? `${d.governmentCount} government`
                  : "no government college"}
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    B.Sc Nursing colleges in {d.district} affiliated to The Tamil Nadu Dr. M.G.R.
                    Medical University for {TN_SOURCE.academicYear}
                  </caption>
                  <thead className="bg-[#006837] text-white">
                    <tr>
                      <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">
                        College
                      </th>
                      <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold whitespace-nowrap">
                        Place
                      </th>
                      <th
                        scope="col"
                        className="px-3 sm:px-4 py-2.5 font-semibold text-right whitespace-nowrap"
                      >
                        Seats
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {d.colleges.map((c) => (
                      <tr
                        key={c.code}
                        className={
                          c.code === JKKN_CODE
                            ? "bg-[#d4f1e4]"
                            : "odd:bg-white even:bg-[#FBFBEE]"
                        }
                      >
                        <td className="px-3 sm:px-4 py-2.5 text-gray-900">
                          {c.name}
                          {c.government && (
                            <span className="ml-2 inline-block rounded bg-[#006837]/10 px-2 py-0.5 text-[11px] font-semibold text-[#006837] align-middle">
                              Government
                            </span>
                          )}
                          {c.code === JKKN_CODE && (
                            <span className="ml-2 inline-block rounded bg-[#006837] px-2 py-0.5 text-[11px] font-semibold text-white align-middle">
                              This college
                            </span>
                          )}
                          {c.note && (
                            <span className="block text-[11px] text-gray-500 mt-0.5">{c.note}</span>
                          )}
                        </td>
                        <td className="px-3 sm:px-4 py-2.5 text-gray-600 whitespace-nowrap">
                          {c.place}
                        </td>
                        <td className="px-3 sm:px-4 py-2.5 text-gray-900 font-semibold text-right">
                          {c.seats}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-8">
          Source: {TN_SOURCE.label}. Sanctioned intake and affiliation status can change between
          academic years — confirm with the college before you apply. Where the university&apos;s
          list does not state a district, the college is shown under &quot;District not stated in
          the source&quot; rather than assigned to one.
        </p>
      </div>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
