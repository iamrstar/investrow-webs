import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#008AD8',
};

export const metadata = {
  title: 'Investrow Financial Services | AMFI Registered Mutual Fund Distributor & SIP Advisory',
  description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) in Jharkhand & Pan-India. Offering goal-based Mutual Funds (SIP & Lumpsum), Tax-Saving ELSS, SWP cashflow, and complimentary portfolio health checks.',
  keywords: 'Mutual Fund Distributor Jharkhand, AMFI Registered MFD Dhanbad, SIP Calculator, Mutual Funds Investment, ELSS Tax Saving, SWP Retirement Income, Investrow, Mutual Funds Dhanbad, Best Financial Advisor Jharkhand',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in',
  },
  other: {
    'geo.region': 'IN-JH',
    'geo.placename': 'Dhanbad',
    'geo.position': '23.7957;86.4304',
    'ICBM': '23.7957, 86.4304',
    'format-detection': 'telephone=no',
  },
  openGraph: {
    title: 'Investrow Financial Services | Compound Wealth With Mutual Funds',
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720). Managing ₹250+ Cr AUM for 3,000+ happy investors. Calculate your SIP compounding and book a free portfolio audit.',
    url: 'https://www.investrow.in',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Investrow Financial Services Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=5', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=5', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-48x48.png?v=5', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico?v=5', sizes: 'any' },
      { url: '/favicon.png?v=5', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=5',
    apple: [
      { url: '/apple-touch-icon.png?v=5', sizes: '180x180', type: 'image/png' }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investrow Financial Services | Mutual Funds & SIP Advisory',
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720). Empowering 3,000+ investors with disciplined wealth compounding.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // Structured Schema.org JSON-LD for AEO & GEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Investrow Financial Services Pvt. Ltd.',
    legalName: 'Investrow Financial Services Private Limited',
    url: 'https://www.investrow.in',
    logo: 'https://www.investrow.in/investrow-logo.png',
    image: 'https://www.investrow.in/investrow-logo.png',
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) and BSE Member (55533) providing disciplined mutual fund SIP planning, goal-based portfolio allocation, and tax-saving ELSS solutions.',
    telephone: ['+919102070777', '+919102050555'],
    email: 'info@investrow.in',
    foundingDate: '2021-07-06',
    taxID: 'ARN-194720',
    memberOf: {
      '@type': 'Organization',
      name: 'BSE StAR MF',
      identifier: '55533'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sundarpur Basti, Jealgora',
      addressLocality: 'Dhanbad',
      addressRegion: 'Jharkhand',
      postalCode: '828110',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.7957',
      longitude: '86.4304'
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:30-18:30',
    areaServed: ['Dhanbad', 'Ranchi', 'Bokaro', 'Jamshedpur', 'Jharkhand', 'India'],
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3000',
      bestRating: '5',
      worstRating: '1'
    },
    founder: {
      '@type': 'Person',
      name: 'Investrow Advisory Team'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mutual Fund & Wealth Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systematic Investment Plan (SIP) Compounding',
            description: 'Disciplined monthly mutual fund investing aligned with long-term wealth milestones.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systematic Withdrawal Plan (SWP) Cashflow',
            description: 'Tax-efficient monthly cashflow for retirees and capital preservation investors.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tax Saving ELSS Mutual Funds',
            description: 'High-growth equity mutual funds with Section 80C tax deduction benefits.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'National Pension System (NPS) Advisory',
            description: 'Tier-1 & Tier-2 corporate and individual retirement pension planning.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Zero-Cost Portfolio Health Check',
            description: 'Comprehensive audit of existing mutual fund portfolios for underperformance and expense ratio drag.'
          }
        }
      ]
    },
    sameAs: [
      'https://www.amfiindia.com',
      'https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial',
      'https://wa.me/919102070777'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Investrow Financial Services',
    alternateName: ['Investrow', 'Investrow Wealth', 'Investrow Dhanbad'],
    url: 'https://www.investrow.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.investrow.in/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Investrow an AMFI registered mutual fund distributor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Investrow Financial Services Pvt. Ltd. is an active AMFI Registered Mutual Fund Distributor with ARN-194720 and BSE StAR MF Member Code 55533, managing over ₹250+ Crore AUM for 3,000+ investor families.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Investrow registered corporate office located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Investrow Financial Services Pvt. Ltd. is headquartered at Sundarpur Basti, Jealgora, Dhanbad, Jharkhand, India, 828110.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Investrow charge any upfront advisory or transaction fees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Investrow provides comprehensive goal-based portfolio architecture, scheme selection, and ongoing portfolio rebalancing at ₹0 upfront fee.'
        }
      },
      {
        '@type': 'Question',
        name: 'How are client mutual fund investments secured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All transactions are routed directly through BSE StAR MF exchange infrastructure directly to SEBI-regulated fund houses. Money is never held by Investrow, and redemptions go directly to the investor bank account.'
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon & Touch Icons with Cache Busting */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=5" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=5" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=5" />
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=5" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=5" />

        {/* Preconnect to Google Fonts for sub-millisecond font handshake */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        />
        {/* Google Tag Manager (preserved from live site) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-05VSZ0786T"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-05VSZ0786T');
            `,
          }}
        />

        {/* Geo-targeting for Local Search & Map Packs */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Dhanbad" />
        <meta name="geo.position" content="23.7957;86.4304" />
        <meta name="ICBM" content="23.7957, 86.4304" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data (Schema.org) for Google AI Overviews & Local Pack */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
