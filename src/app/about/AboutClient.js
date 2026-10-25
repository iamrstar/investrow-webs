'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { awardsData } from '@/data/awardsData';
import { leadershipTeam } from '@/data/teamData';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Users, 
  Target, 
  Eye, 
  HeartHandshake, 
  Lock, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  ShieldAlert, 
  FileCheck, 
  BadgePercent, 
  Compass, 
  Quote, 
  ShieldCheck as ShieldTrust,
  KeyRound,
  Building2,
  Image as ImageIcon,
  ExternalLink,
  ZoomIn
} from 'lucide-react';

export default function AboutClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Mutual Funds Advisory');
  const [activeAwardModal, setActiveAwardModal] = useState(null);

  const handleOpenConsultModal = (service = 'About Page Consultation') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const milestones = [
    {
      value: '23+',
      label: 'Years of Experience',
      sub: 'Cumulative industry leadership',
      color: '#0EA5E9',
      bgGlow: 'rgba(14, 165, 233, 0.1)',
      icon: Clock
    },
    {
      value: '₹250 Cr+',
      label: 'Total AUM Managed',
      sub: 'Assets under disciplined advisory',
      color: '#FF6A13',
      bgGlow: 'rgba(255, 106, 19, 0.1)',
      icon: TrendingUp
    },
    {
      value: '3,000+',
      label: 'Happy Client Families',
      sub: 'Across Jharkhand & Pan-India',
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.1)',
      icon: Users
    },
    {
      value: '22+',
      label: 'Industry Awards',
      sub: 'Recognized by India’s Premier AMCs',
      color: '#D4A574',
      bgGlow: 'rgba(212, 165, 116, 0.12)',
      icon: Award
    }
  ];

  const pillarCards = [
    {
      title: 'Our Mission',
      icon: Target,
      tag: 'PURPOSE & DIRECTION',
      color: '#0EA5E9',
      bg: 'linear-gradient(180deg, rgba(14, 165, 233, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      borderColor: 'rgba(14, 165, 233, 0.2)',
      description: 'Our mission is to make investing simple, transparent, and accessible for everyone. We aim to help individuals achieve their financial goals through disciplined investing and the right guidance.'
    },
    {
      title: 'Our Vision',
      icon: Compass,
      tag: 'LONG-TERM HORIZON',
      color: '#FF6A13',
      bg: 'linear-gradient(180deg, rgba(255, 106, 19, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      borderColor: 'rgba(255, 106, 19, 0.2)',
      description: 'Our vision is to become a trusted financial partner for our clients by building long-term relationships and supporting them in their wealth creation journey.'
    },
    {
      title: 'Core Values',
      icon: HeartHandshake,
      tag: 'FOUNDATIONAL ETHOS',
      color: '#10B981',
      bg: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.2)',
      description: 'Our company is driven by values like trust, transparency, and a client-first approach. We believe in giving honest advice, maintaining long-term relationships, and continuously supporting our clients in every stage of their financial journey.'
    }
  ];

  const securityFeatures = [
    {
      title: 'Verified By Verisign & SEBI Standards',
      desc: 'All data communication runs over high-grade 256-bit encrypted channels adhering to strict financial regulatory standards.',
      icon: ShieldTrust,
      badge: 'Certified Security'
    },
    {
      title: 'No Money Can Be Moved Without Consent',
      desc: 'Your funds flow directly from your verified bank account to SEBI-registered Mutual Fund AMCs (via BSE Star MF). We never hold or touch your redemption money.',
      icon: Lock,
      badge: 'Zero Custodial Risk'
    },
    {
      title: 'Bank-Grade Password Encryption',
      desc: 'State-of-the-art authentication protocols protect user profiles, client folios, and sensitive investor documentation.',
      icon: KeyRound,
      badge: 'Multi-Tier Auth'
    },
    {
      title: 'Official Exchange Infrastructure',
      desc: 'Investrow executes directly through BSE Star MF (Member Code: 55533), ensuring institutional-grade settlement reliability.',
      icon: Building2,
      badge: 'BSE Member 55533'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      {/* Header */}
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #060E1A 100%)',
        color: '#FFFFFF',
        padding: '64px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient lighting glows */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 106, 19, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
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
              <li style={{ color: '#F8FAFC', fontWeight: 600 }} aria-current="page">
                About Us
              </li>
            </ol>
          </nav>

          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38BDF8',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              <ShieldCheck size={14} /> AMFI Registered MFD (ARN-194720)
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#CBD5E1',
              fontSize: '12px',
              fontWeight: 600
            }}>
              BSE Member Code: 55533 • Estd. 2021
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center'
          }} className="about-hero-grid">
            {/* Left Content */}
            <div>
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>
                Building Generational Wealth With a <span style={{
                  background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Client-First</span> Vision
              </h1>

              <div style={{
                fontSize: '19px',
                color: '#38BDF8',
                fontWeight: 700,
                marginBottom: '18px'
              }}>
                Investrow Financial Services Pvt. Ltd.
              </div>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#94A3B8',
                marginBottom: '32px'
              }}>
                At Investrow Financial Services Pvt. Ltd., the leadership team is focused on building a client-first and growth-oriented organization. The key executives bring practical experience in financial services, along with a deep understanding of mutual fund distribution, risk management, and long-term client stewardship.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleOpenConsultModal('About Hero CTA')}
                  className="btn-orange"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  Start Investing With Us <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => handleOpenConsultModal('About Callback CTA')}
                  className="btn-outline"
                  style={{
                    padding: '13px 24px',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    background: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Phone size={15} /> Request Callback
                </button>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
              border: '1.5px dashed rgba(56, 189, 248, 0.35)',
              background: 'linear-gradient(135deg, rgba(15, 30, 54, 0.8) 0%, rgba(10, 22, 40, 0.95) 100%)',
              backdropFilter: 'blur(16px)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '32px 28px 24px'
            }}>
              {/* Subtle top indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  color: '#38BDF8',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Photo Placeholder
                </span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
                  16:9 Aspect Ratio
                </span>
              </div>

              {/* Centered Placeholder Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '24px 12px'
              }}>
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '16px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: '#38BDF8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <ImageIcon size={32} />
                </div>

                <div style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '6px'
                }}>
                  Leadership & Office Photo
                </div>

                <div style={{
                  fontSize: '13px',
                  color: '#94A3B8',
                  maxWidth: '280px',
                  lineHeight: 1.5
                }}>
                  Insert high-resolution team, branch, or executive leadership image
                </div>
              </div>

              {/* Bottom Details Bar */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>Executive Advisory Board</div>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>Dhanbad, Jharkhand & Pan-India</div>
                </div>
                <div style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  color: '#4ADE80',
                  fontSize: '11px',
                  fontWeight: 700
                }}>
                  ● Client-First Stewardship
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inspirational Milestones Stat Banner */}
      <section style={{
        marginTop: '-40px',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 32px',
            boxShadow: '0 20px 50px rgba(10, 22, 40, 0.12)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px'
          }}>
            {milestones.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  borderRight: idx < milestones.length - 1 ? '1px solid #F1F5F9' : 'none',
                  paddingRight: '16px'
                }} className="milestone-item">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    background: item.bgGlow,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComp size={28} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: 'var(--navy-deep)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.5px'
                    }}>
                      {item.value}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--navy-deep)',
                      marginTop: '3px'
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#64748B',
                      marginTop: '2px'
                    }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Overview & Philosophy */}
      <section style={{ padding: '88px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
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
              <Sparkles size={14} /> Executive Leadership & Stewardship
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Guiding Vision, Ethics & Compliance
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}>
              They are actively involved in guiding the company’s vision, maintaining compliance standards as an AMFI-registered entity, and ensuring that clients receive transparent and reliable financial advice. The leadership team also plays an important role in mentoring the team, improving processes, and adopting new ideas to enhance client experience. Their focus remains on long-term growth, trust-building, and delivering consistent value to clients.
            </p>
          </div>

          {/* 3 Executive Leaders Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}>
            {leadershipTeam.map((leader) => (
              <div 
                key={leader.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 24px -6px rgba(10, 22, 40, 0.06)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(0, 138, 216, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(10, 22, 40, 0.06)';
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
                  padding: '24px 20px',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '110px',
                    height: '110px',
                    margin: '0 auto 14px',
                    borderRadius: '50%',
                    padding: '3px',
                    background: 'linear-gradient(135deg, #008AD8 0%, #FF6A13 100%)',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: '#FFFFFF'
                    }}>
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    {leader.name}
                  </h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#FF8A3D' }}>
                    {leader.role}
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: '#475569',
                    marginBottom: '16px',
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {leader.bio}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                    {leader.credentials.slice(0, 2).map((c, i) => (
                      <span key={i} style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--navy-deep)',
                        background: '#F1F5F9',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/team"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(0, 138, 216, 0.08)',
                      color: 'var(--primary-blue)',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 138, 216, 0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 138, 216, 0.08)'}
                  >
                    View Leadership Profile & Full Team <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner to Full 25+ Member Team Directory */}
          <div style={{
            background: 'linear-gradient(90deg, rgba(0, 138, 216, 0.06) 0%, rgba(255, 106, 19, 0.06) 100%)',
            border: '1px solid rgba(0, 138, 216, 0.2)',
            borderRadius: '12px',
            padding: '18px 24px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                  Backed by 20+ Specialized Financial Professionals
                </div>
                <div style={{ fontSize: '13px', color: '#64748B' }}>
                  Certified wealth advisors, quantitative research analysts, operations managers & KYC specialists.
                </div>
              </div>
            </div>

            <Link
              href="/team"
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: '13px' }}
            >
              Explore Full Team Directory <ArrowRight size={14} />
            </Link>
          </div>

          {/* Founder's / Leadership Advice Card */}
          <div style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {/* Top quote icon */}
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '36px',
              color: 'rgba(255, 255, 255, 0.05)',
              pointerEvents: 'none'
            }}>
              <Quote size={120} />
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#FF8A3D',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '16px'
              }}>
                <Quote size={16} /> A Note From Our Leadership Desk
              </div>

              <h3 style={{
                fontSize: '26px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.35,
                marginBottom: '24px',
                maxWidth: '850px'
              }}>
                “Advice to aspiring entrepreneurs and investors in the financial services and mutual fund industry:”
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginBottom: '32px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#38BDF8', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    1. Focus on Trust First, Not Just Sales
                  </div>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#94A3B8' }}>
                    This is a relationship-driven industry, where clients value honesty, consistency, and long-term support. True success is earned when clients feel completely secure in your guidance.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#FF8A3D', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    2. Cultivate Patience Across Cycles
                  </div>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#94A3B8' }}>
                    Growth in this field takes time. Educating clients, guiding them properly, and helping them stay invested during market ups and downs is key to long-term success.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#34D399', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    3. Keep Learning and Adapting
                  </div>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#94A3B8' }}>
                    The industry is constantly evolving with new products and technologies, so staying updated and improving your knowledge will always give you an edge.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>Investrow Leadership & Advisory Team</div>
                  <div style={{ fontSize: '13px', color: '#94A3B8' }}>AMFI Registered Mutual Fund Distributor • ARN-194720</div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal('Leadership Note Consultation')}
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

      {/* Mission, Vision, Values (3 Glass Cards) */}
      <section style={{ padding: '64px 0 88px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', marginBottom: '52px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 106, 19, 0.08)',
              color: 'var(--accent-orange)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              Our Core Pillars
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 800,
              color: 'var(--navy-deep)'
            }}>
              Mission, Vision & Principles
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {pillarCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    padding: '36px',
                    border: `1.5px solid ${card.borderColor}`,
                    boxShadow: '0 10px 30px rgba(10, 22, 40, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'var(--transition-smooth)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 22, 40, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(10, 22, 40, 0.04)';
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    background: `${card.color}15`,
                    color: card.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <IconComp size={28} />
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: card.color,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    {card.tag}
                  </span>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--navy-deep)',
                    marginBottom: '16px'
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '15px',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    flex: 1
                  }}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements And Milestones */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.08)',
              color: '#10B981',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              <Award size={14} /> Our Journey Since 2021
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              marginBottom: '16px'
            }}>
              Achievements And Milestones
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              From a humble beginning to managing ₹250+ Cr AUM, here is how we have grown step-by-step with our investors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {[
              {
                num: '01',
                title: 'Building Client Trust from Scratch',
                desc: 'Since our inception in 2021, one of our biggest achievements has been building trust among our clients. Starting from scratch, we have been able to create a growing base of satisfied investors who rely on us for their financial planning and mutual fund investments.',
                color: '#0EA5E9'
              },
              {
                num: '02',
                title: 'Disciplined SIP Wealth Compounding',
                desc: 'We are also proud of consistently helping our clients stay disciplined with their investments, especially through SIPs, and guiding them towards long-term wealth creation. Seeing our clients achieve their financial goals is one of our most meaningful milestones.',
                color: '#FF6A13'
              },
              {
                num: '03',
                title: 'AMFI Registered Distributor Standing',
                desc: 'Another important achievement is establishing ourselves as a reliable and AMFI-registered mutual fund distributor in a competitive market. Step by step, we have built a strong foundation based on transparency, service, and long-term relationships.',
                color: '#10B981'
              }
            ].map((ach, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: `${ach.color}20`,
                  lineHeight: 1,
                  marginBottom: '16px'
                }}>
                  {ach.num}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--navy-deep)',
                  marginBottom: '14px'
                }}>
                  {ach.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
                  {ach.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition & AMC Accreditations Section */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(212, 165, 116, 0.15)',
              color: '#B45309',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>
              <Award size={14} style={{ color: '#D97706' }} /> Official AMC Accreditations
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--navy-deep)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              Honored by India’s Leading <br />
              <span className="gradient-text-orange">Mutual Fund Asset Management Companies</span>
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Recognized with 22+ genuine crystal trophies, framed certificates, and SIP milestone honors by Kotak, Tata, Bajaj Finserv, Mahindra Manulife, ITI, Samco, and UTI Mutual Fund.
            </p>
          </div>

          {/* 6 Top Featured Awards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '48px'
          }}>
            {awardsData.filter(a => a.featured).slice(0, 6).map((award) => (
              <div
                key={award.id}
                onClick={() => setActiveAwardModal(award)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 8px 24px rgba(10, 22, 40, 0.04)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
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
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
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
                      padding: '12px'
                    }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(10, 22, 40, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}>
                    {award.issuer}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--navy-deep)',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ZoomIn size={14} />
                  </div>
                </div>

                <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: 'var(--primary-blue)',
                      background: 'rgba(0, 138, 216, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      marginBottom: '8px',
                      textTransform: 'uppercase'
                    }}>
                      <Sparkles size={11} /> {award.badge}
                    </div>

                    <h3 style={{
                      fontSize: '16.5px',
                      fontWeight: 800,
                      color: 'var(--navy-deep)',
                      lineHeight: 1.35,
                      marginBottom: '8px'
                    }}>
                      {award.title}
                    </h3>

                    <p style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '14px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {award.citation}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(226, 232, 240, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                    <span style={{ color: '#64748B', fontWeight: 600 }}>{award.year}</span>
                    <span style={{ color: 'var(--primary-blue)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      Inspect Plaque <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Awards Banner CTA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 138, 216, 0.06) 0%, rgba(255, 106, 19, 0.06) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '28px 36px',
            border: '1px solid rgba(0, 138, 216, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                Want to see the complete gallery of awards & certificates?
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                Browse all 22+ genuine crystal trophies, NFO excellence certificates, and AMFI milestone accreditations.
              </p>
            </div>

            <Link
              href="/awards"
              className="btn-blue"
              style={{ padding: '12px 24px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Explore All 22+ Awards & Certificates <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons to Invest With Us: Bank Level Security & Trust */}
      <section style={{
        padding: '88px 0',
        background: 'linear-gradient(180deg, #0A1628 0%, #060E1A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(34, 197, 94, 0.12)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              color: '#4ADE80',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>
              <ShieldCheck size={14} /> Institutional Grade Protection
            </span>

            <h2 style={{
              fontSize: 'clamp(30px, 4.5vw, 44px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}>
              Trust Us, Your Savings Are In Safe Hands
            </h2>

            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#94A3B8'
            }}>
              We value the trust you place in us. That’s why we are committed to keeping the highest standards for securing transactions, protecting investor privacy, and maintaining absolute regulatory transparency.
            </p>
          </div>

          {/* 4 Pillars of Security Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {securityFeatures.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px'
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: '#38BDF8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={22} />
                    </div>
                    <span style={{
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: '#CBD5E1',
                      fontWeight: 600
                    }}>
                      {sec.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '10px',
                    lineHeight: 1.3
                  }}>
                    {sec.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: '#94A3B8',
                    flex: 1
                  }}>
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Trust Banner Callout */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 106, 19, 0.1) 0%, rgba(0, 138, 216, 0.1) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FF8A3D', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                Start Your Journey With Investrow
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                Start Investing With Us — Or Request a Callback
              </h3>
              <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                Experience transparent, goal-based mutual fund guidance tailored for your family. No hidden commissions, 100% AMFI compliance.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenConsultModal('About Security CTA')}
                className="btn-orange"
                style={{ padding: '13px 26px', fontSize: '14.5px' }}
              >
                Start Investing Now <ArrowRight size={16} />
              </button>
              <a
                href="tel:+919102070777"
                className="btn-outline"
                style={{
                  padding: '13px 22px',
                  fontSize: '14.5px',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  background: 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <Phone size={15} /> +91 91020 70777
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating AI Advisor */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Sticky Mobile Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('About Mobile Callback')} />

      {/* Lightbox Zoom Modal for Awards */}
      {activeAwardModal && (
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
          onClick={() => setActiveAwardModal(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveAwardModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(10, 22, 40, 0.8)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div style={{
              background: '#0D1B2A',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '480px',
              overflow: 'hidden'
            }}>
              <img
                src={activeAwardModal.image}
                alt={activeAwardModal.title}
                style={{
                  maxHeight: '440px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  background: 'rgba(0, 138, 216, 0.1)',
                  color: 'var(--primary-blue)',
                  fontWeight: 800,
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  {activeAwardModal.issuer}
                </span>
                <span style={{
                  background: '#FFF1EB',
                  color: 'var(--accent-orange)',
                  fontWeight: 700,
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  {activeAwardModal.year}
                </span>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '10px' }}>
                {activeAwardModal.title}
              </h2>

              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                {activeAwardModal.citation}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  href="/awards"
                  onClick={() => setActiveAwardModal(null)}
                  style={{
                    color: 'var(--primary-blue)',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View All 22+ Awards in Awards Gallery <ArrowRight size={13} />
                </Link>

                <button
                  onClick={() => {
                    setActiveAwardModal(null);
                    handleOpenConsultModal(`Consultation after viewing ${activeAwardModal.title}`);
                  }}
                  className="btn-orange"
                  style={{ padding: '10px 20px', fontSize: '13px' }}
                >
                  Book Free Consultation <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .milestone-item {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
