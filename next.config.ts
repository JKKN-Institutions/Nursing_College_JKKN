import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // ── Course-mismatch removal 2026-08-11 (DEP-45) ───────────────────────
      // This college does not run GNM or ANM. Offered list read live off this site
      // 2026-08-11: B.Sc Nursing, P.B.B.Sc Nursing, M.Sc Nursing (5 specialisations).
      // The blog post at this slug was deleted from the CMS the same day. It carried 68 GSC
      // impressions at best position 2.6, so it is redirected rather than left to 404 — to the
      // Post Basic B.Sc guide, which is the real upgrade route for a GNM holder and a course
      // this college does offer. Target verified HTTP 200 on 2026-08-11.
      // Both slash forms are listed: unlike pharmacy and dental, this site does not normalise
      // to a trailing slash, so neither form can be assumed to reach the other.
      { source: '/blog/campus/diploma-nursing-gnm-anm-pay-and-who-it-suits', destination: '/blog/campus/post-basic-bsc-nursing-guide-for-gnm-holders', permanent: true },
      { source: '/blog/campus/diploma-nursing-gnm-anm-pay-and-who-it-suits/', destination: '/blog/campus/post-basic-bsc-nursing-guide-for-gnm-holders', permanent: true },

      // Pattern redirects — WordPress URL structures
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/blog', permanent: true },
      { source: '/web-stories/:path*', destination: '/', permanent: true },
      { source: '/index.php/m-sc-nursing', destination: '/msc-nursing', permanent: true },
      { source: '/index.php/classroom-gallery', destination: '/gallery', permanent: true },
      { source: '/index.php/:path*', destination: '/', permanent: true },

      // WordPress blog post category suffix patterns
      { source: '/:slug/latest-news', destination: '/blog', permanent: true },
      { source: '/:slug/latest-buzz', destination: '/blog', permanent: true },
      { source: '/:slug/past-events', destination: '/blog', permanent: true },
      { source: '/:slug/future-events', destination: '/blog', permanent: true },
      { source: '/:slug/uncategorized', destination: '/blog', permanent: true },
      { source: '/:slug/admision', destination: '/admissions', permanent: true },
      { source: '/:slug/college-news', destination: '/blog', permanent: true },

      // Course pages
      { source: '/bachelor-of-science-in-nursing', destination: '/bsc-nursing', permanent: true },
      { source: '/master-of-science-in-nursing', destination: '/msc-nursing', permanent: true },
      { source: '/b-sc-nursing', destination: '/bsc-nursing', permanent: true },
      { source: '/m-sc-nursing', destination: '/msc-nursing', permanent: true },
      { source: '/post-basic-bscnursing', destination: '/pbsc-nursing', permanent: true },
      { source: '/post-basic-b-sc-nursing', destination: '/pbsc-nursing', permanent: true },

      // Department pages
      { source: '/department-of-medical-surgical-nursing', destination: '/dept-medical-surgical', permanent: true },
      { source: '/department-of-community-health-nursing', destination: '/dept-community-health', permanent: true },
      { source: '/department-ofchild-health-nursing', destination: '/dept-child-health', permanent: true },
      { source: '/department-of-obstetrics-gynecological-nursing', destination: '/dept-obstetric-gynecological', permanent: true },

      // Specialty / subject pages
      { source: '/mental-health-nursing', destination: '/dept-psychiatric', permanent: true },
      { source: '/child-health-nursing', destination: '/dept-child-health', permanent: true },
      { source: '/community-health-nursing', destination: '/dept-community-health', permanent: true },
      { source: '/medical-surgical-nursing', destination: '/dept-medical-surgical', permanent: true },
      { source: '/obstetrics-gynecological-nursing', destination: '/dept-obstetric-gynecological', permanent: true },

      // Faculty pages
      { source: '/mrs-thilagam-g', destination: '/faculty-details', permanent: true },
      { source: '/mrs-vennila-a', destination: '/faculty-details', permanent: true },
      { source: '/mrs-gowri-b', destination: '/faculty-details', permanent: true },
      { source: '/mrs-arockia-mary-m', destination: '/faculty-details', permanent: true },
      { source: '/mrs-krishnaveni-m', destination: '/faculty-details', permanent: true },
      { source: '/mrs-saranya-m', destination: '/faculty-details', permanent: true },
      { source: '/mrs-sathiya-p', destination: '/faculty-details', permanent: true },

      // NAAC / compliance pages
      { source: '/ariia-2019-report', destination: '/ariia', permanent: true },
      { source: '/nirf-2025', destination: '/ariia', permanent: true },
      { source: '/curricular-aspects', destination: '/naac', permanent: true },
      { source: '/curricular-aspects-2', destination: '/naac', permanent: true },
      { source: '/institutional-values-and-best-practices', destination: '/naac', permanent: true },
      { source: '/teaching-learning-and-evaluation', destination: '/naac', permanent: true },
      { source: '/ugc-public-disclosure-compliance', destination: '/naac', permanent: true },

      // Committee pages
      { source: '/anti-ragging-cell', destination: '/anti-ragging-committee', permanent: true },
      { source: '/anti-ragging-discipline', destination: '/anti-ragging-committee', permanent: true },
      { source: '/antiragging', destination: '/anti-ragging-committee', permanent: true },
      { source: '/anti-sexual-harassment-cell', destination: '/internal-complaints-committee', permanent: true },

      // Facility / gallery pages
      { source: '/library-gallery', destination: '/library', permanent: true },
      { source: '/classroom-gallery', destination: '/gallery', permanent: true },
      { source: '/digital-campus', destination: '/smart-classroom', permanent: true },
      { source: '/clinical-hospital-facilities', destination: '/clinical-hospital', permanent: true },

      // Other specific pages
      { source: '/placements', destination: '/placement', permanent: true },
      { source: '/vision-and-mission', destination: '/vision-mission', permanent: true },
      { source: '/research', destination: '/research-committee', permanent: true },
      { source: '/code-of-conduct-2', destination: '/values-ethics', permanent: true },
      { source: '/bank-post-office', destination: '/about', permanent: true },
      { source: '/my-account', destination: '/', permanent: true },
      { source: '/ivbp', destination: '/', permanent: true },
      { source: '/camu', destination: '/', permanent: true },
      // '/rie' redirect removed 2026-07-10: old hacked URL carried Indonesian
      // gambling spam ("libra168") backlinks; redirecting it to '/' passed that
      // spam equity to the homepage (GSC: homepage ranked for libra168 in IDN).
      // Must return 404 so the spam signals die with the URL.
      { source: '/tle', destination: '/', permanent: true },
      { source: '/ilr', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://czjzizrzmqcdwgtxwuks.supabase.co https://www.facebook.com https://connect.facebook.net",
              "frame-src 'self' https://www.youtube.com https://www.google.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
