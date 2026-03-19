import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl w-full">
        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-bold text-[#0b7845] leading-none">
            404
          </h1>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#002309] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let us help you find what you need.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block bg-[#0b7845] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#095d36] transition-colors duration-200 mb-10 shadow-sm hover:shadow-md"
        >
          Go Back to Homepage
        </Link>

        {/* Helpful Links Section */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-6">
            Explore Popular Pages
          </p>
          <nav className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            <Link
              href="/"
              className="text-[#0b7845] hover:text-[#095d36] font-semibold text-sm transition-colors"
            >
              Home
            </Link>
            <Link
              href="/bsc-nursing"
              className="text-[#0b7845] hover:text-[#095d36] font-semibold text-sm transition-colors"
            >
              B.Sc Nursing
            </Link>
            <Link
              href="/msc-nursing"
              className="text-[#0b7845] hover:text-[#095d36] font-semibold text-sm transition-colors"
            >
              M.Sc Nursing
            </Link>
            <Link
              href="/admissions"
              className="text-[#0b7845] hover:text-[#095d36] font-semibold text-sm transition-colors"
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              className="text-[#0b7845] hover:text-[#095d36] font-semibold text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Additional Support */}
        <div className="mt-10 pt-8 border-t border-gray-300">
          <p className="text-gray-600 text-sm mb-2">
            Need help? Contact us at{" "}
            <a
              href="mailto:nursing@jkkn.ac.in"
              className="text-[#0b7845] font-semibold hover:text-[#095d36] transition-colors"
            >
              nursing@jkkn.ac.in
            </a>
          </p>
          <p className="text-gray-600 text-sm">
            or call{" "}
            <a
              href="tel:+919345855001"
              className="text-[#0b7845] font-semibold hover:text-[#095d36] transition-colors"
            >
              +91 93458 55001
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
