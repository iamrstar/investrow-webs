'use client';

import { TrendingUp, PieChart, Landmark, Receipt, RefreshCw, DollarSign, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: 'Systematic Investment Plan (SIP)',
    icon: TrendingUp,
    badge: 'Most Popular',
    color: '#0EA5E9',
    bgGlow: 'rgba(14, 165, 233, 0.08)',
    description: 'Disciplined monthly compounding through top-rated equity & hybrid funds. Automate investments starting from just ₹500/month.',
    benefits: ['Rupee cost averaging benefit', 'Goal-linked SIP roadmaps', 'Step-up SIP automated growth']
  },
  {
    title: 'Lumpsum Investment Strategy',
    icon: DollarSign,
    badge: 'High Yield',
    color: '#FF6A13',
    bgGlow: 'rgba(255, 106, 19, 0.08)',
    description: 'Deploy bonus capital, business surpluses, or asset sale liquidity using smart STP (Systematic Transfer Plan) to capture market dips.',
    benefits: ['Staggered entry via STP', 'Zero market-timing anxiety', 'Liquid fund interest while waiting']
  },
  {
    title: 'Equity Mutual Funds',
    icon: PieChart,
    badge: 'Wealth Creation',
    color: '#0284C7',
    bgGlow: 'rgba(2, 132, 199, 0.08)',
    description: "Beat inflation with diversified Large Cap, Mid Cap, Small Cap, and Flexi Cap funds managed by India's most celebrated fund managers.",
    benefits: ['Top-quartile active scheme picks', 'Diversified multi-sector exposure', 'Long-term 12-15%+ CAGR potential']
  },
  {
    title: 'Tax-Saving Mutual Funds (ELSS)',
    icon: Receipt,
    badge: 'Save ₹46,800+ Tax',
    color: '#10B981',
    bgGlow: 'rgba(16, 185, 129, 0.08)',
    description: 'Save tax under Section 80C with the lowest lock-in period (only 3 years) and significantly higher wealth growth compared to PPF or Tax FDs.',
    benefits: ['Shortest 3-year lock-in in 80C', 'Dual benefit: Tax cut + Equity gain', 'High-rated ELSS portfolio basket']
  },
  {
    title: 'Hybrid & Balanced Advantage',
    icon: ShieldCheck,
    badge: 'Low Volatility',
    color: '#F59E0B',
    bgGlow: 'rgba(245, 158, 11, 0.08)',
    description: 'Dynamic asset allocation funds that automatically buy low and sell high across equity and debt, shielding your capital from severe downturns.',
    benefits: ['Dynamic equity-debt rebalancing', 'Downside protection during crashes', 'Stable compounding with peace of mind']
  },
  {
    title: 'Debt & Liquid Mutual Funds',
    icon: Landmark,
    badge: 'Higher Than Bank FD',
    color: '#8B5CF6',
    bgGlow: 'rgba(139, 92, 246, 0.08)',
    description: 'Park emergency funds and short-term savings in safe, credit-rated instruments offering instant liquidity and better post-tax efficiency.',
    benefits: ['T+1 day instant liquidity', 'Sovereign & AAA rated papers', 'Zero lock-in or penalty on withdrawal']
  },
  {
    title: 'Monthly Cashflow via SWP',
    icon: Wallet,
    badge: 'Retirement Income',
    color: '#EC4899',
    bgGlow: 'rgba(236, 72, 153, 0.08)',
    description: 'Create predictable, tax-efficient monthly income for retirees from your accumulated corpus while remaining capital continues to grow.',
    benefits: ['Regular monthly bank payout', 'Highly tax-efficient vs bank FD', 'Corpus longevity optimization']
  },
  {
    title: 'Free Portfolio Audit & Rebalancing',
    icon: RefreshCw,
    badge: 'Complimentary',
    color: '#6366F1',
    bgGlow: 'rgba(99, 102, 241, 0.08)',
    description: 'Got scattered mutual funds in different apps? Get an unbiased audit identifying duplicate holdings, high expense ratios, and laggard funds.',
    benefits: ['Scheme overlap analysis', 'Expense ratio minimization', 'Direct to Regular consolidation advice']
  }
];

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 40%, #F1F5F9 100%)',
      position: 'relative'
    }}>
      {/* Subtle background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 138, 216, 0.03) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 106, 19, 0.03) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>
          <div className="badge-blue" style={{ marginBottom: '16px' }}>
            Mutual Fund Advisory Specialization
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '16px', color: 'var(--navy-deep)', letterSpacing: '-0.02em' }}>
            Tailored Mutual Fund Solutions for <br />
            <span className="gradient-text-orange">Every Stage of Your Wealth Journey</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            As an AMFI-registered distributor, we curate scheme baskets based on fundamental fund research, fund manager pedigree, and your individual risk-return appetite.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-smooth)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(10, 22, 40, 0.1), 0 0 0 1px ${s.color}30`;
                  e.currentTarget.style.borderColor = `${s.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-md)',
                      background: s.bgGlow,
                      color: s.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${s.color}15`,
                      transition: 'var(--transition-smooth)'
                    }}>
                      <Icon size={24} />
                    </div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: s.bgGlow,
                      color: s.color,
                      border: `1px solid ${s.color}15`,
                      letterSpacing: '0.3px'
                    }}>
                      {s.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '10px' }}>
                    {s.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                    {s.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '24px' }}>
                    {s.benefits.map((b, bIdx) => (
                      <li key={bIdx} style={{ fontSize: '12.5px', color: 'var(--navy-deep)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
                        <span style={{ 
                          color: s.color, 
                          fontWeight: 'bold', 
                          fontSize: '14px',
                          width: '16px',
                          height: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>✓</span> 
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectService(s.title)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: 'transparent',
                    color: s.color,
                    border: `1.5px solid ${s.color}25`,
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = s.bgGlow;
                    e.target.style.borderColor = `${s.color}50`;
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = `${s.color}25`;
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Consult on {s.title.split(' ')[0]} <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
