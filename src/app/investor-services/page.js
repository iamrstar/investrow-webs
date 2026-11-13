import InvestorServicesClient from './InvestorServicesClient';

export const metadata = {
  title: 'Investor Services & Online Utility Desk | Investrow Financial Services',
  description: 'Official investor service portal by Investrow (ARN-194720). Quick links for CAMS & KFintech nominee updates, KYC check, eKYC validation, Aadhaar-PAN linking, and tax capital gains statements.',
  keywords: 'Investrow Investor Services, CAMS Online Update, KFintech Nominee Update, KYC Status Check, AMFI Mutual Fund Services, CamsKRA, CDSL KRA',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: '/investor-services',
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
  return <InvestorServicesClient />;
}
