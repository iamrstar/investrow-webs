'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  PieChart, 
  Landmark, 
  Receipt, 
  RefreshCw, 
  DollarSign, 
  Wallet, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ZoomIn,
  X,
  CheckCircle2,
  Filter,
  BarChart3,
  Calendar,
  Lock,
  Compass
} from 'lucide-react';

const SERVICES = [
  {
    id: 'sip',
    category: 'growth',
    title: 'Systematic Investment Plan (SIP)',
    subtitle: 'Automated Monthly Compounding',
    image: '/images/services/sip-compounding.jpg',
    badge: 'Most Popular',
    badgeColor: '#FF6A13',
    badgeBg: 'rgba(255, 106, 19, 0.1)',
    highlight: 'Start from ₹500/Month',
    color: '#008AD8',
    description: 'Disciplined monthly investing that harnesses rupee-cost averaging to compound wealth over 1, 3, 5, and 10+ year milestones.',
    benefits: [
      'Rupee-cost averaging beats market volatility',
      'Step-Up SIP automatically grows with salary',
      'Direct debit into top-quartile mutual fund schemes'
    ],
    ctaText: 'Start SIP Roadmap'
  },
  {
    id: 'lumpsum',
    category: 'growth',
    title: 'Lumpsum & STP Investment Strategy',
    subtitle: 'Systematic Transfer Plan (STP)',
    image: '/images/services/lumpsum-stp.jpg',
    badge: 'Smart Deployment',
    badgeColor: '#008AD8',
    badgeBg: 'rgba(0, 138, 216, 0.1)',
    highlight: 'Zero Market-Timing Anxiety',
    color: '#FF6A13',
    description: 'Park one-time bonuses or capital in a safe liquid fund, transferring calibrated weekly tranches into equities to buy market dips.',
    benefits: [
      'Staggered entry via STP prevents top-of-market risk',
      'Earn liquid fund interest while waiting to deploy',
      'Automated rule-based transfers with zero hassle'
    ],
    ctaText: 'Plan Lumpsum STP'
  },
  {
    id: 'equity',
    category: 'growth',
    title: 'Equity Mutual Funds',
    subtitle: 'Multi-Cap & Flexi-Cap Alpha',
    image: '/images/services/equity-funds.jpg',
    badge: 'Wealth Creation',
    badgeColor: '#008AD8',
    badgeBg: 'rgba(0, 138, 216, 0.1)',
    highlight: '12-15%+ Historical CAGR',
    color: '#008AD8',
    description: "Beat inflation and participate in India's economic expansion through rigorously vetted Large Cap, Mid Cap, and Flexi Cap equity portfolios.",
    benefits: [
      'Diversified exposure across 50+ leading Indian companies',
      'Top-quartile active fund manager selection',
      'Ideal for long-term goals (5+ years horizon)'
    ],
    ctaText: 'Explore Equity Funds'
  },
  {
    id: 'elss',
    category: 'tax-income',
    title: 'Tax-Saving Mutual Funds (ELSS)',
    subtitle: 'Section 80C Tax Deduction',
    image: '/images/services/tax-saving-elss.jpg',
    badge: 'Save ₹46,800 Tax',
    badgeColor: '#FF6A13',
    badgeBg: 'rgba(255, 106, 19, 0.1)',
    highlight: 'Shortest 3-Year Lock-In',
    color: '#FF6A13',
    description: 'Save up to ₹46,800 in taxes under Section 80C with the shortest lock-in period among all tax-saving tools, coupled with high equity compounding.',
    benefits: [
      'Shortest 3-year lock-in vs 5 years (Tax FD) & 15 years (PPF)',
      'Dual power: Immediate tax deduction + equity wealth growth',
      'Tax-free long-term capital gains up to ₹1.25 Lakh/year'
    ],
    ctaText: 'Save ₹46,800 Tax'
  },
  {
    id: 'hybrid',
    category: 'safety',
    title: 'Hybrid & Balanced Advantage Funds',
    subtitle: 'Dynamic Asset Allocation',
    image: '/images/services/hybrid-balanced.jpg',
    badge: 'Low Volatility',
    badgeColor: '#008AD8',
    badgeBg: 'rgba(0, 138, 216, 0.1)',
    highlight: 'Growth + Stability',
    color: '#008AD8',
    description: 'Algorithmic dynamic asset allocation funds that automatically buy low and sell high across equity and debt, cushioning capital during market crashes.',
    benefits: [
      'Automatic equity-debt rebalancing without tax triggers',
      'Significant downside protection during market corrections',
      'Smooth, stress-free compounding for first-time investors'
    ],
    ctaText: 'Check Balanced Funds'
  },
  {
    id: 'swp',
    category: 'tax-income',
    title: 'Monthly Cashflow via SWP',
    subtitle: 'Systematic Withdrawal Plan for Retirees',
    image: '/images/services/retirement-swp.jpg',
    badge: 'Retirement Income',
    badgeColor: '#FF6A13',
    badgeBg: 'rgba(255, 106, 19, 0.1)',
    highlight: 'Clockwork Monthly Payouts',
    color: '#FF6A13',
    description: 'Generate predictable monthly cashflows directly into your bank account from accumulated capital while keeping the balance invested for growth.',
    benefits: [
      'Predictable monthly pension-like income for retirees',
      'Significantly higher tax efficiency compared to traditional FDs',
      'Preserves and extends capital longevity across decades'
    ],
    ctaText: 'Set Up Monthly SWP'
  },
  {
    id: 'debt',
    category: 'safety',
    title: 'Debt & Liquid Mutual Funds',
    subtitle: 'Emergency Corpus & Short-Term Parking',
    image: '/images/services/debt-liquid-funds.jpg',
    badge: 'Instant T+1 Liquidity',
    badgeColor: '#008AD8',
    badgeBg: 'rgba(0, 138, 216, 0.1)',
    highlight: 'Beats Bank Savings FD',
    color: '#008AD8',
    description: 'Park emergency savings, business operational liquidity, or short-term funds in AAA-rated, sovereign instruments with instant withdrawal access.',
    benefits: [
      'Instant T+1 day withdrawal directly into your bank account',
      'AAA & Sovereign rated papers ensuring maximum capital safety',
      'Zero lock-in, zero penalty, and superior post-tax returns'
    ],
    ctaText: 'Park Liquid Funds'
  },
  {
    id: 'audit',
    category: 'safety',
    title: 'Free Portfolio Audit & Rebalancing',
    subtitle: 'Unbiased Health Diagnosis',
    image: '/images/services/portfolio-audit.jpg',
    badge: '100% Complimentary',
    badgeColor: '#FF6A13',
    badgeBg: 'rgba(255, 106, 19, 0.1)',
    highlight: 'Eliminate Fund Overlaps',
    color: '#FF6A13',
    description: 'Have scattered funds across multiple apps? Get a certified AMFI audit identifying portfolio overlap, underperforming schemes, and expense leakage.',
    benefits: [
      'Comprehensive overlap and risk-exposure diagnostic scan',
      'Expense ratio optimization and direct scheme migration',
      'Quarterly rebalancing alerts tailored to your financial goals'
    ],
    ctaText: 'Claim Free Audit'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Visual Strategies (8)' },
  { id: 'growth', label: 'SIP & Growth (3)' },
  { id: 'tax-income', label: 'Tax & Income (2)' },
  { id: 'safety', label: 'Capital Safety & Audit (3)' }
];

export default function ServicesSection({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ 
      padding: '96px 0 104px', 
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
      position: 'relative'
    }}>
      {/* Subtle brand ambient glows (sky blue & orange) */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '4%',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 138, 216, 0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '3%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 106, 19, 0.04) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(0, 138, 216, 0.08)',
            border: '1px solid rgba(0, 138, 216, 0.25)',
            color: 'var(--primary-blue)',
            fontSize: '12.5px',
            fontWeight: 700,
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <Sparkles size={14} style={{ color: '#FF6A13' }} /> Visual Wealth Solutions
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--navy-deep)',
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            See Exactly How Your Money Compounds <br />
            <span style={{
              background: 'linear-gradient(135deg, #FF6A13 0%, #FF8A3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Through Visual Investment Roadmaps
            </span>
          </h2>

          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
            No confusing financial jargon or endless articles. Explore our clear visual strategies for monthly SIPs, strategic lumpsum STP, tax deduction, and retirement income.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '44px'
        }}>
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  border: '1.5px solid',
                  borderColor: isActive ? 'var(--primary-blue)' : '#E2E8F0',
                  background: isActive ? 'var(--primary-blue)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(0, 138, 216, 0.25)' : '0 2px 6px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.color = 'var(--primary-blue)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Visual Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {filteredServices.map((s) => (
            <div 
              key={s.id}
              style={{
                borderRadius: '18px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 24px -6px rgba(10, 22, 40, 0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${s.color}25, 0 0 0 1px ${s.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(10, 22, 40, 0.06)';
              }}
            >
              {/* Visual Image Header */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  background: '#F1F5F9',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveModalImage(s)}
                title="Click to zoom visual diagram"
              >
                <img 
                  src={s.image} 
                  alt={s.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />

                {/* Floating Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: s.badgeColor,
                  border: `1px solid ${s.badgeColor}30`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase'
                }}>
                  {s.badge}
                </div>

                {/* Zoom Hint Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy-deep)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <ZoomIn size={15} />
                </div>

                {/* Bottom Highlight Pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '12px',
                  background: 'rgba(10, 22, 40, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}>
                  {s.highlight}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  {s.subtitle}
                </div>

                <h3 style={{
                  fontSize: '19px',
                  fontWeight: 800,
                  color: 'var(--navy-deep)',
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: '13.5px',
                  color: '#64748B',
                  lineHeight: 1.6,
                  marginBottom: '18px',
                  flex: 1
                }}>
                  {s.description}
                </p>

                {/* Benefits Bullet Checklist */}
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '22px',
                  padding: 0
                }}>
                  {s.benefits.map((b, bIdx) => (
                    <li key={bIdx} style={{
                      fontSize: '12.5px',
                      color: '#334155',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontWeight: 500,
                      lineHeight: 1.45
                    }}>
                      <CheckCircle2 size={14} style={{ color: s.color, flexShrink: 0, marginTop: '2px' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Consultation Action Button */}
                <button
                  onClick={() => onSelectService(s.title)}
                  style={{
                    width: '100%',
                    padding: '11px 18px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    borderRadius: '10px',
                    border: `1.5px solid ${s.color}`,
                    background: '#FFFFFF',
                    color: s.color,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.color;
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = `0 6px 16px ${s.color}35`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>{s.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Decision Helper Banner: SIP vs Lumpsum */}
        <div style={{
          marginTop: '64px',
          background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
          borderRadius: '20px',
          padding: '36px 40px',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px -10px rgba(10, 22, 40, 0.25)',
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
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(255, 106, 19, 0.2)',
              color: '#FF8A3D',
              fontSize: '11.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '12px'
            }}>
              <Compass size={13} /> Decision Guide
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '10px' }}>
              Unsure Between SIP and Lumpsum STP?
            </h3>
            <p style={{ fontSize: '14.5px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>
              If you have recurring monthly savings from salary or business, <strong>SIP</strong> is your compounding engine. If you have idle bank deposits, property sale proceeds, or bonus liquidity, <strong>Lumpsum STP</strong> ensures high safety with staggered entry.
            </p>

            <button
              onClick={() => onSelectService('SIP vs Lumpsum Advisory')}
              className="btn-orange"
              style={{ padding: '10px 22px', fontSize: '13.5px' }}
            >
              Get Free Asset Allocation Advice <ArrowRight size={14} />
            </button>
          </div>

          {/* Quick Comparison Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{ color: '#38BDF8', fontWeight: 700, fontSize: '15px', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TrendingUp size={16} /> SIP Strategy
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12.5px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>• ₹500 to ₹1 Lakh+/month</li>
                <li>• Beats market timing</li>
                <li>• Salary / monthly income</li>
                <li>• Long-term compounding</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{ color: '#FF8A3D', fontWeight: 700, fontSize: '15px', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <DollarSign size={16} /> Lumpsum + STP
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12.5px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>• ₹1 Lakh to ₹50 Lakh+</li>
                <li>• Deployed via liquid fund</li>
                <li>• Bonus / business surplus</li>
                <li>• Catches market dips</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Image Lightbox Modal */}
      {activeModalImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(10, 22, 40, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '820px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              border: '1px solid #E2E8F0',
              animation: 'fadeIn 0.25s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div style={{ position: 'relative', width: '100%', maxHeight: '460px', overflow: 'hidden', background: '#F8FAFC' }}>
              <img 
                src={activeModalImage.image} 
                alt={activeModalImage.title}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              />
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.65)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                  {activeModalImage.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
                  {activeModalImage.subtitle} • {activeModalImage.highlight}
                </p>
              </div>

              <button
                onClick={() => {
                  const title = activeModalImage.title;
                  setActiveModalImage(null);
                  onSelectService(title);
                }}
                className="btn-orange"
                style={{ padding: '10px 22px', fontSize: '13.5px' }}
              >
                Consult on {activeModalImage.title.split(' ')[0]} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
