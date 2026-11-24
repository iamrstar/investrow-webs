import LearnClient from './LearnClient';

export const metadata = {
  title: 'Mutual Fund Learning Academy & Guides 2026 | 24 Topics on SIP, SWP, ELSS, FIRE, NRI & Tax | Investrow',
  description: 'Master mutual funds with 24 plain-English guides. Explore SIP, SWP monthly income, ELSS 80C tax saving, 12.5% LTCG rules, Active vs Index funds, Balanced Advantage, STP lumpsum deployment, NRI investing, Minor accounts, and FIRE early retirement.',
  keywords: 'what is SIP in mutual funds, SIP vs lumpsum, how does SWP work, ELSS tax saving mutual funds, mutual fund capital gains tax 2026, LTCG on mutual funds 12.5, direct vs regular mutual funds, step up SIP calculator, active vs index mutual funds, balanced advantage funds, systematic transfer plan STP, FIRE early retirement India, NRI mutual fund investment, mutual funds for minors, how to read mutual fund factsheet, arbitrage funds vs FD, debt funds taxation, mutual fund basics for beginners, Investrow learn, mutual fund advisor Dhanbad',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/learn',
  },
  openGraph: {
    title: 'Mutual Fund Learning Academy | 24 Comprehensive Investor Guides | Investrow',
    description: 'Plain-English mutual fund education by AMFI Registered MFD (ARN-194720). 24 master guides, 20-term financial dictionary, real rupee examples, and tax blueprints.',
    url: 'https://www.investrow.in/learn',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Mutual Fund Learning Academy - Investrow Financial Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Fund Learning Academy | 24 In-Depth Guides | Investrow',
    description: 'Master SIP, SWP, FIRE retirement, NRI investing, and tax-efficient compounding with zero jargon.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnPage() {
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
        name: 'Mutual Fund Learning Academy',
        item: 'https://www.investrow.in/learn'
      }
    ]
  };

  const educationalWebPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalWebPage',
    name: 'Investrow Mutual Fund Learning Academy',
    description: 'Free comprehensive 24-guide financial education center explaining Systematic Investment Plans (SIP), Systematic Withdrawal Plans (SWP), ELSS tax deductions, capital gains taxation, Active vs Index funds, FIRE early retirement, NRI investing, Minor accounts, and compounding mechanics in plain English.',
    url: 'https://www.investrow.in/learn',
    provider: {
      '@type': 'FinancialService',
      name: 'Investrow Financial Services Pvt. Ltd.',
      telephone: '+919102070777',
      taxID: 'ARN-194720',
      url: 'https://www.investrow.in'
    },
    educationalLevel: 'Beginner to Advanced Investor',
    about: [
      'Systematic Investment Plan (SIP)',
      'Systematic Withdrawal Plan (SWP)',
      'Systematic Transfer Plan (STP)',
      'SIP vs Lumpsum Strategy',
      'Step-Up SIP Compounding Calculator',
      'Equity Linked Savings Scheme (ELSS)',
      'Capital Gains Taxation (LTCG and STCG 2026)',
      'Direct vs Regular Mutual Funds',
      'Active Funds vs Passive Index Funds',
      'Balanced Advantage & Dynamic Asset Allocation Funds',
      'Debt Mutual Funds & Fixed Income',
      'Arbitrage Funds as Tax-Efficient Savings Alternative',
      'How to Pick Winning Mutual Funds Framework',
      'Decoding Mutual Fund Factsheet Ratios',
      'CAGR vs XIRR Return Measurement',
      'Asset Allocation & Portfolio Rebalancing',
      'Goal-Based Investing & Milestones',
      'The FIRE Movement in India',
      '20-Year Asset Class Showdown',
      'Mutual Fund Investing for NRIs',
      'Investing in Mutual Funds for Minors',
      'Behavioral Finance & Investor Mistakes',
      'Safety, Regulation & AMFI Framework',
      'Nomination & Transmission Guidelines'
    ]
  };

  const learnFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an SIP and how does it build wealth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Systematic Investment Plan (SIP) automates recurring monthly investments into a mutual fund scheme. Through Rupee Cost Averaging, you accumulate more units when markets are down and fewer when markets are high, while compounding generates exponential multi-crore returns over 10-15+ years.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which is better: SIP or Lumpsum?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SIP is ideal for salaried individuals earning regular monthly income, as it eliminates market timing risk. Lumpsum is best deployed during deep market corrections or through a Systematic Transfer Plan (STP) over 6 to 12 months from a safe liquid fund.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does an SWP provide monthly income for retirees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed monthly cashflow from your mutual fund corpus directly to your bank account. It is far more tax-efficient than bank fixed deposits, as only the capital gains portion is taxed at 12.5% LTCG, while the remaining balance continues growing.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much tax can I save with ELSS mutual funds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ELSS mutual funds offer tax deductions under Section 80C up to ₹1,50,000 per financial year, saving up to ₹46,800 in tax for individuals in the 30% tax bracket. ELSS has the shortest lock-in period among all Section 80C instruments (just 3 years).'
        }
      },
      {
        '@type': 'Question',
        name: 'How are equity mutual funds taxed in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Long Term Capital Gains (LTCG) on equity mutual funds held for over 12 months are 100% tax-free up to ₹1,25,000 per financial year. Gains exceeding ₹1.25 Lakh are taxed at 12.5%. Short Term Capital Gains (STCG) on units held for 12 months or less are taxed at 20%.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the FIRE target corpus in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Financial Independence, Retire Early (FIRE) in India typically targets 25x to 33x of annual living expenses, allowing for a sustainable 3% to 4% Safe Withdrawal Rate (SWR) via Systematic Withdrawal Plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can NRIs invest in Indian Mutual Funds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! NRIs (Non-Resident Indians) can invest in Indian mutual funds on a fully repatriable basis via NRE accounts or non-repatriable basis via NRO accounts with simplified KYC compliance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I invest in mutual funds in the name of a minor child?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Mutual fund folios can be opened in the name of a minor with either parent or a court-appointed legal guardian, providing an ideal vehicle for college education and child wealth accumulation.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the advantage of using an AMFI Registered Distributor over Direct plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Studies show DIY investors often lose 3% to 5% in annualized returns by panic-selling in market dips and selecting wrong schemes. An AMFI Registered Distributor (like Investrow, ARN-194720) provides professional scheme curation across 44 AMCs, portfolio rebalancing, capital gains tax harvesting, and emotional discipline at ₹0 upfront fee.'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learnFaqJsonLd) }}
      />
      <LearnClient />
    </>
  );
}
