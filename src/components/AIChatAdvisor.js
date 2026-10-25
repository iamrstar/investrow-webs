'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, CheckCircle2 } from 'lucide-react';

export default function AIChatAdvisor({ onLeadSubmitted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! 👋 I'm your **Investrow AI Mutual Fund Advisor**. What goal or mutual fund calculation can I assist you with today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userTurnCount, setUserTurnCount] = useState(0);
  const [leadCaptured, setLeadCaptured] = useState(false);

  // Lead capture state inside chat
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const newMessages = [...messages, { role: 'user', content: text.trim() }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    const newCount = userTurnCount + 1;
    setUserTurnCount(newCount);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Apologies, I encountered an issue. You can call our senior advisor directly at +91 91020 70777.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) return;

    const cleanPhone = leadPhone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) return;

    setLeadSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: cleanPhone,
          service: 'Mutual Funds',
          source: 'Website - AI Chatbot',
          stage: 'New',
          callStatus: 'Pending',
          remarks: `Chatbot inquiry: ${messages.filter(m => m.role === 'user').map(m => m.content).join(' | ')}`
        })
      });

      setLeadCaptured(true);
      if (onLeadSubmitted) onLeadSubmitted();
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `Thank you, **${leadName}**! 🎉 Your goal has been registered with our advisory team. One of our certified AMFI advisors will contact you at **+91 ${cleanPhone}** with personalized fund recommendations. Feel free to keep asking questions!`
        }
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLeadSubmitting(false);
    }
  };

  const quickChips = [
    'How much SIP for ₹1 Crore?',
    'Best ELSS tax saving mutual funds',
    'Large cap vs Small cap allocation',
    'How does SWP work for retirement?'
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <div style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 150
      }}>
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 24px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent-orange-gradient)',
              color: 'white',
              boxShadow: '0 12px 32px rgba(255, 106, 19, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
              border: 'none',
              fontWeight: 700,
              fontSize: '15px',
              transition: 'var(--transition-bounce)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="chat-toggle-btn animate-float"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(255, 106, 19, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 106, 19, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)';
            }}
          >
            <Sparkles size={18} />
            <span>AI Wealth Advisor</span>
            <div className="pulse-dot" style={{ background: '#FFFFFF' }} />
          </button>
        ) : null}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="animate-fade-in" style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '390px',
          maxWidth: 'calc(100vw - 32px)',
          height: '600px',
          maxHeight: 'calc(100vh - 48px)',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 24px 64px rgba(10, 22, 40, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 200,
          border: '1px solid rgba(0, 138, 216, 0.15)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 100%)',
            color: 'white',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            {/* Shimmer line */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(0, 138, 216, 0.5), transparent)',
              animation: 'shimmer 3s linear infinite'
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--accent-orange-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 12px rgba(255, 106, 19, 0.4)'
              }}>
                <Bot size={22} />
              </div>
              <div>
                <div style={{ fontSize: '15.5px', fontWeight: 800 }}>Investrow AI Advisor</div>
                <div style={{ fontSize: '11px', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 6px #10B981' }} />
                  AMFI ARN-194720 Powered
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                color: '#E2E8F0', 
                padding: '6px',
                borderRadius: '50%',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages List */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)'
          }}>
            {messages.map((m, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: '8px',
                  animation: 'fadeIn 0.3s ease forwards'
                }}
              >
                {m.role === 'assistant' && (
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                    boxShadow: '0 2px 6px rgba(0, 138, 216, 0.15)'
                  }}>
                    <Bot size={16} />
                  </div>
                )}
                <div style={{
                  maxWidth: '82%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  borderBottomLeftRadius: m.role === 'assistant' ? '4px' : '16px',
                  borderBottomRightRadius: m.role === 'user' ? '4px' : '16px',
                  fontSize: '13.5px',
                  lineHeight: 1.55,
                  background: m.role === 'user' ? 'var(--accent-orange-gradient)' : 'white',
                  color: m.role === 'user' ? 'white' : 'var(--navy-deep)',
                  border: m.role === 'assistant' ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
                  boxShadow: m.role === 'user' ? '0 4px 12px rgba(255, 106, 19, 0.25)' : '0 2px 10px rgba(10, 22, 40, 0.04)',
                  whiteSpace: 'pre-wrap'
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12px', paddingLeft: '36px' }}>
                <span className="pulse-dot" style={{ background: '#0284C7' }}></span> Thinking & calculating returns...
              </div>
            )}

            {/* Progressive Lead Gate Card (Triggers after 2 user questions if not yet captured) */}
            {userTurnCount >= 2 && !leadCaptured && (
              <div className="animate-fade-in" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1.5px solid rgba(255, 106, 19, 0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
                boxShadow: '0 8px 24px rgba(255, 106, 19, 0.1)',
                marginTop: '12px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--accent-orange-gradient)'
                }} />
                
                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                  🎯 Want an Expert to Review This Plan?
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                  Leave your number to save this roadmap and get our top-rated fund picks sent to your WhatsApp.
                </p>
                <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input 
                    type="text"
                    required
                    placeholder="Your Name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '13px',
                      background: '#F8FAFC'
                    }}
                  />
                  <input 
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-Digit WhatsApp Number"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value.replace(/\D/g, ''))}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '13px',
                      background: '#F8FAFC'
                    }}
                  />
                  <button 
                    type="submit"
                    disabled={leadSubmitting}
                    className="btn-orange"
                    style={{ padding: '10px', fontSize: '13.5px', borderRadius: 'var(--radius-md)', marginTop: '4px' }}
                  >
                    {leadSubmitting ? 'Saving...' : 'Save Plan & Connect Advisor 🚀'}
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Chips */}
          <div style={{
            padding: '10px 16px',
            background: 'white',
            borderTop: '1px solid rgba(226, 232, 240, 0.6)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none' /* Firefox */,
            msOverflowStyle: 'none' /* IE and Edge */
          }}>
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                style={{
                  background: 'rgba(241, 245, 249, 0.8)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  color: 'var(--navy-deep)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(224, 242, 254, 0.5)';
                  e.currentTarget.style.borderColor = 'rgba(0, 138, 216, 0.2)';
                  e.currentTarget.style.color = 'var(--primary-blue-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(241, 245, 249, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                  e.currentTarget.style.color = 'var(--navy-deep)';
                }}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div style={{
            padding: '14px 16px',
            background: 'white',
            borderTop: '1px solid rgba(226, 232, 240, 0.6)',
            display: 'flex',
            gap: '10px'
          }}>
            <input 
              type="text"
              placeholder="Ask about SIP, Mutual Funds, ELSS, SWP..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid var(--border-subtle)',
                fontSize: '13.5px',
                background: '#F8FAFC',
                transition: 'var(--transition-smooth)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-blue)';
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 138, 216, 0.08)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = '#F8FAFC';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--accent-orange-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                opacity: (!input.trim() || loading) ? 0.6 : 1,
                boxShadow: '0 4px 12px rgba(255, 106, 19, 0.3)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                if (!loading && input.trim()) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 106, 19, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 106, 19, 0.3)';
              }}
            >
              <Send size={18} style={{ transform: 'translateX(-1px) translateY(1px)' }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
