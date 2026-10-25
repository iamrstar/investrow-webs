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
  Lock, 
  Database, 
  Settings, 
  Share2, 
  Cookie, 
  UserCheck, 
  ExternalLink, 
  RefreshCw, 
  Mail, 
  Phone, 
  Building, 
  Info, 
  ChevronRight, 
  Printer, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function PrivacyClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Mutual Funds Advisory');

  const handleOpenConsultModal = (service = 'Privacy Page Consultation') => {
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
      id: 'information-we-collect',
      num: '01',
      title: 'Information We Collect',
      icon: Database,
      color: '#0EA5E9',
      bgGlow: 'rgba(14, 165, 233, 0.08)',
      content: 'We may collect personal information such as your name, contact number, email address, PAN details, financial information, and any other details required for providing financial services. Additionally, we may collect non-personal data like IP address, browser type, device information, and website usage data.'
    },
    {
      id: 'how-we-use-your-information',
      num: '02',
      title: 'How We Use Your Information',
      icon: Settings,
      color: '#FF6A13',
      bgGlow: 'rgba(255, 106, 19, 0.08)',
      content: 'The collected information is used to provide financial services, process transactions, verify identity, improve user experience, and communicate updates or offers. We may also use the data to comply with legal and regulatory requirements.'
    },
    {
      id: 'sharing-of-information',
      num: '03',
      title: 'Sharing Of Information',
      icon: Share2,
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.08)',
      content: 'We do not sell or rent your personal data. However, we may share your information with trusted third parties such as banks, financial institutions, regulatory authorities, or service providers, strictly for service delivery, compliance, or operational purposes.'
    },
    {
      id: 'data-security',
      num: '04',
      title: 'Data Security',
      icon: Lock,
      color: '#6366F1',
      bgGlow: 'rgba(99, 102, 241, 0.08)',
      isHighlight: true,
      content: 'We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure. Despite our efforts, no method of transmission over the internet is completely secure.'
    },
    {
      id: 'cookies-and-tracking-technologies',
      num: '05',
      title: 'Cookies And Tracking Technologies',
      icon: Cookie,
      color: '#F59E0B',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      content: 'Our website may use cookies and similar technologies to enhance user experience, analyze traffic, and improve our services. You can control cookie settings through your browser preferences.'
    },
    {
      id: 'user-rights',
      num: '06',
      title: 'User Rights',
      icon: UserCheck,
      color: '#8B5CF6',
      bgGlow: 'rgba(139, 92, 246, 0.08)',
      content: 'You have the right to access, update, or request deletion of your personal information. You may also opt out of marketing communications at any time.'
    },
    {
      id: 'third-party-links',
      num: '07',
      title: 'Third-Party Links',
      icon: ExternalLink,
      color: '#EC4899',
      bgGlow: 'rgba(236, 72, 153, 0.08)',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.'
    },
    {
      id: 'changes-to-privacy-policy',
      num: '08',
      title: 'Changes To Privacy Policy',
      icon: RefreshCw,
      color: '#14B8A6',
      bgGlow: 'rgba(20, 184, 166, 0.08)',
      content: 'We reserve the right to update this policy from time to time. Any changes will be posted on this page with an updated effective date.'
    },
    {
      id: 'contact-us',
      num: '09',
      title: 'Contact Us',
      icon: Mail,
      color: '#0284C7',
      bgGlow: 'rgba(2, 132, 199, 0.08)',
      content: 'For any queries regarding this Privacy Policy, please contact us at Investrow Financial Services Pvt. Ltd. Email: info@investrow.in / investrow@gmail.com | Phone: +91 9102050555 / +91 9102070777'
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
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
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
                Privacy Policy
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
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#34D399',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              <ShieldCheck size={14} /> Data Protection & Privacy Commitment
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
              AMFI ARN-194720 | CIN: U67190JH2021PTC016813
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#FFFFFF',
            marginBottom: '12px',
            letterSpacing: '-0.5px'
          }}>
            Privacy Policy
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
            Investrow Financial Services Pvt. Ltd. is committed to protecting the privacy and personal information of its users, clients, and visitors. This Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our website, services, and platforms.
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
              Jurisdiction: India • Effective Date: October 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '64px 0 88px', flex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '40px',
            alignItems: 'start'
          }} className="privacy-grid">

            {/* Left Sticky Sidebar: Navigation & Corporate Trust */}
            <aside style={{ position: 'sticky', top: '96px' }} className="hide-mobile">
              {/* Quick Index */}
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

              {/* Data Protection Trust Card */}
              <div style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Building size={18} style={{ color: '#34D399' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94A3B8' }}>
                    Entity Information
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#F8FAFC', marginBottom: '12px' }}>
                  Investrow Financial Services Pvt. Ltd.
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#94A3B8', marginBottom: '18px' }}>
                  <div><strong>CIN:</strong> U67190JH2021PTC016813</div>
                  <div><strong>AMFI ARN:</strong> 194720</div>
                  <div><strong>BSE Member Code:</strong> 55533</div>
                  <div><strong>Compliance Officer:</strong> info@investrow.in</div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal('Privacy Sidebar')}
                  className="btn-orange"
                  style={{ width: '100%', padding: '10px 16px', fontSize: '13px' }}
                >
                  Contact Advisory Team <ArrowRight size={14} />
                </button>
              </div>
            </aside>

            {/* Right: Detailed Privacy Policy Sections */}
            <main style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Preamble Card */}
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
                  background: 'linear-gradient(180deg, #10B981 0%, #0EA5E9 100%)'
                }} />

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#10B981',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '10px'
                }}>
                  Privacy & Data Governance
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
                  Investrow Financial Services Pvt. Ltd. is committed to protecting the privacy and personal information of its users, clients, and visitors. This Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our website, services, and platforms.
                </p>
              </div>

              {/* 9 Policy Cards */}
              {sections.map((section) => {
                const IconComponent = section.icon;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    style={{
                      background: section.isHighlight 
                        ? 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' 
                        : '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      border: section.isHighlight 
                        ? '1.5px solid rgba(99, 102, 241, 0.3)' 
                        : '1px solid var(--border-subtle)',
                      padding: '32px',
                      boxShadow: section.isHighlight 
                        ? '0 10px 30px rgba(99, 102, 241, 0.08)' 
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
                          background: 'rgba(99, 102, 241, 0.12)',
                          color: '#4F46E5',
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          High Protection Standard
                        </span>
                      )}
                    </div>

                    {/* Section Body */}
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: 'var(--text-secondary)'
                    }}>
                      {section.content}
                    </p>

                    {/* Special Contact Display if Section 09 */}
                    {section.id === 'contact-us' && (
                      <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        borderRadius: 'var(--radius-md)',
                        background: '#F8FAFC',
                        border: '1px solid var(--border-subtle)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '16px'
                      }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <div style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            background: 'rgba(14, 165, 233, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0EA5E9',
                            flexShrink: 0
                          }}>
                            <Mail size={18} />
                          </div>
                          <div>
                            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Email Support</div>
                            <a href="mailto:info@investrow.in" style={{ color: 'var(--navy-deep)', fontWeight: 600, fontSize: '13.5px' }}>info@investrow.in</a>
                            <div style={{ fontSize: '12px', color: '#64748B' }}>investrow@gmail.com</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <div style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            background: 'rgba(255, 106, 19, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FF6A13',
                            flexShrink: 0
                          }}>
                            <Phone size={18} />
                          </div>
                          <div>
                            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Phone Direct</div>
                            <a href="tel:+919102070777" style={{ color: 'var(--navy-deep)', fontWeight: 600, fontSize: '13.5px', display: 'block' }}>+91 91020 70777</a>
                            <a href="tel:+919102050555" style={{ color: '#64748B', fontSize: '12.5px' }}>+91 91020 50555</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}

              {/* Data Grievance Box */}
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
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '640px', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#34D399',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                    marginBottom: '10px'
                  }}>
                    Privacy Officer & Grievance Desk
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}>
                    Questions about your data or preferences?
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    marginBottom: '24px'
                  }}>
                    If you have questions about our data security practices, want to update your KYC documents, or exercise your data rights, contact our designated privacy desk.
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <a
                      href="mailto:info@investrow.in"
                      className="btn-orange"
                      style={{ padding: '12px 24px', fontSize: '14px' }}
                    >
                      <Mail size={15} /> info@investrow.in
                    </a>

                    <a
                      href="tel:+919102070777"
                      className="btn-outline"
                      style={{
                        padding: '12px 22px',
                        fontSize: '14px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Phone size={15} /> +91 91020 70777
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
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Privacy Mobile Callback')} />

      <style jsx>{`
        @media (max-width: 960px) {
          .privacy-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
