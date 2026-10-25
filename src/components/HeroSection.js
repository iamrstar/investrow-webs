'use client';

import { useState, useEffect } from 'react';
import { Shield, TrendingUp, Users, Award, CheckCircle2, ArrowRight, Sparkles, PhoneCall, Star } from 'lucide-react';

// Animated counter hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return count;
}

export default function HeroSection({ onLeadSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Mutual Funds & SIP Planning',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const yearsCount = useCountUp(23, 1800);
  const aumCount = useCountUp(250, 2000);
  const familyCount = useCountUp(3000, 2200);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and 10-digit mobile number.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: cleanPhone.slice(-10),
          service: formData.service,
          source: 'Website - Hero Quick Form',
          stage: 'New',
          callStatus: 'Pending',
          remarks: 'Submitted from Homepage Hero Section'
        })
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmitted(true);
      if (onLeadSubmitted) onLeadSubmitted();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
      background: 'linear-gradient(145deg, #FAFCFF 0%, #FFFFFF 30%, #FFFBF5 70%, #F8FAFC 100%)',
      padding: '72px 0 88px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Premium decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        left: '-150px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 138, 216, 0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'glow-pulse 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-180px',
        right: '-120px',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 106, 19, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'glow-pulse 5s ease-in-out infinite 1s'
      }} />

      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 138, 216, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 138, 216, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none'
      }} />

      {/* Floating decorative dots */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '8%',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--primary-blue)',
        opacity: 0.3,
        animation: 'float 5s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '65%',
        right: '4%',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: 'var(--accent-orange)',
        opacity: 0.4,
        animation: 'float 4s ease-in-out infinite 0.5s'
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '3%',
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: '#10B981',
        opacity: 0.3,
        animation: 'float 6s ease-in-out infinite 1s'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '56px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Value Prop & Authority */}
          <div>
            {/* Trust Pill */}
            <div className="trust-pill" style={{ marginBottom: '18px' }}>
              <div className="pulse-dot"></div>
              <span>AMFI Reg. Mutual Fund Distributor (ARN-194720)</span>
            </div>

            {/* Social Proof Avatar Stack */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 14px 6px 8px',
              background: '#FFFFFF',
              borderRadius: '9999px',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              boxShadow: '0 4px 16px rgba(10, 22, 40, 0.05)',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  src="/images/avatars/client_doctor.jpg" 
                  alt="Dr. Vikram Sharma" 
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} 
                />
                <img 
                  src="/images/avatars/client_entrepreneur.jpg" 
                  alt="Sunita Murmu" 
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF', marginLeft: '-10px' }} 
                />
                <img 
                  src="/images/avatars/client_executive.jpg" 
                  alt="Rajesh Agarwal" 
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF', marginLeft: '-10px' }} 
                />
                <img 
                  src="/images/avatars/client_tech.jpg" 
                  alt="Aniket Roy" 
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF', marginLeft: '-10px' }} 
                />
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #FFFFFF',
                  marginLeft: '-10px'
                }}>
                  +3k
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: '#F59E0B', fontSize: '12px', letterSpacing: '1px' }}>★★★★★</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--navy-deep)' }}>4.9/5</span>
                </div>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
                  Trusted by 3,000+ Investor Families
                </span>
              </div>
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '22px',
              color: 'var(--navy-deep)',
              lineHeight: 1.15
            }}>
              Make Your Money Work Harder. <br />
              <span className="gradient-text-orange">Build Wealth with Smart Mutual Fund Investing.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '540px'
            }}>
              Move beyond idle savings — get personalized Mutual Fund SIPs, disciplined compounding, and expert AMFI certified guidance tailored to your family's future milestones.
            </p>

            {/* Quick Feature Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px 16px',
              marginBottom: '40px'
            }}>
              {[
                'Goal-Based Scheme Selection',
                'Zero Upfront Advisory Fee',
                'Ongoing Portfolio Rebalancing',
                'Dedicated AMFI Certified Advisor'
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  color: 'var(--navy-deep)',
                  padding: '8px 0'
                }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={14} style={{ color: '#0284C7' }} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: '16px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'rgba(0, 138, 216, 0.04)',
                border: '1px solid rgba(0, 138, 216, 0.1)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                flex: '1',
                minWidth: '110px'
              }}>
                <div style={{ 
                  fontSize: '30px', 
                  fontWeight: 800, 
                  background: 'linear-gradient(135deg, #0284C7, #0EA5E9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1 
                }}>
                  {yearsCount}+
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>Years Advisory Exp.</div>
              </div>
              
              <div style={{
                background: 'rgba(255, 106, 19, 0.04)',
                border: '1px solid rgba(255, 106, 19, 0.1)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                flex: '1',
                minWidth: '110px'
              }}>
                <div style={{ 
                  fontSize: '30px', 
                  fontWeight: 800, 
                  background: 'linear-gradient(135deg, #FF8A3D, #E85B07)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1 
                }}>
                  ₹{aumCount}+ Cr
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>Total AUM Advised</div>
              </div>
              
              <div style={{
                background: 'rgba(16, 185, 129, 0.04)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                flex: '1',
                minWidth: '110px'
              }}>
                <div style={{ 
                  fontSize: '30px', 
                  fontWeight: 800, 
                  color: 'var(--navy-deep)',
                  lineHeight: 1 
                }}>
                  {familyCount.toLocaleString('en-IN')}+
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>Happy Investors</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Lead Capture Card */}
          <div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              padding: '36px',
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 24px 64px rgba(10, 22, 40, 0.1), 0 8px 24px rgba(10, 22, 40, 0.06)',
              border: '1px solid rgba(0, 138, 216, 0.12)',
              overflow: 'hidden'
            }}>
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-orange), var(--primary-blue))',
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 3s ease infinite'
              }} />

              {/* Highlight ribbon */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                background: 'var(--accent-orange-gradient)',
                color: 'white',
                fontSize: '11px',
                fontWeight: 800,
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 14px rgba(255, 106, 19, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={11} />
                100% Free This Week
              </div>

              {!submitted ? (
                <>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    background: 'rgba(240, 249, 255, 0.75)',
                    borderRadius: '12px',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    marginBottom: '16px',
                    marginTop: '8px'
                  }}>
                    <div style={{ position: 'relative', width: '42px', height: '42px', flexShrink: 0 }}>
                      <img 
                        src="/images/advisor/advisor_portrait.jpg" 
                        alt="Rajesh Sharma, Senior Wealth Advisor"
                        style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0EA5E9' }}
                      />
                      <span style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#22C55E',
                        border: '2px solid #FFFFFF'
                      }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy-deep)', lineHeight: 1.2 }}>
                        Rajesh Sharma • AMFI Certified MFD
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#0284C7', fontWeight: 700, marginTop: '2px' }}>
                        🟢 Active Senior Advisor • Desk Review Today
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px', lineHeight: 1.3 }}>
                      Claim Your Free Mutual Fund Portfolio Audit
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Get your existing schemes evaluated for expense ratios, overlapping holdings, and benchmark underperformance.
                    </p>
                  </div>

                  {error && (
                    <div style={{
                      padding: '10px 14px',
                      background: 'linear-gradient(135deg, #FEE2E2, #FECACA)',
                      color: '#B91C1C',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '13px',
                      marginBottom: '16px',
                      fontWeight: 500,
                      border: '1px solid rgba(185, 28, 28, 0.15)'
                    }}>
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--border-subtle)',
                          fontSize: '14px',
                          color: 'var(--text-primary)',
                          background: 'rgba(248, 250, 252, 0.5)',
                          transition: 'var(--transition-smooth)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary-blue)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
                          e.target.style.background = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-subtle)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.background = 'rgba(248, 250, 252, 0.5)';
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        10-Digit Mobile / WhatsApp Number *
                      </label>
                      <div style={{ display: 'flex' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0 14px',
                          background: 'linear-gradient(180deg, #F8FAFC, #F1F5F9)',
                          border: '1.5px solid var(--border-subtle)',
                          borderRight: 'none',
                          borderTopLeftRadius: 'var(--radius-sm)',
                          borderBottomLeftRadius: 'var(--radius-sm)',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: 'var(--text-secondary)'
                        }}>
                          +91
                        </span>
                        <input 
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="91020 70777"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderTopRightRadius: 'var(--radius-sm)',
                            borderBottomRightRadius: 'var(--radius-sm)',
                            border: '1.5px solid var(--border-subtle)',
                            fontSize: '14px',
                            color: 'var(--text-primary)',
                            background: 'rgba(248, 250, 252, 0.5)',
                            transition: 'var(--transition-smooth)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--primary-blue)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
                            e.target.style.background = 'white';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--border-subtle)';
                            e.target.style.boxShadow = 'none';
                            e.target.style.background = 'rgba(248, 250, 252, 0.5)';
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Primary Mutual Fund Goal
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--border-subtle)',
                          fontSize: '14px',
                          color: 'var(--text-primary)',
                          background: 'rgba(248, 250, 252, 0.5)',
                          cursor: 'pointer',
                          transition: 'var(--transition-smooth)'
                        }}
                      >
                        <option value="Mutual Funds & SIP Planning">Start New Monthly SIP</option>
                        <option value="Lumpsum Investment Strategy">Lumpsum Investment (STP)</option>
                        <option value="Tax-Saving Mutual Funds (ELSS)">Tax-Saving ELSS (Section 80C)</option>
                        <option value="Free Portfolio Audit & Rebalancing">Existing Portfolio Health Check</option>
                        <option value="Retirement & Goal Planning">Retirement / Child Education Goal</option>
                        <option value="Monthly Cashflow via SWP">Monthly Cashflow via SWP</option>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="btn-orange"
                      style={{
                        width: '100%',
                        padding: '15px',
                        fontSize: '15px',
                        marginTop: '4px',
                        opacity: loading ? 0.85 : 1
                      }}
                    >
                      {loading ? 'Submitting...' : 'Claim Free Consultation 🚀'}
                    </button>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      marginTop: '2px'
                    }}>
                      <span>🔒</span>
                      <span>100% Confidential. No Spam. AMFI Reg. ARN-194720.</span>
                    </div>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '28px 0' }}>
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
                    color: '#16A34A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px',
                    boxShadow: '0 8px 24px rgba(22, 163, 74, 0.15)'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                    Request Received!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '22px', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Our certified mutual fund advisor will call you at <strong>+91 {formData.phone}</strong> shortly.
                  </p>
                  <a 
                    href={`https://wa.me/919102070777?text=Hi%20Investrow,%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(formData.service)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-blue"
                    style={{ width: '100%', padding: '14px' }}
                  >
                    💬 Connect on WhatsApp Now
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
