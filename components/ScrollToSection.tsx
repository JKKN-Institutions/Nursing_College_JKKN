"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, "", "/");
        }, 100);
      }
    }
  }, [searchParams]);

  return null;
}
