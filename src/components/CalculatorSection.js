'use client';

import { useState, useMemo } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  Lock, 
  Unlock, 
  Phone, 
  User, 
  Target, 
  Zap, 
  ShieldCheck, 
  Layers, 
  PieChart, 
  Info, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  Flame,
  Award,
  TrendingDown
} from 'lucide-react';

export default function CalculatorSection({ onLeadSubmitted, onOpenConsultModal }) {
  // Calculator mode: 'sip' | 'stepup' | 'lumpsum' | 'goal'
  const [calcMode, setCalcMode] = useState('sip');

  // Input states
  const [monthlySip, setMonthlySip] = useState(10000);
  const [stepUpPercent, setStepUpPercent] = useState(10); // for Step-up SIP
  const [lumpsumAmount, setLumpsumAmount] = useState(200000); // for Lumpsum
  const [targetGoalCorpus, setTargetGoalCorpus] = useState(10000000); // for Goal Seek (₹1 Cr default)
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  // Extra Smart Feature: Inflation Toggle (6% annual inflation)
  const [adjustForInflation, setAdjustForInflation] = useState(false);
  const [showMilestoneSchedule, setShowMilestoneSchedule] = useState(false);

  // Blurry Lead Gate for High-Alpha Breakup (15%, 20%, 25% returns)
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Currency Formatter
  const formatCurrency = (val) => {
    if (!val || isNaN(val)) return '₹0';
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  // Helper function to calculate maturity at any arbitrary CAGR rate
  const computeMaturityAtRate = (annualPercentRate, y) => {
    const r = annualPercentRate / 100;
    const monthlyRate = r / 12;
    const totalMonths = y * 12;

    if (calcMode === 'sip') {
      const P = Number(monthlySip);
      return Math.round(P * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    } 
    else if (calcMode === 'stepup') {
      const initialP = Number(monthlySip);
      const stepUp = Number(stepUpPercent) / 100;
      let totalFV = 0;
      for (let yr = 0; yr < y; yr++) {
        const currentYearSIP = initialP * Math.pow(1 + stepUp, yr);
        for (let m = 0; m < 12; m++) {
          const monthsRemaining = totalMonths - (yr * 12 + m);
          totalFV += currentYearSIP * Math.pow(1 + monthlyRate, monthsRemaining);
        }
      }
      return Math.round(totalFV);
    } 
    else if (calcMode === 'lumpsum') {
      const P = Number(lumpsumAmount);
      return Math.round(P * Math.pow(1 + r, y));
    } 
    else if (calcMode === 'goal') {
      // In goal seek mode, higher rate means lower required SIP, or higher outcome
      const target = Number(targetGoalCorpus);
      return target;
    }
    return 0;
  };

  // Math Calculations across all modes
  const calculations = useMemo(() => {
    const y = Number(years);
    const r = Number(returnRate) / 100;
    const monthlyRate = r / 12;
    const totalMonths = y * 12;

    let totalInvested = 0;
    let maturityValue = 0;
    let requiredSip = 0;

    if (calcMode === 'sip') {
      const P = Number(monthlySip);
      totalInvested = P * totalMonths;
      maturityValue = Math.round(P * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    } 
    else if (calcMode === 'stepup') {
      const initialP = Number(monthlySip);
      const stepUp = Number(stepUpPercent) / 100;
      let totalFV = 0;
      let totalInv = 0;

      for (let yr = 0; yr < y; yr++) {
        const currentYearSIP = initialP * Math.pow(1 + stepUp, yr);
        totalInv += currentYearSIP * 12;
        for (let m = 0; m < 12; m++) {
          const monthsRemaining = totalMonths - (yr * 12 + m);
          totalFV += currentYearSIP * Math.pow(1 + monthlyRate, monthsRemaining);
        }
      }

      totalInvested = Math.round(totalInv);
      maturityValue = Math.round(totalFV);
    } 
    else if (calcMode === 'lumpsum') {
      const P = Number(lumpsumAmount);
      totalInvested = P;
      maturityValue = Math.round(P * Math.pow(1 + r, y));
    } 
    else if (calcMode === 'goal') {
      const target = Number(targetGoalCorpus);
      maturityValue = target;
      const denom = ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
      requiredSip = Math.round(target / denom);
      totalInvested = requiredSip * totalMonths;
    }

    const estimatedReturns = Math.max(0, maturityValue - totalInvested);
    const returnsMultiplier = totalInvested > 0 ? (maturityValue / totalInvested).toFixed(1) : '1.0';

    // Inflation Adjusted Value (assuming 6% annual inflation)
    const inflationAdjustedMaturity = Math.round(maturityValue / Math.pow(1 + 0.06, y));

    // Alpha comparisons at 15%, 20%, 25% CAGR
    const val15 = computeMaturityAtRate(15, y);
    const val20 = computeMaturityAtRate(20, y);
    const val25 = computeMaturityAtRate(25, y);

    const alpha15 = {
      rate: 15,
      value: val15,
      extra: Math.max(0, val15 - maturityValue)
    };
    const alpha20 = {
      rate: 20,
      value: val20,
      extra: Math.max(0, val20 - maturityValue)
    };
    const alpha25 = {
      rate: 25,
      value: val25,
      extra: Math.max(0, val25 - maturityValue)
    };

    // Year-by-year milestone breakdown (Years 1, 3, 5, 10, 15, 20, 25, 30 if <= y)
    const milestones = [];
    const checkYears = [1, 3, 5, 8, 10, 15, 20, 25, 30].filter(chk => chk <= y);
    if (!checkYears.includes(y)) checkYears.push(y);
    checkYears.sort((a, b) => a - b);

    checkYears.forEach(chkYr => {
      const chkMonths = chkYr * 12;
      let inv = 0;
      let val = 0;

      if (calcMode === 'sip') {
        const P = Number(monthlySip);
        inv = P * chkMonths;
        val = Math.round(P * ((Math.pow(1 + monthlyRate, chkMonths) - 1) / monthlyRate) * (1 + monthlyRate));
      } else if (calcMode === 'stepup') {
        const initialP = Number(monthlySip);
        const stepUp = Number(stepUpPercent) / 100;
        let sumInv = 0;
        let sumVal = 0;
        for (let yr = 0; yr < chkYr; yr++) {
          const curSip = initialP * Math.pow(1 + stepUp, yr);
          sumInv += curSip * 12;
          for (let m = 0; m < 12; m++) {
            const rem = chkMonths - (yr * 12 + m);
            sumVal += curSip * Math.pow(1 + monthlyRate, rem);
          }
        }
        inv = Math.round(sumInv);
        val = Math.round(sumVal);
      } else if (calcMode === 'lumpsum') {
        inv = Number(lumpsumAmount);
        val = Math.round(inv * Math.pow(1 + r, chkYr));
      } else if (calcMode === 'goal') {
        inv = requiredSip * chkMonths;
        val = Math.round(requiredSip * ((Math.pow(1 + monthlyRate, chkMonths) - 1) / monthlyRate) * (1 + monthlyRate));
      }

      milestones.push({
        year: chkYr,
        invested: inv,
        value: val,
        gains: Math.max(0, val - inv)
      });
    });

    return {
      totalInvested,
      estimatedReturns,
      maturityValue,
      returnsMultiplier,
      requiredSip,
      inflationAdjustedMaturity,
      alpha15,
      alpha20,
      alpha25,
      milestones
    };
  }, [calcMode, monthlySip, stepUpPercent, lumpsumAmount, targetGoalCorpus, years, returnRate]);

  // Suggested Asset Allocation based on Tenure
  const suggestedAllocation = useMemo(() => {
    if (years >= 10) {
      return [
        { category: 'Flexi-Cap & Large Funds', pct: 40, color: '#0EA5E9' },
        { category: 'Mid-Cap Growth Funds', pct: 35, color: '#FF6A13' },
        { category: 'Small-Cap Alpha Funds', pct: 25, color: '#10B981' }
      ];
    } else if (years >= 5) {
      return [
        { category: 'Large & Flexi-Cap Funds', pct: 50, color: '#0EA5E9' },
        { category: 'Balanced Advantage Funds', pct: 30, color: '#FF6A13' },
        { category: 'Mid-Cap Funds', pct: 20, color: '#10B981' }
      ];
    } else {
      return [
        { category: 'Balanced Advantage / Hybrid', pct: 60, color: '#0EA5E9' },
        { category: 'Large Cap Bluechip Funds', pct: 25, color: '#FF6A13' },
        { category: 'Short Duration Debt / Arbitrage', pct: 15, color: '#10B981' }
      ];
    }
  }, [years]);

  // Handle Proceed / Lead Submission to Unlock High-Alpha Breakup
  const handleUnlockAlpha = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setErrorMessage('');

    const cleanPhone = leadPhone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    const finalName = leadName.trim() || 'Investor';

    setIsSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: finalName,
          phone: cleanPhone,
          service: 'Mutual Funds',
          source: `Website - Smart Calculator (${calcMode.toUpperCase()})`,
          sipAmount: calcMode === 'goal' ? calculations.requiredSip : monthlySip,
          tenureYears: years,
          investmentAmount: calculations.totalInvested,
          remarks: `Calculated Target: ${formatCurrency(calculations.maturityValue)} @ ${returnRate}% | 15% Plan: ${formatCurrency(calculations.alpha15.value)} (+${formatCurrency(calculations.alpha15.extra)}) | 20% Alpha: ${formatCurrency(calculations.alpha20.value)} (+${formatCurrency(calculations.alpha20.extra)}) | 25% Max: ${formatCurrency(calculations.alpha25.value)} (+${formatCurrency(calculations.alpha25.extra)})`
        })
      });

      setIsUnlocked(true);
      if (onLeadSubmitted) onLeadSubmitted();
    } catch (err) {
      console.error('Lead submission error:', err);
      // Unlock anyway to guarantee smooth visitor experience
      setIsUnlocked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick Preset Goal Handlers
  const handlePresetSelect = (preset) => {
    setCalcMode(preset.mode);
    setYears(preset.years);
    setReturnRate(preset.rate);
    if (preset.mode === 'sip' || preset.mode === 'stepup') {
      setMonthlySip(preset.sip);
      if (preset.stepUp) setStepUpPercent(preset.stepUp);
    } else if (preset.mode === 'lumpsum') {
      setLumpsumAmount(preset.lumpsum);
    } else if (preset.mode === 'goal') {
      setTargetGoalCorpus(preset.target);
    }
  };

  const investedPercent = Math.max(1, Math.min(99, Math.round((calculations.totalInvested / calculations.maturityValue) * 100) || 50));
  const returnsPercent = 100 - investedPercent;

  const displayMaturity = adjustForInflation 
    ? calculations.inflationAdjustedMaturity 
    : calculations.maturityValue;

  return (
    <section id="calculators" style={{
      padding: '96px 0',
      background: 'linear-gradient(180deg, #F1F5F9 0%, #F8FAFC 50%, #FFFFFF 100%)',
      position: 'relative'
    }}>
      {/* Background radial aura */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0, 138, 216, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-blue" style={{ marginBottom: '14px' }}>
            <Calculator size={14} /> Smart Wealth Engineering
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px',
            color: 'var(--navy-deep)',
            letterSpacing: '-0.02em'
          }}>
            See How Small Investments <br className="hide-mobile" />
            <span className="gradient-text-orange">Compound Into Real Wealth</span>
          </h2>

          <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Calculate your estimated wealth instantly. See how systematic monthly investing, annual salary step-ups, or alpha fund strategies can fund your biggest life milestones.
          </p>

          {/* Quick Preset Goal Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '20px'
          }}>
            {[
              { label: '🎯 ₹1 Crore Milestone', mode: 'sip', sip: 15000, years: 15, rate: 12 },
              { label: '🚀 10% Step-Up SIP (Wealth Booster)', mode: 'stepup', sip: 10000, stepUp: 10, years: 15, rate: 12 },
              { label: '🎓 Child Education (₹25L)', mode: 'goal', target: 2500000, years: 10, rate: 12 },
              { label: '🏖️ Retirement Corpus (₹2 Cr)', mode: 'goal', target: 20000000, years: 20, rate: 12 },
              { label: '💰 ₹5 Lakh Lumpsum Compounding', mode: 'lumpsum', lumpsum: 500000, years: 12, rate: 13 }
            ].map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handlePresetSelect(preset)}
                className="btn-outline"
                style={{
                  fontSize: '12.5px',
                  padding: '7px 15px',
                  background: '#FFFFFF',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer'
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Tab Mode Switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '680px',
          margin: '0 auto 36px',
          background: 'rgba(226, 232, 240, 0.6)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.04)'
        }}>
          {[
            { id: 'sip', label: 'Monthly SIP', icon: TrendingUp },
            { id: 'stepup', label: 'Step-Up SIP', icon: Flame, badge: 'Popular' },
            { id: 'lumpsum', label: 'One-Time Lumpsum', icon: Layers },
            { id: 'goal', label: 'Target Goal Planner', icon: Target }
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = calcMode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCalcMode(tab.id)}
                style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: isActive ? '#FFFFFF' : 'var(--navy-deep)',
                  background: isActive ? 'var(--navy-deep)' : 'transparent',
                  boxShadow: isActive ? '0 4px 12px rgba(10, 22, 40, 0.2)' : 'none',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
              >
                <IconComp size={14} style={{ color: isActive ? 'var(--accent-orange)' : '#64748B' }} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span style={{
                    fontSize: '9px',
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    background: isActive ? 'var(--accent-orange)' : '#EA580C',
                    color: 'white',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Calculator Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.08fr 0.92fr',
          gap: '32px',
          alignItems: 'stretch'
        }} className="calc-grid">
          
          {/* Left Column: Sliders Card */}
          <div style={{
            padding: '36px',
            background: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 8px 32px rgba(10, 22, 40, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top accent bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-orange))'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Parameter 1: Depends on Mode */}
              {calcMode === 'sip' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                        Monthly SIP Amount
                      </label>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>Fixed monthly investment in mutual funds</div>
                    </div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
                      color: '#0284C7',
                      padding: '5px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(0, 138, 216, 0.15)'
                    }}>
                      ₹{monthlySip.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <input 
                    type="range"
                    min={500}
                    max={150000}
                    step={500}
                    value={monthlySip}
                    onChange={(e) => setMonthlySip(Number(e.target.value))}
                  />
                  {/* Quick Chips */}
                  <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
                    {[2500, 5000, 10000, 25000, 50000].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setMonthlySip(amt)}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          background: monthlySip === amt ? 'var(--primary-blue)' : '#F1F5F9',
                          color: monthlySip === amt ? '#FFFFFF' : '#475569',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        ₹{(amt / 1000)}k
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {calcMode === 'stepup' && (
                <>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div>
                        <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                          Starting Monthly SIP
                        </label>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>First year monthly investment amount</div>
                      </div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
                        color: '#0284C7',
                        padding: '5px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(0, 138, 216, 0.15)'
                      }}>
                        ₹{monthlySip.toLocaleString('en-IN')}
                      </div>
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div>
                        <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                          Annual Step-Up Rate (%)
                        </label>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Yearly increase as your income grows</div>
                      </div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #FFF1EB, #FFE0CC)',
                        color: '#C2410C',
                        padding: '5px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255, 106, 19, 0.15)'
                      }}>
                        +{stepUpPercent}% / Year
                      </div>
                    </div>
                    <input 
                      type="range"
                      min={5}
                      max={25}
                      step={1}
                      value={stepUpPercent}
                      onChange={(e) => setStepUpPercent(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                      {[5, 10, 15, 20].map(pct => (
                        <button
                          key={pct}
                          type="button"
                          onClick={() => setStepUpPercent(pct)}
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: stepUpPercent === pct ? 'var(--accent-orange)' : '#F1F5F9',
                            color: stepUpPercent === pct ? '#FFFFFF' : '#475569',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          +{pct}%
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {calcMode === 'lumpsum' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                        One-Time Lumpsum Investment
                      </label>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>Single capital deployment for compounding</div>
                    </div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
                      color: '#0284C7',
                      padding: '5px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(0, 138, 216, 0.15)'
                    }}>
                      {formatCurrency(lumpsumAmount)}
                    </div>
                  </div>
                  <input 
                    type="range"
                    min={10000}
                    max={5000000}
                    step={10000}
                    value={lumpsumAmount}
                    onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                  />
                  <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                    {[50000, 100000, 500000, 1000000, 2500000].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setLumpsumAmount(amt)}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          background: lumpsumAmount === amt ? 'var(--primary-blue)' : '#F1F5F9',
                          color: lumpsumAmount === amt ? '#FFFFFF' : '#475569',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {formatCurrency(amt)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {calcMode === 'goal' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                        Target Wealth Goal (Corpus Needed)
                      </label>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>Amount you wish to accumulate</div>
                    </div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
                      color: '#059669',
                      padding: '5px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(16, 185, 129, 0.15)'
                    }}>
                      {formatCurrency(targetGoalCorpus)}
                    </div>
                  </div>
                  <input 
                    type="range"
                    min={500000}
                    max={50000000}
                    step={500000}
                    value={targetGoalCorpus}
                    onChange={(e) => setTargetGoalCorpus(Number(e.target.value))}
                  />
                  <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                    {[1000000, 2500000, 5000000, 10000000, 20000000].map(tgt => (
                      <button
                        key={tgt}
                        type="button"
                        onClick={() => setTargetGoalCorpus(tgt)}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          background: targetGoalCorpus === tgt ? '#059669' : '#F1F5F9',
                          color: targetGoalCorpus === tgt ? '#FFFFFF' : '#475569',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {formatCurrency(tgt)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Parameter 2: Investment Period (Years) */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                      Investment Period (Years)
                    </label>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Time horizon for power of compounding</div>
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #FFF1EB, #FFE0CC)',
                    color: '#C2410C',
                    padding: '5px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255, 106, 19, 0.15)'
                  }}>
                    {years} {years === 1 ? 'Year' : 'Years'}
                  </div>
                </div>
                <input 
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
                <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                  {[3, 5, 10, 15, 20, 25].map(yr => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setYears(yr)}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: years === yr ? 'var(--accent-orange)' : '#F1F5F9',
                        color: years === yr ? '#FFFFFF' : '#475569',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {yr}Y
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Expected Annual Return (%) */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <label style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                      Expected Annual Return (CAGR)
                    </label>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Historical benchmark equity return</div>
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
                    color: '#059669',
                    padding: '5px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(16, 185, 129, 0.15)'
                  }}>
                    {returnRate}%
                  </div>
                </div>
                <input 
                  type="range"
                  min={8}
                  max={18}
                  step={0.5}
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748B', marginTop: '8px' }}>
                  <span>8% (Conservative)</span>
                  <span>12% (Nifty 50 Historical)</span>
                  <span>15% (Active Equity)</span>
                </div>
              </div>

            </div>

            {/* Regulatory Advisory Footnote */}
            <div style={{
              marginTop: '32px',
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: '#F8FAFC',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              color: '#64748B'
            }}>
              <ShieldCheck size={16} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
              <span>AMFI Registered MFD (ARN-194720). Projections are illustrative based on compounding mathematics.</span>
            </div>
          </div>

          {/* Right Column: Always-Live Estimated Result + Blurry Alpha Unlocker */}
          <div style={{
            background: 'linear-gradient(155deg, #0A1628 0%, #0F1E36 50%, #0A1628 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '32px',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 24px 50px rgba(10, 22, 40, 0.28)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {/* Ambient Lighting */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 138, 216, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 106, 19, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              
              {/* Top Row: Title & Inflation Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  color: '#94A3B8',
                  fontWeight: 700
                }}>
                  {calcMode === 'goal' ? 'Required Monthly SIP' : 'Projected Wealth Growth'}
                </div>

                <button
                  type="button"
                  onClick={() => setAdjustForInflation(!adjustForInflation)}
                  style={{
                    background: adjustForInflation ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    color: adjustForInflation ? '#38BDF8' : '#CBD5E1',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  {adjustForInflation ? 'Inflation Adjusted (6%)' : 'Adjust for 6% Inflation'}
                </button>
              </div>

              {/* LIVE ESTIMATED MATURITY VALUE — ALWAYS VISIBLE! */}
              <div style={{
                fontSize: 'clamp(34px, 4vw, 44px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '8px'
              }}>
                {calcMode === 'goal' 
                  ? `${formatCurrency(calculations.requiredSip)} / mo`
                  : formatCurrency(displayMaturity)
                }
              </div>

              {/* Multiplier Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(56, 189, 248, 0.12)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                color: '#38BDF8',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '18px'
              }}>
                🚀 Over {calculations.returnsMultiplier}x your invested capital!
              </div>

              {/* Live Donut Breakdown */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '20px'
              }}>
                <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                  <svg viewBox="0 0 36 36" style={{ width: '56px', height: '56px', transform: 'rotate(-90deg)' }}>
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
                    <circle 
                      cx="18" cy="18" r="15.5" fill="none" 
                      stroke="#94A3B8" strokeWidth="3.5"
                      strokeDasharray={`${investedPercent} ${returnsPercent}`}
                      strokeLinecap="round"
                    />
                    <circle 
                      cx="18" cy="18" r="15.5" fill="none" 
                      stroke="var(--accent-orange)" strokeWidth="3.5"
                      strokeDasharray={`${returnsPercent} ${investedPercent}`}
                      strokeDashoffset={`-${investedPercent}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#94A3B8' }} />
                      Total Invested
                    </span>
                    <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#E2E8F0' }}>
                      {formatCurrency(calculations.totalInvested)}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12px', color: '#FDBA74', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-orange)' }} />
                      Estimated Returns
                    </span>
                    <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--accent-orange)' }}>
                      + {formatCurrency(calculations.estimatedReturns)}
                    </span>
                  </div>
                </div>
              </div>

              {/* SECTION 2: 3 EXCITING HIGH-RETURN COLUMNS (WITH BLURRED STRATEGY LINES) */}
              <div style={{ marginTop: '18px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#FF8A3D',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Flame size={15} /> Earn Significantly More With High-Alpha Selection
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: '#38BDF8',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    fontWeight: 600
                  }}>
                    vs standard 12%
                  </span>
                </div>

                {/* 3 Exciting Columns */}
                <div className="alpha-columns" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  marginBottom: '14px'
                }}>
                  {/* Column 1: 15% Return */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '14px 12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '11.5px', color: '#38BDF8', fontWeight: 800 }}>
                          15% Growth
                        </span>
                        <span style={{ fontSize: '9.5px', color: '#94A3B8' }}>
                          Active Equity
                        </span>
                      </div>
                      <div style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '4px 0 2px',
                        letterSpacing: '-0.02em'
                      }}>
                        {formatCurrency(calculations.alpha15.value)}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#4ADE80',
                        fontWeight: 700,
                        marginBottom: '10px'
                      }}>
                        +{formatCurrency(calculations.alpha15.extra)} Extra
                      </div>
                    </div>

                    {/* Exciting Blurred Strategy Line */}
                    <div style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: '1px dashed rgba(56, 189, 248, 0.25)',
                      fontSize: '11px',
                      lineHeight: 1.5,
                      color: '#E2E8F0'
                    }}>
                      <span>If you do </span>
                      {isUnlocked ? (
                        <strong style={{ color: '#38BDF8', fontWeight: 800 }}>
                          Top Flexi-Cap Strategy (Parag & HDFC) ✅
                        </strong>
                      ) : (
                        <span style={{
                          filter: 'blur(5px)',
                          userSelect: 'none',
                          background: 'rgba(56, 189, 248, 0.3)',
                          color: 'transparent',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          display: 'inline-block',
                          margin: '0 2px'
                        }}>
                          Top Flexi-Cap Funds
                        </span>
                      )}
                      <span> you will get </span>
                      <strong style={{ color: '#38BDF8', fontWeight: 800 }}>
                        {formatCurrency(calculations.alpha15.value)}
                      </strong>
                    </div>
                  </div>

                  {/* Column 2: 20% Alpha (Hero Pick) */}
                  <div style={{
                    background: 'linear-gradient(180deg, rgba(255, 106, 19, 0.18) 0%, rgba(255, 106, 19, 0.06) 100%)',
                    padding: '14px 12px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(255, 106, 19, 0.55)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    boxShadow: '0 6px 20px rgba(255, 106, 19, 0.2)',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '11.5px', color: '#FF8A3D', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                          20% Alpha 🔥
                        </span>
                        <span style={{
                          fontSize: '9px',
                          padding: '2px 6px',
                          borderRadius: '9999px',
                          background: 'var(--accent-orange)',
                          color: '#FFFFFF',
                          fontWeight: 800,
                          letterSpacing: '0.5px'
                        }}>
                          HOT PICK
                        </span>
                      </div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '4px 0 2px',
                        letterSpacing: '-0.02em'
                      }}>
                        {formatCurrency(calculations.alpha20.value)}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#FDBA74',
                        fontWeight: 800,
                        marginBottom: '10px'
                      }}>
                        +{formatCurrency(calculations.alpha20.extra)} Extra!
                      </div>
                    </div>

                    {/* Exciting Blurred Strategy Line */}
                    <div style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: '1px dashed rgba(255, 106, 19, 0.35)',
                      fontSize: '11px',
                      lineHeight: 1.5,
                      color: '#E2E8F0'
                    }}>
                      <span>If you do </span>
                      {isUnlocked ? (
                        <strong style={{ color: '#FF8A3D', fontWeight: 800 }}>
                          Mid-Cap Alpha Compounders (Nippon & Motilal) ✅
                        </strong>
                      ) : (
                        <span style={{
                          filter: 'blur(5px)',
                          userSelect: 'none',
                          background: 'rgba(255, 106, 19, 0.35)',
                          color: 'transparent',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          display: 'inline-block',
                          margin: '0 2px'
                        }}>
                          Mid-Cap Compounders
                        </span>
                      )}
                      <span> you will get </span>
                      <strong style={{ color: '#FF8A3D', fontWeight: 800 }}>
                        {formatCurrency(calculations.alpha20.value)}
                      </strong>
                    </div>
                  </div>

                  {/* Column 3: 25% Max Multiplier */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '14px 12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '11.5px', color: '#F59E0B', fontWeight: 800 }}>
                          25% Max ⚡
                        </span>
                        <span style={{ fontSize: '9.5px', color: '#94A3B8' }}>
                          High Growth
                        </span>
                      </div>
                      <div style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '4px 0 2px',
                        letterSpacing: '-0.02em'
                      }}>
                        {formatCurrency(calculations.alpha25.value)}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#FDE68A',
                        fontWeight: 700,
                        marginBottom: '10px'
                      }}>
                        +{formatCurrency(calculations.alpha25.extra)} Extra!
                      </div>
                    </div>

                    {/* Exciting Blurred Strategy Line */}
                    <div style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: '1px dashed rgba(245, 158, 11, 0.3)',
                      fontSize: '11px',
                      lineHeight: 1.5,
                      color: '#E2E8F0'
                    }}>
                      <span>If you do </span>
                      {isUnlocked ? (
                        <strong style={{ color: '#F59E0B', fontWeight: 800 }}>
                          Small-Cap Multibaggers (Quant & Tata) ✅
                        </strong>
                      ) : (
                        <span style={{
                          filter: 'blur(5px)',
                          userSelect: 'none',
                          background: 'rgba(245, 158, 11, 0.35)',
                          color: 'transparent',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          display: 'inline-block',
                          margin: '0 2px'
                        }}>
                          Small-Cap Discovery
                        </span>
                      )}
                      <span> you will get </span>
                      <strong style={{ color: '#F59E0B', fontWeight: 800 }}>
                        {formatCurrency(calculations.alpha25.value)}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* FORM TO UNLOCK (Visible when !isUnlocked) */}
                {!isUnlocked ? (
                  <div style={{
                    background: 'linear-gradient(180deg, rgba(255, 106, 19, 0.12) 0%, rgba(10, 22, 40, 0.6) 100%)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 106, 19, 0.35)',
                    padding: '16px 18px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                  }}>
                    {/* Advisor Assigned Desk Strip */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      marginBottom: '12px'
                    }}>
                      <div style={{ position: 'relative', width: '36px', height: '36px', flexShrink: 0 }}>
                        <img 
                          src="/images/advisor/advisor_portrait.jpg" 
                          alt="Rajesh Sharma, Senior Wealth Advisor"
                          style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #FF8A3D' }} 
                        />
                        <span style={{
                          position: 'absolute',
                          bottom: '-1px',
                          right: '-1px',
                          width: '9px',
                          height: '9px',
                          borderRadius: '50%',
                          background: '#22C55E',
                          border: '1.5px solid #0F1E36'
                        }} />
                      </div>
                      <div style={{ lineHeight: 1.25 }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>
                          Rajesh Sharma • Senior AMFI Advisor (ARN-194720)
                        </div>
                        <div style={{ fontSize: '10.5px', color: '#94A3B8' }}>
                          Assigned to review & curate your 15%–25% alpha portfolio
                        </div>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '10px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#E2E8F0'
                    }}>
                      <Lock size={14} style={{ color: 'var(--accent-orange)' }} />
                      <span>Enter your number to instantly unlock all 3 blurred fund strategies:</span>
                    </div>

                    <form onSubmit={handleUnlockAlpha} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '8px' }}>
                        <input
                          type="text"
                          placeholder="Your Name (Optional)"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                            fontSize: '13px'
                          }}
                        />

                        <div style={{ display: 'flex' }}>
                          <span style={{
                            padding: '0 10px',
                            background: 'rgba(255, 255, 255, 0.12)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRight: 'none',
                            borderTopLeftRadius: '8px',
                            borderBottomLeftRadius: '8px',
                            color: '#38BDF8',
                            fontSize: '12px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="Mobile / WhatsApp"
                            value={leadPhone}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                              setLeadPhone(val);
                            }}
                            style={{
                              width: '100%',
                              padding: '10px 12px',
                              borderTopRightRadius: '8px',
                              borderBottomRightRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              color: '#FFFFFF',
                              fontSize: '13px'
                            }}
                          />
                        </div>
                      </div>

                      {errorMessage && (
                        <div style={{ fontSize: '11px', color: '#F87171' }}>
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-orange"
                        style={{
                          width: '100%',
                          padding: '11px',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          borderRadius: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        {isSubmitting ? 'Unlocking Schemes...' : 'Unlock All 3 High-Growth Strategies 🚀'}
                      </button>

                      <div style={{ fontSize: '10.5px', color: '#94A3B8', textAlign: 'center' }}>
                        🔒 Free instant unlock • Official AMFI Registered Mutual Fund Distributor (ARN-194720)
                      </div>
                    </form>
                  </div>
                ) : (
                  /* UNLOCKED STATE */
                  <div style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#4ADE80', fontWeight: 700 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} /> All 3 Strategy Lines Unlocked for {leadName || 'You'}!
                      </span>
                      <span style={{ fontSize: '11px', color: '#A7F3D0' }}>
                        +91 {leadPhone}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/919102070777?text=${encodeURIComponent(
                        `Hello Investrow, my name is ${leadName || 'an investor'}. I checked your Smart Wealth Calculator for a ${years}-year plan (₹${monthlySip}/mo). Please share your curated 20%-25% High-Alpha mutual fund portfolio.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-orange"
                      style={{ width: '100%', padding: '12px', fontSize: '13.5px', textDecoration: 'none' }}
                    >
                      <MessageSquare size={16} /> Get Recommended Fund Portfolio on WhatsApp
                    </a>

                    {onOpenConsultModal && (
                      <button
                        type="button"
                        onClick={() => onOpenConsultModal(`High-Alpha Plan - ${leadName || 'Investor'}`)}
                        className="btn-outline"
                        style={{
                          width: '100%',
                          padding: '9px',
                          fontSize: '12.5px',
                          color: '#FFFFFF',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          background: 'transparent'
                        }}
                      >
                        Book 1-on-1 Consultation Call
                      </button>
                    )}
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .alpha-columns {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
