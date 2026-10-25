import AwardsClient from './AwardsClient';

export const metadata = {
  title: 'Awards & AMC Industry Recognition | Investrow Financial Services',
  description: 'Explore the 22+ industry awards, crystal trophies, and AMC certificates of appreciation presented to Investrow Financial Services by Kotak, Tata, Bajaj Finserv, ITI, Samco, UTI, Axis, and Mahindra Manulife.',
  keywords: 'Investrow Awards, Mutual Fund Distributor Awards, Kotak MF Award, Tata MF Partner in Progress, Bajaj Finserv Megatrends Trophy, AMFI Registered MFD Dhanbad, Wealth Management Recognition India',
  alternates: {
    canonical: 'https://www.investrow.in/awards',
  },
  openGraph: {
    title: 'Awards & AMC Industry Recognition | Investrow Financial Services',
    description: 'Explore 22+ genuine AMC awards, crystal trophies, and milestone certificates from India’s premier Mutual Fund AMCs.',
    url: 'https://www.investrow.in/awards',
    siteName: 'Investrow Financial Services',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function AwardsPage() {
  return <AwardsClient />;
}
