import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | Investrow Financial Services Pvt. Ltd.',
  description: 'Learn about Investrow Financial Services Pvt. Ltd. (AMFI Registered MFD ARN-194720). Managing ₹250+ Cr AUM for 3,000+ investors with 23+ years of combined experience.',
  keywords: 'About Investrow, AMFI Registered Distributor Dhanbad, Mutual Fund Advisors Jharkhand, Wealth Management India, Investrow AUM',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: '/about',
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
  return <AboutClient />;
}
