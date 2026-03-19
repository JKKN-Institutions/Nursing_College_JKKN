import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function MedicalSurgicalNursing() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Medical-Surgical Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-medical-surgical" }
      ]} />
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Medical-Surgical Nursing</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-8">
          The Department of Medical-Surgical Nursing is dedicated to preparing competent nurses who can provide comprehensive care to adult patients with various medical and surgical conditions.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Medical-Surgical Nursing is the largest specialty within nursing practice, encompassing the care of adult patients in a variety of settings. Our department focuses on developing clinical expertise, critical thinking skills, and evidence-based practice in the management of medical and surgical patients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Areas of Focus</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Pre-operative and post-operative nursing care</li>
            <li>Critical care and intensive care nursing</li>
            <li>Management of chronic diseases (diabetes, hypertension, cardiac conditions)</li>
            <li>Respiratory disorders and ventilator management</li>
            <li>Gastrointestinal and hepatobiliary disorders</li>
            <li>Renal and urological nursing care</li>
            <li>Oncology nursing and palliative care</li>
            <li>Emergency and trauma nursing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Clinical Training</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Students receive extensive hands-on training in reputed hospitals including JKKN Dental College & Hospital and other affiliated medical institutions. Clinical rotations cover various specialties including general surgery, orthopedics, cardiology, neurology, and critical care units.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Well-equipped demonstration room with modern equipment</li>
            <li>Simulation lab for practicing advanced nursing procedures</li>
            <li>Audio-visual aids for enhanced learning</li>
            <li>Departmental library with reference books and journals</li>
            <li>Research facilities and faculty support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduates from our Medical-Surgical Nursing program are well-prepared for careers in:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Staff nurses in medical and surgical units</li>
            <li>Critical care specialists</li>
            <li>Operating room nurses</li>
            <li>Nurse educators</li>
            <li>Clinical nurse specialists</li>
            <li>Nurse managers and administrators</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
}
