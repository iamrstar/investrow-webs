'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Shield } from 'lucide-react';

const FAQS = [
  {
    q: 'How does Investrow help me invest in Mutual Funds? Is there an extra advisory fee?',
    a: 'Investrow Financial Services is an AMFI-Registered Mutual Fund Distributor (ARN-194720). We provide complete goal-based portfolio planning, top-quartile scheme selection, ongoing portfolio rebalancing, and tax harvesting at zero upfront advisory fee to you. We are compensated through standard regulated commissions paid directly by Asset Management Companies (AMCs).'
  },
  {
    q: 'What is the minimum amount required to start a Mutual Fund SIP?',
    a: 'You can start investing with as little as ₹500 or ₹1,000 per month. Systematic Investment Plans (SIPs) allow disciplined wealth compounding through rupee cost averaging, which automatically purchases more fund units when market prices dip and fewer when markets peak, eliminating the stress of market timing.'
  },
  {
    q: 'How do Tax-Saving Mutual Funds (ELSS) compare to PPF and Tax-Saving FDs under Section 80C?',
    a: 'ELSS (Equity Linked Savings Scheme) offers the shortest lock-in period among all Section 80C tax-saving options—just 3 years compared to 5 years for Tax-Saving Fixed Deposits and 15 years for PPF. Additionally, because ELSS invests in high-growth equity markets, historical returns have significantly outperformed fixed-income instruments while saving you up to ₹46,800 in taxes each year.'
  },
  {
    q: 'How do you pick and recommend mutual fund schemes for my profile?',
    a: "Rather than chasing last year's top-performing fund, our selection framework evaluates rolling returns across market cycles, fund manager consistency, downside risk capture ratio, expense ratios, and portfolio asset quality. We match fund volatility with your specific time horizon—such as short-term liquid funds, medium-term hybrid funds, or long-term multi-cap and flexi-cap equities."
  },
  {
    q: 'Can Investrow audit or help me consolidate my existing mutual fund investments?',
    a: 'Yes, absolutely! Many investors have scattered mutual fund investments across various apps, direct portals, and banks with duplicate scheme holdings. We provide a 100% complimentary Portfolio Health Check to analyze scheme overlap, remove chronic laggards, and consolidate your holdings into an organized, goal-focused strategy.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
      position: 'relative'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0, 138, 216, 0.03) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="badge-blue" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} /> Clear Answers & Transparency
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '16px', color: 'var(--navy-deep)', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions on Mutual Funds
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Everything you need to know about disciplined SIP compounding, taxation, scheme selection, and our advisory process.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: isOpen ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1.5px solid rgba(0, 138, 216, 0.2)' : '1px solid rgba(226, 232, 240, 0.8)',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)',
                  boxShadow: isOpen 
                    ? '0 8px 28px rgba(0, 138, 216, 0.06), 0 0 0 1px rgba(0, 138, 216, 0.05)' 
                    : '0 1px 3px rgba(10, 22, 40, 0.03)',
                  backdropFilter: 'blur(8px)',
                  position: 'relative'
                }}
              >
                {/* Active indicator line */}
                {isOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '3px',
                    height: '100%',
                    background: 'linear-gradient(180deg, var(--primary-blue), var(--accent-orange))',
                    borderRadius: '0 3px 3px 0'
                  }} />
                )}

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    paddingLeft: isOpen ? '28px' : '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    textAlign: 'left',
                    fontSize: '15.5px',
                    fontWeight: 700,
                    color: isOpen ? 'var(--primary-blue)' : 'var(--navy-deep)',
                    transition: 'var(--transition-smooth)',
                    lineHeight: 1.4
                  }}
                >
                  <span style={{ paddingRight: '16px' }}>{faq.q}</span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen 
                      ? 'linear-gradient(135deg, #E0F2FE, #BAE6FD)' 
                      : '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'var(--transition-smooth)'
                  }}>
                    <ChevronDown 
                      size={18} 
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        color: isOpen ? '#0284C7' : 'var(--text-muted)'
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 24px',
                    paddingLeft: '28px',
                    fontSize: '14.5px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    borderTop: '1px solid rgba(226, 232, 240, 0.5)',
                    paddingTop: '16px',
                    animation: 'fadeIn 0.3s ease forwards'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust badge below FAQs */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '16px 24px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(226, 232, 240, 0.6)',
          backdropFilter: 'blur(8px)',
          maxWidth: 'fit-content',
          margin: '48px auto 0'
        }}>
          <Shield size={16} style={{ color: '#0284C7' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            AMFI Certified • SEBI Regulated • BSE StAR MF Registered • 23+ Years of Advisory Trust
          </span>
        </div>

      </div>
    </section>
  );
}
