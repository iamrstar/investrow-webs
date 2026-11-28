'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Gift } from 'lucide-react';

export default function ExitIntentModal({ onLeadSubmitted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Existing Portfolio Audit (Scheme Review)');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already submitted in this session
    const alreadyCaptured = sessionStorage.getItem('investrow_lead_captured');
    if (alreadyCaptured) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 15 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Mobile fallback: trigger after 35 seconds of browsing
    const timer = setTimeout(() => {
      if (!hasTriggered && !alreadyCaptured) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 35000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  // Keyboard accessibility: Escape key closes modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return;

    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          service: service,
          source: 'Website - Exit Intent Offer Popup',
          stage: 'New',
          callStatus: 'Pending',
          remarks: 'Claimed Free ₹4,999 Mutual Fund Portfolio Audit Offer from Exit Popup'
        })
      });

      sessionStorage.setItem('investrow_lead_captured', 'true');
      setSubmitted(true);
      if (onLeadSubmitted) onLeadSubmitted();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="animate-fade-in" 
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(10, 22, 40, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 300,
        padding: '16px'
      }}
    >
      <div 
        className="animate-fade-in" 
        style={{
          background: 'rgba(255, 255, 255, 0.99)',
          width: '100%',
          maxWidth: '430px',
          maxHeight: 'min(90vh, 560px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          padding: 'clamp(20px, 3.5vw, 24px) clamp(18px, 4vw, 26px)',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 106, 19, 0.18)',
          borderRadius: '18px'
        }}
      >
        {/* Decorative gradient banner */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-orange-gradient)',
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px'
        }} />

        {/* Close Button - High visibility & contrast */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close offer popup"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#F1F5F9',
            border: '1.5px solid #CBD5E1',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A',
            cursor: 'pointer',
            zIndex: 40,
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E2E8F0';
            e.currentTarget.style.borderColor = '#94A3B8';
            e.currentTarget.style.color = '#000000';
            e.currentTarget.style.transform = 'scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F1F5F9';
            e.currentTarget.style.borderColor = '#CBD5E1';
            e.currentTarget.style.color = '#0F172A';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {!submitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '18px', paddingTop: '4px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, #FFF1EB, #FFE0CC)',
                color: '#C2410C',
                fontWeight: 800,
                fontSize: '11px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                marginBottom: '10px',
                boxShadow: '0 2px 8px rgba(255, 106, 19, 0.12)'
              }}>
                <Gift size={13} /> Wait! Special Investor Privilege
              </div>

              <h3 style={{ fontSize: 'clamp(19px, 3.5vw, 21px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '6px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Claim Your 100% Free <br />
                <span className="gradient-text-orange">Mutual Fund Portfolio Audit</span>
              </h3>
              <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.45, margin: 0 }}>
                Worth ₹4,999 — complimentary today. Discover hidden AMC expense ratios, underperforming schemes & overlapping folios.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '13.5px',
                    background: '#F8FAFC',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-orange)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 106, 19, 0.1)';
                    e.currentTarget.style.background = 'white';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = '#F8FAFC';
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    background: 'linear-gradient(180deg, #F8FAFC, #F1F5F9)',
                    border: '1.5px solid var(--border-subtle)',
                    borderRight: 'none',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
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
                    placeholder="10-Digit Mobile / WhatsApp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderTopRightRadius: '8px',
                      borderBottomRightRadius: '8px',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '13.5px',
                      background: '#F8FAFC',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-orange)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 106, 19, 0.1)';
                      e.currentTarget.style.background = 'white';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.background = '#F8FAFC';
                    }}
                  />
                </div>
              </div>

              <div>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '13px',
                    background: 'white',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-orange)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 106, 19, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <option value="Existing Portfolio Audit (Scheme Review)">Portfolio Audit: Existing Scheme Review</option>
                  <option value="Mutual Funds & SIP Planning">New Goal-Based SIP Planning</option>
                  <option value="Tax-Saving Mutual Funds (ELSS)">Tax-Saving Mutual Funds (80C)</option>
                  <option value="Lumpsum Investment Strategy">Lumpsum & STP Allocation</option>
                  <option value="Monthly Cashflow via SWP">Retirement Monthly Cashflow (SWP)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-orange"
                style={{ width: '100%', padding: '11px 16px', fontSize: '14.5px', borderRadius: '8px', marginTop: '2px' }}
              >
                {loading ? 'Locking in slot...' : 'Claim Free Audit Slot 🚀'}
              </button>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11.5px',
                color: 'var(--text-muted)',
                marginTop: '4px',
                fontWeight: 500
              }}>
                <ShieldCheck size={14} style={{ color: '#16A34A' }} />
                <span>Only 3 free consultation slots remaining today</span>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0 10px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 8px 20px rgba(22, 163, 74, 0.2)'
            }}>
              <CheckCircle2 size={32} style={{ color: '#16A34A' }} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
              Your Free Audit Is Locked In!
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
              Thank you, <strong>{name}</strong>. A Senior AMFI Certified Mutual Fund Specialist from Investrow will call you at <strong>+91 {phone}</strong> to coordinate your portfolio review.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-outline"
              style={{ width: '100%', padding: '11px', fontSize: '14px', borderRadius: '8px' }}
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
