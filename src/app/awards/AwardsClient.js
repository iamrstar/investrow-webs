'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { awardsData } from '@/data/awardsData';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  X, 
  ZoomIn, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Calendar, 
  UserCheck, 
  Filter
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Honors (22)' },
  { id: 'trophy', label: 'Trophies & Mementos' },
  { id: 'certificate', label: 'AMC Certificates' },
  { id: 'milestone', label: 'SIP Milestone Honors' }
];

export default function AwardsClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalAward, setActiveModalAward] = useState(null);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Portfolio Consultation');

  const handleOpenConsultModal = (service = 'Awards Page Consultation') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const filteredAwards = selectedCategory === 'all' 
    ? awardsData 
    : awardsData.filter(item => {
        if (selectedCategory === 'trophy') return item.category === 'trophy';
        if (selectedCategory === 'certificate') return item.category === 'certificate';
        if (selectedCategory === 'milestone') return item.category === 'milestone';
        return true;
      });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      {/* Header */}
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #060E1A 100%)',
        color: '#FFFFFF',
        padding: '72px 0 88px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient lighting glows */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 106, 19, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          
          <div className="trust-pill" style={{ 
            background: 'rgba(255, 255, 255, 0.08)', 
            borderColor: 'rgba(255, 255, 255, 0.15)', 
            color: '#38BDF8',
            margin: '0 auto 20px',
            width: 'fit-content'
          }}>
            <Award size={14} style={{ color: '#F59E0B' }} />
            <span>Official AMC Honors & Industry Accreditations</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            lineHeight: 1.15
          }}>
            Recognized by India’s Premier <br />
            <span className="gradient-text-orange">Mutual Fund Asset Management Companies</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '680px',
            margin: '0 auto 36px'
          }}>
            Explore 22+ verified crystal trophies, framed certificates of appreciation, and SIP milestone honors presented to Investrow by Kotak, Tata, Bajaj Finserv, ITI, Samco, UTI, and Axis Mutual Fund.
          </p>

          {/* Quick Stats Pill Strip */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            padding: '12px 28px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#FF8A3D' }}>22+</span>
              <span style={{ fontSize: '12.5px', color: '#CBD5E1', fontWeight: 600 }}>Total Awards & Citations</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>8+</span>
              <span style={{ fontSize: '12.5px', color: '#CBD5E1', fontWeight: 600 }}>Top Tier AMCs</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>ARN-194720</span>
              <span style={{ fontSize: '12.5px', color: '#CBD5E1', fontWeight: 600 }}>AMFI Certified Standing</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Showcase Section */}
      <section style={{ padding: '64px 0 96px', flex: 1 }}>
        <div className="container">

          {/* Category Filter Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: active ? '1px solid var(--primary-blue)' : '1px solid rgba(226, 232, 240, 0.9)',
                    background: active ? 'var(--navy-deep)' : '#FFFFFF',
                    color: active ? '#FFFFFF' : 'var(--navy-deep)',
                    boxShadow: active ? '0 8px 20px rgba(10, 22, 40, 0.15)' : '0 2px 8px rgba(10, 22, 40, 0.03)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Awards Grid (22 cards) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {filteredAwards.map((award) => (
              <div
                key={award.id}
                onClick={() => setActiveModalAward(award)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 8px 24px rgba(10, 22, 40, 0.04)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 22, 40, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 138, 216, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 22, 40, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                }}
              >
                {/* Image Container with Zoom Badge */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  background: '#0D1B2A',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={award.image}
                    alt={award.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '12px',
                      transition: 'transform 0.4s ease'
                    }}
                    loading="lazy"
                  />

                  {/* Issuer Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(10, 22, 40, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <Building2 size={11} style={{ color: '#38BDF8' }} />
                    {award.issuer}
                  </div>

                  {/* Year Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'rgba(255, 106, 19, 0.9)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 8px',
                    borderRadius: '6px'
                  }}>
                    {award.year}
                  </div>

                  {/* Zoom Overlay Indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--navy-deep)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    <ZoomIn size={15} />
                  </div>
                </div>

                {/* Content Box */}
                <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Badge Pill */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: 'var(--primary-blue)',
                      background: 'rgba(0, 138, 216, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px'
                    }}>
                      <Sparkles size={11} /> {award.badge || award.categoryLabel}
                    </div>

                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: 'var(--navy-deep)',
                      lineHeight: 1.35,
                      marginBottom: '10px'
                    }}>
                      {award.title}
                    </h3>

                    <p style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '14px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {award.citation}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(226, 232, 240, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#64748B'
                  }}>
                    <span style={{ fontWeight: 600, color: 'var(--navy-deep)' }}>
                      Presented to Investrow
                    </span>
                    <span style={{ color: 'var(--primary-blue)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      View Plaque <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Strip */}
          <div style={{
            marginTop: '80px',
            background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '28px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(255, 106, 19, 0.15)',
                color: '#FF8A3D',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                <ShieldCheck size={14} /> AMFI Reg. Mutual Fund Distributor (ARN-194720)
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>
                Partner With an Award-Winning Wealth Advisory Firm
              </h3>
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6 }}>
                Experience disciplined mutual fund planning, unbiased fund curation, and ongoing portfolio reviews with zero upfront advisory fees.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenConsultModal('Awards Bottom Consultation')}
                className="btn-orange"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                Schedule Free Portfolio Audit <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      {activeModalAward && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(10, 22, 40, 0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalAward(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalAward(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(10, 22, 40, 0.8)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#FF6A13'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(10, 22, 40, 0.8)'}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image View */}
            <div style={{
              background: '#0D1B2A',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '380px',
              maxHeight: '520px',
              borderTopLeftRadius: 'var(--radius-xl)',
              borderTopRightRadius: 'var(--radius-xl)',
              overflow: 'hidden'
            }}>
              <img
                src={activeModalAward.image}
                alt={activeModalAward.title}
                style={{
                  maxHeight: '480px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  borderRadius: '6px'
                }}
              />
            </div>

            {/* Modal Citation Details */}
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{
                  background: 'rgba(0, 138, 216, 0.1)',
                  color: 'var(--primary-blue)',
                  fontWeight: 800,
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  {activeModalAward.issuer}
                </span>
                <span style={{
                  background: '#FFF1EB',
                  color: 'var(--accent-orange)',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '4px'
                }}>
                  {activeModalAward.year}
                </span>
                <span style={{
                  background: '#F1F5F9',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '4px'
                }}>
                  {activeModalAward.badge}
                </span>
              </div>

              <h2 style={{
                fontSize: '24px',
                fontWeight: 800,
                color: 'var(--navy-deep)',
                marginBottom: '14px',
                lineHeight: 1.3
              }}>
                {activeModalAward.title}
              </h2>

              <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {activeModalAward.citation}
              </p>

              {activeModalAward.signatories && (
                <div style={{
                  background: '#F8FAFC',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #E2E8F0',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <UserCheck size={18} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                  <div style={{ fontSize: '13px', color: 'var(--navy-deep)' }}>
                    <strong>Official Signatories:</strong> {activeModalAward.signatories}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => {
                    setActiveModalAward(null);
                    handleOpenConsultModal(`Consultation after viewing ${activeModalAward.title}`);
                  }}
                  className="btn-orange"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Consult an Advisor <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultModal 
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Sticky Mobile Actions Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Mobile Callback')} />

      {/* Floating AI Advisor */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
