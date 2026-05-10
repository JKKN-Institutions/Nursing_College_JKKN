"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomepagePopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors text-lg font-bold leading-none"
        >
          &times;
        </button>
        <Link
          href="https://www.jkkn.ai/apply/jkkn-admission-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/nursing-pop-up-poster.jpg"
            alt="JKKN Admission 2026 - Apply Now"
            width={480}
            height={640}
            className="rounded-xl shadow-2xl w-full h-auto cursor-pointer"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
