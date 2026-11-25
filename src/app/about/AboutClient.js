'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { awardsData } from '@/data/awardsData';
import { leadershipTeam } from '@/data/teamData';
import BrandTagline from '@/components/BrandTagline';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Users, 
  Target, 
  Compass, 
  HeartHandshake, 
  Lock, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  KeyRound, 
  Building2, 
  ExternalLink, 
  FileText, 
  Layers, 
  PieChart, 
  Check, 
  Briefcase, 
  Scale, 
  Search, 
  X, 
  Quote, 
  BadgeCheck,
  Calendar,
  Zap
} from 'lucide-react';

export default function AboutClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('About Us Consultation');
  const [activeAwardModal, setActiveAwardModal] = useState(null);

  const handleOpenConsultModal = (service = 'About Page Consultation') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const navSections = [
    { id: 'about-investrow', label: 'About Investrow', num: '01' },
    { id: 'mission-vision', label: 'Mission & Vision', num: '02' },
    { id: 'why-investrow', label: 'Why Investrow?', num: '03' },
    { id: 'our-team', label: 'Our Team', num: '04' },
    { id: 'amfi-registration', label: 'AMFI Registration', num: '05' },
    { id: 'our-approach', label: 'Our Approach', num: '06' }
  ];

  const milestones = [
    {
      value: '₹250 Cr+',
      label: 'Assets Under Advisory',
      sub: 'Managed across 3,000+ client families',
      color: '#FF6A13',
      bgGlow: 'rgba(255, 106, 19, 0.1)',
      icon: TrendingUp
    },
    {
      value: '3,000+',
      label: 'Client Families',
      sub: 'Across Jharkhand, Pan-India & NRIs',
      color: '#0EA5E9',
      bgGlow: 'rgba(14, 165, 233, 0.1)',
      icon: Users
    },
    {
      value: '23+',
      label: 'Years Cumulative Experience',
      sub: 'Leadership advisory experience',
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.1)',
      icon: Clock
    },
    {
      value: '22+',
      label: 'Industry Honors & Citations',
      sub: 'Recognized by India’s Premier AMCs',
      color: '#D4A574',
      bgGlow: 'rgba(212, 165, 116, 0.12)',
      icon: Award
    }
  ];

  const whyChooseReasons = [
    {
      num: '01',
      title: 'Zero Upfront Advisory Fee',
      desc: 'Get comprehensive financial goal planning, risk profiling, and portfolio health checks with zero upfront retainer fees. Fiduciary care with no hidden consultation costs.',
      icon: BadgeCheck,
      color: '#008AD8',
      bg: 'rgba(0, 138, 216, 0.08)'
    },
    {
      num: '02',
      title: '100% Unbiased Scheme Curation',
      desc: 'Independent evaluation across 2,500+ mutual fund schemes from 40+ SEBI-registered AMCs. We recommend schemes purely based on rolling returns, consistency, and risk metrics.',
      icon: Scale,
      color: '#FF6A13',
      bg: 'rgba(255, 106, 19, 0.08)'
    },
    {
      num: '03',
      title: 'Dedicated Human Advisor + AI',
      desc: 'Direct WhatsApp and phone access to your assigned NISM/AMFI-certified wealth specialist, supported by our intelligent 24/7 AI Wealth Advisor for real-time portfolio insights.',
      icon: Users,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.08)'
    },
    {
      num: '04',
      title: 'Direct Bank-to-AMC Custody',
      desc: 'Transactions execute directly through BSE StAR MF (Member Code: 55533). Investrow never holds your funds; payments flow directly between your bank and SEBI-regulated fund houses.',
      icon: Lock,
      color: '#008AD8',
      bg: 'rgba(0, 138, 216, 0.08)'
    },
    {
      num: '05',
      title: 'Goal-Engineered Architecture',
      desc: 'Every investment is linked to a tangible milestone—Child Higher Education, Retirement Corpus, Dream Home, or Monthly SWP Income—with clear timelines and risk horizons.',
      icon: Target,
      color: '#FF6A13',
      bg: 'rgba(255, 106, 19, 0.08)'
    },
    {
      num: '06',
      title: 'Quarterly Rebalancing & Tax Harvesting',
      desc: 'Proactive portfolio health audits, asset allocation realignments, and annual LTCG tax harvesting (utilizing the ₹1.25L exemption under Sec 112A) to maximize net returns.',
      icon: TrendingUp,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.08)'
    }
  ];

  const amfiCredentials = [
    { label: 'Registered Entity Name', value: 'Investrow Financial Services Private Limited', highlight: false },
    { label: 'AMFI Registration Number (ARN)', value: 'ARN-194720', highlight: true },
    { label: 'Registration Category', value: 'Mutual Fund Distributor (Corporate)', highlight: false },
    { label: 'Current Registration Status', value: 'Active & In Good Standing (Renewed to 2027)', highlight: true },
    { label: 'Stock Exchange Membership', value: 'BSE StAR MF (Member Code: 55533)', highlight: false },
    { label: 'Corporate Identity Number (CIN)', value: 'U67190JH2021PTC016813', highlight: false },
    { label: 'Registered Corporate Office', value: 'Sundarpur Basti, Jealgora, Dhanbad, Jharkhand, India, 828110', highlight: false },
    { label: 'Founder & Principal Officer', value: 'Surendra Prasad (Director)', highlight: false },
    { label: 'Statutory Regulators', value: 'SEBI & AMFI (Association of Mutual Funds in India)', highlight: false }
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Discovery & Risk Profiling',
      subtitle: 'Understanding Your Financial DNA',
      desc: 'We analyze your current financial standing, liquidity buffers, monthly cash flows, time horizons, and emotional risk appetite before suggesting any investment vehicle.',
      icon: Search,
      color: '#008AD8',
      features: ['Cash-flow & contingency analysis', 'Risk tolerance psychometric evaluation', 'Existing portfolio diagnostic']
    },
    {
      step: '02',
      title: 'Goal-First Asset Allocation',
      subtitle: 'Designing the Foundation',
      desc: 'Based on Modern Portfolio Theory, asset allocation determines over 90% of return variance. We calibrate Equity, Hybrid, and Debt buckets to fit your target goals.',
      icon: PieChart,
      color: '#FF6A13',
      features: ['Short-term vs long-term bucket segregation', 'Inflation-adjusted target valuation', 'Capital preservation buffers']
    },
    {
      step: '03',
      title: 'Multi-Factor Scheme Screening',
      subtitle: 'Quantitative & Qualitative Curation',
      desc: 'We filter 2,500+ mutual fund schemes down to top-quartile performers using quantitative metrics including rolling returns, Sharpe ratios, downside capture, and fund manager tenure.',
      icon: Layers,
      color: '#10B981',
      features: ['Rolling return consistency (3Y, 5Y, 7Y)', 'Alpha generation & Sortino ratios', 'Fund manager tenure & pedigree']
    },
    {
      step: '04',
      title: 'Disciplined Review & Tax Harvesting',
      subtitle: 'Sustained Long-Term Stewardship',
      desc: 'Markets move and asset weights drift. We conduct structured quarterly audits, rebalance back to target weights, and systematically harvest annual LTCG tax exemptions.',
      icon: ShieldCheck,
      color: '#008AD8',
      features: ['Quarterly portfolio rebalancing', 'Section 112A LTCG tax harvesting', 'Ongoing goal milestone tracking']
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      {/* Header */}
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* SECTION 1: ABOUT INVESTROW (Hero & Foundation) */}
      <section 
        id="about-investrow"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #060E1A 100%)',
          color: '#FFFFFF',
          padding: '64px 0 96px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient lighting glows */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '5%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 106, 19, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              listStyle: 'none',
              fontSize: '13px',
              color: '#94A3B8'
            }}>
              <li>
                <Link 
                  href="/" 
                  style={{ 
                    color: '#94A3B8', 
                    transition: 'color 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={14} style={{ color: '#475569' }} />
              </li>
              <li style={{ color: '#F8FAFC', fontWeight: 600 }} aria-current="page">
                About Us
              </li>
            </ol>
          </nav>

          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '22px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38BDF8',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              <ShieldCheck size={14} /> AMFI Registered MFD (ARN-194720)
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#CBD5E1',
              fontSize: '12px',
              fontWeight: 600
            }}>
              BSE Member Code: 55533 • Dhanbad, Jharkhand
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center'
          }} className="about-hero-grid">
            {/* Left Column: Story & Narrative */}
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FF8A3D',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px'
              }}>
                1. About Investrow
              </div>

              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '18px',
                letterSpacing: '-0.5px'
              }}>
                Empowering Indian Families with <span style={{
                  background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Disciplined Wealth Compounding</span>
              </h1>

              <div style={{
                fontSize: '18px',
                color: '#38BDF8',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                Investrow Financial Services Pvt. Ltd. (CIN: U67190JH2021PTC016813)
              </div>

              <div style={{ marginBottom: '22px' }}>
                <BrandTagline size="md" theme="dark" />
              </div>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#CBD5E1',
                marginBottom: '16px'
              }}>
                <strong>Investrow Financial Services Pvt. Ltd.</strong> was founded with a singular commitment: to make institutional-grade mutual fund advisory and financial planning transparent, disciplined, and accessible to everyday Indian families and businesses.
              </p>

              <p style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#94A3B8',
                marginBottom: '28px'
              }}>
                Headquartered in Dhanbad (Jharkhand) and serving clients across India and abroad, Investrow manages over <strong>₹250+ Crore AUM</strong> for more than <strong>3,000+ satisfied client families</strong>. Backed by 23+ years of combined industry expertise, our certified advisors bridge tier-2/3 wealth aspirations with India’s long-term economic growth story.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleOpenConsultModal('About Investrow Consultation')}
                  className="btn-orange"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  Start Investing With Us <ArrowRight size={16} />
                </button>
                <a
                  href="tel:+919102070777"
                  className="btn-outline"
                  style={{
                    padding: '13px 22px',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Phone size={15} /> +91 91020 70777
                </a>
              </div>
            </div>

            {/* Right Column: Institutional Identity Card */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              background: 'linear-gradient(135deg, rgba(15, 30, 54, 0.95) 0%, rgba(10, 22, 40, 0.98) 100%)',
              backdropFilter: 'blur(16px)',
              padding: '32px 28px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  color: '#38BDF8',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  <Building2 size={13} /> Corporate Registry
                </span>
                <span style={{ fontSize: '11px', color: '#4ADE80', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }}></span> Active AMFI Entity
                </span>
              </div>

              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
                  Corporate Entity
                </div>
                <div style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF' }}>
                  Investrow Financial Services Pvt. Ltd.
                </div>
                <div style={{ fontSize: '12px', color: '#CBD5E1', marginTop: '4px' }}>
                  CIN: U67190JH2021PTC016813 • Dhanbad, Jharkhand
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>AMFI License</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#38BDF8' }}>ARN-194720</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>BSE Member Code</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#FF8A3D' }}>55533</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ADE80', flexShrink: 0 }} />
                  <span>Direct custodial settlement via BSE StAR MF</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ADE80', flexShrink: 0 }} />
                  <span>Access to 40+ SEBI registered Mutual Fund AMCs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ADE80', flexShrink: 0 }} />
                  <span>Strict fiduciary compliance with zero upfront fees</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ADE80', flexShrink: 0 }} />
                  <span>Dedicated NISM certified advisory desk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SECTION JUMP BAR */}
      <nav 
        aria-label="About Page Table of Contents"
        style={{
          background: '#0F1E36',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'sticky',
          top: '100px',
          zIndex: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
        }}
      >
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            padding: '12px 0',
            scrollbarWidth: 'none'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginRight: '8px', whiteSpace: 'nowrap' }}>
              On This Page:
            </span>
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#E2E8F0',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 106, 19, 0.15)';
                  e.currentTarget.style.borderColor = 'var(--accent-orange)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#E2E8F0';
                }}
              >
                <span style={{ color: '#FF8A3D', fontWeight: 700, fontSize: '11px' }}>{sec.num}.</span>
                {sec.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MILESTONE COUNTERS BANNER */}
      <section style={{
        marginTop: '-24px',
        position: 'relative',
        zIndex: 20,
        marginBottom: '40px'
      }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '32px 28px',
            boxShadow: '0 20px 50px rgba(10, 22, 40, 0.12)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '28px'
          }}>
            {milestones.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderRight: idx < milestones.length - 1 ? '1px solid #F1F5F9' : 'none',
                  paddingRight: '14px'
                }} className="milestone-item">
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    background: item.bgGlow,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: 'var(--navy-deep)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.5px'
                    }}>
                      {item.value}
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '3px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR MISSION & VISION */}
      <section id="mission-vision" style={{ padding: '72px 0 88px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '52px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 106, 19, 0.08)',
              color: 'var(--accent-orange)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>
              <Compass size={14} /> 2. Our Mission & Vision
            </div>

            <div style={{ marginBottom: '16px' }}>
              <BrandTagline size="sm" theme="light" />
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Guided by Purpose, Grounded in Ethics
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}>
              Every portfolio decision we architect is anchored in disciplined compounding, absolute transparency, and our fiduciary duty to prioritize client interests above all commercial targets.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {/* Mission Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '36px 30px',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              boxShadow: '0 10px 30px rgba(0, 138, 216, 0.06)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(14, 165, 233, 0.1)',
                color: '#0EA5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Target size={28} />
              </div>

              <div style={{ fontSize: '11px', fontWeight: 800, color: '#0EA5E9', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                PURPOSE & DIRECTION
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Our Mission
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#475569', marginBottom: '22px', flex: 1 }}>
                Our mission is to make investing simple, transparent, and accessible for everyone. We aim to help individuals and families achieve their financial dreams through disciplined investing, objective scheme selection, and continuous guidance.
              </p>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#0EA5E9', flexShrink: 0, marginTop: '2px' }} />
                  <span>Democratizing wealth advisory across Tier-2, Tier-3 and non-metro India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#0EA5E9', flexShrink: 0, marginTop: '2px' }} />
                  <span>Zero upfront advisory fee with complete commission transparency</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#0EA5E9', flexShrink: 0, marginTop: '2px' }} />
                  <span>Promoting regular SIP habits over speculative short-term trading</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '36px 30px',
              border: '1px solid rgba(255, 106, 19, 0.2)',
              boxShadow: '0 10px 30px rgba(255, 106, 19, 0.06)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 106, 19, 0.1)',
                color: '#FF6A13',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Compass size={28} />
              </div>

              <div style={{ fontSize: '11px', fontWeight: 800, color: '#FF6A13', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                LONG-TERM HORIZON
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Our Vision
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#475569', marginBottom: '22px', flex: 1 }}>
                Our vision is to become India’s most trusted and client-first financial distribution partner by fostering multi-generational relationships, setting gold standards in compliance, and supporting our clients at every step of their compounding journey.
              </p>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#FF6A13', flexShrink: 0, marginTop: '2px' }} />
                  <span>Guiding 10,000+ Indian families to financial freedom by 2030</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#FF6A13', flexShrink: 0, marginTop: '2px' }} />
                  <span>Setting the national benchmark for ethical, client-first wealth distribution</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#FF6A13', flexShrink: 0, marginTop: '2px' }} />
                  <span>Bridging human advisory warmth with cutting-edge digital execution</span>
                </div>
              </div>
            </div>

            {/* Core Values Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '36px 30px',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.06)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <HeartHandshake size={28} />
              </div>

              <div style={{ fontSize: '11px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                FOUNDATIONAL ETHOS
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Core Values
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#475569', marginBottom: '22px', flex: 1 }}>
                Our company is driven by core values like trust, transparency, and client-centric stewardship. We believe in honest advice, long-term relationships, and continuously supporting our clients through all market seasons.
              </p>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Fiduciary Integrity:</strong> Client interests always precede sales targets</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Disciplined Consistency:</strong> Time in the market beats timing the market</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                  <Check size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Accountability:</strong> Clear quarterly reporting & direct advisor accessibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY INVESTROW? */}
      <section id="why-investrow" style={{ padding: '88px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 138, 216, 0.08)',
              color: 'var(--primary-blue)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              <Sparkles size={14} /> 3. Why Investrow?
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Why 3,000+ Families Choose Investrow
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}>
              We combine institutional research, direct exchange execution, and personal advisory care to build portfolios that compound wealth safely and predictably.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '28px',
            marginBottom: '48px'
          }}>
            {whyChooseReasons.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px 28px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 16px rgba(10, 22, 40, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(10, 22, 40, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 22, 40, 0.04)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={22} />
                    </div>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#94A3B8'
                    }}>
                      {item.num}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '12px', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-secondary)', flex: 1 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Callout Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 138, 216, 0.05) 0%, rgba(255, 106, 19, 0.05) 100%)',
            border: '1px solid rgba(0, 138, 216, 0.18)',
            borderRadius: 'var(--radius-xl)',
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                Ready to Experience the Investrow Advantage?
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Book a confidential 1-on-1 portfolio audit with our certified mutual fund advisory team.
              </div>
            </div>

            <button
              onClick={() => handleOpenConsultModal('Why Investrow Consultation')}
              className="btn-orange"
              style={{ padding: '12px 26px', fontSize: '14px' }}
            >
              Book Free Advisory Call <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR TEAM */}
      <section id="our-team" style={{ padding: '88px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 138, 216, 0.08)',
              color: 'var(--primary-blue)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              <Users size={14} /> 4. Our Team & Leadership
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Executive Leadership & Stewardship
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}>
              Guided by experienced leadership and powered by an institutional team of 20+ certified specialists across Advisory, Research, Operations, Compliance, and Digital desks.
            </p>
          </div>

          {/* 3 Executive Leaders Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}>
            {leadershipTeam.map((leader) => (
              <div 
                key={leader.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 24px -6px rgba(10, 22, 40, 0.06)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(0, 138, 216, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(10, 22, 40, 0.06)';
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
                  padding: '24px 20px',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '110px',
                    height: '110px',
                    margin: '0 auto 14px',
                    borderRadius: '50%',
                    padding: '3px',
                    background: 'linear-gradient(135deg, #008AD8 0%, #FF6A13 100%)',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: '#FFFFFF'
                    }}>
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    {leader.name}
                  </h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#FF8A3D' }}>
                    {leader.role}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{
                    fontSize: '13.5px',
                    lineHeight: 1.65,
                    color: '#475569',
                    marginBottom: '16px',
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {leader.bio}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {leader.credentials.map((c, i) => (
                      <span key={i} style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--navy-deep)',
                        background: '#F1F5F9',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenConsultModal(`Consultation with ${leader.name} (${leader.role})`)}
                    className="btn-orange"
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      fontSize: '13px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    Request Meeting with {leader.name.split(' ')[0]} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 20+ Member Institutional Force Strip */}
          <div style={{
            background: 'linear-gradient(90deg, rgba(0, 138, 216, 0.06) 0%, rgba(255, 106, 19, 0.06) 100%)',
            border: '1px solid rgba(0, 138, 216, 0.2)',
            borderRadius: '16px',
            padding: '24px 28px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Users size={24} />
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '3px' }}>
                  Powered by 20+ Highly Qualified Financial Professionals
                </div>
                <div style={{ fontSize: '13.5px', color: '#64748B' }}>
                  Organized across 5 functional desks: Wealth Advisory, Research & Analytics, Client Operations & KYC, Regulatory Compliance, and Technology.
                </div>
              </div>
            </div>

            <Link
              href="/team"
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '13.5px', textDecoration: 'none' }}
            >
              Explore Full Team Desks <ArrowRight size={14} />
            </Link>
          </div>

          {/* Founder's / Leadership Advice Note */}
          <div style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 36px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '28px',
              color: 'rgba(255, 255, 255, 0.04)',
              pointerEvents: 'none'
            }}>
              <Quote size={110} />
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#FF8A3D',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '14px'
              }}>
                <Quote size={16} /> A Note From Our Leadership Desk
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.35,
                marginBottom: '24px',
                maxWidth: '850px'
              }}>
                “Advice to aspiring investors and families in their wealth creation journey:”
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginBottom: '28px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#38BDF8', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    1. Focus on Trust First, Not Just Sales
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#94A3B8' }}>
                    This is a relationship-driven industry where clients value honesty, consistency, and long-term support. True success is earned when clients feel completely secure in your guidance.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#FF8A3D', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    2. Cultivate Patience Across Cycles
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#94A3B8' }}>
                    Growth in this field takes time. Educating clients, guiding them properly, and helping them stay invested during market ups and downs is the key to lasting compounding.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#34D399', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    3. Keep Learning and Adapting
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#94A3B8' }}>
                    The financial industry is constantly evolving with new products, tax laws, and technology. Staying updated and improving knowledge gives clients a decisive advantage.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>Investrow Leadership & Advisory Team</div>
                  <div style={{ fontSize: '13px', color: '#94A3B8' }}>AMFI Registered Mutual Fund Distributor • ARN-194720</div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal('Leadership Note Consultation')}
                  className="btn-orange"
                  style={{ padding: '10px 22px', fontSize: '13.5px' }}
                >
                  Book Free Wealth Audit <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AMFI REGISTRATION DETAILS */}
      <section 
        id="amfi-registration" 
        style={{
          padding: '88px 0',
          background: '#FFFFFF',
          position: 'relative'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.08)',
              color: '#10B981',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              <ShieldCheck size={14} /> 5. AMFI Registration Details
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Official Regulatory Credentials & Disclosures
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}>
              Investrow Financial Services Pvt. Ltd. operates in full compliance with SEBI and AMFI guidelines. We hold verified registrations with major financial regulatory bodies in India.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '36px',
            alignItems: 'start',
            marginBottom: '48px'
          }} className="about-hero-grid">
            {/* Left: Official Credentials Table */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 30px rgba(10, 22, 40, 0.05)',
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={22} style={{ color: '#4ADE80' }} />
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                      Official AMFI & Corporate Details
                    </div>
                    <div style={{ fontSize: '12px', color: '#94A3B8' }}>
                      Verified under SEBI (Mutual Funds) Regulations
                    </div>
                  </div>
                </div>

                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  background: 'rgba(74, 222, 128, 0.15)',
                  color: '#4ADE80',
                  border: '1px solid rgba(74, 222, 128, 0.3)'
                }}>
                  ● Certified
                </span>
              </div>

              <div style={{ padding: '8px 0' }}>
                {amfiCredentials.map((cred, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 24px',
                      borderBottom: idx < amfiCredentials.length - 1 ? '1px solid #F1F5F9' : 'none',
                      background: cred.highlight ? 'rgba(0, 138, 216, 0.04)' : 'transparent'
                    }}
                  >
                    <span style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 500 }}>
                      {cred.label}
                    </span>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: cred.highlight ? 800 : 700,
                      color: cred.highlight ? 'var(--primary-blue)' : 'var(--navy-deep)',
                      textAlign: 'right'
                    }}>
                      {cred.value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '16px 24px',
                background: '#F8FAFC',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <span style={{ fontSize: '12px', color: '#64748B' }}>
                  Need to independently verify our ARN?
                </span>
                <a
                  href="https://www.amfiindia.com/locate-your-nearest-mutual-fund-distributor-wealth-advisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    textDecoration: 'none'
                  }}
                >
                  Verify on AMFI India Official Website <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Right: Regulatory Commitments & Safeguards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                background: '#F8FAFC',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 138, 216, 0.1)',
                    color: 'var(--primary-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Lock size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--navy-deep)' }}>
                      Zero Custodial Risk Guarantee
                    </h3>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Direct Exchange Routing</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#475569' }}>
                  Investrow never accepts investor money in its own bank account or holds client funds. All mutual fund investments are executed directly through the <strong>BSE StAR MF platform (Member Code: 55533)</strong>, transferring funds straight from your bank to SEBI-regulated fund houses.
                </p>
              </div>

              <div style={{
                background: '#F8FAFC',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 106, 19, 0.1)',
                    color: 'var(--accent-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--navy-deep)' }}>
                      SEBI Code of Conduct & EUIN
                    </h3>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Full Advisory Accountability</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#475569' }}>
                  We operate strictly under the AMFI Code of Conduct and SEBI (Mutual Funds) Regulations, 1996. Every client consultation and execution is tagged with authorized <strong>Employee Unique Identification Numbers (EUIN)</strong>, ensuring complete regulatory traceability.
                </p>
              </div>

              <div style={{
                background: '#F8FAFC',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Scale size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--navy-deep)' }}>
                      Transparent Commission Disclosure
                    </h3>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>In Accordance with SEBI Mandates</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#475569' }}>
                  In accordance with SEBI circular SEBI/IMD/CIR No.4/168230/09, Investrow discloses all commissions (trail commissions) received from asset management companies across various schemes to our investors upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH */}
      <section 
        id="our-approach" 
        style={{
          padding: '88px 0 96px',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 138, 216, 0.08)',
              color: 'var(--primary-blue)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              <Layers size={14} /> 6. Our Approach
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Our 4-Pillar Wealth Architecture
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}>
              A scientific, goal-first methodology built to protect capital, remove emotional errors, and compound wealth steadily through every market cycle.
            </p>
          </div>

          {/* 4 Pillars Flow Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {approachSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px 26px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 24px -4px rgba(10, 22, 40, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = step.color;
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(10, 22, 40, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(10, 22, 40, 0.04)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `${step.color}14`,
                      color: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={22} />
                    </div>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#94A3B8'
                    }}>
                      STAGE {step.step}
                    </span>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 800, color: step.color, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    {step.subtitle}
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '12px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#475569', marginBottom: '20px', flex: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {step.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#334155' }}>
                        <Check size={14} style={{ color: step.color, flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Investment Philosophy Callout */}
          <div style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 36px',
            color: '#FFFFFF',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#FF8A3D',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '10px'
              }}>
                <Zap size={14} /> The Investrow Guiding Rule
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.3 }}>
                “Time in the Market Compounds Fortunes; Attempting to Time the Market Destroys Them.”
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#CBD5E1' }}>
                We do not gamble on next week’s market swing. We construct enduring asset allocation plans that withstand market turbulence and ensure you achieve your family’s financial freedom.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Get Your Personalized Wealth Blueprint
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '18px' }}>
                Speak with Surendra Prasad or our certified advisory desk to map your life milestones to an optimal mutual fund portfolio.
              </p>
              <button
                onClick={() => handleOpenConsultModal('Approach Section Blueprint')}
                className="btn-orange"
                style={{ width: '100%', padding: '12px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                Claim Free Portfolio Blueprint <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION HIGHLIGHT STRIP */}
      <section style={{
        padding: '64px 0',
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#B45309',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '6px'
              }}>
                <Award size={14} style={{ color: '#D97706' }} /> Industry Recognition
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                Recognized by India’s Premier Asset Management Companies
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Honored with 22+ verified crystal trophies, framed citations, and SIP milestone awards by Kotak, Tata, Bajaj Finserv, UTI, ITI, Samco, and Axis Mutual Fund.
              </p>
            </div>

            <Link
              href="/awards"
              className="btn-outline"
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                color: 'var(--navy-deep)',
                borderColor: '#CBD5E1',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Award size={16} /> View Awards Gallery (22+ Honors) <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION STRIP */}
      <section style={{
        padding: '72px 0',
        background: 'linear-gradient(135deg, #0A1628 0%, #060E1A 100%)',
        color: '#FFFFFF',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 106, 19, 0.12) 0%, rgba(0, 138, 216, 0.12) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 36px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FF8A3D', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                Start Your Journey With Investrow
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                Experience True Fiduciary Wealth Advisory
              </h3>
              <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                Join over 3,000+ satisfied families across India compounding their wealth with complete peace of mind.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenConsultModal('About Bottom CTA')}
                className="btn-orange"
                style={{ padding: '13px 26px', fontSize: '14.5px' }}
              >
                Book Free Advisory Call <ArrowRight size={16} />
              </button>
              <a
                href="tel:+919102070777"
                className="btn-outline"
                style={{
                  padding: '13px 22px',
                  fontSize: '14.5px',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Phone size={15} /> +91 91020 70777
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating AI Advisor */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Sticky Mobile Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('About Mobile Callback')} />

      {/* Lightbox Zoom Modal for Awards */}
      {activeAwardModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(10, 22, 40, 0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveAwardModal(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveAwardModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(10, 22, 40, 0.8)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div style={{
              background: '#0D1B2A',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '480px',
              overflow: 'hidden'
            }}>
              <img
                src={activeAwardModal.image}
                alt={activeAwardModal.title}
                style={{
                  maxHeight: '440px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  background: 'rgba(0, 138, 216, 0.1)',
                  color: 'var(--primary-blue)',
                  fontWeight: 800,
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  {activeAwardModal.issuer}
                </span>
                <span style={{
                  background: '#FFF1EB',
                  color: 'var(--accent-orange)',
                  fontWeight: 700,
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  {activeAwardModal.year}
                </span>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '10px' }}>
                {activeAwardModal.title}
              </h2>

              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                {activeAwardModal.citation}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  href="/awards"
                  onClick={() => setActiveAwardModal(null)}
                  style={{
                    color: 'var(--primary-blue)',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }}
                >
                  View All 22+ Awards in Awards Gallery <ArrowRight size={13} />
                </Link>

                <button
                  onClick={() => {
                    setActiveAwardModal(null);
                    handleOpenConsultModal(`Consultation after viewing ${activeAwardModal.title}`);
                  }}
                  className="btn-orange"
                  style={{ padding: '10px 20px', fontSize: '13px' }}
                >
                  Book Free Consultation <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .milestone-item {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
