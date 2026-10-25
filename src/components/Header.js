'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenConsultModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.6)' : '1px solid rgba(226, 232, 240, 0.3)',
      transition: 'var(--transition-smooth)',
      boxShadow: scrolled ? '0 4px 30px rgba(10, 22, 40, 0.06)' : 'none'
    }}>
      {/* Top Regulatory & Direct Helpline Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)',
        color: '#94A3B8',
        fontSize: '12px',
        padding: '7px 0',
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

        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px'
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
            <span className="hide-mobile" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <span className="hide-mobile" style={{ fontSize: '11px' }}>BSE Member Code: 55533</span>
            <span className="hide-mobile" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <span className="hide-mobile" style={{ fontSize: '11px' }}>CIN: U67190JH2021PTC016813</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="tel:+919102070777" 
              style={{ 
                color: '#F8FAFC', 
                fontWeight: 600, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: '12px',
                transition: 'color 0.2s'
              }}
            >
              <Phone size={12} style={{ color: 'var(--accent-orange)' }} /> +91 91020 70777
            </a>
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
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 24px',
        minHeight: '72px'
      }}>
        {/* Brand Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/investrow-logo.png" 
            alt="Investrow Financial Services" 
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'nowrap' }}>
          {[
            { label: 'About Us', href: '/about' },
            { label: 'Our Team', href: '/team' },
            { label: 'Services', href: '/#services' },
            { label: 'Calculators', href: '/#calculators' },
            { label: 'Client Stories', href: '/#testimonials' },
            { label: 'Awards', href: '/awards' },
            { label: 'Why Us', href: '/#why-us' },
            { label: 'Partners', href: '/#partners' },
            { label: 'FAQs', href: '/#faq' }
          ].map((item) => {
            return (
              <a 
                key={item.label}
                href={item.href} 
                style={{ 
                  fontWeight: 600, 
                  fontSize: '13px', 
                  color: 'var(--navy-deep)', 
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                  padding: '4px 0',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary-blue)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--navy-deep)';
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => onOpenConsultModal('Header Consultation')}
            className="btn-orange hide-mobile"
            style={{ padding: '11px 24px', fontSize: '14px' }}
          >
            Book Free Advisory Call <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              padding: '6px',
              color: 'var(--navy-deep)'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '2px solid var(--primary-blue)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <a href="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            About Us
          </a>
          <a href="/team" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            Our Team
          </a>
          <a href="/#services" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            Services
          </a>
          <a href="/#calculators" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            Goal Calculators
          </a>
          <a href="/#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            Client Stories
          </a>
          <a href="/awards" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            Awards & Honors
          </a>
          <a href="/#why-us" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            Why Investrow
          </a>
          <a href="/#partners" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            AMC Partners
          </a>
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy-deep)' }}>
            FAQs
          </a>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultModal('Mobile Header Consultation');
            }}
            className="btn-orange"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Book Free Advisory Call <ArrowRight size={16} />
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
