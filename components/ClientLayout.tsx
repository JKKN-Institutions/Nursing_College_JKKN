'use client';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ClientLayoutProps {
  children: React.ReactNode;
}

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
    <>
      <div>
        {children}
      </div>
      <BottomNavbar />
    </>
  );
}
