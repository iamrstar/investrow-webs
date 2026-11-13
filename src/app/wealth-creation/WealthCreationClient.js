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
  PieChart, 
  Clock, 
  Zap, 
  HelpCircle, 
  Phone, 
  Calendar, 
  Flame, 
  BarChart3, 
  Lock, 
  Coins, 
  Building2,
  ChevronRight,
  ChevronDown
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

  // Regular SIP Math
  const months = years * 12;
  const monthlyRate = expectedReturn / 100 / 12;
  const regularTotalInvested = monthlyInvestment * months;
  const regularMaturity = Math.round(
    monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  );

  // Step-Up SIP Math (Annual Increase)
  let stepUpTotalInvested = 0;
  let stepUpMaturity = 0;
  const currentStepUpRate = enableStepUp ? stepUpPercent / 100 : 0;

  for (let y = 1; y <= years; y++) {
    const currentYearMonthly = monthlyInvestment * Math.pow(1 + currentStepUpRate, y - 1);
    stepUpTotalInvested += currentYearMonthly * 12;
    // Each month of this year compounds until the end of year `years`
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
    <>
      <Header onOpenConsultModal={handleOpenConsultModal} />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Breadcrumb & AMFI Trust Strip */}
        <section className="bg-[#0A1628] text-white py-3 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs sm:text-sm gap-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#008AD8] font-medium">Wealth Creation</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> AMFI Regd. ARN-194720
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline">BSE StAR MF Member 55533</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0D203D] to-[#0A1628] text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#008AD8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headlines & Value Prop */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008AD8]/15 border border-[#008AD8]/30 text-[#38BDF8] text-xs sm:text-sm font-semibold tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#FF6A13]" /> Systematic Wealth Engineering
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Transform Idle Savings into <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#008AD8] via-[#38BDF8] to-[#FF6A13] bg-clip-text text-transparent">
                    Multi-Crore Wealth
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Fixed deposits and savings accounts silently lose value to inflation and taxes. 
                  Discover how disciplined asset allocation, step-up SIPs, and India’s growing economic engine 
                  can compound your hard-earned money into lasting generational freedom.
                </p>

                {/* Value bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Goal-Aligned Portfolio Structuring</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Step-Up SIP Compounding Model</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Zero Advisory Fees on Direct Route</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Quarterly Rebalancing & Tax Harvesting</span>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                  <button
                    onClick={() => handleOpenConsultModal('Comprehensive Wealth Audit')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A13] to-[#FF8A3D] text-white font-bold hover:shadow-lg hover:shadow-orange-500/25 transition duration-200"
                  >
                    <span>Get Free Wealth Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#wealth-engine"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition duration-200"
                  >
                    <span>Simulate Compounding</span>
                  </a>
                </div>

                {/* Helpline quick dial */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <span className="text-slate-400">Speak directly to an advisor:</span>
                  <a href="tel:+919102070777" className="font-semibold text-white hover:text-[#008AD8] transition flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 91020 70777
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href="tel:+919102050555" className="font-semibold text-white hover:text-[#008AD8] transition flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 91020 50555
                  </a>
                </div>
              </div>

              {/* Right Column: Lead Capture Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">Custom Wealth Blueprint</h3>
                      <p className="text-xs text-slate-500">Get a personalized asset allocation plan within 2 hours</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#008AD8]/10 flex items-center justify-center text-[#008AD8]">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>

                  {submitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Request Received!</h4>
                      <p className="text-sm text-slate-600">
                        Our Senior AMFI Wealth Advisor will contact you shortly to review your investment horizon and share a tailored wealth creation blueprint.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-[#008AD8] font-semibold hover:underline"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-4 pt-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008AD8] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-sm text-slate-400 font-medium">+91</span>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value)}
                            placeholder="98765 43210"
                            className="w-full pl-12 pr-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008AD8] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                            Primary Goal
                          </label>
                          <select
                            value={leadGoal}
                            onChange={(e) => setLeadGoal(e.target.value)}
                            className="w-full px-2.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008AD8]"
                          >
                            <option value="₹1 Crore Milestone">₹1 Crore Milestone</option>
                            <option value="Child Higher Education">Child Higher Education</option>
                            <option value="Retirement / FIRE">Retirement / FIRE</option>
                            <option value="Luxury Home Purchase">Luxury Home Purchase</option>
                            <option value="Long Term Generational">Generational Wealth</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                            Target Horizon
                          </label>
                          <select
                            value={leadHorizon}
                            onChange={(e) => setLeadHorizon(e.target.value)}
                            className="w-full px-2.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008AD8]"
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
                        className="w-full py-3 px-4 rounded-xl bg-[#008AD8] hover:bg-[#0077BA] text-white font-bold text-sm transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                      >
                        {loading ? 'Processing...' : 'Request Free Consultation'}
                      </button>

                      <p className="text-[11px] text-center text-slate-400">
                        🔒 Confidential & AMFI compliant. No spam or high-pressure selling.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Reality Check: Saving vs Wealth Creation */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-[#008AD8]">
                The Wealth Reality
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Saving in Bank Accounts Silently Destroys Wealth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                The hidden cost of "safety" is inflation. Here is what happens to ₹10 Lakhs over 15 years across different asset classes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Bank Savings */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
                <div className="text-xs font-semibold text-rose-600 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                  <Flame className="w-4 h-4" /> Purchasing Power Loss
                </div>
                <h3 className="text-lg font-bold text-slate-900">Savings Account (3.5%)</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">Nominal growth wiped out by 6% average annual inflation.</p>
                <div className="space-y-2 text-sm border-t border-slate-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Nominal Value (15 Yrs):</span>
                    <span className="font-semibold text-slate-900">₹16.7 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Real Inflation-Adjusted:</span>
                    <span className="font-bold text-rose-600">₹6.9 Lakh</span>
                  </div>
                  <div className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-lg font-medium mt-3">
                    ⚠️ You lose ~31% of real buying power over 15 years.
                  </div>
                </div>
              </div>

              {/* Card 2: Fixed Deposit */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                  <Clock className="w-4 h-4" /> Treadmill Growth
                </div>
                <h3 className="text-lg font-bold text-slate-900">Fixed Deposit (6.5%)</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">Pre-tax returns barely match inflation, net tax drag reduces capital.</p>
                <div className="space-y-2 text-sm border-t border-slate-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Nominal Value (15 Yrs):</span>
                    <span className="font-semibold text-slate-900">₹25.7 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Real Inflation-Adjusted:</span>
                    <span className="font-bold text-amber-600">₹10.7 Lakh</span>
                  </div>
                  <div className="text-xs text-amber-700 bg-amber-50 p-2.5 rounded-lg font-medium mt-3">
                    ℹ️ Zero true wealth creation after standard income tax bracket.
                  </div>
                </div>
              </div>

              {/* Card 3: Disciplined Wealth Portfolio */}
              <div className="bg-gradient-to-br from-[#008AD8]/10 via-white to-blue-50/50 rounded-2xl p-6 border-2 border-[#008AD8] relative shadow-lg">
                <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#008AD8] text-white text-[10px] font-bold tracking-wide">
                  RECOMMENDED
                </div>
                <div className="text-xs font-semibold text-[#008AD8] uppercase tracking-wide flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-4 h-4" /> Wealth Compounding
                </div>
                <h3 className="text-lg font-bold text-slate-900">Investrow Portfolio (13% CAGR)</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">Disciplined multi-cap allocation capturing India's structural GDP growth.</p>
                <div className="space-y-2 text-sm border-t border-blue-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Nominal Value (15 Yrs):</span>
                    <span className="font-bold text-emerald-600 text-base">₹62.5 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Real Inflation-Adjusted:</span>
                    <span className="font-bold text-[#008AD8]">₹26.0 Lakh</span>
                  </div>
                  <div className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg font-medium mt-3">
                    🚀 Real buying power multiplied by 2.6x after beating inflation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Wealth Creation */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-[#008AD8]">
                The Strategic Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                The 4 Scientific Pillars of Sustainable Wealth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Wealth creation is not about guessing tomorrow's hot stock. It is a systematic process of engineering long-term compounding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#008AD8] flex items-center justify-center font-black text-xl mb-4">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Time Horizon Over Timing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The compounding curve is exponential. In a 20-year investment, over 60% of total wealth is generated in the final 5 years alone. Patience is the primary alpha.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6A13] flex items-center justify-center font-black text-xl mb-4">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">The Step-Up Multiplier</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stepping up your monthly SIP by just 10% each year doubles your final terminal wealth compared to a fixed SIP, mirroring your career trajectory.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl mb-4">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Dynamic Asset Allocation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Balancing high-growth equity, capital-preserving debt, and sovereign gold hedges shields your portfolio from catastrophic down-cycles.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xl mb-4">
                  04
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Behavioral Discipline</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The average retail investor underperforms index funds by panic selling during corrections. An advisor acts as an emotional shock-absorber.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Wealth Engine / Compounding Simulator */}
        <section id="wealth-engine" className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-[#FF6A13]">
                Interactive Simulation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Simulate Your Generational Wealth Engine
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Adjust the sliders below to see how monthly contributions and annual Step-Ups combine to build massive long-term capital.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Sliders Side */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1: Monthly Investment */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm text-slate-300 font-medium">Monthly Investment Amount</label>
                      <span className="text-base sm:text-lg font-bold text-[#38BDF8]">
                        ₹{monthlyInvestment.toLocaleString('en-IN')}/mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2000}
                      max={100000}
                      step={1000}
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#008AD8]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>₹2,000</span>
                      <span>₹50,000</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Investment Horizon */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm text-slate-300 font-medium">Investment Horizon (Years)</label>
                      <span className="text-base sm:text-lg font-bold text-white">
                        {years} Years ({years * 12} Installments)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={3}
                      max={30}
                      step={1}
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#008AD8]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>3 Yrs</span>
                      <span>15 Yrs</span>
                      <span>30 Yrs</span>
                    </div>
                  </div>

                  {/* Slider 3: Expected CAGR */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm text-slate-300 font-medium">Expected Portfolio CAGR (%)</label>
                      <span className="text-base sm:text-lg font-bold text-emerald-400">
                        {expectedReturn}% p.a.
                      </span>
                    </div>
                    <input
                      type="range"
                      min={8}
                      max={16}
                      step={0.5}
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>8% (Conservative)</span>
                      <span>12.5% (Balanced)</span>
                      <span>16% (Aggressive)</span>
                    </div>
                  </div>

                  {/* Toggle Step-Up Feature */}
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#FF6A13]" />
                        <span className="text-sm font-bold text-white">Annual Step-Up Feature</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setEnableStepUp(!enableStepUp)}
                        className={`px-3 py-1 text-xs font-bold rounded-full transition ${
                          enableStepUp ? 'bg-emerald-500 text-white' : 'bg-slate-600 text-slate-300'
                        }`}
                      >
                        {enableStepUp ? 'ACTIVE (+10%/yr)' : 'OFF'}
                      </button>
                    </div>

                    {enableStepUp && (
                      <div className="pt-2">
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Annual SIP Hike:</span>
                          <span className="font-bold text-orange-400">+{stepUpPercent}% each year</span>
                        </div>
                        <input
                          type="range"
                          min={5}
                          max={20}
                          step={1}
                          value={stepUpPercent}
                          onChange={(e) => setStepUpPercent(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#FF6A13]"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Projections Display Side */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-700">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Projected Corpus Value
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 mb-4">
                    {formatCurrency(activeMaturity)}
                  </div>

                  <div className="space-y-3 border-t border-slate-700 pt-4 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Total Amount Invested:</span>
                      <span className="font-semibold text-white">{formatCurrency(activeInvested)}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Wealth Generated (Gains):</span>
                      <span className="font-bold text-emerald-400">+{formatCurrency(activeWealthGain)}</span>
                    </div>
                    {enableStepUp && (
                      <div className="flex justify-between text-xs text-orange-300 pt-2 border-t border-slate-700/60">
                        <span>Step-Up Advantage vs Flat:</span>
                        <span className="font-bold">+{formatCurrency(Math.max(0, stepUpMaturity - regularMaturity))}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenConsultModal(`Start ₹${monthlyInvestment.toLocaleString('en-IN')}/mo Wealth Plan`)}
                    className="w-full mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF6A13] to-[#FF8A3D] text-white font-bold text-sm hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <span>Execute This Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Historical CAGR is illustrative. Equity funds are subject to market risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone-Based Wealth Framework */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-[#008AD8]">
                Goal-Oriented Blueprints
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Wealth Milestones Every Family Strives For
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                We anchor your investments to concrete life milestones rather than speculative market indices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Milestone 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#008AD8] transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#008AD8] flex items-center justify-center mb-4">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">First ₹1 Crore Milestone</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">The hardest crore. After this, your money works harder than your salary.</p>
                  <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 text-slate-700">
                    <div><strong>SIP Needed:</strong> ~₹15,000/mo</div>
                    <div><strong>Tenure:</strong> 15 Years @ 13%</div>
                    <div><strong>Next ₹1 Cr:</strong> Takes only ~5 years!</div>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenConsultModal('₹1 Crore Blueprint')}
                  className="mt-4 text-xs font-bold text-[#008AD8] hover:underline flex items-center gap-1"
                >
                  Plan ₹1 Crore Journey <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Milestone 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#008AD8] transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A13] flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Child Higher Education</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">Education inflation runs at 10-12%. Beat future tuition fee spikes.</p>
                  <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 text-slate-700">
                    <div><strong>Target Corpus:</strong> ₹35 Lakh - ₹75 Lakh</div>
                    <div><strong>Strategy:</strong> Flexi-Cap + International</div>
                    <div><strong>De-risking:</strong> Shift to debt 2 yrs prior</div>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenConsultModal('Child Education Planning')}
                  className="mt-4 text-xs font-bold text-[#008AD8] hover:underline flex items-center gap-1"
                >
                  Protect Child's Dream <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Milestone 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#008AD8] transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Dream Home Down-Payment</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">Avoid crippling 80% home loan EMIs by building 40-50% upfront equity.</p>
                  <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 text-slate-700">
                    <div><strong>Horizon:</strong> 5 to 7 Years</div>
                    <div><strong>Target:</strong> ₹30 Lakh - ₹60 Lakh</div>
                    <div><strong>Strategy:</strong> Balanced Advantage + Large-Cap</div>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenConsultModal('Home Downpayment Plan')}
                  className="mt-4 text-xs font-bold text-[#008AD8] hover:underline flex items-center gap-1"
                >
                  Plan Home Fund <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Milestone 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#008AD8] transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Financial Freedom (FIRE)</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">Retire on your terms with an inflation-proof monthly SWP dividend cashflow.</p>
                  <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 text-slate-700">
                    <div><strong>Target:</strong> ₹2.5 Cr - ₹10 Cr</div>
                    <div><strong>SWP Rate:</strong> 5-6% tax-efficient withdrawal</div>
                    <div><strong>Longevity:</strong> Never outlive your money</div>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenConsultModal('Retirement & FIRE Plan')}
                  className="mt-4 text-xs font-bold text-[#008AD8] hover:underline flex items-center gap-1"
                >
                  Design FIRE Plan <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Delay Matrix */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-wider font-bold text-rose-600">
                The Cost of Procrastination
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What Waiting 5 or 10 Years Actually Costs You
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Comparing the final corpus at Age 60 for an investor contributing ₹10,000/month @ 12.5% CAGR.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="p-4">Starting Age</th>
                    <th className="p-4">Tenure to Age 60</th>
                    <th className="p-4">Total Invested</th>
                    <th className="p-4">Corpus at Age 60</th>
                    <th className="p-4">Wealth Lost to Delay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="bg-emerald-50/50">
                    <td className="p-4 font-bold text-emerald-800">Age 25 (Starts early)</td>
                    <td className="p-4">35 Years</td>
                    <td className="p-4">₹42.0 Lakh</td>
                    <td className="p-4 font-black text-emerald-700 text-base">₹6.49 Crore</td>
                    <td className="p-4 text-emerald-700 font-semibold">— (Maximum Compounding)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Age 30 (5-yr delay)</td>
                    <td className="p-4">30 Years</td>
                    <td className="p-4">₹36.0 Lakh</td>
                    <td className="p-4 font-bold text-slate-900">₹3.53 Crore</td>
                    <td className="p-4 text-rose-600 font-bold">-₹2.96 Crore Lost</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Age 35 (10-yr delay)</td>
                    <td className="p-4">25 Years</td>
                    <td className="p-4">₹30.0 Lakh</td>
                    <td className="p-4 font-bold text-slate-900">₹1.89 Crore</td>
                    <td className="p-4 text-rose-600 font-bold">-₹4.60 Crore Lost</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Age 40 (15-yr delay)</td>
                    <td className="p-4">20 Years</td>
                    <td className="p-4">₹24.0 Lakh</td>
                    <td className="p-4 font-bold text-slate-900">₹99.9 Lakh</td>
                    <td className="p-4 text-rose-600 font-bold">-₹5.49 Crore Lost</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
              <Flame className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>Key Takeaway:</strong> Delaying your investment by just 5 years (from Age 25 to 30) reduces your retirement corpus by nearly <strong>₹3 Crores</strong>, even though you only saved ₹6 Lakhs out of pocket during those 5 years!
              </div>
            </div>
          </div>
        </section>

        {/* Investrow Wealth Advisory Process */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-[#008AD8]">
                How We Partner With You
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Our 4-Step Scientific Wealth Creation Process
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Transparent, disciplined, and backed by AMFI-certified institutional practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <span className="w-8 h-8 rounded-lg bg-[#008AD8]/10 text-[#008AD8] font-bold flex items-center justify-center text-sm mb-3">
                  1
                </span>
                <h4 className="font-bold text-slate-900 mb-1">Financial Health Audit</h4>
                <p className="text-xs text-slate-600">
                  We review your emergency cushion, life/health insurance shields, and current savings rate before investing a single rupee.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <span className="w-8 h-8 rounded-lg bg-[#008AD8]/10 text-[#008AD8] font-bold flex items-center justify-center text-sm mb-3">
                  2
                </span>
                <h4 className="font-bold text-slate-900 mb-1">Risk Profile & Sizing</h4>
                <p className="text-xs text-slate-600">
                  We determine your genuine tolerance for market drawdown and calibrate your equity, debt, and gold ratios accordingly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <span className="w-8 h-8 rounded-lg bg-[#008AD8]/10 text-[#008AD8] font-bold flex items-center justify-center text-sm mb-3">
                  3
                </span>
                <h4 className="font-bold text-slate-900 mb-1">Paperless Execution</h4>
                <p className="text-xs text-slate-600">
                  Seamless BSE StAR MF registration, Aadhaar e-KYC, and automated bank mandates for monthly SIP automation without cheques.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <span className="w-8 h-8 rounded-lg bg-[#008AD8]/10 text-[#008AD8] font-bold flex items-center justify-center text-sm mb-3">
                  4
                </span>
                <h4 className="font-bold text-slate-900 mb-1">Annual Rebalancing</h4>
                <p className="text-xs text-slate-600">
                  When equity runs ahead of targets, we trim profits into debt; when equity corrects, we allocate more, buying low and selling high.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-[#008AD8]">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions on Wealth Creation
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#008AD8] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#008AD8]' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Conversion / CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-[#0A1628] via-[#0D203D] to-[#0A1628] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" /> AMFI Regd. Distributor ARN-194720
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Ready to Build Your Family's Financial Fortress?
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Schedule a one-on-one portfolio architecture review with an AMFI-registered wealth consultant today. Zero advisory fees, institutional-grade guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOpenConsultModal('Bottom CTA - Start Wealth Journey')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A13] to-[#FF8A3D] text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition"
              >
                <span>Book Free Wealth Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20would%20like%20to%20discuss%20a%20wealth%20creation%20plan%20for%20my%20family."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
              <span>Direct Helplines:</span>
              <a href="tel:+919102070777" className="text-white hover:text-[#008AD8] font-semibold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 91020 70777
              </a>
              <a href="tel:+919102050555" className="text-white hover:text-[#008AD8] font-semibold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 91020 50555
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenConsultModal={handleOpenConsultModal} />
      <ConsultModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        initialService={selectedService}
      />
      <AIChatAdvisor onOpenConsultModal={handleOpenConsultModal} />
      <StickyMobileBar onOpenConsultModal={handleOpenConsultModal} />
    </>
  );
}

