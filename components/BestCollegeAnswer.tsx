import type { TnDistrict } from "@/data/tn-nursing-colleges-2026-27";

type Props = {
  list: TnDistrict;
  distanceKm: number;
  /** True only where the campus genuinely sits inside this district. See DistrictCollegeList. */
  ownDistrict?: boolean;
};

/**
 * "Which is the best nursing college in <district>?" is a real search, and leaving it
 * unanswered hands it to whoever will answer it. Answering it with ourselves is worse:
 * nobody publishes a quality ranking of these colleges to appeal to. The university
 * publishes approval and sanctioned intake and nothing else.
 *
 * So the answer is the four things a reader can actually check, with our own numbers in
 * the same table as everyone else's. The visible copy and the FAQPage JSON-LD answer on
 * the page carry the same claim, deliberately - an answer engine quoting one and a parent
 * reading the other must not come away with two different impressions.
 */
export default function BestCollegeAnswer({ list, distanceKm, ownDistrict = false }: Props) {
  const { district, colleges, seats, governmentCount } = list;
  const govt = colleges.find((c) => c.government);
  const min = Math.min(...colleges.map((c) => c.seats));
  const max = Math.max(...colleges.map((c) => c.seats));

  const criteria = [
    {
      head: "An attached teaching hospital",
      body:
        "Clinical postings are the course. Ask which hospital you will be posted to, whether it is on the same campus, and from which year postings start.",
    },
    {
      head: "Sanctioned intake",
      body: `In ${district} the intake runs from ${min} to ${max} seats, ${seats.toLocaleString(
        "en-IN",
      )} across the district. A smaller batch means less competition for the same ward.`,
    },
    {
      head: "Government or self-financing",
      body: govt
        ? `${governmentCount} of the ${colleges.length} is government — ${govt.name}, ${govt.seats} seats — and the fee difference against a self-financing college is large.`
        : `All ${colleges.length} are self-financing; ${district} district has no government nursing college, so compare fees against neighbouring districts too.`,
    },
    {
      head: "The daily journey",
      body:
        "A college an hour closer is a college you reach on time for a 7 a.m. posting for four years. Measure it at the hour you would actually travel.",
    },
  ];

  return (
    <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight text-center">
          Which is the best nursing college in {district}?
        </h2>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          There is no single best one, and anyone who names one is giving you an opinion. The Tamil
          Nadu Dr. M.G.R. Medical University publishes which colleges are approved and how many
          seats each is sanctioned — it does not publish a quality ranking of the{" "}
          {colleges.length} B.Sc Nursing colleges in {district} district. Four things are worth
          comparing, and you can check all four yourself.
        </p>

        <ol className="space-y-4 mb-6">
          {criteria.map((c, i) => (
            <li key={c.head} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{c.head}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {ownDistrict ? (
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            On our own side of it, plainly: JKKN College of Nursing and Research{" "}
            <strong>is one of those {colleges.length}</strong> — Komarapalayam, {district} district,
            60 sanctioned B.Sc Nursing seats. Being on the list is not a claim to be the best of it,
            and the district is wide enough that the campus is about{" "}
            <strong>{distanceKm} km</strong> from {district} town. What we can put next to those
            four criteria is a multi-specialty teaching hospital on the same campus with postings
            from the first year, and a 98% placement rate for 2024-25 — 58 of 59 graduates, as
            published in our NIRF 2026 submission.
          </p>
        ) : (
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            On our own side of it, plainly: JKKN College of Nursing and Research is{" "}
            <strong>not in {district} district</strong> — it is in Komarapalayam, Namakkal district,
            about <strong>{distanceKm} km</strong> away, so it is not on the list above and we are
            not claiming a place on it. What we can put next to those four criteria is a
            multi-specialty teaching hospital on the same campus with postings from the first year,
            a sanctioned intake of 60 B.Sc Nursing seats, and a 98% placement rate for 2024-25 — 58
            of 59 graduates, as published in our NIRF 2026 submission.
          </p>
        )}
      </div>
    </section>
  );
}
