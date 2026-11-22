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
  keywords: 'Mutual Fund Distributor Jharkhand, AMFI Registered MFD Dhanbad, SIP Calculator, Mutual Funds Investment, ELSS Tax Saving, SWP Retirement Income, Investrow',
  metadataBase: new URL('https://www.investrow.in'),
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
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) and BSE Member (55533) providing disciplined mutual fund SIP planning, goal-based portfolio allocation, and tax-saving ELSS solutions.',
    telephone: ['+919102070777', '+919102050555'],
    email: 'info@investrow.in',
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
    areaServed: ['Dhanbad', 'Ranchi', 'Bokaro', 'Jharkhand', 'India'],
    priceRange: '₹₹',
    founder: {
      '@type': 'Person',
      name: 'Investrow Advisory Team'
    }
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

        {/* Structured Data (Schema.org) for Google AI Overviews & Local Pack */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
