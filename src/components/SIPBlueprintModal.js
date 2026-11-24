'use client';

import { X, Printer, ShieldCheck, CheckCircle2, TrendingUp, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import BrandTagline from './BrandTagline';

export default function SIPBlueprintModal({
  isOpen,
  onClose,
  planData = {}
}) {
  if (!isOpen) return null;

  const {
    calcMode = 'sip',
    monthlySip = 10000,
    lumpsumAmount = 200000,
    targetGoalCorpus = 10000000,
    swpCorpus = 5000000,
    swpMonthly = 35000,
    years = 10,
    returnRate = 12,
    totalInvested = 0,
    maturityValue = 0,
    estimatedReturns = 0,
    milestones = [],
    formatCurrency = (v) => `₹${v}`
  } = planData;

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const modeLabels = {
    sip: 'Monthly Wealth SIP Blueprint',
    stepup: 'Annual Step-Up SIP Blueprint',
    lumpsum: 'Lumpsum Wealth Compounding Blueprint',
    goal: 'Target Goal SIP Blueprint',
    swp: 'Systematic Withdrawal (SWP) Income Blueprint',
    delay: 'Cost of Waiting & Compounding Analysis'
  };

  return (
    <div 
      className="blueprint-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(10, 22, 40, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto'
      }}
    >
      <div 
        className="blueprint-modal-sheet"
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '94vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(10, 22, 40, 0.4)',
          position: 'relative',
          padding: 'clamp(20px, 4vw, 36px)',
          color: '#0A1628'
        }}
      >
        {/* Close & Action Bar (Hidden during Print) */}
        <div className="no-print" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '14px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: 'rgba(0, 138, 216, 0.1)',
              color: '#008AD8',
              fontSize: '11.5px',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '9999px',
              textTransform: 'uppercase'
            }}>
              Investor Blueprint
            </span>
            <span style={{ fontSize: '13px', color: '#64748B' }}>
              AMFI ARN-194720 • BSE 55533
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(10, 22, 40, 0.15)'
              }}
            >
              <Printer size={15} /> Save as PDF / Print
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                background: '#F1F5F9',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Area Begins */}
        <div className="printable-blueprint">
          {/* Header & Brand Credentials */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderBottom: '2px solid #0A1628',
            paddingBottom: '18px',
            marginBottom: '20px',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <img 
                  src="/investrow-logo.png" 
                  alt="Investrow Financial Services" 
                  style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
                />
                <BrandTagline size="xs" style={{ marginTop: '2px' }} />
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px', lineHeight: 1.4 }}>
                <strong>Investrow Financial Services Pvt. Ltd.</strong> (CIN: U67190JH2021PTC016813)<br />
                AMFI Registered Mutual Fund Distributor (ARN-194720) • BSE StAR MF: 55533<br />
                Registered Office: Sundarpur Basti, Jealgora, Dhanbad, Jharkhand, India, 828110
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '12px', color: '#475569' }}>
              <div style={{ fontWeight: 800, fontSize: '15px', color: '#0A1628', marginBottom: '4px' }}>
                {modeLabels[calcMode] || 'Mutual Fund Investment Blueprint'}
              </div>
              <div>Date Generated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              <div style={{ color: '#008AD8', fontWeight: 600 }}>Helpline: +91 91020 70777</div>
            </div>
          </div>

          {/* Executive Summary Metrics Card */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '18px',
            marginBottom: '22px'
          }}>
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#008AD8', marginBottom: '14px' }}>
              Key Plan Architecture
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '14px'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Investment Horizon</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A1628' }}>{years} Years</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
                  {calcMode === 'lumpsum' ? 'One-Time Principal' : calcMode === 'swp' ? 'Initial Corpus' : 'Monthly Allocation'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A1628' }}>
                  {calcMode === 'lumpsum' 
                    ? formatCurrency(lumpsumAmount)
                    : calcMode === 'swp'
                    ? formatCurrency(swpCorpus)
                    : `${formatCurrency(monthlySip)} / mo`}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Target CAGR Return</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#059669' }}>{returnRate}% p.a.</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Total Capital Outlay</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A1628' }}>{formatCurrency(totalInvested)}</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: 700 }}>Projected Maturity Corpus</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#EA580C' }}>{formatCurrency(maturityValue)}</div>
              </div>
            </div>
          </div>

          {/* Milestone Compounding Timeline Table */}
          {milestones && milestones.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0A1628', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Milestone Compounding Schedule
              </h4>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '12px',
                textAlign: 'left'
              }}>
                <thead>
                  <tr style={{ background: '#0A1628', color: '#FFFFFF' }}>
                    <th style={{ padding: '8px 12px', borderRadius: '6px 0 0 0' }}>Milestone Year</th>
                    <th style={{ padding: '8px 12px' }}>Total Invested</th>
                    <th style={{ padding: '8px 12px' }}>Projected Wealth (At {returnRate}%)</th>
                    <th style={{ padding: '8px 12px', borderRadius: '0 6px 0 0' }}>Est. Wealth Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {milestones.map((m, idx) => (
                    <tr 
                      key={m.year}
                      style={{
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                        borderBottom: '1px solid #E2E8F0'
                      }}
                    >
                      <td style={{ padding: '8px 12px', fontWeight: 700 }}>Year {m.year}</td>
                      <td style={{ padding: '8px 12px', color: '#475569' }}>{formatCurrency(m.invested)}</td>
                      <td style={{ padding: '8px 12px', fontWeight: 800, color: '#008AD8' }}>{formatCurrency(m.value)}</td>
                      <td style={{ padding: '8px 12px', fontWeight: 700, color: '#059669' }}>+{formatCurrency(m.gains)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Action Callout & Advisory Desk */}
          <div style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
            color: '#FFFFFF',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#FFFFFF', marginBottom: '2px' }}>
                Ready to activate this plan with curated top-quartile funds?
              </div>
              <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                Contact Surendra Prasad & the Investrow Advisory Desk for 100% free portfolio scheme mapping.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href={`https://wa.me/919102070777?text=${encodeURIComponent(
                  `Hello Investrow Advisory, I generated a ${years}-year ${calcMode.toUpperCase()} blueprint for ${formatCurrency(maturityValue)} on your website. Please review scheme allocation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-print"
                style={{
                  background: '#22C55E',
                  color: '#FFFFFF',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Statutory Regulatory Disclaimer */}
          <div style={{
            fontSize: '10px',
            color: '#64748B',
            lineHeight: 1.5,
            borderTop: '1px solid #E2E8F0',
            paddingTop: '10px'
          }}>
            <strong>Statutory Disclosure:</strong> Investrow Financial Services Pvt. Ltd. is an AMFI-Registered Mutual Fund Distributor (ARN-194720). Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Calculations and projections are mathematical models based on compounding and do not guarantee future returns.
          </div>
        </div>

        <style jsx>{`
          @media print {
            .no-print {
              display: none !important;
            }
            .blueprint-modal-backdrop {
              position: static !important;
              background: none !important;
              padding: 0 !important;
            }
            .blueprint-modal-sheet {
              box-shadow: none !important;
              max-height: none !important;
              padding: 0 !important;
              border-radius: 0 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
