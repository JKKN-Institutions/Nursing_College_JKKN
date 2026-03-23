import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-700 text-base leading-relaxed">
              {/* Introduction */}
              <p className="text-justify">
                At Sresakthimayeil Institute of Nursing and Research & Research, we are committed to protecting the privacy of our website visitors and ensuring the security and confidentiality of the personal information you share with us. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information on our website.
              </p>

              {/* Personal Information We Collect */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Personal Information We Collect
                </h2>
                <p className="text-justify">
                  When you visit our website, we may collect the following personal information from you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, postal address, and phone number</li>
                  <li>Academic qualifications and work experience</li>
                  <li>Any other information you voluntarily provide to us through our website, such as when you fill out a contact form or send us an email</li>
                </ul>
              </div>

              {/* Use of Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Use of Personal Information
                </h2>
                <p className="text-justify">
                  We may use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To respond to your inquiries and provide you with information about our programs, services, and events</li>
                  <li>To process and evaluate your application for admission to our college or for employment</li>
                  <li>To communicate with you about news, events, and other updates related to Sresakthimayeil Institute of Nursing and Research & Research</li>
                  <li>To improve the content and functionality of our website and to better understand our website visitors' interests and preferences</li>
                </ul>
              </div>

              {/* Disclosure of Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Disclosure of Personal Information
                </h2>
                <p className="text-justify">
                  We do not disclose your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>When required by law or legal process</li>
                  <li>To service providers or agents of Sresakthimayeil Institute of Nursing and Research & Research who are working on our behalf</li>
                  <li>To protect the rights or property of Sresakthimayeil Institute of Nursing and Research & Research or our website users</li>
                  <li>To contractors or service providers who assist us in the operation of our website or in the provision of our programs, services, or events</li>
                </ul>
              </div>

              {/* Security of Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Security of Personal Information
                </h2>
                <p className="text-justify">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.
                </p>
              </div>

              {/* Retention of Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Retention of Personal Information
                </h2>
                <p className="text-justify">
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
                </p>
              </div>

              {/* Your Rights */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Your Rights
                </h2>
                <p className="text-justify">
                  You have the right to access and correct your personal information, and to request that we delete your personal information. If you would like to exercise these rights, please contact us using the contact information provided below.
                </p>
              </div>

              {/* Updates to Privacy Policy */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Updates to Privacy Policy
                </h2>
                <p className="text-justify">
                  We may update this Privacy Policy from time to time. Any changes to this Privacy Policy will be posted on our website with the updated effective date.
                </p>
              </div>

              {/* Contact Us */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Contact Us
                </h2>
                <p className="text-justify">
                  If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights or contact us for any other reason, you can reach us at:
                </p>
                <div className="space-y-1 ml-4">
                  <p>Sresakthimayeil Institute of Nursing and Research & Research</p>
                  <p>Call: +919345855001</p>
                  <p>
                    Email: <a href="mailto:info@jkkn.ac.in" className="text-[#0b7845] hover:underline">info@jkkn.ac.in</a>
                  </p>
                  <p>Address: Sresakthimayeil Institute of Nursing and Research & Research,</p>
                  <p>Natarajapuram, NH-544 (Salem To Coimbatore National Highway),</p>
                  <p>Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
