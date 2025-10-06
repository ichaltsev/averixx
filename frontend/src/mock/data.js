export const mockUser = {
  id: '1',
  email: 'trader@averix.com',
  username: 'CryptoTrader',
  level: 'Gold',
  balance: 50000,
  stakedTFT: 10000,
  stakingDays: 90,
  winrate: 67.5,
  profitFactor: 1.85,
  avgRR: 2.1,
  violations: 0,
  season: {
    position: 15,
    pnl: 8750,
    trades: 42
  }
};

export const mockDashboardData = {
  portfolio: {
    totalBalance: 50000,
    availableBalance: 40000,
    stakedTFT: 10000,
    unrealizedPnL: 1250
  },
  stats: {
    winrate: 67.5,
    profitFactor: 1.85,
    avgRiskReward: 2.1,
    totalTrades: 156,
    violations: 0
  },
  recentTrades: [
    { id: 1, pair: 'BTC/USDT', type: 'Long', pnl: 450, timestamp: '2025-01-15T10:30:00Z' },
    { id: 2, pair: 'ETH/USDT', type: 'Short', pnl: -120, timestamp: '2025-01-15T08:15:00Z' },
    { id: 3, pair: 'XAU/USD', type: 'Long', pnl: 320, timestamp: '2025-01-14T16:45:00Z' }
  ],
  achievements: [
    { name: '10x Streak', description: '10 profitable trades in a row', earned: true },
    { name: 'High RR', description: '5 trades with avg R:R ≥ 3.0', earned: true },
    { name: 'Risk Purist', description: 'Zero violations per season', earned: true }
  ]
};

export const tokenomicsData = {
  totalSupply: '1,000,000,000',
  distribution: [
    { category: 'Traders Rewards', percentage: 35, color: '#FFFFFF' },
    { category: 'Staking/Copy', percentage: 15, color: '#E0E0E0' },
    { category: 'Liquidity', percentage: 15, color: '#C0C0C0' },
    { category: 'Airdrop/Referrals', percentage: 10, color: '#A0A0A0' },
    { category: 'Team', percentage: 10, color: '#808080' },
    { category: 'Dev/Reserve', percentage: 8, color: '#606060' },
    { category: 'Marketing', percentage: 7, color: '#404040' }
  ]
};

export const roadmapData = [
  {
    quarter: 'Q4 2025',
    title: 'Foundation',
    status: 'current',
    items: ['MVP web app', 'Risk Engine v1', 'Bronze/Silver levels', 'Leaderboard v1', 'SBT framework']
  },
  {
    quarter: 'Q1 2026',
    title: 'Enhancement',
    status: 'upcoming',
    items: ['Gold/Prime levels', 'Copy-Trading marketplace', 'AI Risk Advisor v1', 'Quests v2', 'Tournament v1']
  },
  {
    quarter: 'Q2 2026',
    title: 'Expansion',
    status: 'planned',
    items: ['Mentor Program', 'Achievement expansion', 'Treasury governance', 'Performance dashboard 2.0']
  },
  {
    quarter: 'Q3 2026',
    title: 'Mobile & Features',
    status: 'planned',
    items: ['PWA + push notifications', 'Tournaments 2.0', 'Seasonal cosmetics', 'Copy analytics']
  },
  {
    quarter: 'Q4 2026',
    title: 'Global Scale',
    status: 'planned',
    items: ['i18n expansion', 'Advanced DAO votes', 'White-label program', 'Burn analytics']
  }
];

export const ecosystemFeatures = [
  {
    title: 'Risk-Managed Trading',
    description: 'Position ≤ 5% of balance, mandatory SL/TP, max R:R ≤ 5',
    icon: 'Shield'
  },
  {
    title: 'Staking Access',
    description: 'Lock TFT for 14-360 days, longer lock = lower fees',
    icon: 'Lock'
  },
  {
    title: 'Level Progression',
    description: 'Bronze → Silver → Gold → Prime with increasing benefits',
    icon: 'TrendingUp'
  },
  {
    title: 'Copy Trading',
    description: 'Follow Prime traders and copy their strategies',
    icon: 'Users'
  },
  {
    title: 'Achievement System',
    description: 'Earn SBT badges and buffs for trading excellence',
    icon: 'Award'
  },
  {
    title: 'Seasonal Competitions',
    description: '30-day seasons with public leaderboards and rewards',
    icon: 'Trophy'
  }
];