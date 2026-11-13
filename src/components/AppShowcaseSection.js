'use client';

import { Smartphone, ShieldCheck, CheckCircle2, TrendingUp, Bell, QrCode, ArrowRight, Star } from 'lucide-react';

export default function AppShowcaseSection() {
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial';

  return (
    <section 
      id="app-download"
      style={{
        padding: 'clamp(56px, 7vw, 96px) 0',
        background: 'linear-gradient(180deg, #0A1628 0%, #071220 50%, #040A12 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 138, 216, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '15%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 106, 19, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center'
        }} className="app-showcase-grid">

          {/* Left Column: Information, Features & Badges */}
          <div>
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(0, 138, 216, 0.12)',
              border: '1px solid rgba(0, 138, 216, 0.3)',
              color: '#38BDF8',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              marginBottom: '18px'
            }}>
              <Smartphone size={14} style={{ color: '#008AD8' }} />
              <span>OFFICIAL INVESTROW MOBILE APP</span>
              <span style={{
                background: '#22C55E',
                color: '#0F172A',
                fontSize: '10px',
                fontWeight: 800,
                padding: '1px 6px',
                borderRadius: '9999px'
              }}>
                LIVE NOW
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.18,
              color: '#FFFFFF',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              Invest Smart. Compound Faster.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #38BDF8 0%, #008AD8 60%, #FF8A3D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Directly From Your Pocket.
              </span>
            </h2>

            <p style={{
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: '#94A3B8',
              lineHeight: 1.65,
              marginBottom: '28px',
              maxWidth: '560px'
            }}>
              Get the official Investrow App to track your mutual fund portfolio across 40+ AMCs, start automated step-up SIPs, calculate goal compounding, and speak directly with your AMFI certified wealth desk.
            </p>

            {/* Core Feature Pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
              marginBottom: '32px'
            }}>
              {[
                { title: 'Unified MF Portfolio', desc: 'Consolidated tracking for SIP, ELSS & Lumpsums across SBI, HDFC, ICICI & more.' },
                { title: 'Real-Time Compounding', desc: 'Live NAV updates, XIRR analysis & 15%–25% alpha milestone projections.' },
                { title: 'Zero Platform Friction', desc: 'Instant paperless KYC onboarding with BSE StAR MF infrastructure.' },
                { title: 'Direct Advisory Chat', desc: 'Connect 1-on-1 with Surendra Prasad & the AMFI advisory desk.' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '12px',
                    padding: '12px 14px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <CheckCircle2 size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                    <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#F1F5F9' }}>{item.title}</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8', lineHeight: 1.45, paddingLeft: '23px' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              {/* Google Play Store Badge */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#000000',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: '14px',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#008AD8';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 138, 216, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 1.813c-.347.375-.55.947-.55 1.688v16.998c0 .741.203 1.313.55 1.688l.09.082 9.53-9.53v-.223l-9.53-9.53-.09.082z" fill="#00E676"/>
                  <path d="M16.408 15.632l-3.179-3.179v-.223l3.179-3.179.072.041 3.766 2.14c1.076.611 1.076 1.61 0 2.221l-3.766 2.14-.072.04z" fill="#FFD54F"/>
                  <path d="M16.48 15.592L13.229 12.23 3.609 21.85c.355.378.948.423 1.623.04l11.248-6.298z" fill="#FF3D00"/>
                  <path d="M16.48 8.868L5.232 2.57c-.675-.383-1.268-.338-1.623.04l9.62 9.62 3.251-3.362z" fill="#00B0FF"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#94A3B8', fontWeight: 600 }}>
                    GET IT ON
                  </div>
                  <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    Google Play
                  </div>
                </div>
              </a>

              {/* Apple App Store Badge (Coming Soon) */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: '#94A3B8',
                  padding: '12px 22px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  userSelect: 'none'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#94A3B8">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.02.62-2.67 1.39-.58.67-1.09 1.76-.95 2.82 1.03.08 2.06-.52 2.68-1.27z"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#64748B', fontWeight: 600 }}>
                    DOWNLOAD ON THE
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#CBD5E1', fontFamily: 'var(--font-heading)' }}>
                    Apple App Store
                  </div>
                </div>
                <span style={{
                  position: 'absolute',
                  top: '-9px',
                  right: '12px',
                  background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  letterSpacing: '0.4px',
                  boxShadow: '0 2px 6px rgba(255, 106, 19, 0.4)'
                }}>
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Regulatory Assurance */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '22px',
              fontSize: '11.5px',
              color: '#64748B'
            }}>
              <span>AMFI ARN-194720</span>
              <span>•</span>
              <span>BSE StAR MF Member 55533</span>
              <span>•</span>
              <span>100% Free Download</span>
            </div>
          </div>

          {/* Right Column: Visual Phone Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Glow halo behind mockup */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 138, 216, 0.25) 0%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0
            }} />

            {/* Phone Frame */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '300px',
              maxWidth: '100%',
              background: '#0F1E36',
              borderRadius: '36px',
              border: '6px solid #1E293B',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 138, 216, 0.2)',
              overflow: 'hidden',
              padding: '16px'
            }}>
              {/* Dynamic Island / Speaker Notch */}
              <div style={{
                width: '90px',
                height: '18px',
                background: '#0A1628',
                borderRadius: '12px',
                margin: '0 auto 16px'
              }} />

              {/* In-App Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Good Morning,</div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF' }}>Investrow Investor</div>
                </div>
                <div style={{
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  color: '#22C55E',
                  fontSize: '10px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px'
                }}>
                  <ShieldCheck size={11} /> Verified
                </div>
              </div>

              {/* Total Portfolio Card inside phone */}
              <div style={{
                background: 'linear-gradient(135deg, #008AD8 0%, #005696 100%)',
                borderRadius: '16px',
                padding: '16px',
                color: '#FFFFFF',
                marginBottom: '14px',
                boxShadow: '0 8px 24px rgba(0, 138, 216, 0.35)'
              }}>
                <div style={{ fontSize: '11px', opacity: 0.85, marginBottom: '4px' }}>Total Advised Portfolio</div>
                <div style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
                  ₹48,50,000
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                  <span>Total Gain: <strong style={{ color: '#86EFAC' }}>+₹14,20,500</strong></span>
                  <span style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    fontWeight: 700
                  }}>
                    +29.28% XIRR
                  </span>
                </div>
              </div>

              {/* Mini Active SIPs List */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Active Compounding SIPs (4)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { fund: 'HDFC Mid-Cap Opportunities', sip: '₹15,000/mo', return: '+22.4%', color: '#38BDF8' },
                    { fund: 'Nippon India Small Cap', sip: '₹10,000/mo', return: '+28.1%', color: '#22C55E' },
                    { fund: 'Parag Parikh Flexi Cap', sip: '₹20,000/mo', return: '+18.6%', color: '#FF8A3D' }
                  ].map((fund, i) => (
                    <div 
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderRadius: '10px',
                        padding: '8px 10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFFFFF' }}>{fund.fund}</div>
                        <div style={{ fontSize: '9.5px', color: '#94A3B8' }}>{fund.sip}</div>
                      </div>
                      <span style={{ fontSize: '10.5px', fontWeight: 800, color: fund.color }}>
                        {fund.return}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast Action CTA in mock */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  width: '100%',
                  padding: '10px',
                  borderRadius: '10px',
                  background: 'var(--accent-orange-gradient)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(255, 106, 19, 0.4)'
                }}
              >
                Download On Play Store <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .app-showcase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

