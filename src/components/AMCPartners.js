'use client';

import { useMemo } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const AMC_PARTNERS = [
  // Top Mega AMCs
  { slug: 'sbi', name: 'SBI Mutual Fund', logo: '/images/amc/sbi.svg', category: 'Equity & Debt', type: 'Mega AMC', rank: 'AUM #1 in India', popular: 'SBI Bluechip & Small Cap' },
  { slug: 'hdfc', name: 'HDFC Mutual Fund', logo: '/images/amc/hdfc.svg', category: 'Equity & Hybrid', type: 'Mega AMC', rank: 'Top 3 AMC', popular: 'HDFC Top 100 & Mid-Cap' },
  { slug: 'icici', name: 'ICICI Prudential MF', logo: '/images/amc/icici.png', category: 'Equity & Debt', type: 'Mega AMC', rank: 'Top 3 AMC', popular: 'ICICI Pru Value Discovery' },
  { slug: 'nippon', name: 'Nippon India MF', logo: '/images/amc/nippon.png', category: 'Equity & ETF', type: 'Mega AMC', rank: 'Top 5 AMC', popular: 'Nippon Small Cap Fund' },
  { slug: 'kotak', name: 'Kotak Mahindra MF', logo: '/images/amc/kotak.svg', category: 'Equity & Hybrid', type: 'Mega AMC', rank: 'Top 5 AMC', popular: 'Kotak Emerging Equity' },
  { slug: 'aditya-birla', name: 'Aditya Birla Sun Life', logo: '/images/amc/aditya-birla.png', category: 'Debt & Equity', type: 'Mega AMC', rank: 'Top 10 AMC', popular: 'ABSL Frontline Equity' },
  { slug: 'axis', name: 'Axis Mutual Fund', logo: '/images/amc/axis.svg', category: 'Growth & ELSS', type: 'Top AMC', rank: 'Top 10 AMC', popular: 'Axis ELSS Tax Saver' },
  { slug: 'uti', name: 'UTI Mutual Fund', logo: '/images/amc/uti.png', category: 'Index & Balanced', type: 'Top AMC', rank: 'Pioneer AMC', popular: 'UTI Nifty 50 Index Fund' },
  { slug: 'tata', name: 'Tata Mutual Fund', logo: '/images/amc/png/tata.png', category: 'Equity & Thematic', type: 'Top AMC', rank: 'Top 10 AMC', popular: 'Tata Digital & Large Cap' },
  { slug: 'mirae', name: 'Mirae Asset MF', logo: '/images/amc/mirae.png', category: 'Large & Mid Cap', type: 'Top AMC', rank: 'Growth Leader', popular: 'Mirae Large & Midcap' },
  { slug: 'dsp', name: 'DSP Mutual Fund', logo: '/images/amc/dsp.svg', category: 'Flexi & Small Cap', type: 'Top AMC', rank: 'Global Heritage', popular: 'DSP Flexi Cap Fund' },
  { slug: 'bandhan', name: 'Bandhan Mutual Fund', logo: '/images/amc/bandhan.svg', category: 'Equity & Liquid', type: 'Top AMC', rank: 'Value Focus', popular: 'Bandhan Sterling Value' },
  { slug: 'motilal-oswal', name: 'Motilal Oswal MF', logo: '/images/amc/png/motilal-oswal.png', category: 'High Growth Equity', type: 'Top AMC', rank: 'QGLP Pioneer', popular: 'Motilal Midcap Fund' },
  { slug: 'ppfas', name: 'PPFAS Mutual Fund', logo: '/images/amc/ppfas.svg', category: 'Value & Global Equity', type: 'Focused AMC', rank: 'Flexi Cap Leader', popular: 'Parag Parikh Flexi Cap' },
  { slug: 'quant', name: 'Quant Mutual Fund', logo: '/images/amc/quant.png', category: 'Momentum Equity', type: 'Growth AMC', rank: 'High Alpha', popular: 'Quant Small & Mid Cap' },
  { slug: 'franklin', name: 'Franklin Templeton MF', logo: '/images/amc/franklin.png', category: 'Equity & Debt', type: 'Top AMC', rank: 'Global Brand', popular: 'Franklin India Prima' },
  { slug: 'canara-robeco', name: 'Canara Robeco MF', logo: '/images/amc/canara-robeco.png', category: 'Equity & Hybrid', type: 'Top AMC', rank: 'Consistent Performer', popular: 'Canara Robeco Emerging' },
  { slug: 'edelweiss', name: 'Edelweiss Mutual Fund', logo: '/images/amc/edelweiss.svg', category: 'Debt & Equity', type: 'Top AMC', rank: 'Debt Innovator', popular: 'Edelweiss Bharat Bond' },
  { slug: 'hsbc', name: 'HSBC Mutual Fund', logo: '/images/amc/hsbc.svg', category: 'Equity & Global', type: 'Top AMC', rank: 'Global MNC', popular: 'HSBC Value Fund' },
  { slug: 'sundaram', name: 'Sundaram Mutual Fund', logo: '/images/amc/sundaram.svg', category: 'Mid & Small Cap', type: 'Top AMC', rank: 'Midcap Pioneer', popular: 'Sundaram Mid Cap' },
  { slug: 'invesco', name: 'Invesco Mutual Fund', logo: '/images/amc/png/invesco.png', category: 'Growth & Multi-Cap', type: 'Top AMC', rank: 'Global AMC', popular: 'Invesco India Growth' },
  { slug: 'mahindra-manulife', name: 'Mahindra Manulife MF', logo: '/images/amc/mahindra-manulife.svg', category: 'Multi-Cap & Growth', type: 'Growth AMC', rank: 'Joint Venture', popular: 'Mahindra Multi Cap' },
  { slug: 'pgim', name: 'PGIM India MF', logo: '/images/amc/png/pgim.png', category: 'Mid Cap & Global', type: 'Growth AMC', rank: 'Global Giant', popular: 'PGIM India Midcap' },
  { slug: 'union', name: 'Union Mutual Fund', logo: '/images/amc/union.png', category: 'Equity & Hybrid', type: 'Growth AMC', rank: 'PSU Joint Venture', popular: 'Union Flexi Cap' },
  { slug: 'baroda-bnp', name: 'Baroda BNP Paribas MF', logo: '/images/amc/png/baroda-bnp.png', category: 'Balanced Advantage', type: 'Growth AMC', rank: 'Global Alliance', popular: 'Baroda BNP Balanced' },
  { slug: 'bajaj', name: 'Bajaj Finserv MF', logo: '/images/amc/png/bajaj.png', category: 'Tech & Multi-Asset', type: 'New Age AMC', rank: 'Fintech Driven', popular: 'Bajaj Finserv Flexi' },
  { slug: 'groww', name: 'Groww Mutual Fund', logo: '/images/amc/png/groww.png', category: 'Index & Passive', type: 'New Age AMC', rank: 'Digital First', popular: 'Groww Nifty Total Mkt' },
  { slug: 'navi', name: 'Navi Mutual Fund', logo: '/images/amc/png/navi.png', category: 'Index & FoF', type: 'New Age AMC', rank: 'Low Expense', popular: 'Navi Nifty 50' },
  { slug: 'whiteoak', name: 'WhiteOak Capital MF', logo: '/images/amc/png/whiteoak.png', category: 'Factor & Active Equity', type: 'Focused AMC', rank: 'Institutional Quality', popular: 'WhiteOak Flexi Cap' },
  { slug: 'trust', name: 'Trust Mutual Fund', logo: '/images/amc/png/trust.png', category: 'Debt & Liquid', type: 'Debt Specialist', rank: 'Debt Specialist', popular: 'TrustMF Short Term' },
  { slug: 'samco', name: 'Samco Mutual Fund', logo: '/images/amc/png/samco.png', category: 'Active Equity', type: 'Focused AMC', rank: 'Quant Driven', popular: 'Samco Flexi Cap' },
  { slug: 'nj', name: 'NJ Mutual Fund', logo: '/images/amc/png/nj.png', category: 'Rule-Based Equity', type: 'Focused AMC', rank: 'Rules Based', popular: 'NJ Balanced Advantage' },
  { slug: 'iti', name: 'ITI Mutual Fund', logo: '/images/amc/png/iti.png', category: 'Small & Mid Cap', type: 'Growth AMC', rank: 'Emerging AMC', popular: 'ITI Small Cap' },
  { slug: 'helios', name: 'Helios Mutual Fund', logo: '/images/amc/png/helios.png', category: 'Active Equity', type: 'Focused AMC', rank: 'Samir Arora Led', popular: 'Helios Flexi Cap' },
  { slug: 'zerodha', name: 'Zerodha Fund House', logo: '/images/amc/png/zerodha.png', category: 'Passive & Index', type: 'New Age AMC', rank: 'Low Cost Pioneer', popular: 'Zerodha Nifty LargeMid' },
  { slug: 'old-bridge', name: 'Old Bridge Capital MF', logo: '/images/amc/png/old-bridge.png', category: 'Deep Value Equity', type: 'Focused AMC', rank: 'Value Specialist', popular: 'Old Bridge Focused' },
  { slug: 'quantum', name: 'Quantum Mutual Fund', logo: '/images/amc/png/quantum.png', category: 'Value & Liquid', type: 'Focused AMC', rank: 'Pioneer Value', popular: 'Quantum Long Term' },
  { slug: 'shriram', name: 'Shriram Mutual Fund', logo: '/images/amc/png/shriram.png', category: 'Equity & Hybrid', type: 'Growth AMC', rank: 'Retail Trusted', popular: 'Shriram Multi Asset' },
  { slug: 'taurus', name: 'Taurus Mutual Fund', logo: '/images/amc/png/taurus.png', category: 'Thematic & Equity', type: 'Growth AMC', rank: 'Thematic Focus', popular: 'Taurus Discovery' },
  // Market Platforms
  { slug: 'bse-star', name: 'BSE StAR MF', logo: '/images/amc/png/bse-star.png', category: 'Execution Exchange', type: 'Platform', rank: 'Member: 55533', popular: 'National Order Routing' },
  { slug: 'nse', name: 'NSE NMF II', logo: '/images/amc/png/nse.png', category: 'Execution Exchange', type: 'Platform', rank: 'Exchange Partner', popular: 'Order Routing System' },
  { slug: 'cams-kfin', name: 'CAMS • KFintech', logo: '/images/amc/cams-kfin.svg', category: 'Registrar & Transfer', type: 'Platform', rank: 'Official RTA', popular: 'Centralized Unit Registry' }
];

export default function AMCPartners({ onOpenConsultModal }) {
  // Split all 42 partners across 3 synchronized continuous marquee tracks
  const row1 = useMemo(() => AMC_PARTNERS.slice(0, 14), []);
  const row2 = useMemo(() => AMC_PARTNERS.slice(14, 28), []);
  const row3 = useMemo(() => AMC_PARTNERS.slice(28, 42), []);

  const repeatedRow1 = useMemo(() => [...row1, ...row1], [row1]);
  const repeatedRow2 = useMemo(() => [...row2, ...row2], [row2]);
  const repeatedRow3 = useMemo(() => [...row3, ...row3], [row3]);

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
          Invest, switch, and track across India’s leading Asset Management Companies (AMCs) with dedicated AMFI-certified guidance tailored to your financial goals.
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

      {/* Marquee Row 1: Mega AMCs (Scrolls Left) */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        marginBottom: '16px',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)'
      }}>
        <div className="marquee-track" style={{ display: 'flex', width: 'max-content', flexWrap: 'nowrap' }}>
          {repeatedRow1.map((p, idx) => (
            <div 
              key={`row1-${idx}`}
              className="amc-marquee-card"
            >
              <div style={{
                width: '200px',
                height: '58px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img 
                  src={p.logo || `/images/amc/${p.slug}.svg`} 
                  alt={`${p.name} Logo`} 
                  style={{
                    maxWidth: '185px',
                    maxHeight: '48px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2: Top National AMCs (Scrolls Right) */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        marginBottom: '16px',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)'
      }}>
        <div className="marquee-track-reverse" style={{ display: 'flex', width: 'max-content', flexWrap: 'nowrap' }}>
          {repeatedRow2.map((p, idx) => (
            <div 
              key={`row2-${idx}`}
              className="amc-marquee-card"
            >
              <div style={{
                width: '200px',
                height: '58px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img 
                  src={p.logo || `/images/amc/${p.slug}.svg`} 
                  alt={`${p.name} Logo`} 
                  style={{
                    maxWidth: '185px',
                    maxHeight: '48px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 3: Specialized Funds & Platforms (Scrolls Left) */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        marginBottom: '32px',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)'
      }}>
        <div className="marquee-track" style={{ display: 'flex', width: 'max-content', flexWrap: 'nowrap' }}>
          {repeatedRow3.map((p, idx) => (
            <div 
              key={`row3-${idx}`}
              className="amc-marquee-card"
            >
              <div style={{
                width: '200px',
                height: '58px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img 
                  src={p.logo || `/images/amc/${p.slug}.svg`} 
                  alt={`${p.name} Logo`} 
                  style={{
                    maxWidth: '185px',
                    maxHeight: '48px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Trust Credentials Strip */}
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '12px 28px',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          fontSize: '13px',
          color: '#E2E8F0'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
            <span>Direct Order Execution: <strong>BSE StAR MF (Member: 55533)</strong></span>
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={15} style={{ color: '#0EA5E9' }} />
            <span>Official Registrars: <strong>CAMS & KFintech Integrated</strong></span>
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F59E0B' }}>★</span>
            <span>Zero Platform Switching Fee</span>
          </span>
        </div>
      </div>
    </section>
  );
}
