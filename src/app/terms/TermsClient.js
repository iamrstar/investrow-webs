'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  UserCheck, 
  AlertTriangle, 
  Shield, 
  Scale, 
  ExternalLink, 
  Ban, 
  Gavel, 
  FileEdit, 
  Printer, 
  ArrowRight, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  Building,
  Info
} from 'lucide-react';

export default function TermsClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Mutual Funds Advisory');

  const handleOpenConsultModal = (service = 'Terms Page Consultation') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const sections = [
    {
      id: 'acceptance-of-terms',
      num: '01',
      title: 'Acceptance Of Terms',
      icon: CheckCircle2,
      color: '#0EA5E9',
      bgGlow: 'rgba(14, 165, 233, 0.08)',
      content: 'By using our services, you confirm that you have read, understood, and agreed to these terms. If you do not agree, please do not use our services.'
    },
    {
      id: 'services-offered',
      num: '02',
      title: 'Services Offered',
      icon: Briefcase,
      color: '#FF6A13',
      bgGlow: 'rgba(255, 106, 19, 0.08)',
      content: 'We provide financial services including investment advisory, insurance guidance, loan assistance, and related services. All services are subject to applicable laws and regulations.'
    },
    {
      id: 'user-responsibilities',
      num: '03',
      title: 'User Responsibilities',
      icon: UserCheck,
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.08)',
      content: 'You agree to provide accurate and complete information while using our services. You are responsible for maintaining the confidentiality of your account details and for all activities under your account.'
    },
    {
      id: 'investment-risk-disclaimer',
      num: '04',
      title: 'Investment Risk Disclaimer',
      icon: AlertTriangle,
      color: '#F59E0B',
      bgGlow: 'rgba(245, 158, 11, 0.1)',
      isHighlight: true,
      content: 'All investments are subject to market risks. We do not guarantee returns, and past performance does not assure future results. Users are advised to carefully evaluate risks before making financial decisions.'
    },
    {
      id: 'intellectual-property-rights',
      num: '05',
      title: 'Intellectual Property Rights',
      icon: Shield,
      color: '#8B5CF6',
      bgGlow: 'rgba(139, 92, 246, 0.08)',
      content: 'All content on this website, including text, graphics, logos, and design, is the property of Investrow Financial Services Pvt. Ltd. and is protected by applicable laws. Unauthorized use is strictly prohibited.'
    },
    {
      id: 'limitation-of-liability',
      num: '06',
      title: 'Limitation Of Liability',
      icon: Scale,
      color: '#EC4899',
      bgGlow: 'rgba(236, 72, 153, 0.08)',
      content: 'The Company shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use our services, including financial losses.'
    },
    {
      id: 'third-party-services',
      num: '07',
      title: 'Third-Party Services',
      icon: ExternalLink,
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.08)',
      content: 'We may provide access to third-party services or links. We are not responsible for their content, accuracy, or practices.'
    },
    {
      id: 'termination-of-services',
      num: '08',
      title: 'Termination Of Services',
      icon: Ban,
      color: '#EF4444',
      bgGlow: 'rgba(239, 68, 68, 0.08)',
      content: 'We reserve the right to suspend or terminate access to our services at any time without prior notice if any terms are violated.'
    },
    {
      id: 'governing-law',
      num: '09',
      title: 'Governing Law',
      icon: Gavel,
      color: '#6366F1',
      bgGlow: 'rgba(99, 102, 241, 0.08)',
      content: 'These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of local courts.'
    },
    {
      id: 'modifications-to-terms',
      num: '10',
      title: 'Modifications To Terms',
      icon: FileEdit,
      color: '#14B8A6',
      bgGlow: 'rgba(20, 184, 166, 0.08)',
      content: 'We may revise these Terms at any time. Continued use of the website indicates acceptance of updated terms.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      {/* Header */}
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #060E1A 100%)',
        color: '#FFFFFF',
        padding: '56px 0 64px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient radial glows */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 106, 19, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              listStyle: 'none',
              fontSize: '13px',
              color: '#94A3B8'
            }}>
              <li>
                <Link 
                  href="/" 
                  style={{ 
                    color: '#94A3B8', 
                    transition: 'color 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={14} style={{ color: '#475569' }} />
              </li>
              <li>
                <Link 
                  href="/#services" 
                  style={{ 
                    color: '#94A3B8', 
                    transition: 'color 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
                >
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight size={14} style={{ color: '#475569' }} />
              </li>
              <li style={{ color: '#F8FAFC', fontWeight: 600 }} aria-current="page">
                Terms & Conditions
              </li>
            </ol>
          </nav>

          {/* Regulatory Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38BDF8',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              <ShieldCheck size={14} /> Legal & Regulatory Policy
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#CBD5E1',
              fontSize: '12px',
              fontWeight: 600
            }}>
              AMFI ARN-194720 | BSE Member 55533
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#FFFFFF',
            marginBottom: '12px',
            letterSpacing: '-0.5px'
          }}>
            Terms & Conditions
          </h1>

          <div style={{
            fontSize: '18px',
            color: '#38BDF8',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Investrow Financial Services Pvt. Ltd.
          </div>

          <p style={{
            maxWidth: '780px',
            fontSize: '15px',
            lineHeight: 1.65,
            color: '#94A3B8',
            marginBottom: '28px'
          }}>
            Welcome to Investrow Financial Services Pvt. Ltd. By accessing or using our website and services, you agree to comply with the following Terms and Conditions. Please read them thoroughly.
          </p>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '10px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <Printer size={15} /> Print / Save Document
            </button>

            <span style={{ fontSize: '13px', color: '#64748B' }}>
              Jurisdiction: India • Last Updated: October 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section style={{ padding: '64px 0 88px', flex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '40px',
            alignItems: 'start'
          }} className="terms-grid">

            {/* Left Sidebar: Quick Navigation & Corporate Info */}
            <aside style={{ position: 'sticky', top: '96px' }} className="hide-mobile">
              {/* Table of Contents Card */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px',
                  color: 'var(--navy-deep)',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border-subtle)'
                }}>
                  <Info size={16} style={{ color: 'var(--primary-blue)' }} /> Table of Contents
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary-blue-light)';
                        e.currentTarget.style.color = 'var(--primary-blue-dark)';
                        e.currentTarget.style.paddingLeft = '16px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.paddingLeft = '12px';
                      }}
                    >
                      <span>{sec.num}. {sec.title}</span>
                      <ChevronRight size={13} style={{ opacity: 0.5 }} />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Corporate Identity Card */}
              <div style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Building size={18} style={{ color: '#38BDF8' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94A3B8' }}>
                    Entity Information
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#F8FAFC', marginBottom: '12px' }}>
                  Investrow Financial Services Pvt. Ltd.
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#94A3B8', marginBottom: '18px' }}>
                  <div><strong>CIN:</strong> U67190JH2021PTC016813</div>
                  <div><strong>AMFI MFD ARN:</strong> 194720</div>
                  <div><strong>BSE Member Code:</strong> 55533</div>
                  <div><strong>Jurisdiction:</strong> Dhanbad, Jharkhand, India</div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal('Terms Sidebar')}
                  className="btn-orange"
                  style={{ width: '100%', padding: '10px 16px', fontSize: '13px' }}
                >
                  Speak With An Advisor <ArrowRight size={14} />
                </button>
              </div>
            </aside>

            {/* Right: Detailed Terms Sections */}
            <main style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Preamble Welcome Card */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  background: 'var(--primary-blue-gradient)'
                }} />

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--primary-blue)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '10px'
                }}>
                  Legal Notice & Agreement
                </div>
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--navy-deep)',
                  marginBottom: '14px'
                }}>
                  Investrow Financial Services Pvt. Ltd.
                </h2>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
                  Welcome to Investrow Financial Services Pvt. Ltd. By accessing or using our website and services, you agree to comply with the following Terms and Conditions.
                </p>
              </div>

              {/* 10 Individual Section Cards */}
              {sections.map((section) => {
                const IconComponent = section.icon;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    style={{
                      background: section.isHighlight 
                        ? 'linear-gradient(180deg, #FFFDF8 0%, #FFF9F2 100%)' 
                        : '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      border: section.isHighlight 
                        ? '1.5px solid rgba(245, 158, 11, 0.4)' 
                        : '1px solid var(--border-subtle)',
                      padding: '32px',
                      boxShadow: section.isHighlight 
                        ? '0 10px 30px rgba(245, 158, 11, 0.08)' 
                        : 'var(--shadow-sm)',
                      transition: 'var(--transition-smooth)',
                      position: 'relative'
                    }}
                  >
                    {/* Header Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '16px',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-md)',
                        background: section.bgGlow,
                        color: section.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: `1px solid ${section.color}25`
                      }}>
                        <IconComponent size={22} />
                      </div>

                      <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: section.color,
                          letterSpacing: '0.6px',
                          textTransform: 'uppercase'
                        }}>
                          Section {section.num}
                        </div>
                        <h3 style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: 'var(--navy-deep)',
                          margin: 0
                        }}>
                          {section.title}
                        </h3>
                      </div>

                      {section.isHighlight && (
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          background: 'rgba(245, 158, 11, 0.15)',
                          color: '#B45309',
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Statutory Risk Notice
                        </span>
                      )}
                    </div>

                    {/* Section Body Content */}
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: section.isHighlight ? '#78350F' : 'var(--text-secondary)',
                      fontWeight: section.isHighlight ? 500 : 400
                    }}>
                      {section.content}
                    </p>

                    {/* Supplementary Note for Risk Disclaimer */}
                    {section.isHighlight && (
                      <div style={{
                        marginTop: '18px',
                        padding: '16px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: '#FFFFFF',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: '#92400E',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start'
                      }}>
                        <ShieldCheck size={18} style={{ color: '#D97706', flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <strong>AMFI & SEBI Regulatory Notice:</strong> Mutual fund investments are subject to market risks, read all scheme related documents carefully. Investrow Financial Services Pvt. Ltd. acts as an AMFI-registered Mutual Fund Distributor (ARN-194720).
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}

              {/* Need Assistance / Compliance Desk Box */}
              <div style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 106, 19, 0.2) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '640px', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#FF8A3D',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                    marginBottom: '10px'
                  }}>
                    Compliance & Investor Support
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}>
                    Have questions regarding our terms or services?
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    marginBottom: '24px'
                  }}>
                    Our compliance desk and certified mutual fund advisors are here to assist you with any questions or clarifications regarding your accounts, policies, or investments.
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <a
                      href="tel:+919102070777"
                      className="btn-orange"
                      style={{ padding: '12px 24px', fontSize: '14px' }}
                    >
                      <Phone size={15} /> +91 91020 70777
                    </a>

                    <a
                      href="mailto:info@investrow.in"
                      className="btn-outline"
                      style={{
                        padding: '12px 22px',
                        fontSize: '14px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Mail size={15} /> info@investrow.in
                    </a>
                  </div>
                </div>
              </div>

            </main>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Advisor Floating Widget */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Mobile Sticky Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Terms Mobile Callback')} />

      <style jsx>{`
        @media (max-width: 960px) {
          .terms-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
