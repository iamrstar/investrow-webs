import WealthCreationClient from './WealthCreationClient';

export const metadata = {
  title: 'Wealth Creation Strategies & Goal Planning | Investrow Financial Services',
  description: 'Transform savings into generational wealth with AMFI-registered mutual fund distributor Investrow. Build multi-crore portfolios through disciplined SIP compounding, Step-Up investing, and asset allocation.',
  keywords: 'Wealth Creation Strategies, Mutual Fund Wealth Creation, SIP Compounding Dhanbad, Goal Based Investing Jharkhand, ₹1 Crore SIP Milestone, Financial Freedom FIRE India, Investrow Wealth Advisor',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/wealth-creation',
  },
  openGraph: {
    title: 'Wealth Creation Strategies & Goal Planning | Investrow Financial Services',
    description: 'Transform your idle savings into long-term compounding wealth. Build goal-aligned mutual fund portfolios with AMFI-registered distributor Investrow (ARN-194720).',
    url: 'https://www.investrow.in/wealth-creation',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Investrow Wealth Creation Strategies',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wealth Creation Strategies & Goal Planning | Investrow',
    description: 'Disciplined compounding, Step-Up SIPs, and asset allocation tailored for Indian families.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WealthCreationPage() {
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
        name: 'Wealth Creation Strategies',
        item: 'https://www.investrow.in/wealth-creation'
      }
    ]
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wealth Creation Strategies & Disciplined SIP Compounding Guide',
    description: 'Practical guide to transforming regular monthly savings into generational wealth through compounding, annual step-up SIPs, and disciplined asset allocation.',
    author: {
      '@type': 'Person',
      name: 'Surendra Prasad',
      jobTitle: 'Founder & Senior AMFI Advisor (ARN-194720)'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Investrow Financial Services Pvt. Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.investrow.in/investrow-logo.png'
      }
    },
    mainEntityOfPage: 'https://www.investrow.in/wealth-creation'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <WealthCreationClient />
    </>
  );
}
