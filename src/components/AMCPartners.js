'use client';

const PARTNERS = [
  { name: 'SBI Mutual Fund', category: 'Equity & Debt' },
  { name: 'HDFC Mutual Fund', category: 'Equity & Hybrid' },
  { name: 'ICICI Prudential MF', category: 'Equity & Debt' },
  { name: 'Nippon India MF', category: 'Equity & ETF' },
  { name: 'Kotak Mutual Fund', category: 'Equity & Hybrid' },
  { name: 'Axis Mutual Fund', category: 'Growth & ELSS' },
  { name: 'Tata Mutual Fund', category: 'Equity & Thematic' },
  { name: 'Mirae Asset MF', category: 'Large & Mid Cap' },
  { name: 'Aditya Birla Sun Life MF', category: 'Debt & Equity' },
  { name: 'UTI Mutual Fund', category: 'Index & Balanced' },
  { name: 'DSP Mutual Fund', category: 'Flexi & Small Cap' },
  { name: 'Bandhan Mutual Fund', category: 'Equity & Liquid' },
  { name: 'Motilal Oswal MF', category: 'High Growth Equity' },
  { name: 'PPFAS Mutual Fund', category: 'Value & Global Equity' },
  { name: 'Quant Mutual Fund', category: 'Momentum Equity' },
  { name: 'BSE StAR MF', category: 'Execution Exchange' },
  { name: 'CAMS / KFintech', category: 'Registrar & Transfer' }
];

const getCategoryColor = (cat) => {
  if (cat.includes('Equity')) return '#0EA5E9';
  if (cat.includes('Debt') || cat.includes('Liquid')) return '#10B981';
  if (cat.includes('Hybrid') || cat.includes('Balanced')) return '#F59E0B';
  if (cat.includes('Exchange') || cat.includes('Transfer')) return '#8B5CF6';
  return '#FF6A13';
};

export default function AMCPartners() {
  const repeated = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" style={{
      padding: '48px 0',
      background: 'linear-gradient(180deg, #060E1A 0%, #0A1628 50%, #0D1B2A 100%)',
      color: 'white',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Top shimmer line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 138, 216, 0.3), rgba(255, 106, 19, 0.3), transparent)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite'
      }} />

      {/* Bottom shimmer line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 106, 19, 0.3), rgba(0, 138, 216, 0.3), transparent)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite 2s'
      }} />

      <div className="container" style={{ textAlign: 'center', marginBottom: '28px' }}>
        <p style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '2.5px',
          color: '#64748B',
          fontWeight: 700
        }}>
          Authorized Distributor For India's Top 40+ SEBI-Regulated Mutual Fund Houses (AMCs)
        </p>
      </div>

      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div className="marquee-track">
          {repeated.map((p, idx) => {
            const dotColor = getCategoryColor(p.category);
            return (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 22px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: 'var(--radius-full)',
                  margin: '0 8px',
                  flexShrink: 0,
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: dotColor,
                  boxShadow: `0 0 8px ${dotColor}60`
                }} />
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#E2E8F0' }}>
                  {p.name}
                </span>
                <span style={{ 
                  fontSize: '10px', 
                  padding: '2px 8px', 
                  background: 'rgba(255,255,255,0.06)', 
                  borderRadius: 'var(--radius-full)', 
                  color: '#94A3B8',
                  fontWeight: 600,
                  letterSpacing: '0.3px'
                }}>
                  {p.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
