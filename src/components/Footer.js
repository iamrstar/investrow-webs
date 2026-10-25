'use client';

import { Phone, Mail, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #060E1A 0%, #030912 100%)',
      color: '#94A3B8',
      fontSize: '14px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative top shimmer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 138, 216, 0.3), rgba(255, 106, 19, 0.2), transparent)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite'
      }} />

      {/* Background ambient glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 138, 216, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 106, 19, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Top Credentials Ribbon */}
      <div style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '32px 0',
        background: 'rgba(255, 255, 255, 0.01)',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          {[
            { label: 'AMFI Registered MFD', value: 'ARN-194720', color: '#0EA5E9', bg: 'rgba(14, 165, 233, 0.1)' },
            { label: 'Exchange MF Platform', value: 'BSE Member Code: 55533', color: '#FF6A13', bg: 'rgba(255, 106, 19, 0.1)' },
            { label: 'Corporate Identity', value: 'CIN: U67190JH2021PTC016813', color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' }
          ].map((cred, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-md)',
                background: cred.bg,
                color: cred.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: `1px solid ${cred.color}20`
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#475569', fontWeight: 700, letterSpacing: '0.5px' }}>{cred.label}</div>
                <div style={{ fontSize: idx === 2 ? '12.5px' : '14px', fontWeight: 700, color: '#E2E8F0' }}>{cred.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '64px 24px 44px', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '40px'
        }} className="footer-grid">

          {/* Col 1: About */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img 
                src="/investrow-logo.png" 
                alt="Investrow Financial Services" 
                style={{ 
                  height: '44px', 
                  width: 'auto', 
                  background: 'white', 
                  padding: '6px 14px', 
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#64748B', marginBottom: '22px' }}>
              Investrow Financial Services Pvt. Ltd. is an AMFI-registered Mutual Fund Distributor (ARN-194720) dedicated to helping families build generational wealth through disciplined Systematic Investment Plans (SIPs) and tailored mutual fund strategies.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href="https://wa.me/919102070777" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22C55E',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <MessageSquare size={16} />
              </a>
              <a 
                href="tel:+919102070777" 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 106, 19, 0.1)',
                  border: '1px solid rgba(255, 106, 19, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-orange)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <Phone size={16} />
              </a>
              <a 
                href="mailto:info@investrow.in" 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38BDF8',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Mutual Fund Services */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#E2E8F0', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Mutual Fund Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13.5px' }}>
              {[
                'Systematic Investment Plan (SIP)',
                'Lumpsum & STP Strategies',
                'Tax-Saving ELSS (80C)',
                'Equity & Flexi-Cap Funds',
                'Hybrid & Balanced Advantage',
                'Liquid & Emergency Funds',
                'Regular Income via SWP'
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="/#services" 
                    style={{ 
                      color: '#64748B', 
                      transition: 'var(--transition-smooth)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#E2E8F0';
                      e.target.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#64748B';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Calculators */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#E2E8F0', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Wealth Calculators
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13.5px' }}>
              {[
                'SIP Compounding Calculator',
                '₹1 Crore Goal Simulator',
                'Child Higher Education Goal',
                'Retirement Corpus Planner',
                'Step-Up SIP Calculator'
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="/#calculators" 
                    style={{ 
                      color: '#64748B', 
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#E2E8F0';
                      e.target.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#64748B';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#E2E8F0', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={16} style={{ color: '#0EA5E9' }} />
                </div>
                <span style={{ color: '#64748B', lineHeight: 1.5 }}>Investrow Financial Services Pvt. Ltd., Dhanbad, Jharkhand, India.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255, 106, 19, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={16} style={{ color: '#FF6A13' }} />
                </div>
                <div>
                  <a href="tel:+919102070777" style={{ color: '#E2E8F0', display: 'block', fontWeight: 600 }}>+91 91020 70777</a>
                  <a href="tel:+919102050555" style={{ color: '#64748B' }}>+91 91020 50555</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={16} style={{ color: '#38BDF8' }} />
                </div>
                <a href="mailto:info@investrow.in" style={{ color: '#64748B' }}>info@investrow.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer Box */}
        <div style={{
          marginTop: '52px',
          padding: '22px 24px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '12px',
          lineHeight: 1.7,
          color: '#475569'
        }}>
          <strong style={{ color: '#94A3B8', display: 'block', marginBottom: '6px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Statutory Regulatory Disclaimer:
          </strong>
          Mutual fund investments are subject to market risks, read all scheme related documents carefully. 
          Investrow Financial Services Pvt. Ltd. is an AMFI-registered Mutual Fund Distributor (ARN-194720). 
          Any calculations, calculators, or projections on this website are illustrative in nature based on assumed historical rates of return and do not guarantee future performance. 
          Past performance is no guarantee of future returns.
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: '28px',
          paddingTop: '22px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12.5px',
          color: '#475569'
        }}>
          <div>
            © {new Date().getFullYear()} Investrow Financial Services Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/about" 
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              About Us
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <a 
              href="/team" 
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              Our Team
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <a 
              href="/awards" 
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              Awards & Recognition
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <a 
              href="/privacy" 
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <a 
              href="/terms" 
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              Terms & Conditions
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#0EA5E9' }} />
              AMFI ARN-194720
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FF6A13' }} />
              BSE Member: 55533
            </span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
