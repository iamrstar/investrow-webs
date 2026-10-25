'use client';

import { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Calendar } from 'lucide-react';

export default function ConsultModal({ isOpen, onClose, initialService = 'Mutual Funds & Monthly SIP', onLeadSubmitted }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
          source: 'Website - Mutual Fund Consultation Booking',
          stage: 'New',
          callStatus: 'Pending',
          remarks: `Booked Consultation for ${service} | Preferred Call Window: ${preferredTime}`
        })
      });

      setSubmitted(true);
      if (onLeadSubmitted) onLeadSubmitted();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(10, 22, 40, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 250,
      padding: '16px'
    }}>
      <div className="premium-card animate-fade-in" style={{
        background: 'rgba(255, 255, 255, 0.98)',
        width: '100%',
        maxWidth: '500px',
        padding: '40px',
        position: 'relative'
      }}>
        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-orange))'
        }} />

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(241, 245, 249, 0.8)',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: 'var(--text-muted)',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#E2E8F0'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(241, 245, 249, 0.8)'}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '24px', paddingTop: '4px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 12px',
                background: 'rgba(240, 249, 255, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(14, 165, 233, 0.25)',
                marginBottom: '16px'
              }}>
                <div style={{ position: 'relative', width: '44px', height: '44px', flexShrink: 0 }}>
                  <img 
                    src="/images/advisor/advisor_portrait.jpg" 
                    alt="Rajesh Sharma, Senior Wealth Advisor"
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0EA5E9' }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    background: '#22C55E',
                    border: '2px solid #FFFFFF'
                  }} />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--navy-deep)', lineHeight: 1.2 }}>
                    Rajesh Sharma • Senior AMFI Advisor
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#0284C7', fontWeight: 700, marginTop: '2px' }}>
                    ARN-194720 • 1-on-1 Confidential Advisory Call
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px', lineHeight: 1.3 }}>
                Book Your 1-on-1 Mutual Fund Advisory Call
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Speak directly with an Investrow certified mutual fund specialist for scheme allocation, existing portfolio check, or goal-based SIP planning.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                  Your Full Name <span style={{ color: 'var(--accent-orange)' }}>*</span>
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Anjali Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '14px',
                    background: '#F8FAFC',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
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
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                  Mobile / WhatsApp Number <span style={{ color: 'var(--accent-orange)' }}>*</span>
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderTopRightRadius: 'var(--radius-sm)',
                      borderBottomRightRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '14px',
                      background: '#F8FAFC',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-blue)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--primary-blue)' }} /> Objective
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '13.5px',
                      background: 'white',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <option value="Mutual Funds & Monthly SIP">Start New Monthly SIP</option>
                    <option value="Lumpsum Investment (STP)">Lumpsum Investment</option>
                    <option value="Tax-Saving Mutual Funds (ELSS)">Tax-Saving ELSS (80C)</option>
                    <option value="Free Portfolio Audit & Rebalancing">Portfolio Health Check</option>
                    <option value="Retirement & Goal Planning">Retirement / Goal Planning</option>
                    <option value="Monthly Cashflow via SWP">Monthly Cashflow (SWP)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    <Calendar size={14} style={{ color: 'var(--accent-orange)' }} /> Time
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '13.5px',
                      background: 'white',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <option value="Morning (10 AM - 1 PM)">10 AM - 1 PM</option>
                    <option value="Afternoon (1 PM - 4 PM)">1 PM - 4 PM</option>
                    <option value="Evening (4 PM - 7 PM)">4 PM - 7 PM</option>
                    <option value="As soon as possible">ASAP</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-orange"
                style={{ width: '100%', padding: '15px', marginTop: '12px', fontSize: '15.5px' }}
              >
                {loading ? 'Confirming slot...' : 'Confirm Advisory Slot 🚀'}
              </button>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '8px', 
                fontSize: '11.5px', 
                color: 'var(--text-muted)',
                marginTop: '4px',
                background: '#F8FAFC',
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px dashed rgba(226, 232, 240, 0.8)'
              }}>
                <span>🔒</span> 100% Free Consultation. AMFI Registered Distributor.
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 8px 24px rgba(22, 163, 74, 0.15)'
            }}>
              <CheckCircle2 size={40} style={{ color: '#16A34A' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '12px' }}>
              Consultation Booked!
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6 }}>
              Thank you, <strong>{name}</strong>. An Investrow Certified Mutual Fund Advisor will call you at <strong>+91 {phone}</strong> during your preferred window ({preferredTime}).
            </p>
            <button
              onClick={onClose}
              className="btn-outline"
              style={{ width: '100%', padding: '14px' }}
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
