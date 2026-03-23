import Link from "next/link";
import { siteData } from "@/data/siteData";
import { otherInstitutions } from "@/data/facilitiesData";

interface FooterProps {
  hideLifeAtJKKN?: boolean;
}

export default function Footer({ hideLifeAtJKKN = false }: FooterProps) {
  return (
    <footer className="bg-[#006633] text-white">
      {/* Life @ JKKN Description */}
      {!hideLifeAtJKKN && (
        <div className="bg-cream text-dark-text py-8">
          <div className="container-custom">
            <p className="text-center max-w-4xl mx-auto leading-relaxed">
              JKKN Educational Institutions is a vibrant residential campus that allows students to flourish both personally and professionally. Campus life at JKKN is not just about classrooms, libraries and labs. There are several opportunities for students to pursue their favorite activities, refine their skills and discover new talents and interests. The campus is a constant buzz of varied activities and events – academic, co-curricular and extracurricular.
            </p>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
          {/* About Section with Map */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase">
              Sresakthimayeil Institute of Nursing and Research
            </h3>

            {/* Google Maps Embed - Responsive */}
            <div className="mb-4 relative w-full" style={{ paddingBottom: '56.25%', minHeight: '150px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5064905049853!2d77.72899147452537!3d11.443322046539906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9681d0d736069%3A0x1949ae1b4b64b84a!2sJKKN%20College%20of%20Nursing%20and%20Research!5e0!3m2!1sen!2sin!4v1770013043786!5m2!1sen!2sin"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>

            <p className="text-sm sm:text-base font-semibold">
              Best Innovation Focused<br />
              Multi-Disciplinary Campus
            </p>
          </div>

          {/* Our Institutions */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase">OUR INSTITUTIONS</h3>
            <ul className="space-y-2 sm:space-y-3">
              {otherInstitutions.map((inst, index) => (
                <li key={index}>
                  <a href={inst.url} className="text-white hover:text-gray-200 transition-colors text-sm sm:text-base block py-1">
                    {inst.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase">CONTACT US</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Call:</span>{" "}
                <a href="tel:+919345855001" className="hover:underline">+919345855001</a>
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:nursing@jkkn.ac.in" className="hover:underline break-all">nursing@jkkn.ac.in</a>
              </p>
              <div>
                <p className="font-semibold text-sm sm:text-base">Address:</p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Sresakthimayeil Institute of Nursing and Research, NH-544<br />
                  (Salem To Coimbatore National Highway),<br />
                  Komarapalayam (TK), Namakkal (DT), Tamil Nadu.<br />
                  638183.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 sm:mt-8">
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase">FOLLOW US</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {/* Facebook */}
                <a
                  href={siteData.socialMedia.facebook}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-10 h-10 bg-[#1B8B4B] rounded-full flex items-center justify-center hover:bg-[#25a55c] transition-colors"
                  aria-label="Follow Sresakthimayeil Institute of Nursing and Research on Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>

            

                {/* Instagram */}
                <a
                  href={siteData.socialMedia.instagram}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-10 h-10 bg-[#1B8B4B] rounded-full flex items-center justify-center hover:bg-[#25a55c] transition-colors"
                  aria-label="Follow Sresakthimayeil Institute of Nursing and Research on Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteData.socialMedia.linkedin}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-10 h-10 bg-[#1B8B4B] rounded-full flex items-center justify-center hover:bg-[#25a55c] transition-colors"
                  aria-label="Connect with Sresakthimayeil Institute of Nursing and Research on LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={siteData.socialMedia.youtube}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-10 h-10 bg-[#1B8B4B] rounded-full flex items-center justify-center hover:bg-[#25a55c] transition-colors"
                  aria-label="Watch Sresakthimayeil Institute of Nursing and Research videos on YouTube"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line separator */}
      <div className="border-t border-white/30 mx-4 sm:mx-6 lg:mx-12"></div>

      {/* Copyright */}
      <div className="py-4 px-4">
        <div className="text-center text-xs sm:text-sm">
          <p>&copy; 2025 Sresakthimayeil Institute of Nursing and Research. All rights reserved.</p>
        </div>
      </div>

      {/* Spacer for mobile bottom navbar */}
      <div className="h-16 md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}></div>
    </footer>
  );
}
