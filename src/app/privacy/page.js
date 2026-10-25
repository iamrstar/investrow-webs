import PrivacyClient from './PrivacyClient';

export const metadata = {
  title: 'Privacy Policy | Investrow Financial Services Pvt. Ltd.',
  description: 'Understand how Investrow Financial Services Pvt. Ltd. (AMFI Registered MFD ARN-194720) collects, uses, and safeguards your personal and financial information.',
  keywords: 'Investrow Privacy Policy, Financial Data Security, KYC Information Protection, AMFI MFD Privacy, Investrow Dhanbad',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Investrow Financial Services Pvt. Ltd.',
    description: 'Privacy Policy and Data Protection standards of Investrow Financial Services Pvt. Ltd.',
    url: 'https://www.investrow.in/privacy',
    siteName: 'Investrow Financial Services',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Investrow Financial Services Pvt. Ltd.',
    description: 'Data security and privacy policy for Investrow Financial Services Pvt. Ltd.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
