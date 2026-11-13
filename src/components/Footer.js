'use client';

import { Phone, Mail, MapPin, ShieldCheck, MessageSquare, Smartphone } from 'lucide-react';

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
        padding: 'clamp(20px, 4vw, 32px) 0',
        background: 'rgba(255, 255, 255, 0.01)',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '20px',
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

        {/* App Download Banner in Footer */}
        <div style={{
          marginTop: '44px',
          background: 'linear-gradient(135deg, rgba(15, 30, 54, 0.8) 0%, rgba(10, 22, 40, 0.95) 100%)',
          borderRadius: '18px',
          padding: '24px 28px',
          border: '1px solid rgba(0, 138, 216, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '520px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #008AD8 0%, #005696 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 6px 16px rgba(0, 138, 216, 0.35)',
              flexShrink: 0
            }}>
              <Smartphone size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  Download Investrow Mobile App
                </h4>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 800,
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ADE80',
                  padding: '2px 7px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(74, 222, 128, 0.3)'
                }}>
                  Live on Android
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0, lineHeight: 1.4 }}>
                Track your mutual funds, check daily portfolio NAV, and manage SIP compounding anytime on Google Play Store. iOS App Store coming soon.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#000000',
                color: '#FFFFFF',
                padding: '10px 18px',
                borderRadius: '12px',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#008AD8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.813c-.347.375-.55.947-.55 1.688v16.998c0 .741.203 1.313.55 1.688l.09.082 9.53-9.53v-.223l-9.53-9.53-.09.082z" fill="#00E676"/>
                <path d="M16.408 15.632l-3.179-3.179v-.223l3.179-3.179.072.041 3.766 2.14c1.076.611 1.076 1.61 0 2.221l-3.766 2.14-.072.04z" fill="#FFD54F"/>
                <path d="M16.48 15.592L13.229 12.23 3.609 21.85c.355.378.948.423 1.623.04l11.248-6.298z" fill="#FF3D00"/>
                <path d="M16.48 8.868L5.232 2.57c-.675-.383-1.268-.338-1.623.04l9.62 9.62 3.251-3.362z" fill="#00B0FF"/>
              </svg>
              <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#94A3B8', fontWeight: 600 }}>GET IT ON</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>Google Play</div>
              </div>
            </a>

            {/* Apple App Store (Coming Soon) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                color: '#94A3B8',
                padding: '10px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                userSelect: 'none'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#94A3B8">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.02.62-2.67 1.39-.58.67-1.09 1.76-.95 2.82 1.03.08 2.06-.52 2.68-1.27z"/>
              </svg>
              <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#64748B', fontWeight: 600 }}>Download on the</div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#CBD5E1', fontFamily: 'var(--font-heading)' }}>App Store</div>
              </div>
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '10px',
                background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                color: '#FFFFFF',
                fontSize: '9.5px',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '9999px',
                letterSpacing: '0.4px',
                boxShadow: '0 2px 6px rgba(255, 106, 19, 0.4)'
              }}>
                Coming Soon
              </span>
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
