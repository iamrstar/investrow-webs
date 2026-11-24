'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultModal from '@/components/ConsultModal';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import StickyMobileBar from '@/components/StickyMobileBar';
import { 
  BookOpen, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  Coins, 
  Calculator, 
  Percent, 
  Clock, 
  Layers, 
  AlertTriangle, 
  Lightbulb, 
  FileText, 
  ExternalLink,
  Target,
  Zap,
  Award,
  Wallet,
  Compass,
  Briefcase,
  Users,
  PieChart
} from 'lucide-react';

export default function LearnClient() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Learning Advisory Guidance');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedModule, setExpandedModule] = useState('sip-basics');
  const [glossarySearch, setGlossarySearch] = useState('');

  const handleOpenConsultModal = (service = 'Mutual Fund Learning Guidance') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  // 24 Master Learning Modules
  const learningModules = [
    {
      id: 'sip-basics',
      title: 'What is a Systematic Investment Plan (SIP) & How Does It Work?',
      category: 'sip',
      categoryLabel: 'SIP & Compounding',
      readTime: '4 min read',
      badge: 'Essential Beginner',
      snippet: 'Learn how automated monthly investments of as little as ₹500 harness Rupee Cost Averaging and exponential compounding to build multi-crore wealth.',
      fullContent: {
        intro: 'A Systematic Investment Plan (SIP) is a disciplined method of investing a fixed sum of money into a mutual fund scheme at regular intervals (typically monthly). Rather than trying to time the market, an SIP automates your wealth creation directly from your bank account.',
        keyMechanism: [
          {
            title: 'Rupee Cost Averaging',
            desc: 'When markets fall, your fixed monthly installment automatically purchases more mutual fund units at lower NAVs. When markets rise, you purchase fewer units at higher NAVs. Over time, your average purchase cost is significantly lower than the market peak.'
          },
          {
            title: 'Power of Compounding',
            desc: 'Returns earned in year 1 generate additional returns in year 2, and so on. Over 10 to 20 years, the compounding gains heavily outgrow the actual capital invested.'
          },
          {
            title: 'No Need to Time the Market',
            desc: 'Empirical data shows that 90% of retail investors lose money trying to predict market tops and bottoms. An SIP eliminates emotional panic-selling and keeps you disciplined.'
          }
        ],
        example: {
          label: 'Real Numerical Proof',
          calc: 'An investor starting an SIP of ₹10,000/month for 15 years at a benchmark historical equity return of 12% p.a.:',
          invested: '₹18,00,000',
          wealth: '₹50,45,760',
          profit: '₹32,45,760 (Nearly 2.8x invested capital!)'
        },
        takeaways: [
          'Start early — a 5-year delay can cost up to 50% of your potential retirement corpus.',
          'Never stop your SIP during market corrections; crashes are when you accumulate maximum low-cost units.',
          'Automate your SIP deduction on the 1st to 10th of every month right after salary credit.'
        ],
        toolAction: { label: 'Simulate Your SIP on Smart Wealth Calculator', href: '/#calculators' }
      }
    },
    {
      id: 'sip-vs-lumpsum',
      title: 'SIP vs Lumpsum: Which is Better for Mutual Fund Investing?',
      category: 'sip',
      categoryLabel: 'SIP & Compounding',
      readTime: '3 min read',
      badge: 'Strategy Comparison',
      snippet: 'Comparing monthly recurring SIPs versus one-time lump-sum capital deployment. Discover when to use each and how STP bridges the gap.',
      fullContent: {
        intro: 'The dilemma between investing a lump-sum amount (e.g. from a bonus, property sale, or retirement maturity) versus staggering investments via SIP is one of the most common questions investors ask.',
        keyMechanism: [
          {
            title: 'When SIP is Superior',
            desc: 'Ideal for salaried professionals with regular monthly income. It eliminates timing risk and reduces portfolio volatility during volatile or bearish market phases.'
          },
          {
            title: 'When Lumpsum is Superior',
            desc: 'If the broader stock market has corrected significantly (e.g. 15%–25% drawdown), deploying lump-sum capital allows immediate participation in the subsequent recovery.'
          },
          {
            title: 'The STP Solution (Best of Both Worlds)',
            desc: 'If you have a large cash sum today, park it in a safe Liquid / Ultra Short-Term Debt Fund and set up a Systematic Transfer Plan (STP) to transfer fixed sums into Equity Funds over 6 to 12 months.'
          }
        ],
        example: {
          label: 'Comparative Scenario (₹10 Lakh Capital)',
          calc: 'If you invest ₹10 Lakh in a peak market and it drops 10%, your portfolio is down ₹1 Lakh immediately. By using an STP over 12 months, your average purchase price smoothens out, protecting capital while earning 6.5% on the idle liquid portion.',
          invested: '₹10,00,000',
          wealth: 'Smoother journey with lower volatility drag',
          profit: 'Eliminates peak-buying regret'
        },
        takeaways: [
          'Use SIP for monthly savings from salary or business cashflow.',
          'Never deploy 100% of large lump sums into pure mid/small-cap equity at record market highs.',
          'Use Systematic Transfer Plans (STP) over 6–18 months for windfalls, bonuses, or property proceeds.'
        ],
        toolAction: { label: 'Calculate Lumpsum vs SIP Growth', href: '/#calculators' }
      }
    },
    {
      id: 'stepup-sip-multiplier',
      title: 'Step-Up SIP: How a 10% Yearly Increase Multiplies Your Wealth by 2.2x',
      category: 'sip',
      categoryLabel: 'SIP & Compounding',
      readTime: '4 min read',
      badge: 'High Impact Alpha',
      snippet: 'Why keeping your SIP amount flat while your salary increases is a massive missed opportunity. Step-Up SIP is the single fastest way to reach financial freedom.',
      fullContent: {
        intro: 'Most investors start an SIP of ₹10,000/month and leave it unchanged for 10 or 15 years, even though their salary increases by 8% to 15% every year with appraisals and promotions. A Step-Up (or Top-Up) SIP automatically raises your contribution annually.',
        keyMechanism: [
          {
            title: 'Matches Salary & Income Growth',
            desc: 'As your earning power expands, stepping up your monthly savings ensures you do not succumb to lifestyle inflation and idle bank account balances.'
          },
          {
            title: 'Supercharges Compounding',
            desc: 'Because higher installments enter the market in years 2, 3, 4, and beyond, the snowball effect of compounding accelerates exponentially.'
          },
          {
            title: 'Achieves Milestones 5–7 Years Earlier',
            desc: 'A target ₹1 Crore or ₹5 Crore wealth goal that would take 18 years on a flat SIP can often be reached in just 11 to 12 years with a 10% annual step-up.'
          }
        ],
        example: {
          label: 'Flat SIP vs 10% Step-Up SIP (15 Years @ 12% CAGR)',
          calc: 'Starting SIP of ₹10,000/month over 15 years:',
          invested: 'Flat: ₹18 Lakh | Step-Up: ₹38.12 Lakh',
          wealth: 'Flat SIP: ₹50.45 Lakh | Step-Up SIP: ₹89.58 Lakh!',
          profit: '+ ₹39.13 Lakh Extra Wealth with Step-Up'
        },
        takeaways: [
          'Choose an annual step-up of 10% or a fixed amount like +₹1,000/month every year.',
          'Align your Step-Up date with your annual company appraisal month.',
          'Step-Up SIP is the single most powerful tool for early retirement (FIRE) in India.'
        ],
        toolAction: { label: 'Try the Step-Up SIP Simulator', href: '/#calculators' }
      }
    },
    {
      id: 'stp-systematic-transfer',
      title: 'Systematic Transfer Plan (STP): How to Safely Move Money from Debt to Equity',
      category: 'sip',
      categoryLabel: 'SIP & Compounding',
      readTime: '4 min read',
      badge: 'Smart Staggering',
      snippet: 'The ultimate strategy for investing large windfalls, property sale proceeds, or retirement gratuity into equity markets without peak timing risk.',
      fullContent: {
        intro: 'A Systematic Transfer Plan (STP) is an automated mechanism allowing an investor to periodically transfer a fixed amount from one mutual fund scheme (typically a safe Liquid or Ultra Short-Term Debt Fund) to another scheme (usually an Equity Fund) within the same Asset Management Company (AMC).',
        keyMechanism: [
          {
            title: 'Earn While You Wait',
            desc: 'Instead of keeping idle money in a 2.7% savings bank account, parking it in a Liquid Fund yields 6.5% to 7.0% annualized returns on the remaining capital balance while transfers occur.'
          },
          {
            title: 'Shields Against Market Corrections',
            desc: 'By spacing out transfers over 6, 12, or 24 months (weekly or monthly), you effectively turn a large lump sum into an automated SIP, capturing market dips.'
          },
          {
            title: 'Complete Flexibility',
            desc: 'You can pause, stop, or accelerate your STP anytime if markets experience a deep crash and you want to deploy the remainder immediately.'
          }
        ],
        example: {
          label: '₹25 Lakh Property Proceeds Deployed via STP',
          calc: 'Investing ₹25 Lakh via 12-month STP into a Flexi-Cap Equity Fund:',
          invested: '₹25,00,000 parked in Liquid Fund',
          wealth: 'Monthly transfer: ~₹2,08,333 to Equity',
          profit: 'Liquid fund generates ~₹85,000 extra yield while equity units are cost-averaged!'
        },
        takeaways: [
          'For amounts up to ₹10 Lakh: Use a 6-month STP.',
          'For amounts between ₹10 Lakh and ₹50 Lakh: Use a 12-to-18-month STP.',
          'Each STP transfer is technically a redemption from the source fund and subject to capital gains tax rules.'
        ],
        toolAction: { label: 'Plan Your STP Strategy with Our Team', href: '/#contact' }
      }
    },
    {
      id: 'fire-movement-india',
      title: 'The FIRE Movement in India: How to Calculate Your Financial Freedom Number & Retire at 45',
      category: 'sip',
      categoryLabel: 'SIP & Compounding',
      readTime: '6 min read',
      badge: 'Financial Independence',
      snippet: 'The exact mathematical formula for Financial Independence, Retire Early (FIRE) tailored for Indian inflation, healthcare costs, and compounding portfolios.',
      fullContent: {
        intro: 'The FIRE (Financial Independence, Retire Early) movement is rapidly gaining popularity among Indian professionals in their 20s and 30s. Being "FIRE" doesn’t mean never working again — it means work becomes completely optional because your investment portfolio generates all your living expenses.',
        keyMechanism: [
          {
            title: 'The 25x–30x Rule Adjusted for Indian Inflation',
            desc: 'While the US uses the 25x rule (4% withdrawal rate), Indian financial realities (higher 5%–6% inflation) dictate a target corpus of 30x to 35x your annual family living expenses.'
          },
          {
            title: 'The 3-Bucket Portfolio Strategy',
            desc: 'Bucket 1 (Years 1–3): Liquid & Arbitrage funds for immediate cashflow. Bucket 2 (Years 4–7): Hybrid & Short-Duration debt. Bucket 3 (Year 8+): Equity funds to beat long-term inflation.'
          },
          {
            title: 'Savings Rate is the True Accelerator',
            desc: 'If you save and invest 50% of your take-home income, you can achieve financial independence in approximately 15 to 17 years, regardless of your absolute salary.'
          }
        ],
        example: {
          label: 'FIRE Calculation for a Family Spending ₹1 Lakh/Month',
          calc: 'Annual Living Expenses: ₹12,00,000',
          invested: '30x Target FIRE Corpus: ₹3,60,00,000 (₹3.6 Crore)',
          wealth: 'Monthly SIP Needed (15 years @ 12%): ~₹71,000/month',
          profit: 'With 10% annual Step-Up, the required starting SIP drops to just ₹38,000/month!'
        },
        takeaways: [
          'Calculate your baseline annual living expenses excluding EMIs that will end before retirement.',
          'Factor in separate standalone health insurance (₹25L–₹50L super top-up) outside employer coverage.',
          'Transition your equity corpus into an SWP portfolio when you hit your FIRE number.'
        ],
        toolAction: { label: 'Simulate Your Target Goal on Our Calculator', href: '/#calculators' }
      }
    },
    {
      id: 'goal-based-investing',
      title: 'Goal-Based Investing: Mapping Mutual Funds to Child Education, Marriage & Home Purchase',
      category: 'sip',
      categoryLabel: 'SIP & Compounding',
      readTime: '5 min read',
      badge: 'Milestone Roadmap',
      snippet: 'Why treating all money as one generic pool leads to failure. How to partition your portfolio into distinct short, medium, and long-term milestones.',
      fullContent: {
        intro: 'Goal-based investing is the science of attaching every mutual fund SIP to a tangible life milestone with a defined timeline and expected future cost (adjusted for education and real estate inflation).',
        keyMechanism: [
          {
            title: 'Short-Term Goals (< 3 Years: Vacation, Car Down Payment)',
            desc: 'Zero equity exposure! Capital preservation is paramount. Use Ultra Short Duration, Low Duration, or Arbitrage Funds where capital is completely protected from stock market swings.'
          },
          {
            title: 'Medium-Term Goals (3 to 7 Years: Home Down Payment)',
            desc: 'Moderate equity exposure (35%–65%). Balanced Advantage Funds (BAF) or Multi-Asset Allocation Funds that blend equity, debt, and gold.'
          },
          {
            title: 'Long-Term Goals (8+ Years: Child Higher Education & Retirement)',
            desc: 'Aggressive equity growth (75%–100%). Flexi-Cap, Mid-Cap, and Small-Cap Funds that easily beat 10% education inflation over decade-long horizons.'
          }
        ],
        example: {
          label: 'Child Higher Education Goal (15 Years Away)',
          calc: 'Engineering/MBA cost today: ₹20 Lakh. At 10% education inflation, cost in 15 years = ~₹83.5 Lakh.',
          invested: 'Target Corpus: ₹83,50,000',
          wealth: 'Monthly SIP Required (@ 12.5% CAGR): ~₹16,500/month',
          profit: 'De-risk into debt funds 2 years before college admission!'
        },
        takeaways: [
          'Never invest money needed within 3 years into equity or hybrid funds.',
          'Always use a 10% inflation rate for higher education and healthcare goals.',
          'Follow the "Glide Path": shift 20% of the corpus to liquid funds every year starting 3 years before the milestone.'
        ],
        toolAction: { label: 'Map Your Milestones on Wealth Creation Desk', href: '/wealth-creation' }
      }
    },
    {
      id: 'elss-tax-saving',
      title: 'Tax-Saving with ELSS: Save up to ₹46,800 Tax Under Section 80C',
      category: 'tax',
      categoryLabel: 'Taxation & ELSS',
      readTime: '4 min read',
      badge: 'Section 80C',
      snippet: 'Why Equity Linked Savings Schemes (ELSS) outperform traditional PPF, NSC, and Life Insurance policies with the shortest 3-year lock-in and high equity growth.',
      fullContent: {
        intro: 'Equity Linked Savings Scheme (ELSS) is a diversified equity mutual fund that offers tax deduction under Section 80C of the Income Tax Act up to ₹1,50,000 per financial year. It is universally regarded as the smartest tax-saving instrument under the old tax regime.',
        keyMechanism: [
          {
            title: 'Shortest Lock-In Period (Just 3 Years)',
            desc: 'Compare 3 years of ELSS against 5 years for Tax-Saving Bank FDs, 5 years for National Savings Certificate (NSC), and 15 years for Public Provident Fund (PPF).'
          },
          {
            title: 'Equity Market Growth Potential',
            desc: 'Unlike PPF (fixed ~7.1%) or Bank FDs (6%–7% taxable), ELSS invests at least 80% in equities, historically delivering 12%–15% annualized returns over 5+ year horizons.'
          },
          {
            title: 'SIP Flexibility for Tax Planning',
            desc: 'Instead of rushing to invest ₹1.5 Lakh in March, you can start an SIP of ₹12,500/month from April to March, making tax saving painless and disciplined.'
          }
        ],
        example: {
          label: '10-Year Wealth Comparison: ELSS vs PPF (₹1.5 Lakh/Year)',
          calc: 'Investing ₹1.5 Lakh annually for 10 years (Total Invested: ₹15 Lakh):',
          invested: '₹15,00,000',
          wealth: 'PPF (@ 7.1%): ~₹21.6 Lakh | ELSS (@ 13% CAGR): ~₹31.2 Lakh',
          profit: 'ELSS generates nearly ₹10 Lakh extra wealth while giving identical tax deductions!'
        },
        takeaways: [
          'Under the 30% tax bracket, investing ₹1.5 Lakh in ELSS saves ₹46,800 in income tax annually.',
          'Each monthly SIP installment in ELSS has its own 3-year lock-in from the date of allotment.',
          'You do not have to redeem after 3 years; keeping it invested for 7–10 years compounds maximum wealth.'
        ],
        toolAction: { label: 'Explore ELSS Mutual Fund Options', href: '/#services' }
      }
    },
    {
      id: 'mutual-fund-taxation-2026',
      title: 'Mutual Fund Taxation Rules (Latest STCG & LTCG Rates Explained)',
      category: 'tax',
      categoryLabel: 'Taxation & ELSS',
      readTime: '5 min read',
      badge: 'Tax Law Update',
      snippet: 'Clear, straightforward guide to the updated capital gains tax rates on equity mutual funds, debt funds, hybrid funds, and the ₹1.25 Lakh annual LTCG exemption.',
      fullContent: {
        intro: 'Understanding how mutual fund gains are taxed ensures you keep the maximum amount of money in your pocket. The Union Budget updated capital gains tax rules across equity and debt mutual funds.',
        keyMechanism: [
          {
            title: 'Equity Mutual Funds: Long Term (LTCG)',
            desc: 'Holding period greater than 12 months. Gains up to ₹1,25,000 per financial year are 100% TAX-FREE! Gains exceeding ₹1.25 Lakh are taxed at a flat rate of 12.5% (without indexation).'
          },
          {
            title: 'Equity Mutual Funds: Short Term (STCG)',
            desc: 'Holding period of 12 months or less. Gains are taxed at a flat rate of 20% (plus applicable surcharge and cess).'
          },
          {
            title: 'Debt & Money Market Funds',
            desc: 'For debt mutual funds purchased after April 1, 2023 with equity allocation below 35%, capital gains are taxed as per your individual Income Tax slab rates, regardless of the holding duration.'
          }
        ],
        example: {
          label: 'Practical Equity LTCG Calculation',
          calc: 'Suppose you invested ₹10 Lakh in equity mutual funds and redeemed it after 3 years for ₹13 Lakh. Your total capital gain is ₹3 Lakh.',
          invested: '₹10,00,000',
          wealth: 'Exempt portion: ₹1,25,000 | Taxable portion: ₹1,75,000',
          profit: 'Tax Payable: 12.5% of ₹1,75,000 = ₹21,875 (Net post-tax return: ₹2,78,125)'
        },
        takeaways: [
          'Utilize your ₹1.25 Lakh tax-free LTCG exemption every financial year by rebalancing your portfolio.',
          'Switching from one scheme to another (e.g. Regular to Direct, or Growth to IDCW) triggers a taxable redemption event.',
          'Dividends (IDCW) are added to your total income and taxed at your applicable slab rate.'
        ],
        toolAction: { label: 'Book a Portfolio Tax Audit With Us', href: '/#contact' }
      }
    },
    {
      id: 'arbitrage-funds-explained',
      title: 'Arbitrage Funds: Zero Equity Risk with 100% Equity Taxation Benefits',
      category: 'tax',
      categoryLabel: 'Taxation & ELSS',
      readTime: '4 min read',
      badge: 'Tax Hack',
      snippet: 'How Arbitrage Funds exploit price differentials between cash and futures markets to deliver 7%–8% returns with low 12.5% LTCG tax instead of 30% slab rate.',
      fullContent: {
        intro: 'For investors in the 20% or 30% tax brackets looking to park money for 6 months to 2 years, traditional Bank FDs and Debt Funds are heavily penalized by high slab-rate taxation. Arbitrage Funds solve this problem completely.',
        keyMechanism: [
          {
            title: 'Zero Market Directional Risk',
            desc: 'Arbitrage funds buy a stock in the cash market (e.g. Infosys at ₹1,500) and simultaneously sell identical shares in the futures market (at ₹1,508). The ₹8 spread is locked in as risk-free profit upon monthly expiry!'
          },
          {
            title: 'Treated as Equity for Taxation',
            desc: 'Because the fund holds at least 65% in equities (simultaneously hedged), Indian tax law classifies it as an Equity Oriented Mutual Fund!'
          },
          {
            title: 'LTCG at 12.5% (or 20% STCG) vs 30% Slab',
            desc: 'If held for over 12 months, your gains enjoy the ₹1.25 Lakh exemption, and any excess is taxed at just 12.5%, compared to 30%+ on Bank FDs.'
          }
        ],
        example: {
          label: 'Post-Tax Return on ₹10 Lakh (30% Tax Bracket)',
          calc: 'Comparing 1-Year Parking in Bank FD vs Arbitrage Fund:',
          invested: 'Bank FD (@ 7.0%): Pre-tax ₹70k -> Post-tax: ₹48,300 (Net 4.83%)',
          wealth: 'Arbitrage Fund (@ 7.2%): Pre-tax ₹72k -> Covered by ₹1.25L LTCG exemption!',
          profit: 'Arbitrage gives ~₹23,700 MORE post-tax money on ₹10 Lakh!'
        },
        takeaways: [
          'Ideal for parking surplus business cash, advance tax money, or waiting for property registration.',
          'Recommended investment horizon: 3 months to 2 years.',
          'Zero credit risk because trades are guaranteed and cleared by stock exchanges (NSE/BSE).'
        ],
        toolAction: { label: 'Ask About Arbitrage Fund Strategies', href: '/#contact' }
      }
    },
    {
      id: 'swp-monthly-cashflow',
      title: 'Systematic Withdrawal Plan (SWP): Create Your Own Monthly Paycheck',
      category: 'retirement',
      categoryLabel: 'Retirement & SWP',
      readTime: '4 min read',
      badge: 'Retirement Hero',
      snippet: 'How retirees and high-net-worth investors use SWP to generate stable, tax-friendly monthly cashflow while letting the principal corpus continue compounding.',
      fullContent: {
        intro: 'A Systematic Withdrawal Plan (SWP) is the exact reverse of an SIP. Instead of investing money every month, you withdraw a pre-determined fixed sum from your accumulated mutual fund corpus into your bank account on a chosen date each month.',
        keyMechanism: [
          {
            title: 'Predictable Monthly Cashflow',
            desc: 'Acts just like a monthly salary or pension for retirees, freelance professionals, or individuals seeking passive income to cover monthly family living expenses.'
          },
          {
            title: 'Far Superior Tax Efficiency than Bank FDs',
            desc: 'In a bank FD, 100% of the interest is taxed at your income slab rate (up to 30%+). In an SWP, each withdrawal is treated as a mix of principal return and capital gains. Only the capital gains portion is taxed at the lower 12.5% LTCG rate!'
          },
          {
            title: 'Corpus Continues Growing',
            desc: 'If your remaining balance earns 10%–12% CAGR in a Hybrid or Conservative Equity Fund and you only withdraw 6%–7% annually, your capital continues expanding over time!'
          }
        ],
        example: {
          label: 'SWP vs Fixed Deposit on ₹50 Lakh Corpus',
          calc: 'Withdrawing ₹35,000/month (₹4.2 Lakh/year) from a ₹50 Lakh corpus in a Balanced Hybrid Fund earning 10% CAGR over 10 years:',
          invested: 'Initial Corpus: ₹50,00,000',
          wealth: 'Total Cashflow Withdrawn: ₹42,00,000',
          profit: 'Estimated Remaining Corpus: Over ₹68,00,000 still in the fund!'
        },
        takeaways: [
          'Aim for a safe withdrawal rate between 6% and 8% of your initial corpus to prevent capital depletion.',
          'Ideal mutual fund categories for SWP include Balanced Advantage / Dynamic Asset Allocation and Multi-Asset Funds.',
          'Unlike annuities that lock your money forever, with an SWP your entire remaining capital remains 100% liquid anytime.'
        ],
        toolAction: { label: 'Test the Interactive SWP Cashflow Calculator', href: '/#calculators' }
      }
    },
    {
      id: 'nps-tier1-tier2-guide',
      title: 'National Pension System (NPS): Tier 1 vs Tier 2 & Exclusive Tax Benefits',
      category: 'retirement',
      categoryLabel: 'Retirement & SWP',
      readTime: '4 min read',
      badge: 'Section 80CCD',
      snippet: 'Everything about National Pension System (NPS): opening PRAN, claiming the exclusive ₹50,000 tax deduction, choosing between Active and Auto choice, and retirement withdrawal.',
      fullContent: {
        intro: 'The National Pension System (NPS) is a government-sponsored, PFRDA-regulated pension scheme designed to provide retirement income through disciplined market-linked compounding across Equity (E), Corporate Bonds (C), and Government Securities (G).',
        keyMechanism: [
          {
            title: 'Exclusive ₹50,000 Tax Deduction (80CCD 1B)',
            desc: 'NPS offers an exclusive tax deduction of up to ₹50,000 under Section 80CCD(1B) that is completely OVER AND ABOVE the ₹1.5 Lakh limit under Section 80C. This alone saves ₹15,600 in tax for 30% bracket earners.'
          },
          {
            title: 'Tier 1 vs Tier 2 Accounts',
            desc: 'Tier 1 is the mandatory retirement account with tax benefits and lock-in till age 60. Tier 2 is a voluntary open-ended investment account with no lock-in and anytime withdrawals, but no tax deduction.'
          },
          {
            title: 'Maturity Rules at Age 60',
            desc: 'At retirement, 60% of your accumulated corpus can be withdrawn as a 100% TAX-FREE lump sum. The remaining 40% is utilized to purchase an annuity (monthly pension) from a life insurer.'
          }
        ],
        example: {
          label: 'NPS Tax Savings Breakdown (30% Bracket)',
          calc: 'An employee contributing to NPS:',
          invested: '₹50,00,00 Annual Contribution to Tier-1',
          wealth: 'Instant Tax Savings: ₹15,600 every year',
          profit: 'Your effective investment cost is just ₹34,400 for a ₹50,000 retirement asset!'
        },
        takeaways: [
          'Open your PRAN account online with Investrow assistance in under 15 minutes.',
          'For investors under 45, choose Active Choice with 75% Equity (E) allocation for maximum growth.',
          'Corporate employees can get up to 10% of basic salary contributed by employers under Section 80CCD(2) with zero cap!'
        ],
        toolAction: { label: 'Read Our Complete NPS Jharkhand Guide', href: '/nps-consultant-in-jharkhand' }
      }
    },
    {
      id: 'asset-class-showdown',
      title: 'Mutual Funds vs Real Estate vs Gold vs Fixed Deposit: The 20-Year Showdown',
      category: 'retirement',
      categoryLabel: 'Retirement & SWP',
      readTime: '6 min read',
      badge: 'Data-Backed Study',
      snippet: 'Comparing long-term returns, liquidity, inflation-beating capability, transaction friction, and taxation across India’s 4 favorite asset classes.',
      fullContent: {
        intro: 'Traditional Indian households historically parked wealth in physical real estate, physical gold jewellery, and bank fixed deposits. How do they compare against diversified mutual funds over a 15-to-20-year horizon?',
        keyMechanism: [
          {
            title: 'Equity Mutual Funds (~12%–14% Historical CAGR)',
            desc: 'Highest liquidity (T+2 redemptions), zero tenant hassles, low transaction costs, transparent daily NAV, automated SIP discipline, beat 6% inflation by 6%–8% net.'
          },
          {
            title: 'Physical Real Estate (~7%–9% Net CAGR)',
            desc: 'Illiquid (takes 6–18 months to sell), high ticket size, property maintenance, tenant disputes, stamp duty & registration friction (6%–8%), black money component.'
          },
          {
            title: 'Gold (~8%–10% CAGR / Sovereign Gold Bonds)',
            desc: 'Excellent hedge against currency depreciation and geopolitical crisis. However, physical gold carries making charges (8%–15%) and theft risk. Gold Mutual Funds or ETFs eliminate storage friction.'
          },
          {
            title: 'Bank Fixed Deposits (~6.5%–7% Pre-Tax)',
            desc: 'Safe nominal capital, but guaranteed real wealth destruction! After 30% tax, a 7% FD yields ~4.9%, lagging 6% inflation by 1.1% annually.'
          }
        ],
        example: {
          label: '₹10 Lakh Invested Over 20 Years (2004–2024)',
          calc: 'Historical performance of ₹10 Lakh deployed in 2004:',
          invested: 'Bank FD (@ 7% post-tax): ~₹38.7 Lakh | Gold: ~₹62.5 Lakh',
          wealth: 'Real Estate (Tier-1 avg): ~₹68 Lakh - ₹80 Lakh',
          profit: 'Nifty 50 Index Fund (@ 14.2% CAGR): Over ₹1.42 CRORE!'
        },
        takeaways: [
          'Keep your primary residence, but avoid speculative multi-property real estate debt.',
          'Allocate 5% to 10% of portfolio to Sovereign Gold Bonds or Gold ETFs for insurance.',
          'Rely on Equity Mutual Funds for your primary wealth compounding engine.'
        ],
        toolAction: { label: 'Explore Goal Based Wealth Creation', href: '/wealth-creation' }
      }
    },
    {
      id: 'fund-categories-explained',
      title: 'Mutual Fund Categories Explained: Large-Cap, Mid-Cap, Small-Cap & Flexi-Cap',
      category: 'categories',
      categoryLabel: 'Fund Categories',
      readTime: '5 min read',
      badge: 'Asset Allocation',
      snippet: 'Decoding SEBI market cap categories to build an all-weather portfolio that maximizes returns while managing downside volatility.',
      fullContent: {
        intro: 'SEBI categorizes all listed Indian companies by market capitalization into three distinct buckets. Understanding where your fund invests is the key to managing risk and avoiding unpleasant surprises during market corrections.',
        keyMechanism: [
          {
            title: 'Large-Cap Funds (Top 100 Companies)',
            desc: 'Industry giants like Reliance, TCS, HDFC Bank, Infosys. Highest stability, lowest volatility, steady dividend payouts. Ideal for conservative investors and core portfolio foundation.'
          },
          {
            title: 'Mid-Cap Funds (Companies Ranked 101 to 250)',
            desc: 'Fast-growing market leaders with established business models. Higher return potential than large-caps with moderate volatility. Ideal for 7+ year horizons.'
          },
          {
            title: 'Small-Cap Funds (Companies Ranked 251 and Beyond)',
            desc: 'High-growth emerging businesses. Can deliver multibagger 20%+ returns in bull markets, but experience steep 25%–35% corrections in market downturns. Requires a strict 10+ year horizon.'
          },
          {
            title: 'Flexi-Cap & Multi-Cap Funds (Dynamic Mix)',
            desc: 'The fund manager has complete freedom to shift capital dynamically across large, mid, and small-caps depending on economic cycles and market valuations.'
          }
        ],
        example: {
          label: 'The Golden Core-and-Satellite Portfolio Rule',
          calc: 'For an average 30-to-45-year-old investor with a 10-year horizon, our recommended AMFI allocation:',
          invested: 'Core (Stability): 50% Flexi-Cap & Large-Cap Funds',
          wealth: 'Growth (Alpha): 30% Mid-Cap Compounders',
          profit: 'High Alpha (Aggressive): 20% Small-Cap Discovery Funds'
        },
        takeaways: [
          'Never put 100% of your money into small-cap funds after a massive 1-year bull run.',
          'A Flexi-Cap fund is the single best foundation fund for 80% of Indian retail investors.',
          'Rebalance your allocation annually: trim overheated categories and reinvest in underperforming ones.'
        ],
        toolAction: { label: 'Get a Custom Portfolio Asset Allocation', href: '/#contact' }
      }
    },
    {
      id: 'active-vs-passive-funds',
      title: 'Active vs Passive (Index) Funds: When to Buy Nifty 50 and When Active Funds Win',
      category: 'categories',
      categoryLabel: 'Fund Categories',
      readTime: '5 min read',
      badge: 'Index vs Active',
      snippet: 'Why large-cap active funds struggle to beat Nifty 50 index funds, while active fund managers generate massive 4%–6% alpha in mid and small-cap stocks.',
      fullContent: {
        intro: 'Passive index investing replicates benchmark indexes (like Nifty 50 or Sensex) at rock-bottom expense ratios (0.1%–0.3%). Active funds employ professional research teams attempting to beat the index. Which should you choose?',
        keyMechanism: [
          {
            title: 'Large-Cap Category (Go Passive / Index)',
            desc: 'Top 100 companies are heavily researched by institutional analysts. Generating excess return (alpha) is very difficult. Over 70% of active large-cap funds fail to beat the Nifty 50 index after fees. An Index Fund or Nifty 50 ETF is ideal here.'
          },
          {
            title: 'Mid-Cap & Small-Cap Categories (Go Active)',
            desc: 'Beyond the top 100 stocks, the Indian market is inefficient with limited institutional analyst coverage. Skilled active fund managers routinely generate 3% to 6% annual alpha over the Nifty Midcap and Smallcap benchmarks!'
          },
          {
            title: 'The Smart Hybrid Solution',
            desc: 'Pair low-cost Nifty 50 Index funds for core stability with top-performing active Flexi-Cap, Mid-Cap, and Small-Cap funds for high alpha generation.'
          }
        ],
        example: {
          label: 'Alpha Value in Small-Caps (10-Year Study)',
          calc: 'Over a 10-year period, top active small-cap funds delivered 21%–23% CAGR compared to 15.5% for the Smallcap 250 Index. That 6% annual difference turns a ₹10,000 SIP into ₹30+ Lakh of EXTRA wealth!',
          invested: 'Active Research Generates Real Alpha in Broad Markets',
          wealth: 'Index Funds provide low-cost anchor for Large-Caps',
          profit: 'A balanced barbell approach delivers superior risk-adjusted returns'
        },
        takeaways: [
          'For pure Large-Cap exposure: Choose Nifty 50 Index Fund or Nifty Next 50.',
          'For Mid-Cap and Small-Cap exposure: Choose top-quartile Active Mutual Funds.',
          'Evaluate tracking error when picking index funds; low tracking error (< 0.2%) is vital.'
        ],
        toolAction: { label: 'Explore High-Alpha Portfolios', href: '/#calculators' }
      }
    },
    {
      id: 'balanced-advantage-funds',
      title: 'Hybrid & Balanced Advantage Funds (BAF): Dynamic Asset Allocation for Volatile Markets',
      category: 'categories',
      categoryLabel: 'Fund Categories',
      readTime: '4 min read',
      badge: 'All-Weather Fund',
      snippet: 'How Balanced Advantage Funds automatically sell equity at market peaks and buy equity during market dips using proprietary valuation models.',
      fullContent: {
        intro: 'Balanced Advantage Funds (also called Dynamic Asset Allocation Funds) are mutual funds that dynamically adjust their equity and debt allocation between 30% and 80% based on market valuations (P/E, P/B ratios, and trailing dividend yields).',
        keyMechanism: [
          {
            title: 'Automated Counter-Cyclical Rebalancing',
            desc: 'When markets become expensive and overheated, the algorithm automatically trims equity and moves to debt/arbitrage. When markets crash and become cheap, it aggressively buys equity.'
          },
          {
            title: 'Eliminates Investor Anxiety',
            desc: 'During brutal market corrections (e.g. 2008, 2020), pure equity funds crashed 30%–35%. Balanced Advantage Funds fell only 10%–12%, allowing nervous investors to sleep peacefully.'
          },
          {
            title: 'Equity Taxation Retained',
            desc: 'By using arbitrage derivative hedges to keep gross equity above 65%, these funds qualify for 12.5% LTCG equity tax status, rather than high debt tax slab rates!'
          }
        ],
        example: {
          label: 'Drawdown Protection in Action',
          calc: 'In a 20% equity market correction, an investor with ₹25 Lakh in a BAF experiences only a ~₹2.5 Lakh dip versus a ₹5 Lakh loss in pure equity, while recovering to new highs much faster.',
          invested: 'Protects Downside Capital',
          wealth: 'Delivers 10%–12% long-term compounded CAGR',
          profit: 'Ideal vehicle for first-time investors & retirees'
        },
        takeaways: [
          'Perfect category for first-time mutual fund investors terrified of market volatility.',
          'Best mutual fund category for Systematic Withdrawal Plans (SWP) for retirees.',
          'Look at fund house models: some use P/E based models (HDFC, ICICI Pru), others use trend-following models (Edelweiss).'
        ],
        toolAction: { label: 'Consult Us on Balanced Advantage Portfolios', href: '/#contact' }
      }
    },
    {
      id: 'debt-funds-demystified',
      title: 'Debt Mutual Funds Demystified: Overnight, Liquid, Corporate Bond & Gilt Funds',
      category: 'categories',
      categoryLabel: 'Fund Categories',
      readTime: '5 min read',
      badge: 'Fixed Income Safety',
      snippet: 'Everything about fixed-income mutual funds: credit risk, duration risk, interest rate cycles, and choosing between liquid vs gilt funds.',
      fullContent: {
        intro: 'Debt mutual funds invest in fixed-income securities like Government Securities (G-Secs), Treasury Bills, Corporate Bonds, and Certificates of Deposit. They provide capital stability and regular yield without stock market volatility.',
        keyMechanism: [
          {
            title: 'Understanding Duration Risk (Interest Rate Sensitivity)',
            desc: 'Bond prices and interest rates move in opposite directions! When the Reserve Bank of India (RBI) cuts rates, existing bond prices rise, boosting Gilt fund NAVs. When RBI hikes rates, longer-duration funds face short-term headwinds.'
          },
          {
            title: 'Understanding Credit Risk',
            desc: 'Always stick to AAA-rated corporate bond funds and Sovereign (Government) paper. Avoid chasing extra 1% yield in credit risk funds that hold lower-rated debt.'
          },
          {
            title: 'Choosing Based on Investment Horizon',
            desc: 'Up to 7 days: Overnight Funds. 7 to 90 days: Liquid Funds. 3 to 12 months: Ultra Short / Money Market Funds. 1 to 3 years: Short Duration & Banking/PSU Funds.'
          }
        ],
        example: {
          label: 'RBI Rate Cut Cycle Strategy',
          calc: 'During an RBI monetary easing cycle (rate cuts), Gilt Funds can deliver 10%–12% equity-like returns in a single year due to capital appreciation of long-dated government bonds.',
          invested: 'Sovereign Safety with Zero Default Risk',
          wealth: 'Capture capital appreciation in falling rate regimes',
          profit: 'Ideal portfolio diversifier alongside equity SIPs'
        },
        takeaways: [
          'Never invest in Credit Risk funds for fixed-income safety.',
          'Match your investment tenure precisely to the Macaulay duration of the debt fund.',
          'Banking & PSU Debt Funds and Corporate Bond Funds are the safest core holdings for conservative capital.'
        ],
        toolAction: { label: 'Explore Debt & Fixed Income Allocation', href: '/#services' }
      }
    },
    {
      id: 'how-to-select-funds',
      title: 'How to Choose the Best Mutual Fund Scheme: The 5-Point AMFI Selection Framework',
      category: 'basics',
      categoryLabel: 'Basics & Strategy',
      readTime: '6 min read',
      badge: 'Advisor Methodology',
      snippet: 'Move beyond simplistic star ratings. How certified AMFI advisors evaluate rolling returns, downside capture, fund manager tenure, and portfolio overlap.',
      fullContent: {
        intro: 'Over 85% of retail investors pick funds solely based on 1-year trailing returns or online star ratings. This "rearview mirror" approach often leads to buying funds right before a period of severe underperformance. Here is the verified 5-point AMFI framework.',
        keyMechanism: [
          {
            title: '1. 3-Year & 5-Year Rolling Returns (Not Trailing)',
            desc: 'Point-to-point trailing returns are biased by arbitrary start/end dates. Rolling returns test a fund’s performance across 1,000+ continuous overlapping periods, proving whether outperformance is consistent or just lucky timing.'
          },
          {
            title: '2. Downside Capture Ratio (< 80%)',
            desc: 'Measures how much the fund falls when the benchmark index drops. A downside capture ratio of 75% means when the index crashes 10%, the fund only falls 7.5%. Great funds win by losing less in bear markets.'
          },
          {
            title: '3. Fund Manager Pedigree & Style Consistency',
            desc: 'Check if the current fund manager has managed the scheme for at least 5 years through multiple bull and bear cycles, and whether they stick to their defined mandate without style drift.'
          },
          {
            title: '4. Portfolio Concentration & Quality of Holdings',
            desc: 'Inspect the top 10 stock holdings. Are they fundamentally solid businesses with high Return on Equity (ROE) and clean balance sheets, or speculative momentum plays?'
          },
          {
            title: '5. Portfolio Overlap Across Schemes',
            desc: 'If Fund A and Fund B share 60% of the exact same stocks, buying both gives zero diversification. Use portfolio overlap analysis to hold truly distinct schemes.'
          }
        ],
        example: {
          label: 'The Downside Protection Advantage',
          calc: 'Fund X and Fund Y both average 14% in bull years. But in bear years, Fund X falls 25% while Fund Y falls only 12%. Over 10 years, Fund Y ends up with over 40% MORE total wealth due to the compounding math of lower drawdowns!',
          invested: 'Downside Capture Ratio is the Real Holy Grail',
          wealth: 'Consistency beats short-term fireworks',
          profit: 'Investrow audits 44 AMCs against this exact framework'
        },
        takeaways: [
          'Never pick a fund based only on last year’s 50% bull-market return.',
          'Verify that portfolio overlap across your entire fund basket is below 30%.',
          'Have your portfolio audited annually by an AMFI Registered MFD (ARN-194720).'
        ],
        toolAction: { label: 'Request a Free 5-Point Portfolio Audit', href: '/#contact' }
      }
    },
    {
      id: 'reading-mutual-fund-factsheets',
      title: 'Understanding Mutual Fund Factsheets: Portfolio P/E, Standard Deviation & Sharpe Ratio',
      category: 'basics',
      categoryLabel: 'Basics & Strategy',
      readTime: '5 min read',
      badge: 'Data Literacy',
      snippet: 'How to read a monthly mutual fund factsheet like a seasoned research analyst in under 5 minutes.',
      fullContent: {
        intro: 'Every month, every mutual fund house publishes a detailed factsheet detailing portfolio holdings, sector allocation, fund manager notes, and risk ratios. Learning to interpret these 4 key ratios gives you total clarity.',
        keyMechanism: [
          {
            title: 'Portfolio P/E (Price to Earnings Ratio)',
            desc: 'Indicates the valuation of stocks held in the portfolio. A P/E above 40 indicates growth/momentum orientation; a P/E below 25 indicates value/contrarian orientation.'
          },
          {
            title: 'Standard Deviation (Volatility)',
            desc: 'Measures how widely the fund’s monthly returns deviate from its historical average. Lower standard deviation within the same category means a smoother, less volatile ride for the investor.'
          },
          {
            title: 'Sharpe Ratio (Risk-Adjusted Return)',
            desc: 'Calculates how much excess return the fund generated for every unit of total risk taken. A Sharpe ratio higher than the benchmark index means the fund manager genuinely added value.'
          },
          {
            title: 'Portfolio Turnover Ratio',
            desc: 'A turnover of 20% means the manager replaces only 1/5th of the portfolio annually (buy-and-hold). A turnover above 100% means the manager actively churns stocks, which increases trading costs.'
          }
        ],
        example: {
          label: 'Comparing Two Large-Cap Schemes',
          calc: 'Scheme A (Sharpe: 0.85, Std Dev: 13.2%) vs Scheme B (Sharpe: 0.45, Std Dev: 17.8%):',
          invested: 'Scheme A generates higher returns with much lower volatility',
          wealth: 'Scheme B takes unnecessary risks without compensating returns',
          profit: 'Scheme A is the clear institutional winner'
        },
        takeaways: [
          'Always compare risk ratios within the SAME SEBI category (never compare small-cap Sharpe with large-cap).',
          'High Sharpe Ratio + Low Standard Deviation = Best risk-adjusted fund.',
          'Check sector concentration: no single sector should exceed 25% of the portfolio.'
        ],
        toolAction: { label: 'Download Scheme Master Data', href: '/downloads' }
      }
    },
    {
      id: 'direct-vs-regular-funds',
      title: 'Direct vs Regular Mutual Funds: The Hidden Truth for Investors',
      category: 'basics',
      categoryLabel: 'Basics & Strategy',
      readTime: '5 min read',
      badge: 'Unbiased Reality',
      snippet: 'Understanding Expense Ratios (TER) vs the real-world behavioral cost of panic-selling, wrong scheme selection, and lack of portfolio review.',
      fullContent: {
        intro: 'In 2013, SEBI introduced two plan options for every mutual fund: Direct Plans (where investors manage everything themselves without an intermediary) and Regular Plans (which include distribution, operational support, and ongoing guidance from an AMFI-registered MFD).',
        keyMechanism: [
          {
            title: 'The Expense Ratio Difference',
            desc: 'Direct plans have a Total Expense Ratio (TER) that is approximately 0.5% to 1.0% lower per annum than regular plans because no distributor commission is paid by the AMC.'
          },
          {
            title: 'The Behavioral Reality (DALBAR & Morningstar Studies)',
            desc: 'Global financial studies consistently demonstrate that retail DIY investors in direct plans underperform benchmark returns by 3% to 5% annually due to emotional mistakes: stopping SIPs in crashes, buying at peaks, and holding bad schemes for too long.'
          },
          {
            title: 'What a Full-Service AMFI Distributor Provides',
            desc: 'Investrow (ARN-194720) provides professional scheme curation across 44 AMCs, quarterly portfolio rebalancing, capital gains tax optimization, RTA service desk, and emergency guidance at ₹0 upfront advisory fee.'
          }
        ],
        example: {
          label: 'A Simple Reality Check',
          calc: 'Saving 0.8% on expense ratio means nothing if you invest in an underperforming fund that lags its category by 3%, or if you panic-sell during a 15% market dip and miss the 40% rebound.',
          invested: 'Portfolio Discipline > Fraction of a Percent TER',
          wealth: 'Guidance prevents costly 6-figure behavioral blunders',
          profit: 'Investrow provides end-to-end guidance with ARN-194720'
        },
        takeaways: [
          'Choose Direct if you are a seasoned finance professional willing to spend 15+ hours monthly researching balance sheets, fund manager changes, and sector rotation.',
          'Choose an AMFI Distributor if you want hands-off peace of mind, disciplined rebalancing, and certified financial expertise.',
          'At Investrow, our client retention rate exceeds 98% because ongoing advisory protects wealth across market cycles.'
        ],
        toolAction: { label: 'Meet Our AMFI Certified Advisory Team', href: '/team' }
      }
    },
    {
      id: 'cagr-vs-xirr',
      title: 'CAGR vs XIRR: How to Actually Calculate Your True Mutual Fund Returns',
      category: 'basics',
      categoryLabel: 'Basics & Strategy',
      readTime: '3 min read',
      badge: 'Math Simplified',
      snippet: 'Why point-to-point CAGR gives misleading results for SIPs, and why XIRR (Extended Internal Rate of Return) is the only true measure for multiple cash flows.',
      fullContent: {
        intro: 'When evaluating mutual fund statements, many investors get confused seeing different return metrics like Absolute Return, CAGR, and XIRR. Using the wrong formula leads to completely distorted return expectations.',
        keyMechanism: [
          {
            title: 'Absolute Return',
            desc: 'Simple percentage gain: ((Current Value - Invested) / Invested) * 100. Ignores time completely. A 50% absolute return over 1 year is fantastic; over 10 years, it is terrible (~4.1% CAGR).'
          },
          {
            title: 'CAGR (Compound Annual Growth Rate)',
            desc: 'Measures the annualized growth rate of a single lump-sum investment over multiple years. Perfect for fixed deposits, gold, or one-time mutual fund purchases.'
          },
          {
            title: 'XIRR (Extended Internal Rate of Return)',
            desc: 'The only mathematically accurate metric for SIPs and SWPs! Because you invest money on different dates across months, each installment compounds for a different number of days. XIRR computes the exact internal rate of return across all cash inflows and outflows.'
          }
        ],
        example: {
          label: 'SIP Example: Why CAGR Fails',
          calc: 'If you invest ₹10,000 every month for 3 years, your first installment stays in the market for 36 months, but your 36th installment stays for only 30 days! A standard CAGR formula cannot handle multiple staggered dates; only XIRR accounts for exact transaction dates.',
          invested: '36 separate cash outflows',
          wealth: 'Handled automatically by XIRR formula',
          profit: 'Always check XIRR on your mutual fund statement!'
        },
        takeaways: [
          'For One-Time Lumpsum: Look at CAGR.',
          'For Monthly SIPs & SWPs: Look strictly at XIRR.',
          'Never rely on Absolute Returns for investments held longer than 12 months.'
        ],
        toolAction: { label: 'Try Our Compounding Calculator', href: '/#calculators' }
      }
    },
    {
      id: 'emergency-fund-liquid-funds',
      title: 'Building an Emergency Fund: Why Liquid Mutual Funds Beat Savings Accounts',
      category: 'basics',
      categoryLabel: 'Basics & Strategy',
      readTime: '3 min read',
      badge: 'Financial Defense',
      snippet: 'How to build a 6-month safety net in Liquid Funds earning 6.5%–7% returns with T+1 instant liquidity instead of letting money rot in a 2.7% bank account.',
      fullContent: {
        intro: 'Before putting a single rupee into volatile equity markets or real estate, every family must possess a dedicated emergency fund covering 6 to 9 months of mandatory living expenses (rent, EMIs, school fees, groceries, insurance premiums).',
        keyMechanism: [
          {
            title: 'The Savings Account Problem',
            desc: 'Most major commercial banks in India pay only 2.7% to 3.0% interest on savings accounts. With inflation running at 5%–6%, money kept in a bank account loses purchasing power every single year.'
          },
          {
            title: 'What are Liquid Mutual Funds?',
            desc: 'Liquid Funds invest in short-term debt instruments like Treasury Bills (T-Bills) and Commercial Paper with maturities up to 91 days. They carry virtually zero equity market volatility.'
          },
          {
            title: 'Instant Redemption (T+1 / Instant ₹50k)',
            desc: 'Most Liquid Funds offer instant withdrawal up to ₹50,000 (or 90% of folio value) credited to your bank account within 60 seconds 24x7! The remainder credits on the next business day (T+1).'
          }
        ],
        example: {
          label: '₹5 Lakh Emergency Fund Over 3 Years',
          calc: 'Parking ₹5 Lakh emergency savings for 3 years:',
          invested: '₹5,00,000',
          wealth: 'Savings Account (@ 2.7%): ~₹5,41,600 | Liquid Fund (@ 6.8%): ~₹6,09,100',
          profit: 'Extra ₹67,500 earned with identical safety and instant liquidity!'
        },
        takeaways: [
          'Calculate your monthly family burn rate and multiply by 6 for your emergency corpus target.',
          'Keep 1 month of expenses in your normal checking bank account; put the other 5 months into a Liquid or Arbitrage Fund.',
          'Never touch your emergency fund for vacations, gadgets, or stock market trading.'
        ],
        toolAction: { label: 'Ask Us to Help Set Up an Emergency Fund', href: '/#contact' }
      }
    },
    {
      id: 'nri-mutual-fund-investing',
      title: 'NRI Mutual Fund Investing in India: NRE vs NRO Accounts, FATCA & Repatriation Rules',
      category: 'nri-minor',
      categoryLabel: 'NRI & Minor',
      readTime: '5 min read',
      badge: 'NRI Desk',
      snippet: 'Step-by-step guide for Non-Resident Indians (NRIs) in UAE, Singapore, UK, USA, and Canada to invest seamlessly in India’s high-growth economy.',
      fullContent: {
        intro: 'Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can participate directly in India’s economic growth story through mutual funds, benefiting from higher GDP expansion compared to developed markets.',
        keyMechanism: [
          {
            title: 'NRE vs NRO Bank Account Route',
            desc: 'NRE (Non-Resident External): 100% fully and freely repatriable outside India in foreign currency. NRO (Non-Resident Ordinary): Ideal for managing India-earned income (rent, dividends) with repatriation subject to Form 15CA/CB documentation up to $1M/year.'
          },
          {
            title: 'NRI KYC Compliance',
            desc: 'NRIs must complete KYC with overseas address proof, Indian passport copy, valid visa / work permit / resident permit, and cancelled cheque of NRE/NRO account.'
          },
          {
            title: 'US & Canada NRI Restrictions (FATCA compliance)',
            desc: 'Due to US IRS FATCA reporting regulations, several AMCs restrict subscriptions from US/Canada tax residents. However, top AMCs like ICICI Prudential, UTI, Sundaram, and Nippon permit US/Canada investments subject to regulatory declarations.'
          }
        ],
        example: {
          label: 'Currency Depreciation vs Market Growth',
          calc: 'Even if the Indian Rupee depreciates 2.5%–3% annually against the US Dollar, a 13%–15% CAGR in Indian equities delivers an exceptional 10%–12% net return in USD terms, far outperforming S&P 500 post-tax averages.',
          invested: 'Participate in the fastest growing major economy',
          wealth: '100% digital execution via BSE StAR MF',
          profit: 'Full repatriation capability via NRE folios'
        },
        takeaways: [
          'Open mutual fund folios strictly mapped to your NRE or NRO bank account (never resident savings accounts).',
          'Tax Deducted at Source (TDS) applies automatically on redemptions for NRIs at applicable capital gains rates.',
          'You can claim benefits under Double Tax Avoidance Agreements (DTAA) using a Tax Residency Certificate (TRC).'
        ],
        toolAction: { label: 'Download NRI CKYC Registration Form', href: '/downloads' }
      }
    },
    {
      id: 'investing-in-child-name',
      title: 'Minor Mutual Fund Accounts: How to Build a Multi-Crore Legacy in Your Child’s Name',
      category: 'nri-minor',
      categoryLabel: 'NRI & Minor',
      readTime: '4 min read',
      badge: 'Children Future',
      snippet: 'How parents and legal guardians can open mutual fund folios in the name of a minor child to build an untouchable education corpus.',
      fullContent: {
        intro: 'Investing in your minor child’s name is one of the most emotionally rewarding financial decisions a parent can make. It builds a dedicated corpus solely earmarked for their higher education, overseas college, or wedding.',
        keyMechanism: [
          {
            title: 'Who Operates the Account?',
            desc: 'The minor is the sole unit holder; there are no joint holders. The account is operated by the natural guardian (Father or Mother) or court-appointed legal guardian until the child turns 18.'
          },
          {
            title: 'Bank Account Rule (SEBI Regulation)',
            desc: 'Under SEBI rules, investments in a minor’s name must be funded from a bank account held in the name of the minor child (or a joint account of the minor with the parent/guardian).'
          },
          {
            title: 'Turning 18 (Minor to Major Transition)',
            desc: 'Upon reaching 18 years, the guardian’s signing authority automatically ceases. The child submits fresh KYC, their own individual bank details, and PAN to take full legal ownership of the accumulated multi-crore asset.'
          }
        ],
        example: {
          label: 'Investing ₹5,000/Month from Birth to Age 18',
          calc: 'Starting an SIP of ₹5,000/month upon the birth of a child for 18 years (@ 13% CAGR):',
          invested: 'Total Invested: ₹10,80,000',
          wealth: 'Corpus on 18th Birthday: ~₹42,50,000!',
          profit: 'A life-changing gift of higher education debt-free!'
        },
        takeaways: [
          'Required documents: Child’s Birth Certificate / Passport and Guardian’s PAN and KYC proof.',
          'Taxation: Income generated from a minor’s mutual fund is clubbed with the parent whose income is higher, until the child turns 18.',
          'Once the child turns 18, their capital gains are taxed under their own individual tax slab (often 0% or low bracket while in college!).'
        ],
        toolAction: { label: 'Consult on Child Education Planning', href: '/wealth-creation' }
      }
    },
    {
      id: 'common-investing-mistakes',
      title: '7 Fatal Mutual Fund Mistakes That Destroy Returns (and How to Avoid Them)',
      category: 'basics',
      categoryLabel: 'Basics & Strategy',
      readTime: '5 min read',
      badge: 'Wealth Protection',
      snippet: 'Learn the exact psychological traps that cause 90% of retail investors to underperform index benchmarks, and how to bulletproof your portfolio.',
      fullContent: {
        intro: 'Successful investing is less about picking the "hottest" fund and more about avoiding avoidable blunders. Eliminating these 7 common behavioral mistakes will place you in the top 10% of Indian wealth creators.',
        keyMechanism: [
          {
            title: 'Mistake 1: Stopping SIPs During Market Crashes',
            desc: 'When markets drop 15%, amateur investors panic and stop their SIPs. In reality, crashes are mutual fund clearance sales! Stopping your SIP guarantees that you miss out on accumulating low-cost units.'
          },
          {
            title: 'Mistake 2: Over-Diversification (Holding 20+ Schemes)',
            desc: 'Owning 25 different mutual funds does not reduce risk; it creates portfolio overlap and dilution. 4 to 6 well-chosen funds across market caps are all you will ever need.'
          },
          {
            title: 'Mistake 3: Chasing Last Year’s #1 Performing Fund',
            desc: 'Last year’s top-ranking fund is often a sectoral or thematic fund (e.g. Technology, Defense, PSU) near the peak of its cycle. Reversion to the mean means top performers rarely repeat at the top year after year.'
          },
          {
            title: 'Mistake 4: Checking Portfolio NAV Every Day',
            desc: 'Checking daily NAV fluctuations induces unnecessary anxiety, leading to compulsive trading and churn. Review your portfolio once every 6 months with your certified AMFI advisor.'
          }
        ],
        example: {
          label: 'The Cost of Panicking in March 2020',
          calc: 'Investors who stopped their SIPs during the COVID crash locked in losses. Those who stayed disciplined or stepped up their contributions saw their portfolios multiply by 2.5x to 3x over the subsequent 36 months.',
          invested: 'Patience & Conviction',
          wealth: 'Disciplined investors capture full market recoveries',
          profit: 'Emotional discipline is the real secret of wealth'
        },
        takeaways: [
          'Never invest money needed within 3 years into equity mutual funds.',
          'Keep your portfolio simple: 1 Large/Flexi-Cap, 1 Mid-Cap, 1 Small-Cap, and 1 Hybrid Fund.',
          'Partner with an AMFI Registered Distributor who acts as an emotional circuit breaker during market panics.'
        ],
        toolAction: { label: 'Get a Complimentary Portfolio Health Check', href: '/#contact' }
      }
    }
  ];

  // 20 Financial Terms Glossary
  const glossaryTerms = [
    { term: 'NAV (Net Asset Value)', def: 'The per-unit market value of a mutual fund scheme, calculated by dividing the total value of all securities in the portfolio minus liabilities by total outstanding units.' },
    { term: 'AUM (Assets Under Management)', def: 'The total cumulative market value of investments managed by a mutual fund scheme or an asset management company (AMC).' },
    { term: 'Expense Ratio (TER)', def: 'The annual percentage fee charged by the mutual fund company to manage the fund, covering management fees, administrative costs, and regulatory compliance.' },
    { term: 'Exit Load', def: 'A nominal fee (typically 1%) charged by some schemes if units are redeemed before a specified period (e.g., within 365 days of investment) to discourage short-term speculation.' },
    { term: 'Benchmark Index', def: 'A standard stock market index (like Nifty 50 TRI, BSE 500 TRI) against which the mutual fund manager’s performance is evaluated.' },
    { term: 'Alpha', def: 'The excess return generated by an active fund manager above and beyond the benchmark index return. Positive alpha indicates exceptional stock picking.' },
    { term: 'Beta', def: 'A measure of the fund’s volatility relative to the market. A beta of 1.0 moves in sync with the index; a beta below 1.0 indicates lower volatility than the market.' },
    { term: 'Sharpe Ratio', def: 'Measures how much excess return a fund generates for each unit of risk (standard deviation). Higher Sharpe ratio indicates superior risk-adjusted return.' },
    { term: 'Standard Deviation', def: 'A statistical measure of the volatility of the fund’s monthly returns around its average. Lower standard deviation within a category represents a less bumpy ride.' },
    { term: 'XIRR', def: 'Extended Internal Rate of Return. The only mathematically accurate formula to calculate annualized return on multiple periodic cash flows (SIPs and SWPs).' },
    { term: 'CAGR (Compound Annual Growth Rate)', def: 'The geometric progression ratio that measures the constant rate of return on an investment over multiple years assuming profits are reinvested.' },
    { term: 'Rolling Returns', def: 'Returns calculated across continuous overlapping frequency intervals (e.g., every 3-year or 5-year block over 10 years). The gold standard for measuring consistency.' },
    { term: 'Rupee Cost Averaging', def: 'The mathematical phenomenon where regular SIP investments buy more units at lower prices during market dips and fewer at higher prices, lowering overall average cost.' },
    { term: 'Portfolio Turnover', def: 'The percentage of the fund’s portfolio that has been bought or sold over the past year. High turnover indicates aggressive trading; low turnover indicates buy-and-hold investing.' },
    { term: 'P/E (Price to Earnings) Ratio', def: 'The weighted average market price of stocks in the portfolio divided by their earnings per share. High P/E signals growth/premium; low P/E signals value.' },
    { term: 'P/B (Price to Book) Ratio', def: 'The ratio comparing the portfolio stock prices to their book net asset value. Used extensively in value-oriented mutual fund screening.' },
    { term: 'STP (Systematic Transfer Plan)', def: 'An automated instruction to transfer a fixed sum periodically from one mutual fund scheme (e.g. Liquid Fund) to another (e.g. Equity Fund) within the same AMC.' },
    { term: 'SWP (Systematic Withdrawal Plan)', def: 'An automated instruction to redeem a fixed sum periodically from your mutual fund corpus into your bank account, generating regular monthly cashflow.' },
    { term: 'Lock-In Period', def: 'A mandatory minimum holding duration during which units cannot be redeemed. E.g., ELSS mutual funds carry a statutory 3-year lock-in period.' },
    { term: 'Tracking Error', def: 'The annualized standard deviation of the difference between the returns of an index fund/ETF and its target benchmark index. Lower tracking error is better.' }
  ];

  // Filtered Learning Modules
  const filteredModules = useMemo(() => {
    return learningModules.filter(m => {
      const matchesCat = activeCategory === 'all' || m.category === activeCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch = !q || 
        m.title.toLowerCase().includes(q) || 
        m.snippet.toLowerCase().includes(q) ||
        m.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  // Filtered Glossary Terms
  const filteredGlossary = useMemo(() => {
    const q = glossarySearch.toLowerCase().trim();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter(t => t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q));
  }, [glossarySearch]);

  const categories = [
    { id: 'all', label: 'All Guides', count: learningModules.length },
    { id: 'sip', label: 'SIP & Compounding', count: learningModules.filter(m => m.category === 'sip').length },
    { id: 'tax', label: 'Taxation & ELSS', count: learningModules.filter(m => m.category === 'tax').length },
    { id: 'retirement', label: 'Retirement & SWP', count: learningModules.filter(m => m.category === 'retirement').length },
    { id: 'categories', label: 'Fund Categories', count: learningModules.filter(m => m.category === 'categories').length },
    { id: 'nri-minor', label: 'NRI & Minor', count: learningModules.filter(m => m.category === 'nri-minor').length },
    { id: 'basics', label: 'Strategy & Mistakes', count: learningModules.filter(m => m.category === 'basics').length }
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* Hero Section */}
      <section style={{
        padding: 'clamp(120px, 14vw, 160px) 0 48px',
        background: 'linear-gradient(170deg, #0A1628 0%, #0F1E36 50%, #08111F 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient Auras */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 138, 216, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 106, 19, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
            <Link href="/" style={{ color: '#38BDF8', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#CBD5E1', fontWeight: 600 }}>Mutual Fund Learning Academy</span>
          </nav>

          <div style={{ maxWidth: '860px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38BDF8',
              fontSize: '12.5px',
              fontWeight: 700,
              marginBottom: '20px'
            }}>
              <BookOpen size={16} />
              <span>24 Plain-English Mutual Fund Guides by AMFI Registered Advisors (ARN-194720)</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '18px',
              color: '#FFFFFF'
            }}>
              Master Mutual Funds & Smart Wealth Creation — Made Simple
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.65,
              marginBottom: '32px'
            }}>
              Search anything from SIP compounding, SWP monthly cashflow, Section 80C tax savings, new capital gains tax rules, to Active vs Index funds, NRI investing, and child education portfolios. Clear, honest, zero-jargon guides curated by veteran AMFI-certified advisors.
            </p>

            {/* Smart Search Bar */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.25)',
              maxWidth: '680px'
            }}>
              <div style={{ paddingLeft: '14px', color: '#64748B', display: 'flex', alignItems: 'center' }}>
                <Search size={20} />
              </div>
              <input 
                type="text"
                placeholder="Search any topic (e.g. SIP, SWP, ELSS, FIRE, NRI, STP, Index Funds, XIRR)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  color: '#0A1628',
                  padding: '10px 0',
                  background: 'transparent'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{
                    background: '#F1F5F9',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '5px 10px',
                    fontSize: '12px',
                    color: '#64748B',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Keyword Prompts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', flexWrap: 'wrap', fontSize: '12px', color: '#94A3B8' }}>
              <span>Popular searches:</span>
              {['SIP vs Lumpsum', 'SWP Cashflow', 'ELSS 80C', 'FIRE Movement', 'Active vs Index', 'NRI Investing'].map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setSearchTerm(kw)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#E2E8F0',
                    borderRadius: '9999px',
                    padding: '2px 10px',
                    fontSize: '11px',
                    cursor: 'pointer'
                  }}
                >
                  {kw}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Main Section */}
      <section style={{ padding: '48px 0 80px', flex: 1 }}>
        <div className="container">

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '36px',
            scrollbarWidth: 'none'
          }}>
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    border: isActive ? '1px solid #008AD8' : '1px solid #E2E8F0',
                    background: isActive ? '#008AD8' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 138, 216, 0.25)' : '0 1px 3px rgba(0,0,0,0.02)'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    fontSize: '11px',
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : '#F1F5F9',
                    color: isActive ? '#FFFFFF' : '#64748B'
                  }}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            fontSize: '14px',
            color: '#64748B'
          }}>
            <div>
              Showing <strong>{filteredModules.length}</strong> master financial guides
              {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}
            </div>
            <div style={{ fontSize: '12.5px', color: '#059669', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <CheckCircle2 size={15} /> AMFI Certified Research Desk (ARN-194720)
            </div>
          </div>

          {/* Grid of Learning Guides */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredModules.map((item) => {
              const isExpanded = expandedModule === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: isExpanded ? '1.5px solid #008AD8' : '1px solid #E2E8F0',
                    overflow: 'hidden',
                    boxShadow: isExpanded ? '0 12px 36px rgba(10, 22, 40, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {/* Card Header (Click to toggle expansion) */}
                  <div
                    onClick={() => setExpandedModule(isExpanded ? null : item.id)}
                    style={{
                      padding: '24px 28px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: isExpanded ? '#F8FAFC' : '#FFFFFF'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: '#E0F2FE',
                          color: '#0369A1'
                        }}>
                          {item.categoryLabel}
                        </span>

                        {item.badge && (
                          <span style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: '#FFF1EB',
                            color: '#C2410C'
                          }}>
                            {item.badge}
                          </span>
                        )}

                        <span style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} /> {item.readTime}
                        </span>
                      </div>

                      <h2 style={{
                        fontSize: 'clamp(18px, 2.5vw, 22px)',
                        fontWeight: 800,
                        color: '#0A1628',
                        lineHeight: 1.3,
                        marginBottom: '8px'
                      }}>
                        {item.title}
                      </h2>

                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                        {item.snippet}
                      </p>
                    </div>

                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: isExpanded ? '#008AD8' : '#F1F5F9',
                      color: isExpanded ? '#FFFFFF' : '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                      marginTop: '4px'
                    }}>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Expanded Content View */}
                  {isExpanded && (
                    <div style={{
                      padding: '24px 28px 32px',
                      borderTop: '1px solid #E2E8F0',
                      background: '#FFFFFF'
                    }}>
                      {/* Detailed Narrative Introduction */}
                      <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.7, marginBottom: '24px' }}>
                        {item.fullContent.intro}
                      </p>

                      {/* Mechanism Breakdown Cards */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '16px',
                        marginBottom: '28px'
                      }}>
                        {item.fullContent.keyMechanism.map((mech, mIdx) => (
                          <div
                            key={mIdx}
                            style={{
                              background: '#F8FAFC',
                              borderRadius: '12px',
                              padding: '18px',
                              border: '1px solid #E2E8F0'
                            }}
                          >
                            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Sparkles size={16} style={{ color: '#008AD8' }} /> {mech.title}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                              {mech.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Practical Rupee Example Box */}
                      {item.fullContent.example && (
                        <div style={{
                          background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
                          borderRadius: '14px',
                          padding: '22px 24px',
                          color: '#FFFFFF',
                          marginBottom: '28px'
                        }}>
                          <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#38BDF8', marginBottom: '6px' }}>
                            {item.fullContent.example.label}
                          </div>
                          <div style={{ fontSize: '14px', color: '#CBD5E1', marginBottom: '14px' }}>
                            {item.fullContent.example.calc}
                          </div>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: '14px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '14px 18px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}>
                            <div>
                              <div style={{ fontSize: '11px', color: '#94A3B8' }}>Capital Invested</div>
                              <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>{item.fullContent.example.invested}</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '11px', color: '#38BDF8' }}>Final Projected Corpus</div>
                              <div style={{ fontSize: '16px', fontWeight: 800, color: '#38BDF8' }}>{item.fullContent.example.wealth}</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '11px', color: '#4ADE80' }}>Net Wealth Created</div>
                              <div style={{ fontSize: '16px', fontWeight: 800, color: '#4ADE80' }}>{item.fullContent.example.profit}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Key Takeaways Checklist */}
                      <div style={{ marginBottom: '28px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#0A1628', marginBottom: '12px' }}>
                          Golden Rules & Actionable Takeaways:
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {item.fullContent.takeaways.map((takeaway, tIdx) => (
                            <div key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#475569' }}>
                              <CheckCircle2 size={16} style={{ color: '#16A34A', flexShrink: 0, marginTop: '2px' }} />
                              <span>{takeaway}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar inside Guide */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                        paddingTop: '20px',
                        borderTop: '1px solid #F1F5F9'
                      }}>
                        {item.fullContent.toolAction && (
                          <Link
                            href={item.fullContent.toolAction.href}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              background: '#008AD8',
                              color: '#FFFFFF',
                              padding: '10px 18px',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 700,
                              textDecoration: 'none',
                              boxShadow: '0 4px 12px rgba(0, 138, 216, 0.25)'
                            }}
                          >
                            <span>{item.fullContent.toolAction.label}</span>
                            <ArrowRight size={14} />
                          </Link>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <a
                            href={`https://wa.me/919102070777?text=${encodeURIComponent(
                              `Hello Investrow, I just read your guide on "${item.title}". I would like to ask a personalized question regarding my portfolio.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              background: 'rgba(34, 197, 94, 0.1)',
                              border: '1px solid rgba(34, 197, 94, 0.3)',
                              color: '#15803D',
                              padding: '9px 16px',
                              borderRadius: '8px',
                              fontSize: '12.5px',
                              fontWeight: 700,
                              textDecoration: 'none'
                            }}
                          >
                            <MessageSquare size={14} /> Ask Advisor on WhatsApp
                          </a>

                          <button
                            type="button"
                            onClick={() => handleOpenConsultModal(item.title)}
                            style={{
                              background: '#F1F5F9',
                              border: '1px solid #E2E8F0',
                              color: '#0A1628',
                              padding: '9px 16px',
                              borderRadius: '8px',
                              fontSize: '12.5px',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Book 1-on-1 Advisory Call
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Interactive Financial Terms Glossary Section */}
          <div style={{
            marginTop: '64px',
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: '0 4px 24px rgba(10, 22, 40, 0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#008AD8' }}>
                  Quick Financial Dictionary
                </span>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: '#0A1628', marginTop: '4px', marginBottom: '8px' }}>
                  Mutual Fund Terms & Acronyms Cheat Sheet (20 Essential Definitions)
                </h2>
                <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                  Decode financial terminology in seconds. Search or browse official AMFI definitions.
                </p>
              </div>

              {/* Glossary Search Input */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                maxWidth: '280px'
              }}>
                <Search size={16} style={{ color: '#64748B' }} />
                <input
                  type="text"
                  placeholder="Filter terms (NAV, Alpha, Sharpe, XIRR)..."
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    fontSize: '13px',
                    background: 'transparent',
                    width: '100%',
                    padding: '6px 0',
                    color: '#0A1628'
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px'
            }}>
              {filteredGlossary.map((gItem, gIdx) => (
                <div
                  key={gIdx}
                  style={{
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '18px 20px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#008AD8', marginBottom: '6px' }}>
                    {gItem.term}
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55 }}>
                    {gItem.def}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AMFI Certified Help Desk Banner */}
          <div style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, #0A1628 0%, #162A4A 100%)',
            borderRadius: '18px',
            padding: '32px 36px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 12px 32px rgba(10, 22, 40, 0.2)'
          }}>
            <div style={{ maxWidth: '580px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38BDF8',
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 800,
                marginBottom: '12px'
              }}>
                <ShieldCheck size={14} /> AMFI Registered Mutual Fund Distributor (ARN-194720)
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                Still Have Questions? Talk Directly to an AMFI Certified Advisor
              </h3>
              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.55, margin: 0 }}>
                Don't make financial decisions in isolation. Founder Surendra Prasad and our senior research desk in Dhanbad, Jharkhand provide 100% free guidance on fund selection, goal planning, and tax optimization.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://wa.me/919102070777?text=Hello%20Investrow,%20I%20have%20questions%20about%20mutual%20fund%20investing%20and%20would%20like%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageSquare size={16} /> WhatsApp: +91 91020 70777
              </a>

              <button
                type="button"
                onClick={() => handleOpenConsultModal('General Wealth Learning Advisory')}
                className="btn-orange"
                style={{ width: '100%', padding: '12px 24px', fontSize: '14px', cursor: 'pointer' }}
              >
                Book Free 1-on-1 Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Floating Groq AI Wealth Advisor */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Sticky Mobile Actions Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Mobile Callback - Learn')} />
    </div>
  );
}
