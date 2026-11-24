import InvestorServicesClient from './InvestorServicesClient';

export const metadata = {
  title: 'Investor Services & Online Utility Desk | Investrow Financial Services',
  description: 'Official investor service portal by Investrow (ARN-194720). Quick links for CAMS & KFintech nominee updates, KYC check, eKYC validation, Aadhaar-PAN linking, and tax capital gains statements.',
  keywords: 'Investrow Investor Services, CAMS Online Update, KFintech Nominee Update, KYC Status Check, AMFI Mutual Fund Services, CamsKRA, CDSL KRA, Mutual Fund Statements Jharkhand',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/investor-services',
  },
  openGraph: {
    title: 'Investor Services & Online Utility Desk | Investrow Financial Services',
    description: 'Direct access to essential mutual fund investor utilities: RTA contact updates, nominee registration, KYC status check, and tax statements.',
    url: 'https://www.investrow.in/investor-services',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Investrow Investor Services Portal',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investor Services & Online Utility Desk | Investrow Financial Services',
    description: 'Instant investor utility links: CAMS, KFintech, KYC status checks, and portfolio service requests.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InvestorServicesPage() {
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
        name: 'Investor Services Desk',
        item: 'https://www.investrow.in/investor-services'
      }
    ]
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mutual Fund Investor Utility & Service Desk',
    serviceType: 'Mutual Fund KYC, RTA, and Nominee Management',
    provider: {
      '@type': 'FinancialService',
      name: 'Investrow Financial Services Pvt. Ltd.',
      telephone: '+919102070777',
      url: 'https://www.investrow.in'
    },
    description: 'Direct online utility desk for CAMS and KFintech mutual fund folios: nominee addition, KYC compliance status, bank account updates, and consolidated capital gains statements.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <InvestorServicesClient />
    </>
  );
}
