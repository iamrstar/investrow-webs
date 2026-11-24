import DhanbadClient from './DhanbadClient';

export const metadata = {
  title: 'Mutual Fund Consultant in Dhanbad | Investrow Financial Services (ARN-194720)',
  description: 'Certified AMFI Registered Mutual Fund Consultant in Dhanbad (ARN-194720). Tailored SIP, Tax-Saving ELSS, lumpsum STP, and portfolio rebalancing across Dhanbad, Bank More, Saraidhela & Bokaro.',
  keywords: 'Mutual Fund Consultant Dhanbad, AMFI Registered MFD Dhanbad, Best SIP Advisor Dhanbad, Mutual Fund Distributor Jharkhand, Investrow Dhanbad, Wealth Advisor Dhanbad, Mutual Funds in Bank More, Mutual Funds in Saraidhela',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/mutual-fund-consultant-in-dhanbad',
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
        name: 'Mutual Fund Consultant in Dhanbad',
        item: 'https://www.investrow.in/mutual-fund-consultant-in-dhanbad'
      }
    ]
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Investrow Financial Services - Mutual Fund Consultant Dhanbad',
    legalName: 'Investrow Financial Services Private Limited',
    url: 'https://www.investrow.in/mutual-fund-consultant-in-dhanbad',
    telephone: '+919102070777',
    email: 'info@investrow.in',
    taxID: 'ARN-194720',
    memberOf: {
      '@type': 'Organization',
      name: 'BSE StAR MF',
      identifier: '55533'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sundarpur Basti, Jealgora',
      addressLocality: 'Dhanbad',
      addressRegion: 'Jharkhand',
      postalCode: '828110',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.7957',
      longitude: '86.4304'
    },
    areaServed: [
      'Dhanbad',
      'Bank More',
      'Saraidhela',
      'Jharia',
      'Jealgora',
      'Govindpur',
      'Katras',
      'Bokaro Steel City'
    ],
    priceRange: '₹0 Upfront Advisory',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250'
    }
  };

  const dhanbadFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Investrow registered office in Dhanbad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Investrow Financial Services Pvt. Ltd. is headquartered at Sundarpur Basti, Jealgora, Dhanbad, Jharkhand, India, 828110. In-person advisory sessions are available across Dhanbad, Bank More, and Saraidhela.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who leads mutual fund advisory at Investrow in Dhanbad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Senior AMFI-certified advisor Surendra Prasad (AMFI ARN-194720) and Dipankar Moi personally oversee mutual fund scheme selection and client portfolio health checks.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are mutual fund portfolio reviews free of cost in Dhanbad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Investrow offers 100% complimentary, zero-cost mutual fund portfolio health checks and SIP goal planning for residents of Dhanbad and Jharkhand.'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhanbadFaqJsonLd) }}
      />
      <DhanbadClient />
    </>
  );
}
