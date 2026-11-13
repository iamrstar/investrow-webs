import NpsClient from './NpsClient';

export const metadata = {
  title: 'NPS Consultant & Advisor in Jharkhand | Investrow Financial Services',
  description: 'Certified National Pension System (NPS) Consultant in Jharkhand (Ranchi, Dhanbad, Bokaro, Jamshedpur). Learn about Tier 1, Tier 2, Corporate NPS, and save up to ₹2 Lakh tax under Section 80CCD.',
  keywords: 'NPS Consultant Jharkhand, National Pension Scheme Advisor Dhanbad, NPS Tier 1 Tier 2 Ranchi, Corporate NPS Consultant Jharkhand, Section 80CCD Tax Saving, Investrow NPS',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: '/nps-consultant-in-jharkhand',
  },
  openGraph: {
    title: 'NPS Consultant & Advisor in Jharkhand | Investrow Financial Services',
    description: 'Expert National Pension System guidance in Jharkhand. Open Tier-1 & Tier-2 PRAN, plan retirement corpus, and claim triple tax deductions.',
    url: 'https://www.investrow.in/nps-consultant-in-jharkhand',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Investrow NPS Consultant in Jharkhand',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NPS Consultant & Advisor in Jharkhand | Investrow Financial Services',
    description: 'Triple tax benefits and systematic pension compounding with NPS in Jharkhand.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NpsConsultantJharkhandPage() {
  return <NpsClient />;
}

