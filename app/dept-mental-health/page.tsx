import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function MentalHealthNursing() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Psychiatric Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-mental-health" }
      ]} />
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Mental Health Nursing</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-8">
          The Department of Mental Health Nursing prepares compassionate and skilled psychiatric nurses who can provide holistic care to individuals experiencing mental health disorders and promote mental wellness in the community.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mental Health Nursing focuses on the assessment, diagnosis, and treatment of individuals with psychiatric disorders. Our department emphasizes therapeutic communication, patient-centered care, and evidence-based psychiatric interventions while reducing stigma associated with mental illness.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Areas of Focus</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Mental health assessment and diagnostic procedures</li>
            <li>Therapeutic communication and nurse-patient relationship</li>
            <li>Psychopharmacology and medication management</li>
            <li>Crisis intervention and suicide prevention</li>
            <li>Schizophrenia and psychotic disorders</li>
            <li>Mood disorders (depression, bipolar disorder)</li>
            <li>Anxiety disorders and stress-related conditions</li>
            <li>Substance abuse and addiction treatment</li>
            <li>Child and adolescent mental health</li>
            <li>Geriatric mental health</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Clinical Training</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Students receive clinical training in psychiatric hospitals, mental health clinics, de-addiction centers, and community mental health programs. They learn to conduct mental status examinations, implement therapeutic interventions, and provide counseling under supervision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Therapeutic Approaches</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Individual and group therapy sessions</li>
            <li>Cognitive behavioral therapy techniques</li>
            <li>Relaxation and stress management</li>
            <li>Occupational and recreational therapy</li>
            <li>Family therapy and psychoeducation</li>
            <li>Community-based rehabilitation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduates can work as:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Psychiatric nurses in mental hospitals</li>
            <li>Mental health counselors</li>
            <li>Community mental health workers</li>
            <li>Substance abuse counselors</li>
            <li>Crisis intervention specialists</li>
            <li>Psychiatric nurse practitioners</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
}
