import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ChildHealthNursing() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Child Health Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-child-health" }
      ]} />
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Child Health Nursing</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-8">
          The Department of Child Health Nursing is committed to preparing skilled pediatric nurses who can provide holistic, family-centered care to children from infancy through adolescence.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Child Health Nursing focuses on the unique healthcare needs of children at different developmental stages. Our department emphasizes preventive care, health promotion, and therapeutic interventions for sick children while involving families in the care process.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Areas of Focus</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Neonatal care and high-risk infant management</li>
            <li>Growth and development monitoring</li>
            <li>Immunization and preventive pediatrics</li>
            <li>Common childhood illnesses and infections</li>
            <li>Pediatric emergency and critical care</li>
            <li>Nutritional assessment and management</li>
            <li>Genetic and congenital disorders</li>
            <li>Child abuse identification and intervention</li>
            <li>Family-centered care and parent education</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Clinical Training</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Students gain practical experience in pediatric wards, neonatal intensive care units (NICU), pediatric outpatient departments, and community health centers. Training includes handling premature infants, managing childhood emergencies, and conducting immunization programs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Pediatric nursing demonstration room with infant models</li>
            <li>Equipment for neonatal and pediatric care practice</li>
            <li>Play therapy and developmental assessment tools</li>
            <li>Multimedia resources for child health education</li>
            <li>Research support for pediatric nursing studies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduates can pursue careers in:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Pediatric staff nurses in hospitals</li>
            <li>NICU specialists</li>
            <li>School health nurses</li>
            <li>Pediatric nurse practitioners</li>
            <li>Child health educators</li>
            <li>Immunization program coordinators</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
}
