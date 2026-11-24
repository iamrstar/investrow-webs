import DownloadsClient from './DownloadsClient';

export const metadata = {
  title: 'AMFI Mutual Fund Forms & Downloads 2026 | CKYC, Nomination, Bank & NAV Forms | Investrow',
  description: 'Download official AMFI KYC forms (CKYC individual & non-individual), latest Nomination Form, Opt-Out format, Multiple Bank Account registration, NAV downloads, and Mutual Funds Sahi Hai guidelines.',
  keywords: 'AMFI KYC form download, CKYC form PDF, AMFI nomination form 2026, mutual fund nomination opt out form, AMFI multiple bank account form, non individual KYC form, AMFI NAV download, AMFI scheme data download, Mutual Funds Sahi Hai logo zip, AMFI investor awareness presentation, mutual fund forms Jharkhand, Investrow downloads',
  metadataBase: new URL('https://www.investrow.in'),
  alternates: {
    canonical: 'https://www.investrow.in/downloads',
  },
  openGraph: {
    title: 'AMFI Mutual Fund Forms & Downloads 2026 | Investrow Financial Services',
    description: 'Download official AMFI KYC forms, latest Nomination Form, Opt-Out format, Multiple Bank Account registration, NAV downloads, and Mutual Funds Sahi Hai guidelines.',
    url: 'https://www.investrow.in/downloads',
    siteName: 'Investrow Financial Services',
    images: [
      {
        url: '/investrow-logo.png',
        width: 1200,
        height: 630,
        alt: 'AMFI Mutual Fund Forms Downloads - Investrow Financial Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMFI Mutual Fund Forms & Downloads 2026 | Investrow',
    description: 'Official AMFI forms: CKYC, Nomination, Bank Account Update, NAV feeds, and investor handbooks.',
    images: ['/investrow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DownloadsPage() {
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
        name: 'AMFI Forms & Regulatory Downloads',
        item: 'https://www.investrow.in/downloads'
      }
    ]
  };

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Official AMFI Mutual Fund Forms & Regulatory Downloads',
    description: 'Comprehensive directory of official Association of Mutual Funds in India (AMFI) forms, including Central KYC (CKYC), nomination declarations, multiple bank accounts registration, NAV downloads, and investor education handbooks.',
    url: 'https://www.investrow.in/downloads',
    provider: {
      '@type': 'FinancialService',
      name: 'Investrow Financial Services Pvt. Ltd.',
      telephone: '+919102070777',
      taxID: 'ARN-194720',
      url: 'https://www.investrow.in'
    },
    hasPart: [
      {
        '@type': 'DigitalDocument',
        name: 'CKYC & KRA Form for Individuals',
        url: 'https://portal.amfiindia.com/spages/CKYC-KRA-KYC-FormforIndividuals.pdf',
        fileFormat: 'application/pdf',
        description: 'Official Central KYC (CKYC) & KRA registration form for resident individual and NRI investors.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Supplementary CKYC Form for Individuals',
        url: 'https://portal.amfiindia.com/spages/SupplementaryCKYCFormforIndividuals.pdf',
        fileFormat: 'application/pdf',
        description: 'Supplementary declaration to capture FATCA/CRS and additional identity details.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Revised KYC Form for Non-Individuals',
        url: 'https://portal.amfiindia.com/spages/NonIndividual-KYC.pdf',
        fileFormat: 'application/pdf',
        description: 'KRA/CKYC registration document for Companies, Partnership Firms, Trusts, and HUFs.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Mutual Fund Nomination Form (Latest AMFI Format)',
        url: 'https://www.amfiindia.com/uploads/Nomination_Form_Format_Sep_2026_ab1877c0b1.pdf',
        fileFormat: 'application/pdf',
        description: 'Statutory form to appoint up to 3 nominees with percentage allocation for mutual fund folios.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Opt-Out Nomination Form Format',
        url: 'https://www.amfiindia.com/uploads/Nomination_Opt_out_Form_Format_Sep_2026_2d1432028a.pdf',
        fileFormat: 'application/pdf',
        description: 'Statutory declaration format to opt out of nomination in mutual fund folios.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Multiple Bank Account Registration Form',
        url: 'https://portal.amfiindia.com/spages/AMFI%20-%20Multiple%20Bank%20Account%20Registration%20Form.pdf',
        fileFormat: 'application/pdf',
        description: 'Register up to 5 verified bank accounts and set default redemption payout bank.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Form for MF Distributors: Change of Details',
        url: 'https://www.amfiindia.com/Themes/Theme1/downloads/Form_for_MF_disributors_for_change_of_details.pdf',
        fileFormat: 'application/pdf',
        description: 'Official AMFI application form for registered distributors (ARN) to update contact and bank details.'
      },
      {
        '@type': 'DataDownload',
        name: 'AMFI Net Asset Value (NAV) Daily & Historical Data Download',
        contentUrl: 'https://www.amfiindia.com/net-asset-value/nav-download',
        encodingFormat: 'text/plain',
        description: 'Daily and historical NAV download engine across all mutual fund schemes in India.'
      },
      {
        '@type': 'DataDownload',
        name: 'Mutual Fund Scheme Master Data Download',
        contentUrl: 'https://portal.amfiindia.com/DownloadSchemeData_Po.aspx?mf=0',
        encodingFormat: 'text/csv',
        description: 'Comprehensive scheme master data export with ISIN and AMC codes.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Mutual Funds Sahi Hai – Logo Files & Guidelines',
        url: 'https://www.amfiindia.com/Themes/Theme1/downloads/MUTUAL_FUND_SAHI_HAI_PAGE_TURNER.zip',
        fileFormat: 'application/zip',
        description: 'Official vector and high-res brand artwork kit and guidelines for the Mutual Funds Sahi Hai campaign.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Investor Awareness Program (IAP) Presentation',
        url: 'https://www.amfiindia.com/Themes/Theme1/downloads/InvestorsAwarenessProgrampresentation.pdf',
        fileFormat: 'application/pdf',
        description: 'Official slide deck presentation for investor education and compounding awareness.'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Mutual Funds Made Simple: Pocket Guide to Investing',
        url: 'https://www.amfiindia.com/uploads/AMFI_Understanding_Mutual_Funds_IAP_Booklet_Final_Website_version_860a5b77aa.pdf',
        fileFormat: 'application/pdf',
        description: 'Official beginner-to-advanced booklet explaining SIPs, asset allocation, and mutual fund taxation.'
      }
    ]
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which KYC form do I need as a first-time mutual fund investor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you are an individual Indian resident or NRI investing for the first time, download the "CKYC & KRA Form for Individuals". Attach a self-attested PAN card copy, proof of address (Aadhaar/Passport/Voter ID), and passport-size photo. Once registered, your KYC is valid across all 44+ mutual fund houses in India.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is adding a nominee mandatory for all mutual fund folios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, under SEBI regulations, all individual mutual fund holders must either register a nominee or submit the official "Nomination Opt-Out Form". You can appoint up to 3 nominees with custom percentage allocations using the official AMFI Nomination Form.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I submit these physical forms after downloading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fill out the form in capital letters with blue/black ink, sign, attach self-attested document copies, and submit at any CAMS or KFintech investor service centre, or bring them to Investrow Registered Office in Dhanbad (Sundarpur Basti, Jealgora, Dhanbad, Jharkhand, 828110) for 100% free document verification and processing.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can Investrow help me fill out and verify these forms online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Investrow offers 100% complimentary form verification and assistance via WhatsApp at +91 91020 70777 or in-person at our Dhanbad office to prevent any rejection from RTAs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the purpose of the Multiple Bank Account Registration Form?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Multiple Bank Account Registration Form allows you to register up to 5 verified bank accounts in your mutual fund folios and designate one as the default payout account for redemption credits and dividend payouts.'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DownloadsClient />
    </>
  );
}
