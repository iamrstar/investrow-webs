'use client';

import { useState, useMemo } from 'react';
import { ShieldCheck, Search, ChevronDown, ChevronUp, Sparkles, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const AMC_PARTNERS = [
  // Top Mega AMCs
  { slug: 'sbi', name: 'SBI Mutual Fund', category: 'Equity & Debt', type: 'Mega AMC', rank: 'AUM #1 in India', popular: 'SBI Bluechip & Small Cap' },
  { slug: 'hdfc', name: 'HDFC Mutual Fund', category: 'Equity & Hybrid', type: 'Mega AMC', rank: 'Top 3 AMC', popular: 'HDFC Top 100 & Mid-Cap' },
  { slug: 'icici', name: 'ICICI Prudential MF', category: 'Equity & Debt', type: 'Mega AMC', rank: 'Top 3 AMC', popular: 'ICICI Pru Value Discovery' },
  { slug: 'nippon', name: 'Nippon India MF', category: 'Equity & ETF', type: 'Mega AMC', rank: 'Top 5 AMC', popular: 'Nippon Small Cap Fund' },
  { slug: 'kotak', name: 'Kotak Mahindra MF', category: 'Equity & Hybrid', type: 'Mega AMC', rank: 'Top 5 AMC', popular: 'Kotak Emerging Equity' },
  { slug: 'aditya-birla', name: 'Aditya Birla Sun Life', category: 'Debt & Equity', type: 'Mega AMC', rank: 'Top 10 AMC', popular: 'ABSL Frontline Equity' },
  { slug: 'axis', name: 'Axis Mutual Fund', category: 'Growth & ELSS', type: 'Top AMC', rank: 'Top 10 AMC', popular: 'Axis ELSS Tax Saver' },
  { slug: 'uti', name: 'UTI Mutual Fund', category: 'Index & Balanced', type: 'Top AMC', rank: 'Pioneer AMC', popular: 'UTI Nifty 50 Index Fund' },
  { slug: 'tata', name: 'Tata Mutual Fund', category: 'Equity & Thematic', type: 'Top AMC', rank: 'Top 10 AMC', popular: 'Tata Digital & Large Cap' },
  { slug: 'mirae', name: 'Mirae Asset MF', category: 'Large & Mid Cap', type: 'Top AMC', rank: 'Growth Leader', popular: 'Mirae Large & Midcap' },
  { slug: 'dsp', name: 'DSP Mutual Fund', category: 'Flexi & Small Cap', type: 'Top AMC', rank: 'Global Heritage', popular: 'DSP Flexi Cap Fund' },
  { slug: 'bandhan', name: 'Bandhan Mutual Fund', category: 'Equity & Liquid', type: 'Top AMC', rank: 'Value Focus', popular: 'Bandhan Sterling Value' },
  { slug: 'motilal-oswal', name: 'Motilal Oswal MF', category: 'High Growth Equity', type: 'Top AMC', rank: 'QGLP Pioneer', popular: 'Motilal Midcap Fund' },
  { slug: 'ppfas', name: 'PPFAS Mutual Fund', category: 'Value & Global Equity', type: 'Specialized', rank: 'Flexi Cap Leader', popular: 'Parag Parikh Flexi Cap' },
  { slug: 'quant', name: 'Quant Mutual Fund', category: 'Momentum Equity', type: 'Specialized', rank: 'High Alpha', popular: 'Quant Small & Mid Cap' },
  { slug: 'franklin', name: 'Franklin Templeton MF', category: 'Equity & Debt', type: 'Top AMC', rank: 'Global Brand', popular: 'Franklin India Prima' },
  { slug: 'canara-robeco', name: 'Canara Robeco MF', category: 'Equity & Hybrid', type: 'Top AMC', rank: 'Consistent Performer', popular: 'Canara Robeco Emerging' },
  { slug: 'edelweiss', name: 'Edelweiss Mutual Fund', category: 'Debt & Equity', type: 'Top AMC', rank: 'Debt Innovator', popular: 'Edelweiss Bharat Bond' },
  { slug: 'hsbc', name: 'HSBC Mutual Fund', category: 'Equity & Global', type: 'Top AMC', rank: 'Global MNC', popular: 'HSBC Value Fund' },
  { slug: 'sundaram', name: 'Sundaram Mutual Fund', category: 'Mid & Small Cap', type: 'Top AMC', rank: 'Midcap Pioneer', popular: 'Sundaram Mid Cap' },
  { slug: 'invesco', name: 'Invesco Mutual Fund', category: 'Growth & Multi-Cap', type: 'Top AMC', rank: 'Global AMC', popular: 'Invesco India Growth' },
  { slug: 'mahindra-manulife', name: 'Mahindra Manulife MF', category: 'Multi-Cap & Rural', type: 'Growth AMC', rank: 'Joint Venture', popular: 'Mahindra Multi Cap' },
  { slug: 'pgim', name: 'PGIM India MF', category: 'Mid Cap & Global', type: 'Growth AMC', rank: 'Global Giant', popular: 'PGIM India Midcap' },
  { slug: 'union', name: 'Union Mutual Fund', category: 'Equity & Hybrid', type: 'Growth AMC', rank: 'PSU Joint Venture', popular: 'Union Flexi Cap' },
  { slug: 'baroda-bnp', name: 'Baroda BNP Paribas MF', category: 'Balanced Advantage', type: 'Growth AMC', rank: 'Global Alliance', popular: 'Baroda BNP Balanced' },
  { slug: 'bajaj', name: 'Bajaj Finserv MF', category: 'Tech & Multi-Asset', type: 'New Age AMC', rank: 'Fintech Driven', popular: 'Bajaj Finserv Flexi' },
  { slug: 'groww', name: 'Groww Mutual Fund', category: 'Index & Passive', type: 'New Age AMC', rank: 'Digital First', popular: 'Groww Nifty Total Mkt' },
  { slug: 'navi', name: 'Navi Mutual Fund', category: 'Index & FoF', type: 'New Age AMC', rank: 'Low Expense', popular: 'Navi Nifty 50' },
  { slug: 'whiteoak', name: 'WhiteOak Capital MF', category: 'Factor & Active Equity', type: 'Specialized', rank: 'Institutional Quality', popular: 'WhiteOak Flexi Cap' },
  { slug: 'trust', name: 'Trust Mutual Fund', category: 'Debt & Liquid', type: 'Specialized', rank: 'Debt Specialist', popular: 'TrustMF Short Term' },
  { slug: 'samco', name: 'Samco Mutual Fund', category: 'Active Equity', type: 'Specialized', rank: 'Quant Driven', popular: 'Samco Flexi Cap' },
  { slug: 'nj', name: 'NJ Mutual Fund', category: 'Rule-Based Equity', type: 'Specialized', rank: 'Rules Based', popular: 'NJ Balanced Advantage' },
  { slug: 'iti', name: 'ITI Mutual Fund', category: 'Small & Mid Cap', type: 'Growth AMC', rank: 'Emerging AMC', popular: 'ITI Small Cap' },
  { slug: 'helios', name: 'Helios Mutual Fund', category: 'Active Equity', type: 'Specialized', rank: 'Samir Arora Led', popular: 'Helios Flexi Cap' },
  { slug: 'zerodha', name: 'Zerodha Fund House', category: 'Passive & Index', type: 'New Age AMC', rank: 'Low Cost Pioneer', popular: 'Zerodha Nifty LargeMid' },
  { slug: 'old-bridge', name: 'Old Bridge Capital MF', category: 'Deep Value Equity', type: 'Specialized', rank: 'Value Specialist', popular: 'Old Bridge Focused' },
  { slug: 'quantum', name: 'Quantum Mutual Fund', category: 'Value & Liquid', type: 'Specialized', rank: 'Pioneer Value', popular: 'Quantum Long Term' },
  { slug: 'shriram', name: 'Shriram Mutual Fund', category: 'Equity & Hybrid', type: 'Growth AMC', rank: 'Retail Trusted', popular: 'Shriram Multi Asset' },
  { slug: 'taurus', name: 'Taurus Mutual Fund', category: 'Thematic & Equity', type: 'Growth AMC', rank: 'Thematic Focus', popular: 'Taurus Discovery' },
  // Market Platforms
  { slug: 'bse-star', name: 'BSE StAR MF', category: 'Execution Exchange', type: 'Platform', rank: 'Member: 55533', popular: 'National Order Routing' },
  { slug: 'nse', name: 'NSE NMF II', category: 'Execution Exchange', type: 'Platform', rank: 'Exchange Partner', popular: 'Order Routing System' },
  { slug: 'cams-kfin', name: 'CAMS • KFintech', category: 'Registrar & Transfer', type: 'Platform', rank: 'Official RTA', popular: 'Centralized Unit Registry' }
];

const getCategoryBadgeStyle = (category) => {
  if (category.includes('Equity')) {
    return { bg: 'rgba(14, 165, 233, 0.12)', color: '#0284C7', border: 'rgba(14, 165, 233, 0.25)' };
  }
  if (category.includes('Debt') || category.includes('Liquid')) {
    return { bg: 'rgba(16, 185, 129, 0.12)', color: '#10B981', border: 'rgba(16, 185, 129, 0.25)' };
  }
  if (category.includes('Hybrid') || category.includes('Balanced')) {
    return { bg: 'rgba(245, 158, 11, 0.12)', color: '#D97706', border: 'rgba(245, 158, 11, 0.25)' };
  }
  if (category.includes('Exchange') || category.includes('Registrar')) {
    return { bg: 'rgba(139, 92, 246, 0.12)', color: '#8B5CF6', border: 'rgba(139, 92, 246, 0.25)' };
  }
  return { bg: 'rgba(255, 106, 19, 0.12)', color: '#FF6A13', border: 'rgba(255, 106, 19, 0.25)' };
};

export default function AMCPartners({ onOpenConsultModal }) {
  const [showFullDirectory, setShowFullDirectory] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Split partners for dual-track marquee
  const row1 = useMemo(() => AMC_PARTNERS.slice(0, 21), []);
  const row2 = useMemo(() => AMC_PARTNERS.slice(21, 42), []);

  const repeatedRow1 = useMemo(() => [...row1, ...row1], [row1]);
  const repeatedRow2 = useMemo(() => [...row2, ...row2], [row2]);

  // Filtered list for directory view
  const filteredAMCs = useMemo(() => {
    return AMC_PARTNERS.filter((amc) => {
      const matchesSearch = amc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            amc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            amc.popular.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      if (selectedFilter === 'All') return true;
      if (selectedFilter === 'Mega AMCs') return amc.type === 'Mega AMC';
      if (selectedFilter === 'Equity & Growth') return amc.category.includes('Equity') || amc.category.includes('Growth');
      if (selectedFilter === 'Debt & Liquid') return amc.category.includes('Debt') || amc.category.includes('Liquid');
      if (selectedFilter === 'Hybrid & Balanced') return amc.category.includes('Hybrid') || amc.category.includes('Balanced');
      if (selectedFilter === 'Platforms') return amc.type === 'Platform';
      return true;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <section id="partners" style={{
      padding: '56px 0 64px',
      background: 'linear-gradient(180deg, #060E1A 0%, #0A1628 50%, #0D1B2A 100%)',
      color: 'white',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Top shimmer divider */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 138, 216, 0.4), rgba(255, 106, 19, 0.4), transparent)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite'
      }} />

      {/* Subtle radial glow in background */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 138, 216, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      {/* Header Container */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'rgba(0, 138, 216, 0.12)',
          border: '1px solid rgba(0, 138, 216, 0.3)',
          color: '#38BDF8',
          fontSize: '11.5px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '14px'
        }}>
          <ShieldCheck size={14} style={{ color: '#22C55E' }} />
          <span>SEBI & AMFI Registered MFD • ARN-194720</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.25,
          marginBottom: '12px'
        }}>
          Authorized Distributor For India's Top <span style={{
            background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>40+ SEBI-Regulated</span> Mutual Fund Houses
        </h2>

        <p style={{
          fontSize: '15px',
          color: '#94A3B8',
          maxWidth: '720px',
          margin: '0 auto 24px',
          lineHeight: 1.6
        }}>
          Invest, switch, and track across India’s leading Asset Management Companies (AMCs) from a single unified advisory portal with zero commission bias.
        </p>

        {/* Quick Highlights Strip */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '10px 24px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>
            <span style={{ color: '#22C55E' }}>✓</span> 40+ Certified AMCs
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>
            <span style={{ color: '#0EA5E9' }}>✓</span> 2,500+ Active Schemes
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>
            <span style={{ color: '#F59E0B' }}>✓</span> BSE StAR MF Execution
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>
            <span style={{ color: '#FF6A13' }}>✓</span> ₹0 Advisory Upfront
          </div>
        </div>
      </div>

      {/* Marquee Row 1: Top AMCs (Scrolls Left) */}
      <div style={{ width: '100%', overflow: 'hidden', marginBottom: '14px', position: 'relative' }}>
        <div className="marquee-track">
          {repeatedRow1.map((p, idx) => {
            const badge = getCategoryBadgeStyle(p.category);
            return (
              <div 
                key={`row1-${idx}`}
                className="amc-marquee-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '8px 16px 8px 10px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: '14px',
                  margin: '0 8px',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Official AMC Logo Badge */}
                <div style={{
                  width: '124px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img 
                    src={`/images/amc/${p.slug}.svg`} 
                    alt={`${p.name} Logo`} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Category Pill */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ 
                    fontSize: '10.5px', 
                    padding: '3px 8px', 
                    background: badge.bg, 
                    color: badge.color,
                    border: `1px solid ${badge.border}`,
                    borderRadius: '9999px', 
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}>
                    {p.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Row 2: Specialized & Infrastructure AMCs (Scrolls Right) */}
      <div style={{ width: '100%', overflow: 'hidden', marginBottom: '32px', position: 'relative' }}>
        <div className="marquee-track-reverse">
          {repeatedRow2.map((p, idx) => {
            const badge = getCategoryBadgeStyle(p.category);
            return (
              <div 
                key={`row2-${idx}`}
                className="amc-marquee-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '8px 16px 8px 10px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: '14px',
                  margin: '0 8px',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Official AMC Logo Badge */}
                <div style={{
                  width: '124px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img 
                    src={`/images/amc/${p.slug}.svg`} 
                    alt={`${p.name} Logo`} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Category Pill */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ 
                    fontSize: '10.5px', 
                    padding: '3px 8px', 
                    background: badge.bg, 
                    color: badge.color,
                    border: `1px solid ${badge.border}`,
                    borderRadius: '9999px', 
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}>
                    {p.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Toggle for Full 40+ AMCs Directory */}
      <div className="container" style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={() => setShowFullDirectory(!showFullDirectory)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            borderRadius: '9999px',
            background: showFullDirectory ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.borderColor = 'var(--primary-blue)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = showFullDirectory ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
          }}
        >
          <Building2 size={16} style={{ color: '#FF6A13' }} />
          <span>{showFullDirectory ? 'Hide Fund House Directory' : 'Browse All 40+ SEBI-Regulated AMCs with Logos'}</span>
          {showFullDirectory ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Collapsible Directory Grid */}
        {showFullDirectory && (
          <div style={{
            marginTop: '32px',
            padding: '28px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            animation: 'fadeIn 0.4s ease'
          }}>
            {/* Controls Bar: Search & Filter Tabs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}>
              {/* Search Input */}
              <div style={{
                position: 'relative',
                flex: '1',
                minWidth: '240px',
                maxWidth: '380px'
              }}>
                <Search size={16} style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#64748B'
                }} />
                <input 
                  type="text"
                  placeholder="Search AMC (e.g. SBI, HDFC, Mirae...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 16px 11px 40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '13.5px'
                  }}
                />
              </div>

              {/* Category Filter Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['All', 'Mega AMCs', 'Equity & Growth', 'Debt & Liquid', 'Hybrid & Balanced', 'Platforms'].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedFilter(filter)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: selectedFilter === filter ? 'var(--primary-blue-gradient)' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedFilter === filter ? '#FFFFFF' : '#94A3B8',
                      border: selectedFilter === filter ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: selectedFilter === filter ? '0 2px 8px rgba(0, 138, 216, 0.3)' : 'none'
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid of 40+ AMCs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '16px',
              textAlign: 'left'
            }}>
              {filteredAMCs.map((amc) => {
                const badge = getCategoryBadgeStyle(amc.category);
                return (
                  <div 
                    key={amc.slug}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderRadius: '16px',
                      padding: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(0, 138, 216, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Top Row: Logo & Rank Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <div style={{
                        width: '130px',
                        height: '38px',
                        background: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={`/images/amc/${amc.slug}.svg`} 
                          alt={`${amc.name} Logo`} 
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      </div>
                      <span style={{
                        fontSize: '10px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 106, 19, 0.15)',
                        color: '#FF8A3D',
                        fontWeight: 700,
                        whiteSpace: 'nowrap'
                      }}>
                        {amc.rank}
                      </span>
                    </div>

                    {/* Middle: Name & Popular Schemes */}
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3 }}>
                        {amc.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '3px' }}>
                        Popular: <span style={{ color: '#E2E8F0', fontWeight: 600 }}>{amc.popular}</span>
                      </div>
                    </div>

                    {/* Bottom Row: Category Tag + Action */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '10px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      <span style={{
                        fontSize: '10.5px',
                        padding: '3px 8px',
                        background: badge.bg,
                        color: badge.color,
                        border: `1px solid ${badge.border}`,
                        borderRadius: '9999px',
                        fontWeight: 700
                      }}>
                        {amc.category}
                      </span>

                      <a 
                        href={`https://wa.me/919102070777?text=Hi%20Investrow,%20I%20want%20to%20invest%20in%20schemes%20from%20${encodeURIComponent(amc.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '11.5px',
                          color: '#38BDF8',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                          transition: 'color 0.2s'
                        }}
                      >
                        <span>Start SIP</span>
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredAMCs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '36px 0', color: '#94A3B8', fontSize: '14px' }}>
                No mutual fund house matching "{searchQuery}". Please check the spelling or view all fund houses.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Reverse Marquee CSS */}
      <style jsx>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-track-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 38s linear infinite;
        }
        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
        .amc-marquee-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 138, 216, 0.2) !important;
          border-color: rgba(0, 138, 216, 0.4) !important;
        }
      `}</style>
    </section>
  );
}
