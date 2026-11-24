import NpsClient from './NpsClient';

export const metadata = {
  title: 'NPS Consultant & Advisor in Jharkhand | Investrow Financial Services',
  description: 'Certified National Pension System (NPS) Consultant in Jharkhand (Ranchi, Dhanbad, Bokaro, Jamshedpur). Learn about Tier 1, Tier 2, Corporate NPS, and save up to ₹2 Lakh tax under Section 80CCD.',
  keywords: 'NPS Consultant Jharkhand, National Pension Scheme Advisor Dhanbad, NPS Tier 1 Tier 2 Ranchi, Corporate NPS Consultant Jharkhand, Section 80CCD Tax Saving, Investrow NPS, Retirement Planning Jharkhand',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/nps-consultant-in-jharkhand',
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
        name: 'NPS Consultant in Jharkhand',
        item: 'https://www.investrow.in/nps-consultant-in-jharkhand'
      }
    ]
  };

  const npsServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'National Pension System (NPS) Advisory in Jharkhand',
    serviceType: 'Retirement Pension & Tax Deduction Planning',
    provider: {
      '@type': 'FinancialService',
      name: 'Investrow Financial Services Pvt. Ltd.',
      telephone: '+919102070777',
      url: 'https://www.investrow.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sundarpur Basti, Jealgora',
        addressLocality: 'Dhanbad',
        addressRegion: 'Jharkhand',
        postalCode: '828110',
        addressCountry: 'IN'
      }
    },
    areaServed: [
      'Jharkhand',
      'Dhanbad',
      'Ranchi',
      'Bokaro',
      'Jamshedpur',
      'Hazaribagh'
    ],
    description: 'Assistance with PRAN generation, Tier-1 & Tier-2 asset allocation (Equity, Corporate Debt, Govt Securities), and Section 80CCD tax deduction optimization.'
  };

  const npsFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much tax can I save with NPS in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under Section 80CCD(1B), individuals can claim an exclusive tax deduction of up to ₹50,000 above and beyond the ₹1.5 Lakh limit under Section 80C, allowing up to ₹2,00,000 in total deductions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can Investrow help open an NPS PRAN account online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Investrow financial advisors guide individuals and corporate employees across Jharkhand with 100% paperless PRAN generation and fund manager selection.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(npsServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(npsFaqJsonLd) }}
      />
      <NpsClient />
    </>
  );
}
