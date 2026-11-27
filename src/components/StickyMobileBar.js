'use client';

import { Phone, MessageSquare, Sparkles, Smartphone } from 'lucide-react';

export default function StickyMobileBar({ onOpenCallbackModal, onOpenConsultModal }) {
  const handleOpen = onOpenCallbackModal || onOpenConsultModal;

  const handleOpenAI = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-investrow-ai'));
    }
  };

  return (
    <div 
      className="mobile-sticky-dock"
      style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        padding: '6px 12px calc(6px + env(safe-area-inset-bottom, 0px))',
        zIndex: 140,
        boxShadow: '0 -4px 20px rgba(10, 22, 40, 0.08)'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '6px',
        alignItems: 'center'
      }}>
        {/* 1. WhatsApp Instant Chat */}
        <a 
          href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          aria-label="Chat on WhatsApp"
        >
          <div className="dock-icon-box" style={{ color: '#16A34A' }}>
            <MessageSquare size={18} />
          </div>
          <span className="dock-text">WhatsApp</span>
        </a>

        {/* 2. AI Wealth Assistant (24/7 Live Assistant) */}
        <button 
          type="button"
          onClick={handleOpenAI}
          className="dock-item"
          aria-label="Open 24/7 AI Wealth Assistant"
        >
          <div className="dock-icon-box" style={{ color: '#008AD8', position: 'relative' }}>
            <Sparkles size={18} />
            <span style={{
              position: 'absolute',
              top: '-1px',
              right: '-3px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22C55E',
              boxShadow: '0 0 6px #22C55E'
            }} />
          </div>
          <span className="dock-text">AI Guide</span>
        </button>

        {/* 3. Official Investrow App (Google Play) */}
        <a 
          href="https://play.google.com/store/apps/details?id=com.investrow.investrowfinancial"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          aria-label="Get Investrow App on Google Play"
        >
          <div className="dock-icon-box" style={{ color: '#0A1628' }}>
            <Smartphone size={18} />
          </div>
          <span className="dock-text">Get App</span>
        </a>

        {/* 4. Book Free Consultation Call (Primary CTA) */}
        <button 
          type="button"
          onClick={handleOpen}
          className="dock-item dock-item-highlight"
          aria-label="Book Free Portfolio Call"
        >
          <div className="dock-icon-box" style={{ color: '#FFFFFF' }}>
            <Phone size={16} />
          </div>
          <span className="dock-text" style={{ color: '#FFFFFF', fontWeight: 800 }}>Free Call</span>
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-sticky-dock {
            display: block !important;
          }
        }
        :global(.dock-item) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          gap: 3px;
          padding: 6px 2px;
          min-height: 48px;
          border-radius: 10px;
          background: transparent;
          border: none;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        :global(.dock-item:active) {
          transform: scale(0.95);
        }
        :global(.dock-icon-box) {
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 22px;
          height: 22px;
        }
        :global(.dock-text) {
          font-size: 10.5px;
          font-weight: 700;
          color: var(--navy-deep, #0A1628);
          letter-spacing: -0.2px;
          line-height: 1.1;
        }
        :global(.dock-item-highlight) {
          background: var(--accent-orange-gradient, linear-gradient(135deg, #FF6A13 0%, #FF8A3D 100%)) !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 14px rgba(255, 106, 19, 0.35) !important;
        }
      `}</style>
    </div>
  );
}
