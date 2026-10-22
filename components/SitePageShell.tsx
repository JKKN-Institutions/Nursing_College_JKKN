// The site chrome (Header, main, Footer, floating buttons) for pages whose own page.tsx renders
// only its content. 30 pages - /about, /aishe, the NIRF / committee / department pages and others -
// were served with NO header, menu or footer (measured 2026-10-22): each page here draws its own
// chrome, and those 30 never did. Their layout.tsx now wraps {children} in this shell, so they get
// the same Header and Footer as e.g. /anti-ragging-discipline without any change to their content.
// The classes copy the most common inner-page main (22 pages use exactly this one).

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function SitePageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-28">{children}</main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
