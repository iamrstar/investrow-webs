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
  Landmark,
  BadgePercent,
  Layers,
  Percent
} from 'lucide-react';

export default function NpsClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('NPS Consultation - Jharkhand');

  // Interactive NPS Projection State
  const [currentAge, setCurrentAge] = useState(30);
  const [monthlyNps, setMonthlyNps] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(10); // 10% expected return on NPS

  // Quick Lead Form
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadDistrict, setLeadDistrict] = useState('Dhanbad');
  const [leadType, setLeadType] = useState('Individual Citizen (Tier 1 & Tier 2)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenConsultModal = (service = 'NPS Consultation') => {
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
          service: 'National Pension System (NPS)',
          source: 'Website - NPS Jharkhand Page',
          remarks: `NPS inquiry from ${leadDistrict} | Model: ${leadType}`
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

  // NPS Compounding Math
  const retirementAge = 60;
  const investmentYears = Math.max(1, retirementAge - currentAge);
  const totalMonths = investmentYears * 12;
  const monthlyRate = expectedReturn / 100 / 12;
  const totalInvested = monthlyNps * totalMonths;
  const totalCorpus = Math.round(
    monthlyNps * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  );
  // 60% lump sum tax-free at age 60, 40% annuity for monthly pension
  const lumpSumWithdrawal = Math.round(totalCorpus * 0.6);
  const annuityCorpus = Math.round(totalCorpus * 0.4);
  const estimatedMonthlyPension = Math.round((annuityCorpus * 0.065) / 12); // ~6.5% standard annuity return

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
        <section style={{
          background: 'linear-gradient(145deg, #071224 0%, #0A1628 50%, #061122 100%)',
          color: '#FFFFFF',
          padding: 'clamp(48px, 6vw, 76px) 0 clamp(44px, 6vw, 68px)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '10%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Breadcrumb */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#94A3B8',
              marginBottom: '20px'
            }}>
              <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={13} />
              <span style={{ color: '#34D399', fontWeight: 600 }}>NPS Consultant in Jharkhand</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '40px',
              alignItems: 'center'
            }} className="hero-grid">

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  color: '#34D399',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  <Landmark size={14} style={{ color: '#34D399' }} />
                  <span>National Pension System (PFRDA Regulated) • Jharkhand Advisory</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(28px, 4.5vw, 44px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '18px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF'
                }}>
                  Certified NPS Consultant & Retirement Advisor in <span style={{
                    background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Jharkhand</span>
                </h1>

                <p style={{
                  fontSize: 'clamp(15px, 2.5vw, 17px)',
                  lineHeight: 1.65,
                  color: '#CBD5E1',
                  marginBottom: '28px'
                }}>
                  Secure a stress-free, inflation-proof monthly retirement pension with India’s lowest-cost investment vehicle. Save up to ₹2 Lakhs in annual taxes under Sections 80CCD(1) and 80CCD(1B) while building a substantial wealth corpus with certified guidance across Ranchi, Dhanbad, Jamshedpur, and Bokaro.
                </p>

                {/* Tax Benefits Badges */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  marginBottom: '32px'
                }}>
                  {[
                    'Save ₹50,000 Extra Tax (Sec 80CCD 1B)',
                    'Up to ₹1.5L Under Section 80CCD(1)',
                    'Corporate NPS Benefit (Sec 80CCD 2)',
                    '60% Tax-Free Lump Sum at Age 60',
                    'Low Expense Ratio (~0.01% - 0.09%)',
                    'Direct PRAN Generation in 24 Hours'
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#F1F5F9', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleOpenConsultModal('NPS PRAN Advisory - Jharkhand')}
                    className="btn-orange"
                    style={{ padding: '13px 28px', fontSize: '14.5px' }}
                  >
                    Open NPS Account / PRAN <ArrowRight size={15} />
                  </button>
                  <a
                    href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20know%20more%20about%20NPS%20Tier%201%20and%20Tax%20Benefits%20in%20Jharkhand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      padding: '12px 24px',
                      fontSize: '14px',
                      color: '#FFFFFF',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      textDecoration: 'none'
                    }}
                  >
                    💬 WhatsApp NPS Advisor
                  </a>
                </div>
              </div>

              {/* Lead Card */}
              <div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: '20px',
                  padding: 'clamp(20px, 4vw, 32px)',
                  color: 'var(--navy-deep)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Landmark size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: 'var(--navy-deep)' }}>
                        NPS Advisory Desk (Jharkhand)
                      </h3>
                      <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>
                        PRAN account opening, scheme choice & tax planning
                      </p>
                    </div>
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sanjay Verma"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '8px',
                            border: '1.5px solid #E2E8F0',
                            fontSize: '14px',
                            background: '#F8FAFC'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                          Mobile / WhatsApp Number *
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
                              padding: '11px 14px',
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
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                          Your District in Jharkhand
                        </label>
                        <select
                          value={leadDistrict}
                          onChange={(e) => setLeadDistrict(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '8px',
                            border: '1.5px solid #E2E8F0',
                            fontSize: '13.5px',
                            background: '#F8FAFC'
                          }}
                        >
                          <option value="Dhanbad">Dhanbad</option>
                          <option value="Ranchi">Ranchi</option>
                          <option value="Bokaro">Bokaro</option>
                          <option value="Jamshedpur / East Singhbhum">Jamshedpur / East Singhbhum</option>
                          <option value="Hazaribagh">Hazaribagh</option>
                          <option value="Deoghar / Dumka">Deoghar / Dumka</option>
                          <option value="Giridih / Koderma">Giridih / Koderma</option>
                          <option value="Other District in Jharkhand">Other District in Jharkhand</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                          NPS Category
                        </label>
                        <select
                          value={leadType}
                          onChange={(e) => setLeadType(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '8px',
                            border: '1.5px solid #E2E8F0',
                            fontSize: '13.5px',
                            background: '#F8FAFC'
                          }}
                        >
                          <option value="Individual Citizen (Tier 1 & Tier 2)">Individual Citizen (Tier 1 & Tier 2)</option>
                          <option value="Corporate NPS (For Companies & Employees)">Corporate NPS (For Companies & Employees)</option>
                          <option value="Tax Saving Under Sec 80CCD(1B) Only">Tax Saving Under Sec 80CCD(1B) Only</option>
                          <option value="Existing PRAN Support / Fund Switch">Existing PRAN Support / Fund Switch</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-orange"
                        style={{ width: '100%', padding: '13px', fontSize: '14.5px', marginTop: '6px' }}
                      >
                        {loading ? 'Submitting...' : 'Request Free NPS Consultation ➔'}
                      </button>

                      <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>
                        🔒 Zero spam • Licensed financial planning desk
                      </div>
                    </form>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '24px 0' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: '#DCFCE7',
                        color: '#16A34A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 14px'
                      }}>
                        <CheckCircle2 size={30} />
                      </div>
                      <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        NPS Request Received!
                      </h4>
                      <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px' }}>
                        Our retirement specialist will contact you at <strong>+91 {leadPhone}</strong> to assist with your PRAN setup.
                      </p>
                      <a
                        href="https://wa.me/919102070777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-blue"
                        style={{ width: '100%', padding: '12px', fontSize: '13px', display: 'inline-flex', justifyContent: 'center' }}
                      >
                        Chat Directly on WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: TIER 1 VS TIER 2 COMPARISON */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#FFFFFF' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="badge-blue" style={{ marginBottom: '14px' }}>
                <Layers size={14} /> Account Architecture
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                NPS Tier-I vs Tier-II Account Comparison
              </h2>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.65 }}>
                Understand the key structural differences between the mandatory retirement account (Tier-I) and the flexible investment account (Tier-II).
              </p>
            </div>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(10, 22, 40, 0.05)',
                border: '1px solid #E2E8F0'
              }}>
                <thead>
                  <tr style={{ background: '#0A1628', color: '#FFFFFF', textAlign: 'left' }}>
                    <th style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 800 }}>Feature</th>
                    <th style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 800, color: '#34D399' }}>NPS Tier-I (Retirement Account)</th>
                    <th style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 800, color: '#38BDF8' }}>NPS Tier-II (Flexible Savings)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Primary Purpose', t1: 'Long-term pension & retirement corpus creation', t2: 'Liquid, voluntary investment account' },
                    { f: 'Tax Deductions', t1: 'Up to ₹2 Lakh/year (80CCD 1 + 80CCD 1B)', t2: 'No tax deduction (taxable as per income slab)' },
                    { f: 'Lock-in Period', t1: 'Locked until age 60 (conditional partial withdrawals)', t2: 'Zero lock-in (withdraw any amount anytime)' },
                    { f: 'Minimum to Open', t1: '₹500 minimum initial contribution', t2: '₹1,000 (Requires active Tier-I account)' },
                    { f: 'Maturity at Age 60', t1: '60% Lump Sum (Tax-Free) + 40% Annuity Pension', t2: '100% withdrawable anytime without penalty' },
                    { f: 'Asset Allocation', t1: 'Choice of Equity (E), Corporate (C), Govt (G)', t2: 'Same active/auto asset allocation choices' }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                      <td style={{ padding: '14px 20px', fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-deep)' }}>{row.f}</td>
                      <td style={{ padding: '14px 20px', fontSize: '13.5px', color: '#334155', fontWeight: 500 }}>{row.t1}</td>
                      <td style={{ padding: '14px 20px', fontSize: '13.5px', color: '#334155', fontWeight: 500 }}>{row.t2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE RETIREMENT PENSION CALCULATOR */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <Calculator size={14} /> Pension Estimator
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                Estimate Your NPS Retirement Corpus & Monthly Pension
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>Your Current Age</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-blue)' }}>{currentAge} Years</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={55}
                    step={1}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                  />
                  <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
                    Investment Period: <strong>{investmentYears} years</strong> until age 60
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>Monthly NPS Contribution</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#10B981' }}>₹{monthlyNps.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    step={500}
                    value={monthlyNps}
                    onChange={(e) => setMonthlyNps(Number(e.target.value))}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>Expected Annual Return</label>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#D97706' }}>{expectedReturn}%</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={14}
                    step={0.5}
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  />
                  <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
                    NPS equity & corporate bond historical return avg: ~9.5% - 12%
                  </div>
                </div>
              </div>

              {/* Projection Result */}
              <div style={{
                background: 'linear-gradient(145deg, #071224 0%, #0A1628 100%)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Total Corpus at Age 60
                  </div>
                  <div style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, color: '#34D399', marginTop: '4px' }}>
                    {formatCurrency(totalCorpus)}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#94A3B8' }}>60% Tax-Free Lump Sum:</span>
                    <strong style={{ color: '#38BDF8' }}>{formatCurrency(lumpSumWithdrawal)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#94A3B8' }}>40% Reinvested for Annuity:</span>
                    <strong style={{ color: '#F1F5F9' }}>{formatCurrency(annuityCorpus)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#94A3B8' }}>Est. Monthly Pension:</span>
                    <strong style={{ color: '#4ADE80', fontSize: '15px' }}>~₹{estimatedMonthlyPension.toLocaleString('en-IN')}/mo</strong>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenConsultModal(`NPS PRAN setup for ₹${monthlyNps}/mo`)}
                  className="btn-orange"
                  style={{ width: '100%', padding: '12px', fontSize: '13.5px' }}
                >
                  Open Your NPS PRAN Account ➔
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: FAQS */}
        <section style={{ padding: 'clamp(48px, 6vw, 84px) 0', background: '#FFFFFF' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="badge-blue" style={{ marginBottom: '12px' }}>
                <HelpCircle size={14} /> NPS FAQs
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)' }}>
                Frequently Asked Questions on NPS in Jharkhand
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  q: 'What is the exclusive tax benefit of NPS under Section 80CCD(1B)?',
                  a: 'Under Section 80CCD(1B), you can claim an additional tax deduction of up to ₹50,000 for your contributions to NPS Tier-I. This is OVER AND ABOVE the ₹1.5 Lakh limit of Section 80C, allowing you to save up to ₹15,600 extra in taxes every year (in the 30% tax slab).'
                },
                {
                  q: 'How does Corporate NPS work for companies and employees in Jharkhand?',
                  a: 'Under Corporate NPS (Section 80CCD 2), an employer can contribute up to 10% (or 14% for central government) of an employee’s salary (Basic + DA) directly into their NPS PRAN. This employer contribution is 100% tax-free for the employee without any monetary cap (subject to the overall ₹7.5 Lakh limit across EPF, NPS, and Superannuation).'
                },
                {
                  q: 'Who manages the money invested in NPS?',
                  a: 'NPS investments are managed by PFRDA-registered Pension Fund Managers (PFMs) such as SBI Pension Funds, HDFC Pension Management, ICICI Prudential Pension, UTI Retirement, Kotak Pension, and Axis Pension Funds.'
                },
                {
                  q: 'Can I withdraw money from NPS before turning 60?',
                  a: 'NPS Tier-I allows partial withdrawals of up to 25% of your own contributions after 3 years for specific life events (children’s higher education, wedding, purchase of first residential house, or critical illness treatment). Tier-II accounts have zero lock-in and can be withdrawn anytime.'
                }
              ].map((faq, idx) => (
                <div key={idx} style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  border: '1px solid #E2E8F0'
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
      <AIChatAdvisor onLeadSubmitted={() => { }} />
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => { }}
      />
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('NPS Mobile Sticky Callback')} />
    </div>
  );
}
