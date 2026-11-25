import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | Investrow Financial Services Pvt. Ltd.',
  description: 'Learn about Investrow Financial Services Pvt. Ltd. (AMFI Registered MFD ARN-194720). Managing ₹250+ Cr AUM for 3,000+ investors with 23+ years of combined experience.',
  keywords: 'About Investrow, AMFI Registered Distributor Dhanbad, Mutual Fund Advisors Jharkhand, Wealth Management India, Investrow AUM',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/about',
  },
  openGraph: {
    title: 'About Us | Investrow Financial Services Pvt. Ltd.',
    description: 'Our mission, vision, leadership, and milestones in wealth management and mutual funds.',
    url: 'https://www.investrow.in/about',
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
    title: 'About Us | Investrow Financial Services Pvt. Ltd.',
    description: 'Our mission, vision, leadership, and milestones in wealth management and mutual funds.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.investrow.in'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://www.investrow.in/about'
      }
    ]
  };

  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Investrow Financial Services',
    url: 'https://www.investrow.in/about',
    description: 'Learn about Investrow Financial Services Pvt. Ltd., an AMFI Registered Mutual Fund Distributor (ARN-194720) with headquarters in Dhanbad, Jharkhand.',
    mainEntity: {
      '@type': 'FinancialService',
      name: 'Investrow Financial Services Pvt. Ltd.',
      taxID: 'ARN-194720',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sundarpur Basti, Jealgora',
        addressLocality: 'Dhanbad',
        addressRegion: 'Jharkhand',
        postalCode: '828110',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
