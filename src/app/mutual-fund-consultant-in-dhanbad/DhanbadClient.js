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
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Award, 
  Sparkles, 
  Clock, 
  Calculator, 
  HelpCircle, 
  Building2, 
  FileCheck,
  ChevronRight,
  Star
} from 'lucide-react';

export default function DhanbadClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Mutual Funds Advisory - Dhanbad Desk');
  const [monthlySip, setMonthlySip] = useState(10000);
  const [years, setYears] = useState(15);
  const [returnRate, setReturnRate] = useState(12);

  // Quick Lead Form State
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadArea, setLeadArea] = useState('Dhanbad City / Bank More');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  const handleOpenConsultModal = (service = 'Mutual Funds Consultation - Dhanbad') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) return;
    const cleanPhone = leadPhone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return;

    setLeadLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: cleanPhone,
          service: 'Mutual Funds & SIP Planning',
          source: 'Website - Dhanbad Landing Page',
          remarks: `Consultation request from Dhanbad resident | Preferred Area: ${leadArea}`
        })
      });
      setLeadSubmitted(true);
    } catch (err) {
      console.error(err);
      setLeadSubmitted(true);
    } finally {
      setLeadLoading(false);
    }
  };

  // SIP Math
  const totalMonths = years * 12;
  const monthlyRate = returnRate / 100 / 12;
  const totalInvested = monthlySip * totalMonths;
  const estimatedMaturity = Math.round(
    monthlySip * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  );
  const estimatedGain = estimatedMaturity - totalInvested;

  const formatCurrency = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <Header onOpenConsultModal={handleOpenConsultModal} />

      <main style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <section className="compact-mobile-hero" style={{
          background: 'linear-gradient(145deg, #071224 0%, #0A1628 50%, #061122 100%)',
          color: '#FFFFFF',
          padding: 'clamp(36px, 5vw, 68px) 0 clamp(32px, 5vw, 60px)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Subtle Ambient Glows */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '10%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 138, 216, 0.18) 0%, transparent 70%)',
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
            {/* Breadcrumb */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: '#94A3B8',
              marginBottom: '14px'
            }}>
              <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={12} />
              <span style={{ color: '#38BDF8', fontWeight: 600 }}>Dhanbad Mutual Fund Desk</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '32px',
              alignItems: 'center'
            }} className="hero-grid">
              
              {/* Left Column: Local Value Prop */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(0, 138, 216, 0.2)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  color: '#38BDF8',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}>
                  <MapPin size={12} style={{ color: '#FF6A13' }} />
                  <span>Dhanbad’s Premier AMFI MFD • ARN-194720</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(24px, 4.5vw, 42px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF'
                }}>
                  Expert Mutual Fund Consultant & Distributor in <span style={{
                    background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Dhanbad</span>
                </h1>

                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: 1.6,
                  color: '#CBD5E1',
                  marginBottom: '20px'
                }}>
                  Looking for trusted, certified mutual fund advisory in Dhanbad? Investrow Financial Services helps local doctors, mining executives, business owners, and salaried families compound wealth with goal-based SIPs, tax-saving ELSS, and disciplined portfolio rebalancing.
                </p>

                {/* Highlights Grid */}
                <div className="dhanbad-highlights-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                  marginBottom: '24px'
                }}>
                  {[
                    'SEBI & AMFI Registered (ARN-194720)',
                    'BSE StAR MF Member (Code 55533)',
                    '₹250+ Cr AUM & 3,000+ Families',
                    '23+ Years Financial Expertise',
                    '₹0 Upfront Advisory Fees',
                    'Doorstep & In-Person Dhanbad Desk'
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#F1F5F9', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="hero-action-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <button
                    onClick={() => handleOpenConsultModal('Dhanbad Top Consultation')}
                    className="btn-orange"
                    style={{ padding: '12px 24px', fontSize: '14px' }}
                  >
                    Book Free Dhanbad Consultation <ArrowRight size={14} />
                  </button>
                  <a
                    href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20am%20from%20Dhanbad%20and%20looking%20for%20Mutual%20Fund%20advisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      padding: '11px 20px',
                      fontSize: '13.5px',
                      color: '#FFFFFF',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>💬 WhatsApp Advisor</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Instant Dhanbad Lead Capture Card */}
              <div>
                <div className="compact-mobile-card" style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: '20px',
                  padding: 'clamp(18px, 4vw, 30px)',
                  color: 'var(--navy-deep)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(0, 138, 216, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(0, 138, 216, 0.1)',
                      color: 'var(--primary-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Building2 size={19} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16.5px', fontWeight: 800, margin: 0, color: 'var(--navy-deep)' }}>
                        Connect with Dhanbad Desk
                      </h3>
                      <p style={{ fontSize: '11.5px', color: '#64748B', margin: 0 }}>
                        Get customized scheme recommendation within 2 hours
                      </p>
                    </div>
                  </div>

                  {!leadSubmitted ? (
                    <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, marginBottom: '3px', color: 'var(--navy-deep)' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alok Kumar"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1.5px solid #E2E8F0',
                            fontSize: '14px',
                            background: '#F8FAFC'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, marginBottom: '3px', color: 'var(--navy-deep)' }}>
                          Mobile / WhatsApp *
                        </label>
                        <div style={{ display: 'flex' }}>
                          <span style={{
                            padding: '0 10px',
                            background: '#F1F5F9',
                            border: '1.5px solid #E2E8F0',
                            borderRight: 'none',
                            borderTopLeftRadius: '8px',
                            borderBottomLeftRadius: '8px',
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#64748B',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="91020 70777"
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value.replace(/\D/g, ''))}
                            style={{
                              width: '100%',
                              padding: '10px 12px',
                              borderTopRightRadius: '8px',
                              borderBottomRightRadius: '8px',
                              border: '1.5px solid #E2E8F0',
                              fontSize: '14px',
                              background: '#F8FAFC'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, marginBottom: '3px', color: 'var(--navy-deep)' }}>
                          Your Dhanbad Location / Area
                        </label>
                        <select
                          value={leadArea}
                          onChange={(e) => setLeadArea(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1.5px solid #E2E8F0',
                            fontSize: '13.5px',
                            background: '#F8FAFC'
                          }}
                        >
                          <option value="Dhanbad City / Bank More">Dhanbad City / Bank More</option>
                          <option value="Saraidhela / Big Bazaar Area">Saraidhela / Big Bazaar Area</option>
                          <option value="Hirapur / Park Market">Hirapur / Park Market</option>
                          <option value="Koyla Nagar / BCCL Campus">Koyla Nagar / BCCL Campus</option>
                          <option value="Dhansar / Manaitand">Dhansar / Manaitand</option>
                          <option value="Jharia / Katras / Sindri">Jharia / Katras / Sindri</option>
                          <option value="Bokaro Steel City / Chas">Bokaro Steel City / Chas</option>
                          <option value="Other Area in Jharkhand">Other Area in Jharkhand</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={leadLoading}
                        className="btn-orange"
                        style={{ width: '100%', padding: '12px', fontSize: '14px', marginTop: '4px' }}
                      >
                        {leadLoading ? 'Connecting...' : 'Request Free Dhanbad Call 🚀'}
                      </button>

                      <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center', marginTop: '2px' }}>
                        🔒 100% Confidential • Official AMFI Registered MFD (ARN-194720)
                      </div>
                    </form>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#DCFCE7',
                        color: '#16A34A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px'
                      }}>
                        <CheckCircle2 size={28} />
                      </div>
                      <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Request Received!
                      </h4>
                      <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '14px' }}>
                        Our senior Dhanbad advisor will call you at <strong>+91 {leadPhone}</strong> shortly.
                      </p>
                      <a
                        href="https://wa.me/919102070777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-blue"
                        style={{ width: '100%', padding: '11px', fontSize: '13px', display: 'inline-flex', justifyContent: 'center' }}
                      >
                        Connect Directly on WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* LOCAL DHANBAD NEIGHBORHOODS SERVED */}
        <section style={{ padding: '18px 0', background: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 700, color: 'var(--navy-deep)', whiteSpace: 'nowrap' }}>
              <MapPin size={15} style={{ color: 'var(--primary-blue)' }} />
              <span>Serving Across Dhanbad:</span>
            </div>
            <div className="neighborhood-tags-scroll" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {[
                'Bank More',
                'Saraidhela',
                'Hirapur',
                'Koyla Nagar',
                'Dhansar',
                'Jharia',
                'Govindpur',
                'Bokaro / Chas'
              ].map((area, idx) => (
                <span key={idx} style={{
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  fontSize: '11.5px',
                  color: '#475569',
                  fontWeight: 600
                }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SERVICES TAILORED FOR DHANBAD */}
        <section style={{ padding: 'clamp(48px, 6vw, 84px) 0', background: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="badge-blue" style={{ marginBottom: '14px' }}>
                <Sparkles size={14} /> Comprehensive Mutual Fund Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Mutual Fund Advisory Designed for Dhanbad Investors
              </h2>
              <p style={{ fontSize: '15.5px', color: '#64748B', lineHeight: 1.65 }}>
                Whether you are a medical practitioner in Saraidhela, a mining professional in Koyla Nagar, or an entrepreneur in Bank More, we tailor portfolio allocations to your exact milestones.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px'
            }}>
              {[
                {
                  title: 'Systematic Investment Plan (SIP)',
                  desc: 'Disciplined monthly rupee-cost averaging starting from ₹500/month. Builds long-term wealth while smoothing market volatility.',
                  icon: TrendingUp,
                  color: '#0EA5E9'
                },
                {
                  title: 'Tax-Saving Mutual Funds (ELSS)',
                  desc: 'Save up to ₹46,800 under Section 80C with the shortest 3-year lock-in period among all tax-saving financial instruments.',
                  icon: ShieldCheck,
                  color: '#FF6A13'
                },
                {
                  title: 'Lumpsum & STP Deployment',
                  desc: 'Staggered systematic transfer plans (STP) for bonuses, business profits, or asset sale proceeds to avoid top-of-market risks.',
                  icon: Award,
                  color: '#10B981'
                },
                {
                  title: 'Retirement & Monthly Cashflow (SWP)',
                  desc: 'Predictable pension-like monthly withdrawals directly into your bank account while remaining capital continues compounding.',
                  icon: Clock,
                  color: '#D97706'
                },
                {
                  title: 'Child Higher Education Planning',
                  desc: 'Calculate exact target corpus needed for medical, engineering, or foreign universities 10-15 years ahead with inflation indexing.',
                  icon: Users,
                  color: '#8B5CF6'
                },
                {
                  title: 'Portfolio Health Check & Consolidation',
                  desc: 'Free audit of your existing mutual fund schemes. Eliminate duplicate funds, underperforming schemes, and hidden direct expense drags.',
                  icon: FileCheck,
                  color: '#EC4899'
                }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} style={{
                    padding: '28px 24px',
                    borderRadius: '16px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    transition: 'var(--transition-smooth)'
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: `${item.color}15`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <IconComp size={22} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EMBEDDED QUICK SIP CALCULATOR */}
        <section style={{ padding: 'clamp(44px, 5vw, 76px) 0', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <Calculator size={14} /> Calculate Wealth Compounding
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                See How Your Monthly SIP in Dhanbad Multiplies
              </h2>
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: 'clamp(20px, 4vw, 36px)',
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 32px rgba(10, 22, 40, 0.06)',
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '32px'
            }} className="calc-grid">
              
              {/* Sliders */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>Monthly SIP</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-blue)' }}>₹{monthlySip.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={500}
                    value={monthlySip}
                    onChange={(e) => setMonthlySip(Number(e.target.value))}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>Investment Period (Years)</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--accent-orange)' }}>{years} Years</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>Expected Return (CAGR)</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#10B981' }}>{returnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={18}
                    step={0.5}
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Result Summary */}
              <div style={{
                background: 'linear-gradient(145deg, #0A1628 0%, #0F1E36 100%)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Projected Maturity Value
                  </div>
                  <div style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, color: '#38BDF8', marginTop: '4px' }}>
                    {formatCurrency(estimatedMaturity)}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Total Invested</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#F1F5F9' }}>{formatCurrency(totalInvested)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Estimated Wealth Gain</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#4ADE80' }}>+{formatCurrency(estimatedGain)}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal(`Dhanbad SIP Plan for ₹${monthlySip}/mo (${years} Yrs)`)}
                  className="btn-orange"
                  style={{ width: '100%', padding: '12px', fontSize: '13.5px' }}
                >
                  Start This SIP Plan in Dhanbad ➔
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* DHANBAD CLIENT STORIES */}
        <section style={{ padding: 'clamp(48px, 6vw, 84px) 0', background: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="trust-pill" style={{ margin: '0 auto 14px', width: 'fit-content' }}>
                <Star size={13} style={{ color: '#F59E0B' }} fill="#F59E0B" />
                <span>Local Investor Voices</span>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '12px' }}>
                Trusted by 3,000+ Investor Families in Jharkhand
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px'
            }}>
              <div style={{ padding: '28px', borderRadius: '16px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', marginBottom: '18px' }}>
                  "As a surgeon in Dhanbad, I have long operating hours and zero time to monitor stock charts. Investrow structured my random investments into 3 top-quartile equity SIPs. My daughter's medical education corpus is already 40% ahead of target."
                </p>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-deep)' }}>Dr. Vikram Sharma</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Senior Consultant Surgeon • Dhanbad</div>
              </div>

              <div style={{ padding: '28px', borderRadius: '16px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', marginBottom: '18px' }}>
                  "We had surplus funds lying in traditional low-interest accounts. Investrow's Dhanbad advisory team introduced us to tax-efficient Arbitrage and STP models. Highly professional, responsive, and completely transparent."
                </p>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-deep)' }}>Sunita Murmu</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Managing Director & Business Owner • Jharkhand</div>
              </div>

              <div style={{ padding: '28px', borderRadius: '16px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', marginBottom: '18px' }}>
                  "Post-retirement, peace of mind is what matters most. Investrow set up an automated SWP cashflow that credits my account on the 5th of every month like clockwork pension while preserving my capital."
                </p>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-deep)' }}>Rajesh Agarwal</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Former PSU GM & Industrialist • Bokaro / Dhanbad</div>
              </div>
            </div>
          </div>
        </section>

        {/* DHANBAD ADVISORY FAQS */}
        <section style={{ padding: 'clamp(48px, 6vw, 84px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <HelpCircle size={14} /> Clear Answers
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                Frequently Asked Questions for Dhanbad Investors
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  q: 'Where is Investrow located in Dhanbad and how can I meet an advisor?',
                  a: 'Investrow Financial Services is based in Dhanbad, Jharkhand. You can schedule an in-person advisory meeting at our office or request a dedicated advisor visit to your clinic, office, or residence anywhere across Dhanbad, Saraidhela, Bank More, or Bokaro.'
                },
                {
                  q: 'Does Investrow charge any upfront advisory or transaction fees?',
                  a: 'No. Investrow provides complete portfolio goal-setting, scheme selection, and ongoing review at ₹0 upfront advisory fee. We are an AMFI-registered distributor compensated through standard, regulated commissions from AMCs.'
                },
                {
                  q: 'How safe is my money when investing through Investrow?',
                  a: '100% safe. Your investment money is NEVER deposited with Investrow. All orders are routed directly through BSE StAR MF (Member Code: 55533) directly to SEBI-regulated fund houses (SBI, HDFC, ICICI, etc.). Redemption payouts are directly credited to your verified bank account.'
                },
                {
                  q: 'Can you help consolidate my existing mutual fund folios scattered across apps?',
                  a: 'Yes! We offer a complimentary Portfolio Health Check. We analyze your CAS (Consolidated Account Statement), remove duplicate or lagging schemes, and organize your investments under a unified goal-based tracking portal.'
                }
              ].map((faq, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatAdvisor onLeadSubmitted={() => {}} />
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Dhanbad Mobile Sticky Callback')} />
    </div>
  );
}

