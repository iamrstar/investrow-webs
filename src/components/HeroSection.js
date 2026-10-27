'use client';

import { useState, useEffect } from 'react';
import { Shield, TrendingUp, Users, Award, CheckCircle2, ArrowRight, Sparkles, PhoneCall, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Slideshow dataset with authentic human stories & brand metrics
const HERO_SLIDES = [
  {
    id: 'family',
    title: 'Family Wealth & SIP',
    emoji: '👨‍👩‍👧',
    src: '/images/hero/hero_family_wealth.jpg',
    alt: 'Happy Indian family building long-term wealth with Investrow Mutual Funds',
    topBadge: '100% Free Audit',
    topBadgeBg: 'var(--accent-orange-gradient)',
    leftBadge: {
      category: 'SIP Compounding',
      stat: '₹10k/mo → ₹1.18 Cr*',
      sub: '+14.8% Avg. CAGR (20 Yrs)',
      icon: TrendingUp,
      iconColor: '#0284C7',
      iconBg: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)'
    },
    rightBadge: {
      stars: '★★★★★',
      rating: '4.9/5',
      stat: '3,000+ Families',
      sub: 'Zero Bias Advisory',
      icon: Users,
      iconColor: '#FF6A13',
      iconBg: 'linear-gradient(135deg, #FFF1EB, #FFE2D4)'
    }
  },
  {
    id: 'advisor',
    title: '1-on-1 AMFI Advisory',
    emoji: '🤝',
    src: '/images/hero/hero_advisor_investor.jpg',
    alt: 'Certified AMFI Advisor reviewing mutual fund portfolio on tablet with Indian couple',
    topBadge: 'Dedicated Desk',
    topBadgeBg: 'linear-gradient(135deg, #008AD8, #006FB0)',
    leftBadge: {
      category: 'Portfolio Audit',
      stat: 'Zero Expense Drag',
      sub: '23+ Years MFD Expertise',
      icon: Shield,
      iconColor: '#16A34A',
      iconBg: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)'
    },
    rightBadge: {
      stars: '★★★★★',
      rating: '4.9/5',
      stat: '₹250+ Cr AUM',
      sub: 'AMFI Certified MFD',
      icon: Award,
      iconColor: '#D97706',
      iconBg: 'linear-gradient(135deg, #FEF3C7, #FDE68A)'
    }
  },
  {
    id: 'retirement',
    title: 'Retirement & SWP',
    emoji: '🌅',
    src: '/images/services/retirement-swp.jpg',
    alt: 'Senior Indian couple enjoying peaceful retirement with monthly mutual fund SWP cashflow',
    topBadge: 'Tax-Smart SWP',
    topBadgeBg: 'linear-gradient(135deg, #10B981, #059669)',
    leftBadge: {
      category: 'Monthly Cashflow',
      stat: 'Disciplined SWP Income',
      sub: 'Capital Preservation Focus',
      icon: TrendingUp,
      iconColor: '#0284C7',
      iconBg: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)'
    },
    rightBadge: {
      stars: '★★★★★',
      rating: '5.0/5',
      stat: 'Peaceful Living',
      sub: 'Balanced Hybrid Funds',
      icon: Users,
      iconColor: '#10B981',
      iconBg: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)'
    }
  }
];

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
  
  // Slideshow state with silent auto-play
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow seamlessly every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

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
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: '44px',
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

          {/* Right Column: Premium Hero Visual Showcase & Lead Capture */}
          <div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '24px',
              boxShadow: '0 24px 64px rgba(10, 22, 40, 0.1), 0 8px 24px rgba(10, 22, 40, 0.05)',
              border: '1px solid rgba(0, 138, 216, 0.14)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Top accent gradient bar */}
              <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #008AD8 0%, #FF6A13 50%, #008AD8 100%)',
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 4s ease infinite'
              }} />

              {/* View Switcher Tabs (Equal Flex Proportions) */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                background: '#F8FAFC',
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                overflowX: 'auto'
              }}>
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      flex: '1',
                      padding: '7px 12px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.25s ease',
                      background: idx === currentSlide 
                        ? (idx === 0 
                            ? 'linear-gradient(135deg, #008AD8, #006FB0)' 
                            : idx === 1 
                              ? 'linear-gradient(135deg, #FF6A13, #E85B07)' 
                              : 'linear-gradient(135deg, #10B981, #059669)')
                        : '#FFFFFF',
                      color: idx === currentSlide ? '#FFFFFF' : '#475569',
                      border: idx === currentSlide ? 'none' : '1px solid #CBD5E1',
                      boxShadow: idx === currentSlide ? '0 2px 8px rgba(10, 22, 40, 0.15)' : 'none'
                    }}
                  >
                    <span>{slide.emoji}</span>
                    <span>{slide.title}</span>
                  </button>
                ))}
              </div>

              {/* Featured Visual Image Slideshow */}
              <div 
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  position: 'relative',
                  height: '290px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#0A1628'
                }}
              >
                {/* Cross-fade Slide Images */}
                {HERO_SLIDES.map((slide, idx) => (
                  <img 
                    key={slide.id}
                    src={slide.src}
                    alt={slide.alt}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: idx === currentSlide ? 1 : 0,
                      transform: idx === currentSlide ? 'scale(1)' : 'scale(1.05)',
                      transition: 'opacity 0.75s ease-in-out, transform 1.2s ease-out',
                      zIndex: idx === currentSlide ? 1 : 0,
                      pointerEvents: 'none'
                    }}
                  />
                ))}

                {/* Subtle vignette gradient overlays to ensure badges pop */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.45) 0%, transparent 35%, transparent 60%, rgba(10, 22, 40, 0.65) 100%)',
                  pointerEvents: 'none',
                  zIndex: 2
                }} />

                {/* Slide Nav Arrow: Left */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(10, 22, 40, 0.65)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    cursor: 'pointer',
                    zIndex: 6,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 138, 216, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(10, 22, 40, 0.65)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Slide Nav Arrow: Right */}
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(10, 22, 40, 0.65)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    cursor: 'pointer',
                    zIndex: 6,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 106, 19, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(10, 22, 40, 0.65)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronRight size={18} />
                </button>

                {/* Floating Badge Top-Left: Static AMFI Verified Shield */}
                <div className="hero-badge-top-left" style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(10, 22, 40, 0.85)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                  zIndex: 4
                }}>
                  <Shield size={13} style={{ color: '#22C55E' }} />
                  <span>AMFI ARN-194720 • BSE 55533</span>
                </div>

                {/* Floating Badge Top-Right: Dynamic Offer / Status */}
                <div className="hero-badge-top-right" key={`top-${currentSlide}`} style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  background: HERO_SLIDES[currentSlide].topBadgeBg,
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.4px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  zIndex: 4,
                  animation: 'fadeIn 0.4s ease'
                }}>
                  <Sparkles size={11} />
                  <span>{HERO_SLIDES[currentSlide].topBadge}</span>
                </div>

                {/* Floating Badge Bottom-Left: Dynamic Compounding Metric */}
                <div className="hero-badge-bottom-left" key={`bottom-left-${currentSlide}`} style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                  padding: '8px 12px',
                  boxShadow: '0 8px 24px rgba(10, 22, 40, 0.25)',
                  border: '1px solid rgba(0, 138, 216, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 4,
                  animation: 'fadeIn 0.4s ease'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: HERO_SLIDES[currentSlide].leftBadge.iconBg,
                    color: HERO_SLIDES[currentSlide].leftBadge.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {(() => {
                      const IconComp = HERO_SLIDES[currentSlide].leftBadge.icon;
                      return <IconComp size={18} />;
                    })()}
                  </div>
                  <div>
                    <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      {HERO_SLIDES[currentSlide].leftBadge.category}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy-deep)', lineHeight: 1.2 }}>
                      {HERO_SLIDES[currentSlide].leftBadge.stat}
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#16A34A', fontWeight: 700 }}>
                      {HERO_SLIDES[currentSlide].leftBadge.sub}
                    </div>
                  </div>
                </div>

                {/* Floating Badge Bottom-Right: Dynamic Trust Metric */}
                <div className="hero-badge-bottom-right" key={`bottom-right-${currentSlide}`} style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                  padding: '8px 12px',
                  boxShadow: '0 8px 24px rgba(10, 22, 40, 0.25)',
                  border: '1px solid rgba(255, 106, 19, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  zIndex: 4,
                  animation: 'fadeIn 0.4s ease'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: HERO_SLIDES[currentSlide].rightBadge.iconBg,
                    color: HERO_SLIDES[currentSlide].rightBadge.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {(() => {
                      const IconComp = HERO_SLIDES[currentSlide].rightBadge.icon;
                      return <IconComp size={17} />;
                    })()}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <span style={{ color: '#F59E0B', fontSize: '10px' }}>{HERO_SLIDES[currentSlide].rightBadge.stars}</span>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--navy-deep)' }}>{HERO_SLIDES[currentSlide].rightBadge.rating}</span>
                    </div>
                    <div style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--navy-deep)', lineHeight: 1.2 }}>
                      {HERO_SLIDES[currentSlide].rightBadge.stat}
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#64748B', fontWeight: 600 }}>
                      {HERO_SLIDES[currentSlide].rightBadge.sub}
                    </div>
                  </div>
                </div>

                {/* Progress Indicators (Pills) at Bottom Center */}
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 5,
                  background: 'rgba(10, 22, 40, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        width: idx === currentSlide ? '20px' : '6px',
                        height: '6px',
                        borderRadius: '9999px',
                        background: idx === currentSlide ? '#FF6A13' : 'rgba(255, 255, 255, 0.45)',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Consultation Booking Area */}
              <div style={{ padding: '20px 24px 22px' }}>
                {!submitted ? (
                  <>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-deep)', lineHeight: 1.25 }}>
                          Get Your Free Mutual Fund & SIP Blueprint
                        </h3>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          Personalized scheme recommendations & portfolio health check.
                        </p>
                      </div>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        background: 'rgba(34, 197, 94, 0.1)',
                        borderRadius: '9999px',
                        color: '#15803D',
                        fontSize: '11px',
                        fontWeight: 700
                      }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E' }} />
                        <span>Advisor Available</span>
                      </div>
                    </div>

                    {error && (
                      <div style={{
                        padding: '8px 12px',
                        background: 'linear-gradient(135deg, #FEE2E2, #FECACA)',
                        color: '#B91C1C',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '12px',
                        marginBottom: '12px',
                        fontWeight: 600,
                        border: '1px solid rgba(185, 28, 28, 0.15)'
                      }}>
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px'
                      }} className="hero-inputs-row">
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                            Your Name *
                          </label>
                          <input 
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '11px 14px',
                              borderRadius: 'var(--radius-sm)',
                              border: '1.5px solid var(--border-subtle)',
                              fontSize: '13.5px',
                              color: 'var(--text-primary)',
                              background: '#F8FAFC',
                              transition: 'var(--transition-smooth)'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = 'var(--primary-blue)';
                              e.target.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
                              e.target.style.background = '#FFFFFF';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'var(--border-subtle)';
                              e.target.style.boxShadow = 'none';
                              e.target.style.background = '#F8FAFC';
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                            Mobile / WhatsApp *
                          </label>
                          <div style={{ display: 'flex' }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              padding: '0 10px',
                              background: '#F1F5F9',
                              border: '1.5px solid var(--border-subtle)',
                              borderRight: 'none',
                              borderTopLeftRadius: 'var(--radius-sm)',
                              borderBottomLeftRadius: 'var(--radius-sm)',
                              fontSize: '13px',
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
                                padding: '11px 14px',
                                borderTopRightRadius: 'var(--radius-sm)',
                                borderBottomRightRadius: 'var(--radius-sm)',
                                border: '1.5px solid var(--border-subtle)',
                                fontSize: '13.5px',
                                color: 'var(--text-primary)',
                                background: '#F8FAFC',
                                transition: 'var(--transition-smooth)'
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = 'var(--primary-blue)';
                                e.target.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
                                e.target.style.background = '#FFFFFF';
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = 'var(--border-subtle)';
                                e.target.style.boxShadow = 'none';
                                e.target.style.background = '#F8FAFC';
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                          Primary Investment Goal
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1.5px solid var(--border-subtle)',
                            fontSize: '13px',
                            color: 'var(--text-primary)',
                            background: '#F8FAFC',
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
                          padding: '13px',
                          fontSize: '14.5px',
                          fontWeight: 800,
                          marginTop: '2px',
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
                        marginTop: '1px'
                      }}>
                        <span>🔒</span>
                        <span>100% Confidential • Zero Spam • AMFI Reg. ARN-194720</span>
                      </div>
                    </form>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '24px 0' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
                      color: '#16A34A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 8px 24px rgba(22, 163, 74, 0.15)'
                    }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                      Request Received!
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.5 }}>
                      Thank you, <strong>{formData.name}</strong>. Our certified mutual fund advisor will reach out to you at <strong>+91 {formData.phone}</strong> shortly.
                    </p>
                    <a 
                      href={`https://wa.me/919102070777?text=Hi%20Investrow,%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(formData.service)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue"
                      style={{ width: '100%', padding: '13px', fontSize: '14px', fontWeight: 700 }}
                    >
                      💬 Connect on WhatsApp Now
                    </a>
                  </div>
                )}
              </div>
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
        @media (max-width: 540px) {
          .hero-inputs-row {
            grid-template-columns: 1fr !important;
          }
          .hero-badge-top-left, .hero-badge-top-right {
            font-size: 10px !important;
            padding: 4px 8px !important;
          }
          .hero-badge-bottom-left, .hero-badge-bottom-right {
            padding: 6px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
