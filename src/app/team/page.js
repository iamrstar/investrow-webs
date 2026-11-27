import TeamClient from './TeamClient';

export const metadata = {
  title: 'Our Team & Leadership | Investrow Financial Services Pvt. Ltd.',
  description: 'Meet the executive leadership and 20+ certified wealth managers, research analysts, and operations specialists at Investrow Financial Services Pvt. Ltd. (AMFI ARN-194720). Led by Surendra Prasad, Dipankar Moi, and Birendra Kumar.',
  keywords: 'Investrow team, Surendra Prasad, Dipankar Moi, Birendra Kumar, mutual fund distributors Dhanbad, AMFI registered MFD ARN 194720, wealth managers India, mutual fund consultants Dhanbad',
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
        name: 'Our Team',
        item: 'https://www.investrow.in/team'
      }
    ]
  };

  const teamProfileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Investrow Executive Leadership & Distribution Team',
    url: 'https://www.investrow.in/team',
    mainEntity: {
      '@type': 'Organization',
      name: 'Investrow Financial Services Pvt. Ltd.',
      employee: [
        {
          '@type': 'Person',
          name: 'Surendra Prasad',
          jobTitle: 'Founder & Principal Officer',
          image: 'https://www.investrow.in/images/team/surendra-prasad.png',
          knowsAbout: ['Mutual Funds', 'AMFI Regulations', 'SIP Compounding', 'Retirement Planning']
        },
        {
          '@type': 'Person',
          name: 'Dipankar Moi',
          jobTitle: 'Director & Operations Head',
          knowsAbout: ['Mutual Fund Operations', 'BSE StAR MF', 'Client Services']
        },
        {
          '@type': 'Person',
          name: 'Birendra Kumar',
          jobTitle: 'Director & Corporate Solutions',
          knowsAbout: ['Corporate Investments', 'Risk Management']
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamProfileJsonLd) }}
      />
      <TeamClient />
    </>
  );
}
