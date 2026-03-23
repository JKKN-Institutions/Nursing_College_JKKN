import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ObstetricsGynecologicalNursing() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "OBG Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-obstetrics-gynecological" }
      ]} />
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Obstetrics & Gynecological Nursing</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-8">
          The Department of Obstetrics & Gynecological Nursing is dedicated to preparing skilled nurses who can provide comprehensive care to women during pregnancy, childbirth, postpartum period, and throughout their reproductive lifespan.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This department focuses on maternal and women's health, encompassing prenatal care, labor and delivery management, postnatal care, and gynecological nursing. Our curriculum emphasizes evidence-based practice, patient safety, and culturally sensitive care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Areas of Focus</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Prenatal assessment and high-risk pregnancy management</li>
            <li>Normal and complicated labor and delivery</li>
            <li>Postpartum care and lactation management</li>
            <li>Newborn care and breastfeeding support</li>
            <li>Family planning and contraceptive counseling</li>
            <li>Gynecological disorders and treatments</li>
            <li>Infertility and reproductive health</li>
            <li>Menopause and women's health across lifespan</li>
            <li>Maternal and child nutrition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Clinical Training</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Students receive hands-on training in labor rooms, maternity wards, gynecology departments, and antenatal clinics. They learn to conduct deliveries, manage complications, provide prenatal and postnatal care, and assist in gynecological procedures under expert supervision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Labor room simulation with mannequins and equipment</li>
            <li>Obstetric and gynecological examination models</li>
            <li>Neonatal resuscitation equipment and training</li>
            <li>Audio-visual materials on pregnancy and childbirth</li>
            <li>Research support for maternal health studies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduates can pursue careers in:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Labor and delivery nurses</li>
            <li>Maternity ward staff nurses</li>
            <li>Gynecology department nurses</li>
            <li>Midwives and nurse-midwives</li>
            <li>Family planning counselors</li>
            <li>Women's health nurse practitioners</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
}
