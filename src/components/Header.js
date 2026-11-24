'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight, Menu, X, ShieldCheck, Smartphone, ExternalLink } from 'lucide-react';
import BrandTagline from './BrandTagline';

export default function Header({ onOpenConsultModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(104);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <>
      <header 
        ref={headerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid rgba(226, 232, 240, 0.4)',
          transition: 'all 0.25s ease',
          boxShadow: scrolled ? '0 10px 30px rgba(10, 22, 40, 0.08)' : '0 2px 8px rgba(10, 22, 40, 0.03)'
        }}
      >
      {/* Top Regulatory & Direct Helpline Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)',
        color: '#94A3B8',
        fontSize: '12px',
        padding: '6px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle shimmer effect on top bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 138, 216, 0.3), rgba(255, 106, 19, 0.3), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 4s linear infinite'
        }} />

        <div className="container">
          {/* Desktop Top Bar View (>= 768px) */}
          <div className="top-bar-desktop" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <ShieldCheck size={14} style={{ color: '#38BDF8' }} /> AMFI Registered MFD (ARN-194720)
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span style={{ fontSize: '11.5px' }}>BSE Member Code: 55533</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span style={{ fontSize: '11.5px' }}>CIN: U67190JH2021PTC016813</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={12} style={{ color: 'var(--accent-orange)' }} />
                <a 
                  href="tel:+919102070777" 
                  style={{ 
                    color: '#F8FAFC', 
                    fontWeight: 600, 
                    fontSize: '12px',
                    transition: 'color 0.2s'
                  }}
                >
                  +91 91020 70777
                </a>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px' }}>/</span>
                <a 
                  href="tel:+919102050555" 
                  style={{ 
                    color: '#F8FAFC', 
                    fontWeight: 600, 
                    fontSize: '12px',
                    transition: 'color 0.2s'
                  }}
                >
                  +91 91020 50555
                </a>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <a 
                href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20know%20more%20about%20financial%20planning"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#22C55E', 
                  fontWeight: 600, 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  fontSize: '12px',
                  transition: 'color 0.2s'
                }}
              >
                <MessageSquare size={12} /> WhatsApp
              </a>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <a 
                href="https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#38BDF8', 
                  fontWeight: 700, 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  fontSize: '12px',
                  transition: 'color 0.2s'
                }}
              >
                <Smartphone size={12} /> Investrow App
              </a>
            </div>
          </div>

          {/* Dedicated Mobile Top Bar View (< 768px) - 1 Clean Line */}
          <div className="top-bar-mobile" style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            lineHeight: 1.2
          }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px', 
              fontWeight: 700,
              color: '#38BDF8'
            }}>
              <ShieldCheck size={12} style={{ color: '#38BDF8' }} /> AMFI ARN-194720
            </span>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <a 
                href="tel:+919102070777" 
                style={{ 
                  color: '#F8FAFC', 
                  fontWeight: 600, 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '4px' 
                }}
              >
                <Phone size={10} style={{ color: 'var(--accent-orange)' }} />
                <span>+91 91020 70777</span>
              </a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <a 
                href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20know%20more%20about%20financial%20planning"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#22C55E', 
                  fontWeight: 700, 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '3px' 
                }}
              >
                <MessageSquare size={11} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container header-nav-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        minHeight: '68px'
      }}>
        {/* Brand Logo & Tagline (stacked directly below logo) */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/investrow-logo.png" 
            alt="Investrow Financial Services" 
            className="brand-logo-img"
            style={{ maxHeight: '38px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ marginTop: '2px', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <BrandTagline size="xs" theme="light" />
          </div>
        </Link>

        {/* Desktop Nav Links - Clean Minimal Navigation */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'nowrap' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Mutual Fund', href: '/#services' },
            { label: 'Calculators', href: '/#calculators' },
            { label: 'Downloads', href: '/downloads' },
            { label: 'Learn', href: '/wealth-creation' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/#contact' }
          ].map((item) => {
            return (
              <Link 
                key={item.label}
                href={item.href} 
                className="nav-link-item"
                style={{ 
                  fontWeight: 600, 
                  fontSize: '14px', 
                  color: 'var(--navy-deep)', 
                  textDecoration: 'none',
                  outline: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '6px 0',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FF6A13';
                  e.currentTarget.style.textDecoration = 'none';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--navy-deep)';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: App Download, Consultation & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Desktop App Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download-app-nav hide-mobile"
            title="Download Investrow App on Google Play Store"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '9px 15px',
              borderRadius: '10px',
              background: 'rgba(0, 138, 216, 0.08)',
              border: '1.5px solid rgba(0, 138, 216, 0.28)',
              color: 'var(--primary-blue-dark)',
              fontWeight: 700,
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'var(--transition-smooth)',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 138, 216, 0.16)';
              e.currentTarget.style.borderColor = 'var(--primary-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 138, 216, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 138, 216, 0.28)';
            }}
          >
            <Smartphone size={15} style={{ color: 'var(--primary-blue)' }} />
            <span>Download App</span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22C55E',
              boxShadow: '0 0 6px #22C55E'
            }} />
          </a>

          <button 
            onClick={() => onOpenConsultModal('Free Wealth Advisory Call')}
            className="btn-orange hide-mobile"
            style={{ padding: '10px 22px', fontSize: '13.5px' }}
          >
            Book Free Advisory Call <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{
              display: 'none',
              background: 'rgba(0, 138, 216, 0.08)',
              border: '1px solid rgba(0, 138, 216, 0.18)',
              borderRadius: '10px',
              width: '42px',
              height: '42px',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--navy-deep)',
              cursor: 'pointer'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={22} style={{ color: 'var(--accent-orange)' }} /> : <Menu size={22} style={{ color: 'var(--navy-deep)' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '2px solid var(--primary-blue)',
          padding: '16px 16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          maxHeight: 'calc(100vh - 110px)',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(10, 22, 40, 0.12)'
        }}>
          {/* Prominent App Download Card in Mobile Drawer */}
          <div style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
            borderRadius: '14px',
            padding: '14px 16px',
            color: '#FFFFFF',
            marginBottom: '10px',
            border: '1px solid rgba(0, 138, 216, 0.35)',
            boxShadow: '0 8px 20px rgba(10, 22, 40, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '9px',
                  background: 'linear-gradient(135deg, #008AD8 0%, #005696 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 10px rgba(0, 138, 216, 0.4)'
                }}>
                  <Smartphone size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF' }}>Investrow App</div>
                  <div style={{ fontSize: '10.5px', color: '#94A3B8' }}>Track MF Portfolios & Live SIPs</div>
                </div>
              </div>
              <span style={{
                fontSize: '10px',
                fontWeight: 800,
                background: 'rgba(34, 197, 94, 0.18)',
                color: '#4ADE80',
                padding: '2px 7px',
                borderRadius: '9999px',
                border: '1px solid rgba(74, 222, 128, 0.3)'
              }}>
                Play Store
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#000000',
                  color: '#FFFFFF',
                  padding: '9px 12px',
                  borderRadius: '9px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span>Get on Play Store</span> <ExternalLink size={12} style={{ color: '#94A3B8' }} />
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#94A3B8',
                  padding: '9px 10px',
                  borderRadius: '9px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '11px',
                  fontWeight: 600,
                  userSelect: 'none'
                }}
              >
                <span>App Store</span>
                <span style={{ fontSize: '9px', color: '#FF8A3D', fontWeight: 700 }}>(Soon)</span>
              </div>
            </div>
          </div>
          {[
            { label: 'Home', href: '/', badge: null },
            { label: 'Mutual Fund', href: '/#services', badge: null },
            { label: 'Calculators', href: '/#calculators', badge: 'Interactive' },
            { label: 'AMFI Forms & Downloads', href: '/downloads', badge: 'PDF' },
            { label: 'Learn', href: '/wealth-creation', badge: 'Guide' },
            { label: 'About Us', href: '/about', badge: null },
            { label: 'Contact Us', href: '/#contact', badge: 'Desk' }
          ].map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ 
                fontWeight: 600, 
                fontSize: '14.5px', 
                color: 'var(--navy-deep)',
                padding: '10px 12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6A13';
                e.currentTarget.style.background = '#F1F5F9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--navy-deep)';
                e.currentTarget.style.background = 'transparent';
              }}
              onTouchStart={(e) => e.currentTarget.style.background = '#F1F5F9'}
              onTouchEnd={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span>{item.label}</span>
              {item.badge ? (
                <span style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background: 'rgba(0, 138, 216, 0.1)',
                  color: 'var(--primary-blue-dark)'
                }}>
                  {item.badge}
                </span>
              ) : (
                <ArrowRight size={13} style={{ color: '#94A3B8' }} />
              )}
            </a>
          ))}

          {/* Quick Contact Grid in Drawer */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginTop: '10px',
            paddingTop: '12px',
            borderTop: '1px solid #E2E8F0'
          }}>
            <a 
              href="tel:+919102070777"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                padding: '10px 8px',
                borderRadius: '10px',
                background: '#F1F5F9',
                color: 'var(--navy-deep)',
                fontSize: '12.5px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={13} style={{ color: 'var(--accent-orange)' }} /> Call Desk
              </span>
              <span style={{ fontSize: '10.5px', color: '#64748B', fontWeight: 600 }}>91020 70777 / 50555</span>
            </a>
            <a 
              href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20know%20more%20about%20mutual%20fund%20planning"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                padding: '10px 8px',
                borderRadius: '10px',
                background: '#ECFDF5',
                color: '#15803D',
                fontSize: '12.5px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MessageSquare size={13} /> WhatsApp
              </span>
              <span style={{ fontSize: '10.5px', color: '#059669', fontWeight: 600 }}>Instant Chat</span>
            </a>
          </div>

          <button 
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultModal('Free Wealth Advisory Call');
            }}
            className="btn-orange"
            style={{ width: '100%', marginTop: '8px', padding: '12px', fontSize: '14px' }}
          >
            Book Free Advisory Call <ArrowRight size={15} />
          </button>
        </div>
      )}

      <style jsx>{`
        :global(.nav-link-item) {
          text-decoration: none !important;
        }
        :global(.nav-link-item:hover) {
          color: #FF6A13 !important;
          text-decoration: none !important;
        }
        @media (max-width: 768px) {
          .top-bar-desktop {
            display: none !important;
          }
          .top-bar-mobile {
            display: flex !important;
          }
          .header-nav-container {
            padding: 8px 16px !important;
            min-height: 56px !important;
          }
          .brand-logo-img {
            max-height: 38px !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
    {/* Dynamic Spacer to preserve exact document flow under fixed header */}
    <div 
      aria-hidden="true" 
      style={{ 
        height: `${headerHeight}px`, 
        width: '100%', 
        pointerEvents: 'none' 
      }} 
    />
  </>
  );
}
