import HomeClient from './HomeClient';

export const metadata = {
  title: 'Investrow Financial Services | AMFI Registered Mutual Fund Distributor & SIP Advisory',
  description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) in Jharkhand & Pan-India. Managing ₹250+ Cr AUM for 3,000+ families. Goal-based SIP, Lumpsum, SWP, ELSS, and ₹0 advisory fee.',
  keywords: 'Mutual Fund Distributor Jharkhand, AMFI Registered MFD Dhanbad, Best SIP Calculator, Mutual Funds Investment, ELSS Tax Saving, SWP Retirement Income, Investrow, Mutual Funds Dhanbad, Financial Advisor Jharkhand',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in',
  },
  openGraph: {
    title: 'Investrow Financial Services | AMFI Registered Mutual Fund Distributor & SIP Advisory',
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

export default function Home() {
  const homeBreadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.investrow.in'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
