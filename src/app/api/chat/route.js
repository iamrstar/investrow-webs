import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { messages } = await request.json();
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    const groqApiKey = process.env.GROQ_API_KEY;

    // 1. If Groq API Key is configured, query Groq Cloud
    if (groqApiKey && groqApiKey.trim() !== '') {
      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqApiKey}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              {
                role: 'system',
                content: `You are the Investrow AI Mutual Fund Advisor, representing Investrow Financial Services Pvt. Ltd. (AMFI Registered Mutual Fund Distributor ARN-194720, BSE Member 55533).
Investrow has 23+ years of advisory experience, ₹250+ Cr AUM advised, and serves 3,000+ happy mutual fund investors.
Your company is strictly a specialized Mutual Fund Distributor and advisor.
Services offered: Systematic Investment Plans (SIP), Lumpsum Investment (STP), Tax-Saving ELSS (Section 80C), Equity & Flexi-Cap Funds, Hybrid & Balanced Advantage Funds, Liquid & Debt Funds, Monthly Cashflow via SWP, and Free Portfolio Audit & Rebalancing.
Keep answers concise, actionable, and formatted in 2-3 short bullet points. Always emphasize disciplined long-term investing, rupee cost averaging, and goal planning.
When answering financial calculations (e.g. ₹1 Crore goal, retirement), mention realistic expected returns (e.g. 12% equity CAGR for mutual funds).
Encourage the user to review their exact scheme selection and risk profile with an Investrow AMFI-certified advisor.`
              },
              ...messages
            ],
            temperature: 0.6,
            max_tokens: 450
          })
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply });
          }
        }
      } catch (groqErr) {
        console.warn('Groq API call error, falling back to smart financial advisor engine:', groqErr);
      }
    }

    // 2. Built-in Smart Mutual Fund Rule Engine (Works instantly out of the box)
    const lower = lastUserMessage.toLowerCase();
    let reply = '';

    if (lower.includes('1 crore') || lower.includes('1cr') || lower.includes('one crore')) {
      reply = `To accumulate **₹1 Crore** through Mutual Fund SIPs (assuming a historical 12% annual equity CAGR):

• **In 15 Years:** You need approx. **₹19,800/month**. (Total Invested: ₹35.6 Lakhs | Wealth Gained: ₹64.4 Lakhs)
• **In 10 Years:** You need approx. **₹43,000/month**.
• **With 10% Step-Up SIP:** You can start with just **₹11,500/month** and step it up by 10% every year!

Would you like our certified AMFI advisor to recommend top-quartile diversified funds for this goal?`;
    } else if (lower.includes('50 lakh') || lower.includes('50l') || lower.includes('child')) {
      reply = `For a **₹50 Lakh goal** (e.g., Child Higher Education in 10-12 years):

• **In 10 Years @ 12% CAGR:** Required SIP is approx. **₹21,500/month**. (Total Invested: ₹25.8 Lakhs | Wealth Gain: ₹24.2 Lakhs)
• **In 12 Years @ 12% CAGR:** Required SIP is only **₹15,500/month**.

Starting early reduces your required monthly investment outlay by over 35%! Let our advisor help you set up an automated goal-based SIP.`;
    } else if (lower.includes('swp') || lower.includes('regular income') || lower.includes('monthly income') || lower.includes('retire')) {
      reply = `**Monthly Cashflow via SWP (Systematic Withdrawal Plan):**

• **Predictable Payout:** Set a fixed monthly amount directly credited to your bank account while remaining capital stays invested in equity/hybrid funds.
• **Tax Efficiency:** SWP is far more tax-friendly than bank FD interest, as only the capital gains portion of each withdrawal is taxed.
• **Corpus Longevity:** A recommended 6% to 7% annual withdrawal rate allows your core capital to beat inflation and last for decades.

Would you like a customized SWP cashflow projection for your retirement corpus?`;
    } else if (lower.includes('large cap') || lower.includes('mid cap') || lower.includes('small cap') || lower.includes('flexi cap')) {
      reply = `**Mutual Fund Equity Allocation Strategy:**

• **Large Cap / Flexi Cap (50-60%):** Core foundation providing stability and consistent compounding with top 100 Indian companies.
• **Mid Cap (20-25%):** Growth engine capturing mid-sized champions transitioning into market leaders.
• **Small Cap (15-20%):** High-alpha booster for 7-10+ year horizons with greater risk tolerance.

Our AMFI certified advisors construct a custom scheme basket matching your age, investment horizon, and volatility comfort.`;
    } else if (lower.includes('tax') || lower.includes('80c') || lower.includes('elss')) {
      reply = `**Tax-Saving Mutual Funds (ELSS under Section 80C):**

• **Save Up to ₹46,800 Tax:** Invest up to ₹1.5 Lakh per financial year under Section 80C.
• **Shortest Lock-In Period:** Only **3 years** (compared to 5 years in Tax FDs and 15 years in PPF).
• **Superior Wealth Growth:** Since ELSS invests in diversified equities, historical 5-10 year returns have significantly beaten fixed deposits.

Ready to start an ELSS SIP before the financial year ends? We can set it up 100% paperless in 5 minutes!`;
    } else {
      reply = `Hello! I am your **Investrow AI Mutual Fund Advisor**.

Investrow (AMFI Reg. ARN-194720) helps 3,000+ investors compound wealth with:
• **Goal-Based Monthly SIPs** (Wealth Creation, Retirement, Child Education)
• **Lumpsum & STP Staggered Deployment**
• **Tax-Saving ELSS (Section 80C)**
• **Free Portfolio Health Check & Scheme Rebalancing**

Tell me your target financial goal or monthly savings, and I will calculate your optimal SIP roadmap!`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
