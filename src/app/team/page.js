import TeamClient from './TeamClient';

export const metadata = {
  title: 'Our Team & Leadership | Investrow Financial Services Pvt. Ltd.',
  description: 'Meet the executive leadership and 20+ certified wealth managers, research analysts, and operations specialists at Investrow Financial Services Pvt. Ltd. (AMFI ARN-194720). Led by Surendra Prasad, Dipankar Moi, and Birendra Kumar.',
  keywords: 'Investrow team, Surendra Prasad, Dipankar Moi, Birendra Kumar, mutual fund advisors Dhanbad, AMFI registered MFD ARN 194720, wealth managers India, certified financial planners',
  openGraph: {
    title: 'Our Team & Leadership | Investrow Financial Services Pvt. Ltd.',
    description: 'Meet Surendra Prasad, Dipankar Moi, Birendra Kumar and the 20+ specialized financial professionals guiding thousands of investors across India.',
    url: 'https://www.investrow.in/team',
    siteName: 'Investrow Financial Services Pvt. Ltd.',
    images: [
      {
        url: '/images/team/surendra-prasad.png',
        width: 369,
        height: 398,
        alt: 'Surendra Prasad - Founder & Director at Investrow'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.investrow.in/team',
  }
};

export default function TeamPage() {
  return <TeamClient />;
}
