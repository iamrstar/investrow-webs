import './globals.css';

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
    telephone: '+919102070777',
    email: 'info@investrow.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhanbad',
      addressRegion: 'Jharkhand',
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
