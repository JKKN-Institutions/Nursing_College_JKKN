'use client';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { EnquiryModalProvider } from '@/components/lead/EnquiryModal';

interface ClientLayoutProps {
  children: React.ReactNode;
}

// The enquiry modal provider wraps every page (user's choice 2026-10-22, same as Dental), so the
// header "Enquire Now" and every jkkn.ai apply link open the same 3-box form everywhere, not only
// on the homepage. Before, every other page fell back to the jkkn.ai link (6 boxes, the college
// picked again). The homepage popup still opens only on the homepage (HomepagePopup is mounted
// in app/page.tsx alone) and uses this same provider.
export function ClientLayout({ children }: ClientLayoutProps) {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      const scrollTo = sessionStorage.getItem('scrollTo');
      if (scrollTo) {
        sessionStorage.removeItem('scrollTo');
        const el = document.getElementById(scrollTo);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
      }
    }
  }, [pathname]);

  return (
    <EnquiryModalProvider>
      <div>
        {children}
      </div>
      <BottomNavbar />
    </EnquiryModalProvider>
  );
}
