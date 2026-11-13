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
  ExternalLink, 
  FileText, 
  Users, 
  CreditCard, 
  CheckCircle2, 
  Search, 
  HelpCircle, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Lock, 
  Sparkles,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

export default function InvestorServicesClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Investor Service Assistance');

  // Quick Service Request Form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [folioNumber, setFolioNumber] = useState('');
  const [serviceType, setServiceType] = useState('Nominee Update / Addition');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenConsultModal = (service = 'Investor Services Desk') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return;

    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          service: `Investor Service - ${serviceType}`,
          source: 'Website - Investor Services Portal',
          remarks: `Service Request: ${serviceType} | Folio/PAN details: ${folioNumber || 'Not provided'}`
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

  const rtaServices = [
    {
      provider: 'CAMS (Computer Age Management Services)',
      tagline: 'Serving HDFC, SBI, ICICI Pru, Aditya Birla, Kotak, DSP, Tata, etc.',
      color: '#0EA5E9',
      links: [
        { title: 'Update Email & Mobile Number', url: 'https://mycams.camsonline.com/', desc: 'Paperless online contact details update across all CAMS serviced mutual funds.' },
        { title: 'Add / Modify Nominee Online', url: 'https://mycams.camsonline.com/', desc: 'Fulfill mandatory SEBI nomination rule for all your investment folios.' },
        { title: 'Download Consolidated Account Statement (CAS)', url: 'https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement', desc: 'Get your full pan-India mutual fund holdings sent directly to your registered email.' },
        { title: 'Change of Bank Mandate Online', url: 'https://mycams.camsonline.com/', desc: 'Update payout bank accounts and redemption credit instructions.' }
      ]
    },
    {
      provider: 'KFintech (KFin Technologies Ltd.)',
      tagline: 'Serving Nippon India, Axis, UTI, Mirae Asset, Motilal Oswal, Quant, etc.',
      color: '#FF6A13',
      links: [
        { title: 'KFintech Investor Service Portal', url: 'https://mfs.kfintech.com/investor/', desc: 'Unified investor console for contact updates, folio management, and tax certificates.' },
        { title: 'Nominee Declaration & Opt-Out', url: 'https://mfs.kfintech.com/investor/General/NomineeDeclaration', desc: 'Instant online nominee addition using Aadhaar OTP verification.' },
        { title: 'Mailback Statements & Capital Gains', url: 'https://mfs.kfintech.com/investor/General/MailBackStatements.aspx', desc: 'Download capital gains reports and account statements for ITR tax filing.' },
        { title: 'Folio Consolidation & Minor-to-Major Update', url: 'https://mfs.kfintech.com/investor/', desc: 'Merge multiple folios under the same PAN into a single clean account.' }
      ]
    }
  ];

  const kycPortals = [
    {
      name: 'CVL KRA (CDSL Ventures Ltd)',
      url: 'https://www.cvlkra.com/',
      desc: 'Check your current KYC status, validation status, and address compliance across Indian capital markets.'
    },
    {
      name: 'CAMS KRA Portal',
      url: 'https://camskra.com/',
      desc: 'Verify if your PAN is KYC Registered, Validated, or requires Aadhaar-based modification.'
    },
    {
      name: 'NSE / NSDL Database KRA',
      url: 'https://kra.ndml.in/',
      desc: 'Official NDML KYC inquiry portal for checking national investor registration records.'
    },
    {
      name: 'Karvy / KFintech KRA',
      url: 'https://www.karvykra.com/',
      desc: 'Verify KFintech KYC record status and download KYC acknowledgment certificates.'
    }
  ];

  const taxGovLinks = [
    {
      title: 'Income Tax e-Filing Portal',
      url: 'https://www.incometax.gov.in/',
      desc: 'Direct portal to file ITR, view Annual Information Statement (AIS), and verify Form 26AS mutual fund transactions.'
    },
    {
      title: 'Aadhaar-PAN Link Status Check',
      url: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status',
      desc: 'Ensure your PAN is inoperative-proof by verifying its link status with your Aadhaar number.'
    },
    {
      title: 'MF Central (MFCentral)',
      url: 'https://www.mfcentral.com/',
      desc: 'Official platform developed jointly by CAMS & KFintech under SEBI directive for unified mutual fund portfolio servicing.'
    },
    {
      title: 'DigiLocker Official Portal',
      url: 'https://www.digilocker.gov.in/',
      desc: 'Secure government cloud repository for verified digital identity and KYC documents.'
    }
  ];

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
          {/* Subtle Glows */}
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
              <span style={{ color: '#38BDF8', fontWeight: 600 }}>Investor Services & Downloads</span>
            </div>

            <div style={{ maxWidth: '840px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(0, 138, 216, 0.15)',
                border: '1px solid rgba(0, 138, 216, 0.35)',
                color: '#38BDF8',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <ShieldCheck size={14} style={{ color: '#22C55E' }} />
                <span>Investrow Investor Utility Desk • ARN-194720</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(28px, 4.5vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '18px',
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}>
                Investor Services & Online <span style={{
                  background: 'linear-gradient(135deg, #FF8A3D 0%, #FF5E00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Utility Directory</span>
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                lineHeight: 1.65,
                color: '#CBD5E1',
                marginBottom: '28px'
              }}>
                A centralized portal for Indian mutual fund investors. Update email and mobile numbers, register nominees, verify KYC status, link Aadhaar-PAN, and download consolidated account statements directly through official registrar and regulatory portals.
              </p>

              {/* Quick Helpline Strip */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                padding: '12px 20px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#F1F5F9' }}>
                  <Phone size={15} style={{ color: 'var(--accent-orange)' }} />
                  <span>Direct Help Desk: <strong>+91 91020 70777</strong> / <strong>+91 91020 50555</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#F1F5F9' }}>
                  <Mail size={15} style={{ color: '#38BDF8' }} />
                  <span>Support Email: <strong>info@investrow.in</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: RTA SERVICES (CAMS & KFINTECH) */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <div className="badge-blue" style={{ marginBottom: '14px' }}>
                <RefreshCw size={14} /> Registrar & Transfer Agents (RTA)
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Online Services via CAMS & KFintech
              </h2>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.65 }}>
                Direct access to India’s two primary mutual fund registrars. Manage contact updates, nominee additions, and consolidated statements paperless.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '28px' }}>
              {rtaServices.map((rta, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  border: `1.5px solid ${rta.color}30`,
                  boxShadow: '0 8px 30px rgba(10, 22, 40, 0.05)',
                  padding: 'clamp(20px, 4vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <Building2 size={22} style={{ color: rta.color }} />
                      <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--navy-deep)', margin: 0 }}>
                        {rta.provider}
                      </h3>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '22px', fontWeight: 600 }}>
                      {rta.tagline}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {rta.links.map((link, lIdx) => (
                        <div key={lIdx} style={{
                          padding: '14px',
                          borderRadius: '10px',
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          transition: 'var(--transition-smooth)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                              {link.title}
                            </span>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: rta.color,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '12px',
                                fontWeight: 700,
                                textDecoration: 'none'
                              }}
                            >
                              Open <ExternalLink size={12} />
                            </a>
                          </div>
                          <p style={{ fontSize: '12px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                            {link.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: KYC STATUS & VERIFICATION */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
              <div className="badge-blue" style={{ marginBottom: '14px' }}>
                <FileText size={14} /> KYC Compliance Check
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Check Your Mutual Fund KYC Validation Status
              </h2>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.65 }}>
                Under recent SEBI guidelines, all mutual fund folios must hold a 'KYC Validated' status with verified PAN and Aadhaar records to prevent transaction freezing.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px' }}>
              {kycPortals.map((item, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(10, 22, 40, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      width: '100%',
                      padding: '9px',
                      fontSize: '13px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    Check Status <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: TAX & GOVERNMENT ESSENTIAL LINKS */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
              <div className="badge-blue" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} /> Tax & Regulatory Portals
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                Essential Government & Institutional Links
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px' }}>
              {taxGovLinks.map((item, idx) => (
                <div key={idx} style={{
                  background: '#F8FAFC',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--primary-blue)',
                      fontWeight: 700,
                      fontSize: '13px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    Visit Official Portal <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: NEED HELP? REQUEST INVESTROW ASSISTANCE */}
        <section style={{
          padding: 'clamp(48px, 6vw, 84px) 0',
          background: 'linear-gradient(135deg, #0A1628 0%, #0F1E36 100%)',
          color: '#FFFFFF'
        }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center'
            }} className="calc-grid">
              
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 106, 19, 0.2)',
                  color: '#FF8A3D',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  <HelpCircle size={13} /> Dedicated Resolution Desk
                </div>

                <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '14px' }}>
                  Facing Issues with KYC, Nominee, or Folio Consolidation?
                </h2>

                <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.65, marginBottom: '24px' }}>
                  If your transaction was halted due to KYC non-compliance, bank mismatch, or missing nominee declaration, our certified AMFI operations team will guide you through resolution.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#22C55E' }} />
                    <span>Free assistance for existing folio health checks</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#22C55E' }} />
                    <span>Direct escalation with CAMS and KFintech RTAs</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#22C55E' }} />
                    <span>Official AMFI MFD (ARN-194720) guidance</span>
                  </div>
                </div>
              </div>

              {/* Service Request Form */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: 'clamp(20px, 4vw, 32px)',
                color: 'var(--navy-deep)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                  Submit a Service Request
                </h3>

                {!submitted ? (
                  <form onSubmit={handleServiceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1.5px solid #E2E8F0',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1.5px solid #E2E8F0',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                        Type of Service Assistance Needed
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1.5px solid #E2E8F0',
                          fontSize: '13px'
                        }}
                      >
                        <option value="Nominee Update / Addition">Nominee Update / Addition</option>
                        <option value="KYC Status Verification / Modification">KYC Status Verification / Modification</option>
                        <option value="Consolidate Multiple Scattered Folios">Consolidate Multiple Scattered Folios</option>
                        <option value="Bank Account / Mandate Update">Bank Account / Mandate Update</option>
                        <option value="Download Statement / Capital Gains">Download Statement / Capital Gains</option>
                        <option value="Other Service Request">Other Service Request</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                        Folio Number or AMC Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. SBI / HDFC Folio"
                        value={folioNumber}
                        onChange={(e) => setFolioNumber(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1.5px solid #E2E8F0',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-orange"
                      style={{ width: '100%', padding: '12px', fontSize: '14px', marginTop: '4px' }}
                    >
                      {loading ? 'Submitting...' : 'Request Service Desk Call ➔'}
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#DCFCE7',
                      color: '#16A34A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px'
                    }}>
                      <CheckCircle2 size={26} />
                    </div>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                      Service Request Received
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '14px' }}>
                      Our operations executive will review your request and contact you at +91 {phone} to guide you.
                    </p>
                    <a
                      href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20have%20an%20investor%20service%20query."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue"
                      style={{ width: '100%', padding: '10px', fontSize: '13px', display: 'inline-flex', justifyContent: 'center' }}
                    >
                      WhatsApp Help Desk
                    </a>
                  </div>
                )}
              </div>

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
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Investor Services Callback')} />
    </div>
  );
}

