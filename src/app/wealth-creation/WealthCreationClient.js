'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Clock, 
  Zap, 
  HelpCircle, 
  Phone, 
  Flame, 
  Coins, 
  Building2,
  ChevronRight,
  Lock
} from 'lucide-react';

export default function WealthCreationClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Wealth Creation Strategy');

  // Calculator State
  const [monthlyInvestment, setMonthlyInvestment] = useState(15000);
  const [years, setYears] = useState(15);
  const [expectedReturn, setExpectedReturn] = useState(12.5);
  const [stepUpPercent, setStepUpPercent] = useState(10);
  const [enableStepUp, setEnableStepUp] = useState(true);

  // Lead Form State
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadGoal, setLeadGoal] = useState('₹1 Crore Milestone');
  const [leadHorizon, setLeadHorizon] = useState('10 - 15 Years');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenConsultModal = (service = 'Wealth Creation Strategy') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) return;
    const cleanPhone = leadPhone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return;

    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: cleanPhone,
          service: 'Wealth Creation Portfolio',
          source: 'Website - Wealth Creation Page',
          sipAmount: monthlyInvestment,
          tenureYears: years,
          remarks: `Goal: ${leadGoal} | Horizon: ${leadHorizon} | StepUp: ${enableStepUp ? stepUpPercent + '%' : 'None'}`
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  // Compounding Math
  const months = years * 12;
  const monthlyRate = expectedReturn / 100 / 12;
  const regularTotalInvested = monthlyInvestment * months;
  const regularMaturity = Math.round(
    monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  );

  let stepUpTotalInvested = 0;
  let stepUpMaturity = 0;
  const currentStepUpRate = enableStepUp ? stepUpPercent / 100 : 0;

  for (let y = 1; y <= years; y++) {
    const currentYearMonthly = monthlyInvestment * Math.pow(1 + currentStepUpRate, y - 1);
    stepUpTotalInvested += currentYearMonthly * 12;
    for (let m = 1; m <= 12; m++) {
      const remainingMonths = (years - y) * 12 + (12 - m + 1);
      stepUpMaturity += currentYearMonthly * Math.pow(1 + monthlyRate, remainingMonths);
    }
  }
  stepUpMaturity = Math.round(stepUpMaturity);
  stepUpTotalInvested = Math.round(stepUpTotalInvested);

  const activeMaturity = enableStepUp ? stepUpMaturity : regularMaturity;
  const activeInvested = enableStepUp ? stepUpTotalInvested : regularTotalInvested;
  const activeWealthGain = Math.max(0, activeMaturity - activeInvested);

  const formatCurrency = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const faqs = [
    {
      q: 'What is the fundamental difference between saving and wealth creation?',
      a: 'Saving is setting aside surplus income in bank savings accounts or fixed deposits (typically yielding 4% to 6.5%). After accounting for 6% inflation and income tax slabs, real returns are often zero or negative, silently eroding your purchasing power. Wealth creation, on the other hand, deploys capital into productive, inflation-beating assets like equity mutual funds, yielding historical returns of 12% to 15% CAGR, compounding your principal into multi-crore generational capital over 7 to 15+ years.'
    },
    {
      q: 'How does Step-Up SIP multiply my wealth compared to a standard SIP?',
      a: 'A standard SIP keeps your monthly contribution flat, ignoring salary hikes and business growth. A Step-Up SIP increases your investment by a set percentage (usually 10% to 15% annually) matching your annual appraisals. Over 15 years, a ₹15,000 monthly SIP with a 10% annual step-up generates almost double the final corpus compared to an ordinary flat SIP, supercharging your wealth without straining day-to-day cashflow.'
    },
    {
      q: 'How safe is long-term mutual fund investing for wealth creation?',
      a: 'All mutual funds are regulated strictly by SEBI and governed by AMFI compliance. While equity mutual funds fluctuate in the short term due to market cycles, historical 10-year and 15-year rolling returns in Indian diversified equities have consistently outperformed inflation and fixed-income assets. By holding a diversified portfolio across large-cap, mid-cap, and flexi-cap schemes, market volatility works in your favor through rupee-cost averaging.'
    },
    {
      q: 'Can Investrow review and rebalance my existing scattered mutual funds?',
      a: 'Yes, absolutely. Most investors end up with 15–20 overlapping mutual fund schemes without clear asset allocation. Our AMFI-registered advisors provide a comprehensive Portfolio Health Audit. We analyze sector duplication, identify chronic underperformers, eliminate high expense ratios, and restructure your holdings into a clean, goal-aligned wealth creation basket at zero advisory fee.'
    },
    {
      q: 'How do I start my wealth creation journey with Investrow?',
      a: 'Getting started is 100% paperless and takes under 5 minutes. If your KYC is already compliant, we register you on the BSE StAR MF exchange. If you are a first-time investor, we complete your video-KYC digitally using Aadhaar and PAN. We then establish auto-debit (eNACH / UPI mandate) for your chosen monthly SIP date.'
    }
  ];

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
              <span style={{ color: '#38BDF8', fontWeight: 600 }}>Wealth Creation Strategies</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '32px',
              alignItems: 'center'
            }} className="hero-grid">
              
              {/* Left Column: Headlines & Value Prop */}
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
                  <Sparkles size={12} style={{ color: '#FF6A13' }} />
                  <span>Systematic Wealth Engineering</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(24px, 4.5vw, 42px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF'
                }}>
                  Transform Idle Savings into <span style={{
                    background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Multi-Crore Wealth</span>
                </h1>

                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: 1.6,
                  color: '#CBD5E1',
                  marginBottom: '20px'
                }}>
                  Fixed deposits and savings accounts silently lose value to inflation and taxes. Discover how disciplined asset allocation, step-up SIPs, and India’s growing economic engine can compound your savings into lasting generational wealth.
                </p>

                {/* Highlights Grid */}
                <div className="dhanbad-highlights-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                  marginBottom: '24px'
                }}>
                  {[
                    'Goal-Aligned Portfolio Structuring',
                    'Step-Up SIP Compounding Model',
                    'Zero Advisory Fees on Direct Route',
                    'Quarterly Rebalancing & Tax Harvesting',
                    'AMFI Regd. Distributor (ARN-194720)',
                    'BSE StAR MF Execution Desk'
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
                    onClick={() => handleOpenConsultModal('Comprehensive Wealth Audit')}
                    className="btn-orange"
                    style={{ padding: '12px 24px', fontSize: '14px' }}
                  >
                    Get Free Wealth Audit <ArrowRight size={14} />
                  </button>
                  <a
                    href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20discuss%20a%20wealth%20creation%20plan%20for%20my%20family."
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

              {/* Right Column: Lead Capture Card */}
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
                      <Target size={19} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16.5px', fontWeight: 800, margin: 0, color: 'var(--navy-deep)' }}>
                        Custom Wealth Blueprint
                      </h3>
                      <p style={{ fontSize: '11.5px', color: '#64748B', margin: 0 }}>
                        Get personalized asset allocation within 2 hours
                      </p>
                    </div>
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, marginBottom: '3px', color: 'var(--navy-deep)' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
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
                          Mobile Number *
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
                            placeholder="98765 43210"
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

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, marginBottom: '3px', color: 'var(--navy-deep)' }}>
                            Target Goal
                          </label>
                          <select
                            value={leadGoal}
                            onChange={(e) => setLeadGoal(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '10px 8px',
                              borderRadius: '8px',
                              border: '1.5px solid #E2E8F0',
                              fontSize: '12.5px',
                              background: '#F8FAFC'
                            }}
                          >
                            <option value="₹1 Crore Milestone">₹1 Crore Milestone</option>
                            <option value="Child Higher Education">Child Education</option>
                            <option value="Retirement / FIRE">Retirement / FIRE</option>
                            <option value="Luxury Home Purchase">Home Purchase</option>
                            <option value="Long Term Generational">Generational</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, marginBottom: '3px', color: 'var(--navy-deep)' }}>
                            Time Horizon
                          </label>
                          <select
                            value={leadHorizon}
                            onChange={(e) => setLeadHorizon(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '10px 8px',
                              borderRadius: '8px',
                              border: '1.5px solid #E2E8F0',
                              fontSize: '12.5px',
                              background: '#F8FAFC'
                            }}
                          >
                            <option value="5 - 7 Years">5 - 7 Years</option>
                            <option value="7 - 10 Years">7 - 10 Years</option>
                            <option value="10 - 15 Years">10 - 15 Years</option>
                            <option value="15+ Years">15+ Years</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-orange"
                        style={{ width: '100%', padding: '12px', fontSize: '14px', marginTop: '4px' }}
                      >
                        {loading ? 'Processing...' : 'Request Free Consultation 🚀'}
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
                        Our Senior AMFI Wealth Advisor will call you at <strong>+91 {leadPhone}</strong> shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        style={{ fontSize: '12px', color: 'var(--primary-blue)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Submit another request
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The Reality Check: Saving vs Wealth Creation */}
        <section style={{ padding: 'clamp(44px, 5vw, 76px) 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <Flame size={14} style={{ color: '#FF6A13' }} /> The Inflation Trap
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '12px' }}>
                Why Saving in Bank Accounts Silently Destroys Wealth
              </h2>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6 }}>
                The hidden cost of "safety" is inflation. Here is what happens to ₹10 Lakhs over 15 years across different asset classes.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px'
            }}>
              {/* Card 1: Bank Savings */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#E11D48', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Purchasing Power Loss
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>Savings Account (3.5%)</h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>Nominal growth wiped out by 6% average annual inflation.</p>
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Nominal (15 Yrs):</span>
                    <strong style={{ color: 'var(--navy-deep)' }}>₹16.7 Lakh</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Real Inflation-Adjusted:</span>
                    <strong style={{ color: '#E11D48' }}>₹6.9 Lakh</strong>
                  </div>
                  <div style={{ background: '#FFE4E6', padding: '8px 10px', borderRadius: '8px', color: '#9F1239', fontSize: '12px', fontWeight: 600, marginTop: '6px' }}>
                    ⚠️ You lose ~31% of real buying power.
                  </div>
                </div>
              </div>

              {/* Card 2: Fixed Deposit */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Treadmill Growth
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>Fixed Deposit (6.5%)</h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>Pre-tax returns barely match inflation; tax drag reduces capital.</p>
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Nominal (15 Yrs):</span>
                    <strong style={{ color: 'var(--navy-deep)' }}>₹25.7 Lakh</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Real Inflation-Adjusted:</span>
                    <strong style={{ color: '#D97706' }}>₹10.7 Lakh</strong>
                  </div>
                  <div style={{ background: '#FEF3C7', padding: '8px 10px', borderRadius: '8px', color: '#92400E', fontSize: '12px', fontWeight: 600, marginTop: '6px' }}>
                    ℹ️ Zero true wealth creation after standard tax.
                  </div>
                </div>
              </div>

              {/* Card 3: Disciplined Wealth Portfolio */}
              <div style={{
                background: 'linear-gradient(145deg, #F0F9FF 0%, #FFFFFF 100%)',
                borderRadius: '16px',
                padding: '24px',
                border: '2px solid var(--primary-blue)',
                boxShadow: '0 8px 24px rgba(0, 138, 216, 0.12)'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Real Wealth Compounding
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>Investrow Portfolio (13% CAGR)</h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>Disciplined multi-cap allocation capturing India's structural economic growth.</p>
                <div style={{ borderTop: '1px solid #BAE6FD', paddingTop: '14px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Nominal (15 Yrs):</span>
                    <strong style={{ color: '#16A34A', fontSize: '15px' }}>₹62.5 Lakh</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Real Inflation-Adjusted:</span>
                    <strong style={{ color: 'var(--primary-blue)' }}>₹26.0 Lakh</strong>
                  </div>
                  <div style={{ background: '#DCFCE7', padding: '8px 10px', borderRadius: '8px', color: '#166534', fontSize: '12px', fontWeight: 600, marginTop: '6px' }}>
                    🚀 Real purchasing power multiplied 2.6x above inflation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMBEDDED INTERACTIVE WEALTH ENGINE */}
        <section id="wealth-engine" style={{ padding: 'clamp(44px, 5vw, 76px) 0', background: '#F8FAFC', overflow: 'hidden' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <Zap size={14} style={{ color: '#FF6A13' }} /> Compounding Engine
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                Simulate Your Generational Wealth Engine
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-deep)' }}>Monthly Investment</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-blue)' }}>₹{monthlyInvestment.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={100000}
                    step={1000}
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-deep)' }}>Investment Period</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--accent-orange)' }}>{years} Years ({years * 12} Installments)</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={30}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-deep)' }}>Expected Return (CAGR)</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#10B981' }}>{expectedReturn}%</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={16}
                    step={0.5}
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  />
                </div>

                <div style={{ padding: '12px', borderRadius: '12px', background: '#F1F5F9', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                      ⚡ 10% Annual Step-Up
                    </span>
                    <button
                      type="button"
                      onClick={() => setEnableStepUp(!enableStepUp)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontSize: '11px',
                        fontWeight: 700,
                        border: 'none',
                        background: enableStepUp ? '#10B981' : '#94A3B8',
                        color: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      {enableStepUp ? 'ACTIVE (+10%/yr)' : 'DISABLED'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Result Card */}
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
                  <div style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#38BDF8', marginTop: '4px' }}>
                    {formatCurrency(activeMaturity)}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Total Invested</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#F1F5F9' }}>{formatCurrency(activeInvested)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Estimated Wealth Gain</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#4ADE80' }}>+{formatCurrency(activeWealthGain)}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal(`Wealth Plan for ₹${monthlyInvestment}/mo (${years} Yrs)`)}
                  className="btn-orange"
                  style={{ width: '100%', padding: '12px', fontSize: '13.5px' }}
                >
                  Start This Wealth Journey ➔
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Milestone-Based Wealth Framework */}
        <section style={{ padding: 'clamp(44px, 5vw, 76px) 0', background: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <Target size={14} /> Goal-Oriented Blueprints
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                Wealth Milestones Every Family Strives For
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '20px'
            }}>
              {[
                { title: 'First ₹1 Crore Milestone', desc: 'The hardest crore. After this milestone, your compounding returns generate more than annual salary.', target: '~₹15,000/mo for 15 Yrs @ 13%' },
                { title: 'Child Higher Education', desc: 'Education inflation runs at 10-12%. Beat future tuition fee spikes with a disciplined equity portfolio.', target: 'Target: ₹35L - ₹75L' },
                { title: 'Dream Home Down-Payment', desc: 'Avoid crippling 80% home loan EMIs by building 40-50% upfront equity capital.', target: 'Horizon: 5 to 7 Years' },
                { title: 'Financial Freedom (FIRE)', desc: 'Retire on your terms with an inflation-proof monthly SWP dividend cashflow engine.', target: 'Target: ₹2.5 Cr - ₹10 Cr' }
              ].map((m, idx) => (
                <div key={idx} style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>{m.title}</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '14px' }}>{m.desc}</p>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-blue)' }}>{m.target}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wealth Creation FAQs */}
        <section style={{ padding: 'clamp(44px, 5vw, 76px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <HelpCircle size={14} /> Clear Answers
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                Frequently Asked Questions on Wealth Creation
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '18px 20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatAdvisor onLeadSubmitted={() => { }} />
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => { }}
      />
      <StickyMobileBar 
        onOpenCallbackModal={() => handleOpenConsultModal('Wealth Creation Sticky Callback')}
        onOpenConsultModal={() => handleOpenConsultModal('Wealth Creation Sticky Callback')}
      />
    </div>
  );
}
