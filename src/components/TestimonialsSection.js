'use client';

import { Star, CheckCircle, Quote, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Vikram Sharma',
    role: 'Senior Consultant & Surgeon',
    location: 'Dhanbad, Jharkhand',
    image: '/images/avatars/client_doctor.jpg',
    tenure: 'Client for 4+ Years',
    goal: 'Child Higher Education Goal',
    tagColor: '#0EA5E9',
    tagBg: '#E0F2FE',
    rating: 5,
    quote: 'As a busy surgeon, I had zero time to track markets daily. Investrow restructured my haphazard investments into a disciplined 3-fund SIP strategy. My daughter’s medical university corpus is already 40% ahead of target.'
  },
  {
    name: 'Sunita Murmu',
    role: 'Managing Director & Entrepreneur',
    location: 'Ranchi, Jharkhand',
    image: '/images/avatars/client_entrepreneur.jpg',
    tenure: 'Client for 3+ Years',
    goal: 'Business Surplus & Alpha Growth',
    tagColor: '#FF6A13',
    tagBg: '#FFF1EB',
    rating: 5,
    quote: 'Before consulting Investrow, my corporate surplus was parked in low-yield traditional FDs losing to inflation. Their advisory team helped us allocate into tax-efficient Flexi-Cap and Arbitrage funds with total liquidity.'
  },
  {
    name: 'Rajesh Agarwal',
    role: 'Industrialist & Former PSU GM',
    location: 'Bokaro Steel City',
    image: '/images/avatars/client_executive.jpg',
    tenure: 'Client for 6+ Years',
    goal: 'Retirement Peace & Regular SWP',
    tagColor: '#059669',
    tagBg: '#ECFDF5',
    rating: 5,
    quote: 'I wanted monthly post-retirement peace of mind without touching my principal. Investrow set up a Systematic Withdrawal Plan (SWP) that deposits income like a monthly pension while my capital continues compounding.'
  },
  {
    name: 'Aniket Roy',
    role: 'Lead Software Architect',
    location: 'Bengaluru / Jharkhand',
    image: '/images/avatars/client_tech.jpg',
    tenure: 'Client for 2+ Years',
    goal: '15% Annual Step-Up SIP (Financial Independence)',
    tagColor: '#8B5CF6',
    tagBg: '#F3E8FF',
    rating: 5,
    quote: 'Their Smart Calculator opened my eyes to the power of Annual Step-Up SIPs. Rajesh and the team selected high-conviction mid and small-cap alpha compounders that have delivered outstanding compounding.'
  }
];

export default function TestimonialsSection({ onOpenConsultModal }) {
  return (
    <section id="testimonials" style={{
      padding: '96px 0',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background aura */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(0, 138, 216, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div className="trust-pill" style={{ margin: '0 auto 16px', width: 'fit-content' }}>
            <Sparkles size={12} style={{ color: 'var(--accent-orange)' }} />
            <span>Real Investors • Real Wealth Journeys</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: 'var(--navy-deep)',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            Trusted by 3,000+ Families to <br />
            <span className="gradient-text-orange">Build Generational Wealth</span>
          </h2>

          <p style={{
            fontSize: '16.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            From senior doctors and business directors to tech leaders and retirees across Jharkhand & pan-India, see how disciplined mutual fund advisory changes lives.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '48px'
        }} className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 10px 30px rgba(10, 22, 40, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 22, 40, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(0, 138, 216, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(10, 22, 40, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
              }}
            >
              <div>
                {/* Goal Tag */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  background: t.tagBg,
                  color: t.tagColor,
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  <TrendingUp size={12} /> {t.goal}
                </div>

                {/* Stars Rating */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '13.5px',
                  lineHeight: 1.65,
                  color: '#334155',
                  marginBottom: '24px',
                  position: 'relative'
                }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author Strip with Human Face Portrait */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '18px',
                borderTop: '1px solid #F1F5F9'
              }}>
                <div style={{ position: 'relative', width: '46px', height: '46px', flexShrink: 0 }}>
                  <img 
                    src={t.image} 
                    alt={t.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #0EA5E9',
                      boxShadow: '0 2px 8px rgba(14, 165, 233, 0.2)'
                    }} 
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    background: '#22C55E',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #FFFFFF'
                  }}>
                    <CheckCircle size={9} strokeWidth={3} />
                  </div>
                </div>

                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: 'var(--navy-deep)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#64748B',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#0EA5E9', fontWeight: 700, marginTop: '2px' }}>
                    📍 {t.location} • {t.tenure}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner with Advisor Consultation */}
        <div style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px 40px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(10, 22, 40, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img 
              src="/images/advisor/advisor_portrait.jpg" 
              alt="Rajesh Sharma, Senior AMFI Advisor"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #FF8A3D',
                boxShadow: '0 4px 16px rgba(255, 106, 19, 0.35)',
                flexShrink: 0
              }}
            />
            <div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>
                AMFI Registered Advisory Desk (ARN-194720)
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                Ready to Join 3,000+ Families Compounding Their Future?
              </h3>
              <p style={{ fontSize: '13.5px', color: '#94A3B8', margin: 0 }}>
                Get a complimentary portfolio review with Rajesh Sharma and our senior AMFI wealth advisory team.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenConsultModal && onOpenConsultModal('Testimonial Banner Consultation')}
              className="btn-orange"
              style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '10px' }}
            >
              Book Free Advisory Call ➔
            </button>
            <a
              href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20review%20my%20Mutual%20Fund%20Portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                padding: '12px 20px',
                fontSize: '14px',
                borderRadius: '10px',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
