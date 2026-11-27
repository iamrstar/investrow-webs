'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Copy, 
  Check, 
  MessageSquare, 
  FolderDown, 
  BookOpen, 
  Database, 
  UserCheck, 
  Building2, 
  ArrowRight,
  Info,
  Layers,
  Sparkles,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';

export default function DownloadsClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('AMFI Form Assistance');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleOpenConsultModal = (service = 'AMFI Form Assistance') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const handleCopyLink = (id, url) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Master Forms & Regulatory Downloads List
  const downloadsData = [
    {
      id: 'ckyc-kra-individual',
      title: 'CKYC & KRA Form for Individuals',
      category: 'kyc',
      categoryLabel: 'KYC Forms',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI / CKYC Registry',
      url: 'https://portal.amfiindia.com/spages/CKYC-KRA-KYC-FormforIndividuals.pdf',
      badge: 'Most Essential',
      description: 'Official Central KYC (CKYC) & KRA registration form for resident individual investors and NRIs. Completing this one-time form allows you to invest across all 44+ SEBI-registered Mutual Fund AMCs in India.',
      requiredDocs: ['Self-attested PAN Card copy', 'Valid Proof of Address (Aadhaar / Passport / Voter ID)', 'Passport-size color photograph'],
      applicableTo: 'Resident Individuals, Sole Proprietors, NRI Investors'
    },
    {
      id: 'supplementary-ckyc-individual',
      title: 'Supplementary CKYC Form for Individuals',
      category: 'kyc',
      categoryLabel: 'KYC Forms',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI Official Portal',
      url: 'https://portal.amfiindia.com/spages/SupplementaryCKYCFormforIndividuals.pdf',
      badge: 'KYC Update',
      description: 'Supplementary Central KYC declaration required to capture additional information such as Mother’s Maiden Name, FATCA/CRS foreign tax compliance, and additional identity details for previously registered investors.',
      requiredDocs: ['Copy of existing KYC Acknowledgement or PAN Card', 'Updated identity proof if details changed'],
      applicableTo: 'Existing KYC-compliant investors updating records'
    },
    {
      id: 'revised-kyc-non-individual',
      title: 'Revised KYC Form for Non-Individuals',
      category: 'kyc',
      categoryLabel: 'KYC Forms',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI Official Portal',
      url: 'https://portal.amfiindia.com/spages/NonIndividual-KYC.pdf',
      badge: 'Corporate / Entity',
      description: 'Comprehensive KRA/CKYC registration document specifically formulated for non-individual entities investing in mutual funds, including Companies, Partnership Firms, Trusts, HUFs, Society, and Institutional Investors.',
      requiredDocs: ['Certificate of Incorporation / Registration', 'MoA & AoA / Partnership Deed / Trust Deed', 'Entity PAN Card & Authorized Signatory List with specimen signatures', 'Ultimate Beneficial Ownership (UBO) declaration'],
      applicableTo: 'Private/Public Limited Companies, Partnership Firms, HUFs, Trusts, NGOs'
    },
    {
      id: 'nomination-form',
      title: 'Mutual Fund Nomination Form (Latest Format)',
      category: 'nomination-banking',
      categoryLabel: 'Nomination & Banking',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI Official Portal',
      url: 'https://www.amfiindia.com/uploads/Nomination_Form_Format_Sep_2026_ab1877c0b1.pdf',
      badge: 'Mandatory by SEBI',
      description: 'Official statutory form to register up to 3 nominees with percentage allocation for your mutual fund folios. Ensures smooth, dispute-free transfer and transmission of your mutual fund wealth to your family or legal heirs.',
      requiredDocs: ['Folio Number & Scheme details', 'Nominee Full Name, DOB (if minor), Guardian details, and Relationship proof'],
      applicableTo: 'All individual mutual fund unit holders'
    },
    {
      id: 'nomination-opt-out-form',
      title: 'Opt-Out Nomination Form Format',
      category: 'nomination-banking',
      categoryLabel: 'Nomination & Banking',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI Official Portal',
      url: 'https://www.amfiindia.com/uploads/Nomination_Opt_out_Form_Format_Sep_2026_2d1432028a.pdf',
      badge: 'Declaration',
      description: 'Statutory declaration format for investors who explicitly choose not to nominate anyone in their mutual fund folio. Mandated under SEBI guidelines to confirm voluntary opt-out of nomination.',
      requiredDocs: ['Signed declaration with PAN and Folio identification'],
      applicableTo: 'Investors opting out of nominee appointment'
    },
    {
      id: 'multiple-bank-account-registration',
      title: 'Multiple Bank Account Registration Form',
      category: 'nomination-banking',
      categoryLabel: 'Nomination & Banking',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI Official Portal',
      url: 'https://portal.amfiindia.com/spages/AMFI%20-%20Multiple%20Bank%20Account%20Registration%20Form.pdf',
      badge: 'Banking & Payouts',
      description: 'Allows mutual fund investors to link and verify up to 5 bank accounts (up to 10 for non-individuals) in one mutual fund folio. Allows seamless toggling of default payout accounts for redemption and IDCW dividend credits.',
      requiredDocs: ['Original cancelled cheque with investor name pre-printed for each new bank', 'Bank passbook copy or latest 3-month statement stamped by bank branch'],
      applicableTo: 'Investors wanting multiple payout accounts or updating default bank'
    },
    {
      id: 'mfd-change-of-details',
      title: 'Form for MF Distributors: Change of Details',
      category: 'distributor',
      categoryLabel: 'Distributor Forms',
      format: 'PDF',
      fileType: 'application/pdf',
      source: 'AMFI Official Portal',
      url: 'https://www.amfiindia.com/Themes/Theme1/downloads/Form_for_MF_disributors_for_change_of_details.pdf',
      badge: 'For ARN Holders',
      description: 'Official AMFI application form for registered Mutual Fund Distributors (ARN / EUIN card holders) to update their business address, registered contact mobile number, email ID, or brokerage payout bank details with AMFI.',
      requiredDocs: ['Self-attested ARN card copy', 'Proof of new address / cancelled cheque for bank modification'],
      applicableTo: 'AMFI Registered Mutual Fund Distributors (ARN / Corporate / Individual)'
    },
    {
      id: 'amfi-nav-download',
      title: 'AMFI Net Asset Value (NAV) Data Download',
      category: 'data-feed',
      categoryLabel: 'Market Data & NAV',
      format: 'Live Portal / Feed',
      fileType: 'text/plain or CSV',
      source: 'AMFI Live NAV Engine',
      url: 'https://www.amfiindia.com/net-asset-value/nav-download',
      badge: 'Live Data Engine',
      description: 'Direct access to AMFI’s central Net Asset Value (NAV) repository. Download historical daily NAV feeds across all open-ended, closed-ended, and interval mutual fund schemes in text and CSV formats for portfolio analysis.',
      requiredDocs: ['No documents required - open public regulatory data feed'],
      applicableTo: 'Investors, Researchers, Analysts, Fintech Developers'
    },
    {
      id: 'amfi-scheme-data-download',
      title: 'Mutual Fund Scheme Master Data Download',
      category: 'data-feed',
      categoryLabel: 'Market Data & NAV',
      format: 'Portal / Data Export',
      fileType: 'text/csv / excel',
      source: 'AMFI Scheme Portal',
      url: 'https://portal.amfiindia.com/DownloadSchemeData_Po.aspx?mf=0',
      badge: 'Scheme Master',
      description: 'Official master download feed containing details of every active mutual fund scheme in India: ISIN codes, scheme codes, fund house name, scheme type, plan options (Growth / IDCW), and benchmark index.',
      requiredDocs: ['No documents required - open public master list'],
      applicableTo: 'Distributors, Investors, Tech Platforms'
    },
    {
      id: 'mutual-funds-sahi-hai-assets',
      title: 'Mutual Funds Sahi Hai – Logo Files & Guidelines',
      category: 'education',
      categoryLabel: 'Investor Education',
      format: 'ZIP Package',
      fileType: 'application/zip',
      source: 'AMFI Official Asset Kit',
      url: 'https://www.amfiindia.com/Themes/Theme1/downloads/MUTUAL_FUND_SAHI_HAI_PAGE_TURNER.zip',
      badge: 'Official Brand Kit',
      description: 'Complete high-resolution vector and raster branding assets of India’s landmark ‘Mutual Funds Sahi Hai’ investor awareness campaign. Contains EPS, PNG, and AI artwork alongside official usage and co-branding guidelines.',
      requiredDocs: ['Usage subject to AMFI / SEBI trademark and branding compliance'],
      applicableTo: 'Media, Financial Educators, Authorized Distributors'
    },
    {
      id: 'investor-awareness-presentation',
      title: 'Investor Awareness Program (IAP) Presentation',
      category: 'education',
      categoryLabel: 'Investor Education',
      format: 'PDF Presentation',
      fileType: 'application/pdf',
      source: 'AMFI IAP Division',
      url: 'https://www.amfiindia.com/Themes/Theme1/downloads/InvestorsAwarenessProgrampresentation.pdf',
      badge: 'Educational Deck',
      description: 'Official presentation slide deck designed by AMFI for seminars, college sessions, and corporate investor education workshops. Covers the power of compounding, beat inflation, debt vs equity, and navigating market cycles.',
      requiredDocs: ['Free educational resource'],
      applicableTo: 'New investors, First-time SIP starters, College students & Corporate staff'
    },
    {
      id: 'mutual-funds-made-simple-booklet',
      title: 'Mutual Funds Made Simple: Pocket Guide to Investing',
      category: 'education',
      categoryLabel: 'Investor Education',
      format: 'PDF Booklet',
      fileType: 'application/pdf',
      source: 'AMFI Investor Education Initiative',
      url: 'https://www.amfiindia.com/uploads/AMFI_Understanding_Mutual_Funds_IAP_Booklet_Final_Website_version_860a5b77aa.pdf',
      badge: 'Handbook & Guide',
      description: 'Comprehensive, plain-English handbook published by AMFI. Learn the fundamentals of Systematic Investment Plans (SIPs), asset allocation, reading a factsheet, taxation of mutual funds, and avoiding common investing mistakes.',
      requiredDocs: ['Free digital handbook - download and read on phone or laptop'],
      applicableTo: 'All mutual fund investors looking to understand portfolio building'
    }
  ];

  // Filtered Downloads based on search term & category
  const filteredDownloads = useMemo(() => {
    return downloadsData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.format.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const categories = [
    { id: 'all', label: 'All Downloads', count: downloadsData.length },
    { id: 'kyc', label: 'KYC Forms', count: downloadsData.filter(d => d.category === 'kyc').length },
    { id: 'nomination-banking', label: 'Nomination & Banking', count: downloadsData.filter(d => d.category === 'nomination-banking').length },
    { id: 'data-feed', label: 'Market Data & NAV', count: downloadsData.filter(d => d.category === 'data-feed').length },
    { id: 'education', label: 'Education & Brand', count: downloadsData.filter(d => d.category === 'education').length },
    { id: 'distributor', label: 'Distributor Forms', count: downloadsData.filter(d => d.category === 'distributor').length },
  ];

  const faqs = [
    {
      q: 'Which KYC form do I need as a first-time mutual fund investor?',
      a: 'If you are an individual Indian resident or NRI investing for the first time, download the "CKYC & KRA Form for Individuals". You will need a self-attested copy of your PAN card, Aadhaar card (or other valid address proof), and a recent passport-size photograph. Once registered with any SEBI-registered KRA (such as CAMS, CVL, or NDML), you do not need to repeat KYC with other mutual fund houses.'
    },
    {
      q: 'Is adding a nominee mandatory for all mutual fund folios?',
      a: 'Yes, under SEBI guidelines, all individual mutual fund unit holders must either appoint a nominee or submit a formal "Nomination Opt-Out Declaration Form". In the absence of a nominee or opt-out declaration, folios face freezing for debits and redemptions. You can register up to 3 nominees with custom percentage allocations using the official AMFI Nomination Form on this page.'
    },
    {
      q: 'How do I submit these physical forms after downloading?',
      a: 'After downloading and printing the form, fill in the details in blue/black ink, sign, and attach self-attested supporting documents (such as cancelled cheque, PAN copy, or Aadhaar). You can submit the physical forms at any official CAMS or KFintech investor service centre, or bring them to Investrow’s registered office in Dhanbad (Sundarpur Basti, Jealgora, Dhanbad, Jharkhand, 828110) where our AMFI-certified team (ARN-194720) will verify and process them on your behalf at ₹0 fee.'
    },
    {
      q: 'Can Investrow help me fill out and verify these forms online?',
      a: 'Absolutely! If you prefer 100% paperless assistance or need help with any field on the form, you can click "Need Help With This Form" or contact us via WhatsApp at +91 91020 70777. Our AMFI-certified team will guide you step-by-step at zero charge.'
    },
    {
      q: 'What is the purpose of the Multiple Bank Account Registration Form?',
      a: 'The Multiple Bank Account Registration Form allows you to register up to 5 verified bank accounts in your mutual fund folios. You can designate one bank as the "Default" for redemption credits and dividend payouts, and switch between registered accounts anytime without submitting fresh cancelled cheques each time you redeem.'
    }
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* Hero Section */}
      <section style={{
        padding: 'clamp(120px, 14vw, 160px) 0 48px',
        background: 'linear-gradient(170deg, #0A1628 0%, #0F1E36 50%, #08111F 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow Effects */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 106, 19, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
            <Link href="/" style={{ color: '#38BDF8', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#CBD5E1', fontWeight: 600 }}>AMFI Forms & Regulatory Downloads</span>
          </nav>

          <div style={{ maxWidth: '820px' }}>
            {/* Top Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(0, 138, 216, 0.15)',
              border: '1px solid rgba(0, 138, 216, 0.35)',
              color: '#38BDF8',
              fontSize: '12.5px',
              fontWeight: 700,
              marginBottom: '20px'
            }}>
              <ShieldCheck size={16} />
              <span>Official AMFI & SEBI Regulatory Document Repository</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '18px',
              color: '#FFFFFF'
            }}>
              Official AMFI Mutual Fund Forms, KYC & Regulatory Downloads
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.65,
              marginBottom: '32px'
            }}>
              Download the latest verified Central KYC (CKYC) forms, SEBI Nomination formats, Multiple Bank Account mandates, daily NAV feeds, and investor education handbooks directly from the Association of Mutual Funds in India (AMFI). All links are authentic, direct official AMFI downloads maintained by Investrow Financial Services (AMFI ARN-194720).
            </p>

            {/* Quick Live Search Bar */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.25)',
              maxWidth: '640px'
            }}>
              <div style={{ paddingLeft: '14px', color: '#64748B', display: 'flex', alignItems: 'center' }}>
                <Search size={20} />
              </div>
              <input 
                type="text"
                placeholder="Search forms (e.g. CKYC, Nomination, Bank, NAV, Sahi Hai)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  color: '#0A1628',
                  padding: '10px 0',
                  background: 'transparent'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{
                    background: '#F1F5F9',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '5px 10px',
                    fontSize: '12px',
                    color: '#64748B',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '48px 0 80px', flex: 1 }}>
        <div className="container">

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '36px',
            scrollbarWidth: 'none'
          }}>
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    border: isActive ? '1px solid #008AD8' : '1px solid #E2E8F0',
                    background: isActive ? '#008AD8' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 138, 216, 0.25)' : '0 1px 3px rgba(0,0,0,0.02)'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    fontSize: '11px',
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : '#F1F5F9',
                    color: isActive ? '#FFFFFF' : '#64748B'
                  }}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            fontSize: '14px',
            color: '#64748B'
          }}>
            <div>
              Showing <strong>{filteredDownloads.length}</strong> official regulatory documents
              {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}
            </div>
            <div style={{ fontSize: '12.5px', color: '#059669', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <CheckCircle2 size={15} /> All links verified against official AMFI portals
            </div>
          </div>

          {/* Downloads Grid */}
          {filteredDownloads.length === 0 ? (
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '48px 24px',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}>
              <FileText size={48} style={{ color: '#94A3B8', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0A1628', marginBottom: '8px' }}>
                No forms found matching your search
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', maxWidth: '420px', margin: '0 auto 20px' }}>
                Try searching for keywords like "KYC", "Nomination", "Bank", "NAV", or clear your search to see all documents.
              </p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="btn-primary"
                style={{ fontSize: '13px', padding: '9px 18px' }}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '24px'
            }}>
              {filteredDownloads.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(10, 22, 40, 0.03)',
                    transition: 'all 0.25s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(10, 22, 40, 0.08)';
                    e.currentTarget.style.borderColor = '#BAE6FD';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 22, 40, 0.03)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div>
                    {/* Header Row: Category & Format Badges */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '14px' }}>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: '#F1F5F9',
                        color: '#475569'
                      }}>
                        {item.categoryLabel}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {item.badge && (
                          <span style={{
                            fontSize: '10.5px',
                            fontWeight: 800,
                            padding: '3px 8px',
                            borderRadius: '9999px',
                            background: item.badge === 'Most Essential' ? '#EFF6FF' : item.badge === 'Mandatory by SEBI' ? '#FEF2F2' : '#F0FDF4',
                            color: item.badge === 'Most Essential' ? '#0284C7' : item.badge === 'Mandatory by SEBI' ? '#DC2626' : '#16A34A',
                            border: `1px solid ${item.badge === 'Most Essential' ? '#BAE6FD' : item.badge === 'Mandatory by SEBI' ? '#FECACA' : '#BBF7D0'}`
                          }}>
                            {item.badge}
                          </span>
                        )}

                        <span style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: item.format.includes('PDF') ? '#FEE2E2' : item.format.includes('ZIP') ? '#FEF3C7' : '#E0F2FE',
                          color: item.format.includes('PDF') ? '#B91C1C' : item.format.includes('ZIP') ? '#B45309' : '#0369A1'
                        }}>
                          {item.format}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0A1628',
                      lineHeight: 1.35,
                      marginBottom: '10px'
                    }}>
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p style={{
                      fontSize: '13px',
                      color: '#64748B',
                      lineHeight: 1.6,
                      marginBottom: '16px'
                    }}>
                      {item.description}
                    </p>

                    {/* Required Documents Checklist Callout */}
                    {item.requiredDocs && item.requiredDocs.length > 0 && (
                      <div style={{
                        background: '#F8FAFC',
                        borderRadius: '10px',
                        padding: '12px 14px',
                        marginBottom: '18px',
                        border: '1px solid #E2E8F0',
                        fontSize: '12px'
                      }}>
                        <div style={{ fontWeight: 700, color: '#334155', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Info size={14} style={{ color: '#008AD8' }} /> Documents Required to Attach:
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '18px', color: '#64748B', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {item.requiredDocs.map((doc, idx) => (
                            <li key={idx}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Applicable To */}
                    {item.applicableTo && (
                      <div style={{ fontSize: '11.5px', color: '#94A3B8', marginBottom: '20px' }}>
                        <strong>Target Audience:</strong> {item.applicableTo}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons Footer */}
                  <div style={{
                    paddingTop: '16px',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {/* Primary Download / Open Button */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.format.includes('PDF') ? true : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #008AD8 0%, #006FB0 100%)',
                        color: '#FFFFFF',
                        padding: '11px 16px',
                        borderRadius: '10px',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        boxShadow: '0 4px 14px rgba(0, 138, 216, 0.25)',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {item.format.includes('Portal') ? (
                        <>
                          <ExternalLink size={16} /> Open Official AMFI Portal
                        </>
                      ) : (
                        <>
                          <Download size={16} /> Download Official Form ({item.format})
                        </>
                      )}
                    </a>

                    {/* Secondary Row: Copy Link & WhatsApp Help */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => handleCopyLink(item.id, item.url)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: '#F1F5F9',
                          border: '1px solid #E2E8F0',
                          padding: '8px 10px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: copiedId === item.id ? '#16A34A' : '#475569',
                          cursor: 'pointer'
                        }}
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check size={14} /> Link Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy Direct URL
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/919102070777?text=${encodeURIComponent(
                          `Hello Investrow, I need help filling out the official form: "${item.title}". Please guide me with the required documents and submission process.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          background: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.25)',
                          padding: '8px 10px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#15803D',
                          textDecoration: 'none'
                        }}
                      >
                        <MessageSquare size={14} /> Help Filling Form
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Submission Guidelines & Step-by-Step Walkthrough */}
          <div style={{
            marginTop: '64px',
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: '0 4px 24px rgba(10, 22, 40, 0.04)'
          }}>
            <div style={{ maxWidth: '780px', marginBottom: '32px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#008AD8' }}>
                Investor Service Protocol
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 800, color: '#0A1628', marginTop: '6px', marginBottom: '12px' }}>
                How to Submit Your Mutual Fund Forms Successfully
              </h2>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: 1.6 }}>
                Follow these 4 verified steps to ensure your mutual fund KYC, nomination, or bank mandate forms are processed smoothly by RTAs without rejections:
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              {[
                {
                  step: '01',
                  title: 'Print & Fill Legibly',
                  desc: 'Download the PDF and print clearly. Fill details in CAPITAL LETTERS using blue or black ink. Ensure your PAN and email match across all records.'
                },
                {
                  step: '02',
                  title: 'Self-Attest All Attachments',
                  desc: 'Sign across every photocopy attached (PAN card copy, Aadhaar card copy, cancelled cheque). Ensure the signature matches your official PAN signature.'
                },
                {
                  step: '03',
                  title: 'Provide Pre-Printed Cheque',
                  desc: 'For bank additions or KYC, attach an original cancelled cheque with your name pre-printed by the bank. If name is not printed, attach latest bank passbook.'
                },
                {
                  step: '04',
                  title: 'Submit Offline or Online',
                  desc: 'Submit at any CAMS or KFintech branch pan-India, or visit Investrow Registered Office in Dhanbad for 100% free submission and digital verification.'
                }
              ].map((stepItem, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 900,
                    color: '#008AD8',
                    lineHeight: 1,
                    marginBottom: '10px'
                  }}>
                    {stepItem.step}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>
                    {stepItem.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                    {stepItem.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Assistance Banner inside Guidelines */}
            <div style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
              borderRadius: '14px',
              padding: '24px 28px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '18px'
            }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={20} style={{ color: '#38BDF8' }} />
                  <span>Free AMFI Certified Form Verification Desk (ARN-194720)</span>
                </div>
                <div style={{ fontSize: '13px', color: '#94A3B8' }}>
                  Our senior distribution desk reviews your filled forms before submission to guarantee zero rejection by RTAs.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a
                  href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20have%20filled%20my%20AMFI%20mutual%20fund%20form.%20Please%20verify%20my%20documents%20before%20submission."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#25D366',
                    color: '#FFFFFF',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={16} /> WhatsApp Document Check
                </a>
                <button
                  type="button"
                  onClick={() => handleOpenConsultModal('Form Filling Support')}
                  className="btn-orange"
                  style={{ padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}
                >
                  Book 1-on-1 Assistance
                </button>
              </div>
            </div>

          </div>

          {/* Frequently Asked Questions */}
          <div style={{ marginTop: '64px' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#008AD8' }}>
                Got Questions?
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, color: '#0A1628', marginTop: '6px', marginBottom: '10px' }}>
                Frequently Asked Questions on AMFI Forms
              </h2>
              <p style={{ fontSize: '14.5px', color: '#64748B' }}>
                Answers to common queries regarding KYC documentation, nominee updates, and mutual fund folio services.
              </p>
            </div>

            <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 20px',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628' }}>
                        {faq.q}
                      </span>
                      <ChevronDown 
                        size={18} 
                        style={{ 
                          color: '#64748B', 
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0
                        }} 
                      />
                    </button>
                    {isOpen && (
                      <div style={{
                        padding: '0 20px 20px',
                        fontSize: '14px',
                        color: '#64748B',
                        lineHeight: 1.65,
                        borderTop: '1px solid #F1F5F9',
                        paddingTop: '14px'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Floating Groq AI Wealth Advisor */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Sticky Mobile Actions Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Mobile Callback - Downloads')} />
    </div>
  );
}
