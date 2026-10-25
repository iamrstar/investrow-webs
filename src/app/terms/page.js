import TermsClient from './TermsClient';

export const metadata = {
  title: 'Terms & Conditions | Investrow Financial Services Pvt. Ltd.',
  description: 'Review the official Terms and Conditions of Investrow Financial Services Pvt. Ltd. (AMFI Registered MFD ARN-194720). Understand our services, risk disclaimers, and user policies.',
  keywords: 'Investrow Terms and Conditions, Financial Services Terms, Mutual Fund Disclaimer, AMFI Registered Distributor Policies, Investrow Dhanbad',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Investrow Financial Services Pvt. Ltd.',
    description: 'Terms and Conditions for Investrow Financial Services Pvt. Ltd., AMFI Registered Mutual Fund Distributor (ARN-194720).',
    url: 'https://www.investrow.in/terms',
    siteName: 'Investrow Financial Services',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Investrow Financial Services Pvt. Ltd.',
    description: 'Terms and Conditions for Investrow Financial Services Pvt. Ltd.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
