import DhanbadClient from './DhanbadClient';

export const metadata = {
  title: 'Mutual Fund Consultant in Dhanbad | Investrow Financial Services (ARN-194720)',
  description: 'Certified AMFI Registered Mutual Fund Consultant in Dhanbad (ARN-194720). Tailored SIP, Tax-Saving ELSS, lumpsum STP, and portfolio rebalancing across Dhanbad, Bank More, Saraidhela & Bokaro.',
  keywords: 'Mutual Fund Consultant Dhanbad, AMFI Registered MFD Dhanbad, Best SIP Advisor Dhanbad, Mutual Fund Distributor Jharkhand, Investrow Dhanbad, Wealth Advisor Dhanbad',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: '/mutual-fund-consultant-in-dhanbad',
  },
  openGraph: {
    title: 'Mutual Fund Consultant in Dhanbad | Investrow Financial Services',
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) in Dhanbad. Over ₹250+ Cr AUM advised for 3,000+ happy families. Book your complimentary portfolio review.',
    url: 'https://www.investrow.in/mutual-fund-consultant-in-dhanbad',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Investrow Financial Services - Mutual Fund Consultant in Dhanbad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Fund Consultant in Dhanbad | Investrow Financial Services',
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) in Dhanbad. Plan your family goals with disciplined compounding.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MutualFundConsultantDhanbadPage() {
  return <DhanbadClient />;
}
