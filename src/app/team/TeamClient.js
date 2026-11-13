'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { 
  leadershipTeam, 
  teamStats 
} from '@/data/teamData';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Users, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  Target, 
  HeartHandshake, 
  Layers,
  FileCheck,
  Building2,
  CalendarCheck
} from 'lucide-react';

export default function TeamClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultDefaultService, setConsultDefaultService] = useState('Executive Advisory Consultation');
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  const handleOpenConsultModal = (serviceName = 'Team Consultation', advisor = null) => {
    setConsultDefaultService(serviceName);
    setSelectedAdvisor(advisor);
    setConsultModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <Header onOpenConsultModal={handleOpenConsultModal} />

      <main style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <section style={{
          background: 'linear-gradient(135deg, #071224 0%, #0C1E3C 50%, #06152B 100%)',
          color: '#FFFFFF',
          padding: '64px 0 76px',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Subtle Ambient Glows */}
          <div style={{
            position: 'absolute',
            top: '-25%',
            right: '15%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 138, 216, 0.16) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 106, 19, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Breadcrumb Navigation */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#94A3B8',
              marginBottom: '20px',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
              <ChevronRight size={13} style={{ color: '#64748B' }} />
              <Link href="/about" style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link>
              <ChevronRight size={13} style={{ color: '#64748B' }} />
              <span style={{ color: '#38BDF8', fontWeight: 600 }}>Our Team</span>
            </div>

            <div style={{ maxWidth: '860px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(0, 138, 216, 0.15)',
                border: '1px solid rgba(0, 138, 216, 0.35)',
                color: '#38BDF8',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Sparkles size={13} /> Investrow Leadership & Professional Team
              </div>

              {/* Explicit Pure White H1 Header */}
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: 800,
                lineHeight: 1.16,
                marginBottom: '18px',
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}>
                The People Guiding Your <br />
                <span style={{
                  background: 'linear-gradient(135deg, #FF8A3D 0%, #FF6A13 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Financial Security & Wealth Creation
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 2vw, 17.5px)',
                lineHeight: 1.7,
                color: '#CBD5E1',
                marginBottom: '32px',
                maxWidth: '740px'
              }}>
                Meet our core executive leadership — <strong>Surendra Prasad</strong>, <strong>Dipankar Moi</strong>, and <strong>Birendra Kumar</strong> — alongside our dedicated force of 20+ certified wealth managers, quantitative research analysts, and operations specialists.
              </p>

              {/* Trust Badges Strip */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '13px',
                  color: '#F1F5F9'
                }}>
                  <ShieldCheck size={16} style={{ color: '#38BDF8' }} />
                  <span><strong>AMFI Registered MFD:</strong> ARN-194720</span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '13px',
                  color: '#F1F5F9'
                }}>
                  <Building2 size={16} style={{ color: '#FF8A3D' }} />
                  <span><strong>BSE MF Member Code:</strong> 55533</span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '13px',
                  color: '#F1F5F9'
                }}>
                  <Users size={16} style={{ color: '#34D399' }} />
                  <span><strong>Team Strength:</strong> 25+ Dedicated Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS OVERVIEW RIBBON */}
        <section style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '30px 0',
          boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.05)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '24px'
            }}>
              {teamStats.map((stat, idx) => (
                <div key={idx} style={{
                  borderLeft: idx > 0 ? '1px solid #E2E8F0' : 'none',
                  paddingLeft: idx > 0 ? '24px' : '0'
                }}>
                  <div style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    color: 'var(--navy-deep)',
                    lineHeight: 1.1,
                    marginBottom: '4px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '2px' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1: EXECUTIVE LEADERSHIP (From https://www.investrow.in/team) */}
        <section style={{ padding: '72px 0 64px', background: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(0, 138, 216, 0.08)',
                color: 'var(--primary-blue)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                <ShieldCheck size={14} /> Executive Leadership
              </div>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 800,
                color: 'var(--navy-deep)',
                lineHeight: 1.25,
                marginBottom: '14px'
              }}>
                Core Leadership Team
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#64748B' }}>
                Direct from Investrow Financial Services Pvt. Ltd. — our founders and department heads actively guide client strategy, investment ethics, and regulatory compliance.
              </p>
            </div>

            {/* 3 Executive Full-Width Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '56px' }}>
              {leadershipTeam.map((leader, index) => (
                <div
                  key={leader.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 30px -10px rgba(10, 22, 40, 0.07)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 340px) 1fr',
                    transition: 'all 0.3s ease'
                  }}
                  className="executive-leader-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.boxShadow = '0 16px 36px -10px rgba(0, 138, 216, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 8px 30px -10px rgba(10, 22, 40, 0.07)';
                  }}
                >
                  {/* Left Column: Portrait & Credentials */}
                  <div style={{
                    background: 'linear-gradient(180deg, #0A1628 0%, #102444 100%)',
                    padding: '36px 28px',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    position: 'relative'
                  }}>
                    {/* Portrait Image Container */}
                    <div 
                      onClick={() => handleOpenConsultModal(`Advisory Meeting with ${leader.name}`, leader)}
                      style={{
                        width: '210px',
                        height: '230px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        background: '#FFFFFF',
                        marginBottom: '20px',
                        border: '3px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.3)',
                        position: 'relative',
                        cursor: 'pointer'
                      }}
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top center'
                        }}
                      />
                    </div>

                    <h3 
                      onClick={() => handleOpenConsultModal(`Advisory Meeting with ${leader.name}`, leader)}
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        marginBottom: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      {leader.name}
                    </h3>

                    <div style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: '#FF8A3D',
                      marginBottom: '14px'
                    }}>
                      {leader.role}
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      color: '#94A3B8',
                      marginBottom: '20px'
                    }}>
                      <Clock size={12} style={{ color: '#38BDF8' }} />
                      <span>{leader.experience} Cumulative Experience</span>
                    </div>

                    <button
                      onClick={() => handleOpenConsultModal(`Advisory Meeting with ${leader.name}`, leader)}
                      className="btn-orange"
                      style={{
                        width: '100%',
                        padding: '11px 18px',
                        fontSize: '13.5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <CalendarCheck size={15} />
                      <span>Request Meeting</span>
                    </button>
                  </div>

                  {/* Right Column: Statement, Philosophy & Details */}
                  <div style={{ padding: '36px 36px 32px', display: 'flex', flexDirection: 'column' }}>
                    {/* Header line with badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '18px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--primary-blue)',
                        background: 'rgba(0, 138, 216, 0.08)',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        <ShieldCheck size={13} /> {leader.department}
                      </span>

                      <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
                        Investrow Financial Services Pvt. Ltd.
                      </span>
                    </div>

                    {/* Featured Leadership Quote */}
                    <div style={{
                      background: 'rgba(0, 138, 216, 0.04)',
                      borderLeft: '4px solid var(--primary-blue)',
                      padding: '16px 20px',
                      borderRadius: '0 12px 12px 0',
                      marginBottom: '20px',
                      fontSize: '14.5px',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      color: '#1E293B'
                    }}>
                      “{leader.quote}”
                    </div>

                    {/* Official Statement from investrow.in */}
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.8,
                      color: '#475569',
                      marginBottom: '24px',
                      flex: 1
                    }}>
                      {leader.bio}
                    </p>

                    {/* Fiduciary Credentials & Focus Areas */}
                    <div style={{
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '20px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '20px',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.6px', marginBottom: '8px' }}>
                          Verified Fiduciary Credentials
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {leader.credentials.map((cred, i) => (
                            <span key={i} style={{
                              fontSize: '12px',
                              fontWeight: 600,
                              color: 'var(--navy-deep)',
                              background: '#F1F5F9',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px'
                            }}>
                              <CheckCircle2 size={12} style={{ color: '#008AD8' }} /> {cred}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '12px' }}>
                        <a
                          href="tel:+919102070777"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--navy-deep)',
                            textDecoration: 'none',
                            padding: '8px 14px',
                            background: '#F8FAFC',
                            borderRadius: '8px',
                            border: '1px solid #E2E8F0'
                          }}
                        >
                          <Phone size={13} style={{ color: '#FF6A13' }} /> Call Desk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* A Word from the Leadership Desk (Callout Box) */}
            <div style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
              borderRadius: '20px',
              padding: '44px',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(10, 22, 40, 0.25)'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                color: 'rgba(255, 255, 255, 0.04)',
                pointerEvents: 'none'
              }}>
                <Quote size={130} />
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FF8A3D',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px',
                  marginBottom: '14px'
                }}>
                  <Quote size={16} /> A Note From Our Leadership Desk
                </div>

                <h3 style={{
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.35,
                  marginBottom: '16px',
                  maxWidth: '850px'
                }}>
                  “Our advice to aspiring investors: Focus on trust first, cultivate patience across cycles, and keep learning.”
                </h3>

                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: '#CBD5E1',
                  maxWidth: '920px',
                  marginBottom: '28px'
                }}>
                  At Investrow Financial Services Pvt. Ltd., our core duty is to ensure every rupee entrusted to our guidance works systematically towards your family’s real-world financial goals. This is a relationship-driven industry where clients value honesty, consistency, and long-term support.
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                      Surendra Prasad, Dipankar Moi & Birendra Kumar
                    </div>
                    <div style={{ fontSize: '13px', color: '#94A3B8' }}>
                      Executive Directorate • AMFI Registered Mutual Fund Distributor ARN-194720
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenConsultModal('Executive Desk Consultation')}
                    className="btn-orange"
                    style={{ padding: '10px 22px', fontSize: '13.5px' }}
                  >
                    Book Free Wealth Audit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 20+ HIGHLY QUALIFIED PROFESSIONALS FORCE */}
        <section style={{ padding: '80px 0 96px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(0, 138, 216, 0.08)',
                color: 'var(--primary-blue)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                <Users size={14} /> 20+ Certified Institutional Professionals
              </div>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                color: 'var(--navy-deep)',
                lineHeight: 1.25,
                marginBottom: '16px'
              }}>
                Powered by 20+ Highly Qualified Professionals
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#64748B' }}>
                Behind Investrow’s executive leadership operates an institutional force of over 20+ full-time certified wealth advisors, quantitative research analysts, operations managers, and regulatory compliance specialists — dedicated to managing and compounding wealth for 3,000+ families.
              </p>
            </div>

            {/* Collective Strength KPI Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '44px'
            }}>
              {[
                { number: '20+', label: 'Qualified Professionals', desc: 'Across Advisory, Research & Operations', icon: <Users size={20} color="#008AD8" /> },
                { number: '100%', label: 'AMFI / NISM Certified', desc: 'Strict regulatory code compliance (ARN-194720)', icon: <ShieldCheck size={20} color="#22C55E" /> },
                { number: '40+', label: 'AMCs Under Coverage', desc: 'SBI, HDFC, ICICI, Nippon, Quant & more', icon: <Building2 size={20} color="#FF6A13" /> },
                { number: '2 Hours', label: 'Client Desk SLA', desc: 'Dedicated relationship desk response', icon: <Clock size={20} color="#8B5CF6" /> }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '22px 20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(10, 22, 40, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 138, 216, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', lineHeight: 1.1 }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue)', marginTop: '2px' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
                      {stat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Department Functional Desks Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '44px'
            }}>
              {[
                {
                  title: 'Wealth Advisory & Relationship Management Desk',
                  teamSize: '6+ Senior Advisors',
                  badgeColor: '#008AD8',
                  badgeBg: 'rgba(0, 138, 216, 0.1)',
                  qualifications: 'AMFI Registered (ARN-194720), NISM Series V-A, MBA Finance',
                  responsibilities: [
                    'Personalized goal-based SIP architecture (Child higher education, FIRE, retirement)',
                    'High-Net-Worth (HNI) asset allocation & lumpsum deployment strategies',
                    'Dedicated human relationship manager with direct phone & WhatsApp access',
                    'Regular annual portfolio rebalancing and tax-efficient SWP cashflow setup'
                  ]
                },
                {
                  title: 'Quantitative Research & Fund Analytics Desk',
                  teamSize: '4+ Research Analysts',
                  badgeColor: '#FF6A13',
                  badgeBg: 'rgba(255, 106, 19, 0.1)',
                  qualifications: 'CFA Charterholders, M.Sc Finance, Quantitative Data Specialists',
                  responsibilities: [
                    'Quarterly quantitative tracking across 2,500+ active mutual fund schemes',
                    'Rolling returns analysis, alpha vs. benchmark, capture ratios & Sharpe ratio screening',
                    'Identification of consistent compounders in Mid-Cap, Small-Cap & Flexi-Cap categories',
                    'Early warning detection for fund manager transitions and mandate drifts'
                  ]
                },
                {
                  title: 'Client Operations & Fast-Track C-KYC Desk',
                  teamSize: '5+ Operations Specialists',
                  badgeColor: '#10B981',
                  badgeBg: 'rgba(16, 185, 129, 0.1)',
                  qualifications: 'BSE StAR MF Certified, CAMS / KFintech Operations Experts',
                  responsibilities: [
                    '100% paperless onboarding and C-KYC / KRA verification within hours',
                    'Seamless automated SIP bank mandate registration via e-NACH / UPI Autopay',
                    'Consolidation of scattered family folios into single unified portfolio view',
                    'End-to-end assistance with nominee updates, bank changes & redemption payouts'
                  ]
                },
                {
                  title: 'Regulatory Compliance, Risk & Governance Desk',
                  teamSize: '3+ Compliance Officers',
                  badgeColor: '#8B5CF6',
                  badgeBg: 'rgba(139, 92, 246, 0.1)',
                  qualifications: 'Chartered Accountants (CA), SEBI / AMFI Statutory Compliance Leads',
                  responsibilities: [
                    'Continuous adherence to SEBI and AMFI Code of Conduct and fiduciary standards',
                    'Strict zero-conflict-of-interest policy: 100% investor-first scheme recommendations',
                    'Institutional data security and client privacy governance protocols',
                    'Independent statutory audit and regulatory reporting compliance'
                  ]
                },
                {
                  title: 'Digital Platforms & Mobile Technology Desk',
                  teamSize: '4+ Digital Engineers',
                  badgeColor: '#0EA5E9',
                  badgeBg: 'rgba(14, 165, 233, 0.1)',
                  qualifications: 'Fintech Software Engineers, Cloud Security Architects',
                  responsibilities: [
                    'Development & maintenance of official Investrow App on Google Play Store',
                    'Live NAV integrations, real-time XIRR compounding engines & goal simulators',
                    'Bank-grade 256-bit encryption protecting investor data and session integrity',
                    'Continuous uptime monitoring and cloud infrastructure scalability'
                  ]
                }
              ].map((desk, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '18px',
                    border: '1px solid #E2E8F0',
                    padding: '28px 26px',
                    boxShadow: '0 4px 16px rgba(10, 22, 40, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 138, 216, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 138, 216, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 22, 40, 0.04)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: desk.badgeColor,
                      background: desk.badgeBg,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <Users size={12} /> {desk.teamSize}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>
                      Division {idx + 1} of 5
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--navy-deep)',
                    marginBottom: '10px',
                    lineHeight: 1.35
                  }}>
                    {desk.title}
                  </h3>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11.5px',
                    color: '#475569',
                    background: '#F1F5F9',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}>
                    <GraduationCap size={13} style={{ color: desk.badgeColor, flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{desk.qualifications}</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
                    {desk.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                        <CheckCircle2 size={15} style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenConsultModal(`Consultation with ${desk.title}`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '11px',
                      borderRadius: '10px',
                      background: 'rgba(0, 138, 216, 0.08)',
                      border: '1px solid rgba(0, 138, 216, 0.25)',
                      color: 'var(--primary-blue-dark)',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--primary-blue)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 138, 216, 0.08)';
                      e.currentTarget.style.color = 'var(--primary-blue-dark)';
                    }}
                  >
                    <span>Connect With This Desk</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Institutional Commitment Callout */}
            <div style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
              borderRadius: '20px',
              padding: '32px 36px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              border: '1px solid rgba(0, 138, 216, 0.35)',
              boxShadow: '0 12px 36px rgba(10, 22, 40, 0.25)'
            }}>
              <div style={{ maxWidth: '620px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                  <ShieldCheck size={14} /> Fiduciary Wealth Architecture
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  Work with a Dedicated Team That Puts Your Goals First
                </h3>
                <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0, lineHeight: 1.6 }}>
                  Our 20+ member team combines quantitative discipline with genuine human care. Get a complimentary, confidential review of your mutual fund portfolio today.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleOpenConsultModal('Team Advisory Review')}
                  className="btn-orange"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Book Free Portfolio Review ➔
                </button>
                <a
                  href="tel:+919102070777"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={14} style={{ color: 'var(--accent-orange)' }} />
                  <span>Call Advisory Desk</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: The 4 Institutional Commitments */}
        <section style={{ padding: '80px 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(0, 138, 216, 0.08)',
                color: 'var(--primary-blue)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                <ShieldCheck size={14} /> Fiduciary Integrity
              </div>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 800,
                color: 'var(--navy-deep)',
                lineHeight: 1.25,
                marginBottom: '14px'
              }}>
                Why Thousands of Families Trust Our Specialists
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#64748B' }}>
                We believe mutual fund distribution is fundamentally about human empathy, rigorous math, and permanent accountability.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}>
              {[
                {
                  icon: <Target size={24} style={{ color: '#008AD8' }} />,
                  title: '100% Goal-Anchored Portfolios',
                  desc: 'Every SIP or lumpsum we recommend corresponds to an explicit milestone — child college, retirement income, or family wealth protection. Never random scheme pushing.'
                },
                {
                  icon: <ShieldCheck size={24} style={{ color: '#FF6A13' }} />,
                  title: 'Full AMFI Code Compliance',
                  desc: 'Our entire advisory team operates under strict SEBI and AMFI Code of Conduct standards. Your KYC, bank mandates, and investments remain 100% direct with registered AMCs.'
                },
                {
                  icon: <Layers size={24} style={{ color: '#10B981' }} />,
                  title: 'Ongoing Portfolio Surveillance',
                  desc: 'Markets change and fund managers move. Our dedicated research team conducts quarterly health checks, flagging persistent underperformers for tax-efficient rebalancing.'
                },
                {
                  icon: <HeartHandshake size={24} style={{ color: '#8B5CF6' }} />,
                  title: 'Dedicated Human Relationship Manager',
                  desc: 'No automated bots or faceless call centers when you need real help. You receive a dedicated relationship manager and direct phone line for instant queries.'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#F8FAFC',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#64748B' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Final Call to Action */}
        <section style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #0A1628 0%, #008AD8 100%)',
          color: '#FFFFFF'
        }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '16px',
              color: '#FFFFFF'
            }}>
              Ready to Partner with a Dedicated Financial Team?
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#E0F2FE',
              marginBottom: '36px'
            }}>
              Book a complimentary portfolio review with Surendra Prasad, Dipankar Moi, or our senior wealth management desk. Get unbiased guidance on your existing SIPs and future milestones.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenConsultModal('Team Page CTA - Free Portfolio Review')}
                className="btn-orange"
                style={{ padding: '14px 32px', fontSize: '15px' }}
              >
                Book Free Portfolio Review <ArrowRight size={16} />
              </button>
              <a
                href="tel:+919102070777"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '15px',
                  transition: 'background 0.2s ease'
                }}
              >
                <Phone size={16} /> Call Desk: +91 91020 70777
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenConsultModal={handleOpenConsultModal} />

      {/* Interactive Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        onClose={() => {
          setConsultModalOpen(false);
          setSelectedAdvisor(null);
        }}
        defaultService={consultDefaultService}
        advisor={selectedAdvisor}
      />

      <StickyMobileBar onOpenConsultModal={handleOpenConsultModal} />
      <AIChatAdvisor onOpenConsultModal={handleOpenConsultModal} />

      {/* Responsive CSS helper */}
      <style jsx global>{`
        @media (max-width: 860px) {
          .executive-leader-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
