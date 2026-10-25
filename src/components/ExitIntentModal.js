'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Gift } from 'lucide-react';

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
    <div className="animate-fade-in" style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(10, 22, 40, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 300,
      padding: '16px'
    }}>
      <div className="animate-fade-in" style={{
        background: 'rgba(255, 255, 255, 0.98)',
        width: '100%',
        maxWidth: '520px',
        padding: '42px',
        position: 'relative',
        boxShadow: '0 32px 84px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 106, 19, 0.2)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden'
      }}>
        {/* Decorative gradient banner */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'var(--accent-orange-gradient)'
        }} />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(241, 245, 249, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E2E8F0';
            e.currentTarget.style.color = 'var(--navy-deep)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(241, 245, 249, 0.8)';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '28px', paddingTop: '8px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #FFF1EB, #FFE0CC)',
                color: '#C2410C',
                fontWeight: 800,
                fontSize: '12.5px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(255, 106, 19, 0.15)'
              }}>
                <Gift size={16} /> Wait! Special Investor Privilege
              </div>

              <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '12px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Claim Your 100% Free <br/>
                <span className="gradient-text-orange">Mutual Fund Portfolio Audit</span>
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Worth ₹4,999 — complimentary today. Discover hidden AMC expense ratios, underperforming schemes, and overlapping portfolio holdings.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <input 
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '14.5px',
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
                    padding: '0 16px',
                    background: 'linear-gradient(180deg, #F8FAFC, #F1F5F9)',
                    border: '1.5px solid var(--border-subtle)',
                    borderRight: 'none',
                    borderTopLeftRadius: 'var(--radius-sm)',
                    borderBottomLeftRadius: 'var(--radius-sm)',
                    fontSize: '14.5px',
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
                      padding: '14px 18px',
                      borderTopRightRadius: 'var(--radius-sm)',
                      borderBottomRightRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '14.5px',
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
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '14.5px',
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
                style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '4px' }}
              >
                {loading ? 'Locking in slot...' : 'Claim Free Audit Slot 🚀'}
              </button>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12.5px',
                color: 'var(--text-muted)',
                marginTop: '6px',
                fontWeight: 500
              }}>
                <ShieldCheck size={16} style={{ color: '#16A34A' }} />
                <span>Only 3 free consultation slots remaining today</span>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0 20px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 12px 32px rgba(22, 163, 74, 0.2)'
            }}>
              <CheckCircle2 size={44} style={{ color: '#16A34A' }} />
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '12px' }}>
              Your Free Audit Is Locked In!
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
              Thank you, <strong>{name}</strong>. A Senior AMFI Certified Mutual Fund Advisor from Investrow will call you at <strong>+91 {phone}</strong> to coordinate your portfolio review.
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="btn-outline"
              style={{ width: '100%', padding: '14px', fontSize: '15px' }}
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
