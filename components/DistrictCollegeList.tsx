import { AcademicCapIcon, BuildingLibraryIcon, MapPinIcon } from "@heroicons/react/24/outline";
import type { DistrictList } from "@/data/tnmgrmu-bscn-2026-27";
import { TNMGRMU_SOURCE } from "@/data/tnmgrmu-bscn-2026-27";

type Props = {
  list: DistrictList;
  /** road distance from this campus to the district's main city, in km */
  distanceKm: number;
  /** what the campus is near, for the "where JKKN actually is" note */
  viaRoad: string;
};

/**
 * The district's own B.Sc Nursing colleges, listed from the university's affiliated
 * list, plus a direct answer to the "which is the best" question.
 *
 * Two things this component deliberately does NOT do:
 *
 * - It does not rank. The university publishes approval and intake, not quality, so
 *   any ordering beyond alphabetical would be ours rather than the source's.
 * - It does not put JKKN in the table. JKKN is in Namakkal district; a reader looking
 *   for a Salem or Erode college is entitled to a list that answers that question.
 *   Where JKKN is gets its own note underneath, with the distance stated.
 */
export default function DistrictCollegeList({ list, distanceKm, viaRoad }: Props) {
  const { district, colleges, seats, governmentCount } = list;
  const selfFinancing = colleges.length - governmentCount;

  return (
    <section className="bg-white py-12 sm:py-16 px-4" id="district-colleges">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight text-center">
          B.Sc Nursing Colleges in {district} District
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-8">
          {district} district has{" "}
          <strong>
            {colleges.length} B.Sc Nursing {colleges.length === 1 ? "college" : "colleges"}
          </strong>{" "}
          affiliated to The Tamil Nadu Dr. M.G.R. Medical University for {TNMGRMU_SOURCE.academicYear},
          with <strong>{seats.toLocaleString("en-IN")} sanctioned seats</strong> between them
          {governmentCount > 0 ? (
            <>
              {" "}
              — {governmentCount} government {governmentCount === 1 ? "college" : "colleges"} and{" "}
              {selfFinancing} self-financing.
            </>
          ) : (
            <> — all {selfFinancing} self-financing, with no government nursing college.</>
          )}
        </p>

        {/* summary tiles */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-2xl mx-auto">
          <div className="rounded-xl bg-[#FBFBEE] border border-gray-200 p-4 text-center">
            <AcademicCapIcon className="w-6 h-6 mx-auto text-[#006837] mb-1" aria-hidden="true" />
            <div className="text-2xl font-bold text-gray-900">{colleges.length}</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Colleges</div>
          </div>
          <div className="rounded-xl bg-[#FBFBEE] border border-gray-200 p-4 text-center">
            <BuildingLibraryIcon className="w-6 h-6 mx-auto text-[#006837] mb-1" aria-hidden="true" />
            <div className="text-2xl font-bold text-gray-900">{seats.toLocaleString("en-IN")}</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Sanctioned seats</div>
          </div>
          <div className="rounded-xl bg-[#FBFBEE] border border-gray-200 p-4 text-center">
            <MapPinIcon className="w-6 h-6 mx-auto text-[#006837] mb-1" aria-hidden="true" />
            <div className="text-2xl font-bold text-gray-900">{governmentCount}</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Government</div>
          </div>
        </div>

        {/* the list itself */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              B.Sc Nursing colleges in {district} district affiliated to The Tamil Nadu Dr. M.G.R.
              Medical University for {TNMGRMU_SOURCE.academicYear}, listed alphabetically
            </caption>
            <thead className="bg-[#006837] text-white">
              <tr>
                <th scope="col" className="px-3 sm:px-4 py-3 font-semibold">
                  College
                </th>
                <th scope="col" className="px-3 sm:px-4 py-3 font-semibold whitespace-nowrap">
                  Place
                </th>
                <th scope="col" className="px-3 sm:px-4 py-3 font-semibold text-right whitespace-nowrap">
                  Seats
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {colleges.map((c) => (
                <tr key={c.code} className="odd:bg-white even:bg-[#FBFBEE]">
                  <td className="px-3 sm:px-4 py-3 text-gray-900">
                    {c.name}
                    {c.government && (
                      <span className="ml-2 inline-block rounded bg-[#006837]/10 px-2 py-0.5 text-[11px] font-semibold text-[#006837] align-middle">
                        Government
                      </span>
                    )}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-gray-600 whitespace-nowrap">{c.place}</td>
                  <td className="px-3 sm:px-4 py-3 text-gray-900 font-semibold text-right">
                    {c.seats}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td className="px-3 sm:px-4 py-3 font-semibold text-gray-900" colSpan={2}>
                  Total — {colleges.length} colleges
                </td>
                <td className="px-3 sm:px-4 py-3 font-bold text-gray-900 text-right">
                  {seats.toLocaleString("en-IN")}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Listed alphabetically, not ranked. Source: {TNMGRMU_SOURCE.label}. Sanctioned intake can
          change between academic years — confirm with the college before you apply.
        </p>

        {/* where JKKN actually is - never a row in the table above */}
        <div className="mt-8 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
            Where JKKN College of Nursing and Research sits
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            JKKN College of Nursing and Research is <strong>not</strong> one of the{" "}
            {colleges.length} colleges above. It is in Komarapalayam,{" "}
            <strong>Namakkal district</strong>, about <strong>{distanceKm} km</strong> from{" "}
            {district} {viaRoad}, and appears on the same university list under Namakkal. If you are
            set on studying inside {district} district, the table above is your list. If the campus
            being an hour away is workable, the{" "}
            <a href="/" className="text-[#006837] font-semibold hover:underline">
              main college page
            </a>{" "}
            has the courses, fees and admission details.
          </p>
        </div>
      </div>
    </section>
  );
}
