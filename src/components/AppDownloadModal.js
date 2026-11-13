'use client';

import { useState, useEffect } from 'react';
import { X, Smartphone, ShieldCheck, TrendingUp, Bell, Star, ExternalLink, Sparkles } from 'lucide-react';

export default function AppDownloadModal({ isOpen: externalIsOpen, onClose: externalOnClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial';

  // Smart delayed trigger: shows after 6 seconds if not dismissed during this browser session
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setInternalIsOpen(externalIsOpen);
      return;
    }

    try {
      const isDismissed = sessionStorage.getItem('investrow_app_popup_dismissed');
      if (isDismissed) return;
    } catch (e) {
      // Ignore sessionStorage errors in incognito or restricted mode
    }

    const timer = setTimeout(() => {
      setInternalIsOpen(true);
    }, 6500);

    return () => clearTimeout(timer);
  }, [externalIsOpen]);

  const handleDismiss = () => {
    setInternalIsOpen(false);
    try {
      sessionStorage.setItem('investrow_app_popup_dismissed', 'true');
    } catch (e) {}
    if (externalOnClose) externalOnClose();
  };

  const isVisible = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  if (!isVisible) {
    // Show a small persistent floating trigger icon on desktop/mobile so users can always access it
    return (
      <button
        onClick={() => setInternalIsOpen(true)}
        aria-label="Download Investrow App"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 90,
          background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
          color: '#FFFFFF',
          padding: '10px 14px',
          borderRadius: '9999px',
          border: '1px solid rgba(0, 138, 216, 0.4)',
          boxShadow: '0 10px 25px rgba(10, 22, 40, 0.35)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          fontSize: '12px',
          fontWeight: 700
        }}
        className="app-floating-pill-trigger"
      >
        <span style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(0, 138, 216, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38BDF8'
        }}>
          <Smartphone size={13} />
        </span>
        <span className="app-trigger-label">Get Investrow App</span>
        <span style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: '#22C55E',
          boxShadow: '0 0 8px #22C55E'
        }} />
        
        <style jsx>{`
          @media (max-width: 768px) {
            .app-floating-pill-trigger {
              bottom: 80px !important;
              left: 14px !important;
              padding: 8px 12px !important;
              font-size: 11px !important;
            }
          }
        `}</style>
      </button>
    );
  }

  return (
    <div 
      className="app-popup-backdrop"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 1000,
        maxWidth: '420px',
        width: 'calc(100vw - 32px)',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{
        background: 'linear-gradient(165deg, #0A1628 0%, #0F1E36 60%, #08111F 100%)',
        color: '#FFFFFF',
        borderRadius: '20px',
        border: '1.5px solid rgba(0, 138, 216, 0.35)',
        boxShadow: '0 24px 60px rgba(6, 14, 26, 0.5), 0 0 40px rgba(0, 138, 216, 0.15)',
        overflow: 'hidden',
        position: 'relative',
        padding: '22px 20px 20px'
      }}>
        {/* Top ambient glow */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.3) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Close app popup"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#94A3B8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94A3B8';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <X size={15} />
        </button>

        {/* Header Block with App Icon & Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #008AD8 0%, #005696 100%)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(0, 138, 216, 0.35)',
            flexShrink: 0
          }}>
            <img 
              src="/investrow-logo.png" 
              alt="Investrow App"
              style={{
                width: '40px',
                height: 'auto',
                filter: 'brightness(0) invert(1)'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div style={{ flex: 1, paddingRight: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{
                fontSize: '10px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                background: 'rgba(34, 197, 94, 0.18)',
                color: '#4ADE80',
                padding: '2px 7px',
                borderRadius: '9999px',
                border: '1px solid rgba(74, 222, 128, 0.3)'
              }}>
                Official App
              </span>
              <span style={{ fontSize: '11px', color: '#FCD34D', display: 'inline-flex', alignItems: 'center', gap: '2px', fontWeight: 700 }}>
                <Star size={11} fill="#FCD34D" color="#FCD34D" /> 4.8★
              </span>
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
              Investrow Mobile App
            </h4>
            <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>
              Wealth & SIP Management On The Go
            </div>
          </div>
        </div>

        {/* Feature bullets */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: '12px',
          padding: '10px 12px',
          marginBottom: '16px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <p style={{ fontSize: '12.5px', color: '#E2E8F0', margin: '0 0 8px 0', lineHeight: 1.4, fontWeight: 500 }}>
            Download our app for live portfolio updates, automated SIP monitoring, and direct AMFI advisor chat.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px', color: '#94A3B8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <TrendingUp size={12} style={{ color: '#38BDF8' }} /> Real-Time NAV
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={12} style={{ color: '#22C55E' }} /> Bank-Grade 256-Bit
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Bell size={12} style={{ color: '#FF8A3D' }} /> SIP Auto Alerts
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Sparkles size={12} style={{ color: '#FCD34D' }} /> Goal Simulators
            </div>
          </div>
        </div>

        {/* CTA Buttons: Google Play (Active) & App Store (Coming Soon) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Google Play Store Button */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: '#000000',
              color: '#FFFFFF',
              padding: '11px 18px',
              borderRadius: '12px',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
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
            {/* Google Play SVG Icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M3.609 1.813c-.347.375-.55.947-.55 1.688v16.998c0 .741.203 1.313.55 1.688l.09.082 9.53-9.53v-.223l-9.53-9.53-.09.082z" fill="#00E676"/>
              <path d="M16.408 15.632l-3.179-3.179v-.223l3.179-3.179.072.041 3.766 2.14c1.076.611 1.076 1.61 0 2.221l-3.766 2.14-.072.04z" fill="#FFD54F"/>
              <path d="M16.48 15.592L13.229 12.23 3.609 21.85c.355.378.948.423 1.623.04l11.248-6.298z" fill="#FF3D00"/>
              <path d="M16.48 8.868L5.232 2.57c-.675-.383-1.268-.338-1.623.04l9.62 9.62 3.251-3.362z" fill="#00B0FF"/>
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#94A3B8', fontWeight: 600 }}>
                GET IT ON
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                Google Play
              </div>
            </div>
            <ExternalLink size={13} style={{ marginLeft: 'auto', color: '#64748B' }} />
          </a>

          {/* iOS App Store Button (Coming Soon) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              color: '#94A3B8',
              padding: '10px 18px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative',
              userSelect: 'none'
            }}
          >
            {/* Apple SVG Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#94A3B8" style={{ flexShrink: 0 }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.02.62-2.67 1.39-.58.67-1.09 1.76-.95 2.82 1.03.08 2.06-.52 2.68-1.27z"/>
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#64748B', fontWeight: 600 }}>
                DOWNLOAD ON THE
              </div>
              <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#CBD5E1', fontFamily: 'var(--font-heading)' }}>
                Apple App Store
              </div>
            </div>
            <span style={{
              marginLeft: 'auto',
              background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
              color: '#FFFFFF',
              fontSize: '10px',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '9999px',
              letterSpacing: '0.4px',
              boxShadow: '0 2px 6px rgba(255, 106, 19, 0.35)'
            }}>
              Coming Soon
            </span>
          </div>
        </div>

        {/* Dismiss option */}
        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <button
            onClick={handleDismiss}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748B',
              fontSize: '11.5px',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '4px'
            }}
          >
            Continue browsing website
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @media (max-width: 768px) {
          .app-popup-backdrop {
            left: 12px !important;
            right: 12px !important;
            width: auto !important;
            bottom: 76px !important;
          }
        }
      `}</style>
    </div>
  );
}

