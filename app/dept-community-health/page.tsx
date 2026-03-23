import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function CommunityHealthNursing() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Community Health Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-community-health" }
      ]} />
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Community Health Nursing</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-8">
          The Department of Community Health Nursing prepares nurses to work in community settings, focusing on health promotion, disease prevention, and community development.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Community Health Nursing emphasizes population-based care, public health principles, and community participation. Our department trains nurses to work with individuals, families, and communities to improve health outcomes and reduce health disparities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Areas of Focus</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Primary health care and rural health services</li>
            <li>Epidemiology and disease surveillance</li>
            <li>Health education and behavior change communication</li>
            <li>Maternal and child health programs</li>
            <li>Communicable and non-communicable disease control</li>
            <li>Environmental health and sanitation</li>
            <li>Occupational health and school health programs</li>
            <li>National health programs implementation</li>
            <li>Community assessment and diagnosis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Field Practice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Students participate in extensive field visits to rural and urban communities, primary health centers, and community health centers. They conduct health surveys, organize health camps, implement health education programs, and participate in national health initiatives.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Department Activities</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Community health assessment and planning</li>
            <li>Health awareness campaigns and rallies</li>
            <li>Immunization drives and screening camps</li>
            <li>Home visits and family health care</li>
            <li>Collaboration with NGOs and government agencies</li>
            <li>Research in community health issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduates can work as:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Public health nurses</li>
            <li>Community health officers</li>
            <li>Health educators</li>
            <li>Program managers in health departments</li>
            <li>School and occupational health nurses</li>
            <li>NGO and international health organization staff</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
}
