'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function StickyMobileBar({ onOpenCallbackModal }) {
  return (
    <div 
      className="mobile-sticky-bar"
      style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)',
        padding: '12px 16px',
        zIndex: 99,
        boxShadow: '0 -8px 24px rgba(10, 22, 40, 0.08)'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <a 
          href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
            color: 'white',
            fontWeight: 700,
            fontSize: '13.5px',
            padding: '12px',
            borderRadius: 'var(--radius-full)',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(34, 197, 94, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.3)';
          }}
        >
          <MessageSquare size={16} /> WhatsApp
        </a>

        <button 
          onClick={onOpenCallbackModal}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'var(--accent-orange-gradient)',
            color: 'white',
            fontWeight: 700,
            fontSize: '13.5px',
            padding: '12px',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(255, 106, 19, 0.3)',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 106, 19, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 106, 19, 0.3)';
          }}
        >
          <Phone size={16} /> Callback
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
