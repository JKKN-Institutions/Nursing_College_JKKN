import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Sresakthimayeil Institute of Nursing and Research — Sresakthimayeil Institute of Nursing and Research",
  description: "About Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research), Komarapalayam, Tamil Nadu. Established 2007, INC-approved, affiliated to TNMGRMU.",
  alternates: { canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/about" },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-6 sm:py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "About", url: "https://nursing.sresakthimayeil.jkkn.ac.in/about" },
        ]}
      />

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
        About Sresakthimayeil Institute of Nursing and Research
      </h1>

      <p className="text-sm text-gray-500 mb-4">Last updated: March 19, 2026</p>

      <div className="bg-green-50 border-l-4 border-primary p-4 mb-8 rounded-r-lg">
        <p className="font-semibold text-primary mb-1">Quick Summary</p>
        <p className="text-gray-700 text-sm">JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research), established in 2007, is an INC-approved, NAAC-accredited institution in Komarapalayam, Tamil Nadu. Affiliated to Tamil Nadu Dr. M.G.R. Medical University with 43+ faculty members and clinical training at a 500+ bed teaching hospital.</p>
      </div>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          What is Sresakthimayeil Institute of Nursing and Research?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research), established in 2007 at Komarapalayam, Namakkal District, Tamil Nadu, is an <a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Indian Nursing Council (INC)</a> approved nursing institution located at Natarajapuram, NH-544 (Salem-Coimbatore Highway), Tamil Nadu 638183. Part of JKKN Institutions, the college is affiliated to <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tamil Nadu Dr. MGR Medical University (TNMGRMU)</a> and offers undergraduate and postgraduate nursing programs.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Courses Offered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>B.Sc Nursing</strong> — 4-year undergraduate program</li>
          <li><strong>M.Sc Nursing</strong> — 2-year postgraduate program with 5 specializations (Medical-Surgical, Child Health, Obstetric &amp; Gynecological, Psychiatric, Community Health Nursing)</li>
          <li><strong>Post Basic B.Sc Nursing</strong> — 2-year program for GNM diploma holders</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Infrastructure and Facilities
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sresakthimayeil Institute of Nursing and Research is part of the JKKN Institutions campus, which includes a 500+ bed multi-specialty teaching hospital providing students with clinical exposure from the first year. The campus features advanced nursing laboratories, a well-stocked library, smart classrooms, separate hostel facilities for men and women, sports facilities, Wi-Fi enabled campus, cafeteria, auditorium, and dedicated transport services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Accreditation and Recognition
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Approved by the <strong>Indian Nursing Council (INC)</strong></li>
          <li>Affiliated to <strong>Tamil Nadu Dr. MGR Medical University (TNMGRMU)</strong></li>
          <li>Recognized by the <strong>Tamil Nadu Nurses and Midwives Council (TNNMC)</strong></li>
          <li><a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NAAC</a> Accredited</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Location
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The college is located on the Salem-Coimbatore National Highway (NH-544) at Komarapalayam in Namakkal district, Tamil Nadu. The campus is accessible from Salem (55 km), Erode (35 km), Coimbatore (90 km), Namakkal (25 km), and Tiruchengode (10 km).
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Address:</strong> Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam, Namakkal, Tamil Nadu 638183<br />
          <strong>Phone:</strong> +91 93458 55001<br />
          <strong>Email:</strong> nursing@jkkn.ac.in<br />
          <strong>Website:</strong> <a href="https://nursing.sresakthimayeil.jkkn.ac.in/" className="text-primary hover:underline">nursing.sresakthimayeil.jkkn.ac.in</a>
        </p>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12 mb-8">
        <p className="font-semibold text-dark mb-2">Published by JKKN College of Nursing</p>
        <p className="text-sm text-gray-600 mb-1">Sresakthimayeil Institute of Nursing and Research</p>
        <p className="text-sm text-gray-600 mb-1">INC Approved | NAAC Accredited | Affiliated to Tamil Nadu Dr. M.G.R. Medical University</p>
        <p className="text-sm text-gray-600 mb-1">Komarapalayam, Namakkal District, Tamil Nadu 638183</p>
        <p className="text-sm text-gray-600">Contact: +91 93458 55001 | nursing@jkkn.ac.in</p>
      </div>
    </div>
  );
}
