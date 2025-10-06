import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { mockDashboardData } from '../mock/data';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, TrendingUp, TrendingDown, Award, Users, Lock, Activity, Wallet, Copy, ExternalLink } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Dashboard = () => {
  const { user, loading, truncateAddress } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const { portfolio, stats, recentTrades, achievements } = mockDashboardData;

  const getLevelColor = (level) => {
    switch (level) {
      case 'Bronze': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Silver': return 'bg-gray-400/20 text-gray-300 border-gray-400/30';
      case 'Gold': return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'Prime': return 'bg-purple-400/20 text-purple-400 border-purple-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const copyAddress = async () => {
    if (user?.address) {
      await navigator.clipboard.writeText(user.address);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard.",
      });
    }
  };

  const openExplorer = () => {
    const explorerUrl = user.network === 'sui' 
      ? `https://explorer.sui.io/address/${user.address}`
      : `https://bscscan.com/address/${user.address}`;
    window.open(explorerUrl, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Trader</h1>
            <div className="flex items-center space-x-4">
              <Badge className={`${getLevelColor(user.level || 'Bronze')}`}>
                {user.level || 'Bronze'} Trader
              </Badge>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-white/5 to-white/10 rounded-lg px-3 py-2 border border-white/10">
                <span className="text-lg">{user.walletIcon}</span>
                <span className="text-white font-mono text-sm">{user.truncatedAddress}</span>
                <button
                  onClick={copyAddress}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copy full address"
                >
                  <Copy className="h-3 w-3" />
                </button>
                <button
                  onClick={openExplorer}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="View on explorer"
                >
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
              <Badge variant="outline" className="border-white/20 text-gray-300">
                {user.network?.toUpperCase()} Network
              </Badge>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Connected since {new Date(user.connectedAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${portfolio.totalBalance.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-1">Available: ${portfolio.availableBalance.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Staked TFT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{portfolio.stakedTFT.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-1">90 days remaining</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Unrealized P&L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${portfolio.unrealizedPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolio.unrealizedPnL >= 0 ? '+' : ''}${portfolio.unrealizedPnL.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-1">Open positions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Win Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.winrate}%</div>
              <p className="text-xs text-gray-400 mt-1">{stats.totalTrades} total trades</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trading Stats */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Trading Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{stats.winrate}%</div>
                    <div className="text-sm text-gray-400">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{stats.profitFactor}</div>
                    <div className="text-sm text-gray-400">Profit Factor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{stats.avgRiskReward}</div>
                    <div className="text-sm text-gray-400">Avg R:R</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">{stats.violations}</div>
                    <div className="text-sm text-gray-400">Violations</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTrades.map((trade) => (
                    <div key={trade.id} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${trade.pnl >= 0 ? 'bg-green-400' : 'bg-red-400'}`} />
                        <div>
                          <div className="text-white font-medium">{trade.pair}</div>
                          <div className="text-xs text-gray-400">{trade.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl}
                        </div>
                        <div className="text-xs text-gray-400">
                          {new Date(trade.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-white/20 text-white hover:bg-white/10">
                  View All Trades
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Wallet className="h-5 w-5 mr-2" />
                  Wallet Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{user.walletIcon}</span>
                    <div>
                      <div className="text-white font-semibold">{user.walletName}</div>
                      <div className="text-xs text-gray-400">{user.network?.toUpperCase()} Network</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Wallet Address</div>
                    <div className="font-mono text-sm text-white break-all">{user.address}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={copyAddress}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                    <Button
                      onClick={openExplorer}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Explorer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-yellow-400/20 text-yellow-400' : 'bg-gray-500/20 text-gray-500'
                      }`}>
                        <Award className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${
                          achievement.earned ? 'text-white' : 'text-gray-500'
                        }`}>
                          {achievement.name}
                        </div>
                        <div className="text-xs text-gray-400">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Staking Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Staked Amount</span>
                    <span className="text-white font-semibold">{portfolio.stakedTFT.toLocaleString()} TFT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lock Period</span>
                    <span className="text-white font-semibold">90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time Remaining</span>
                    <span className="text-white font-semibold">67 days</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '25%' }} />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">
                    Extend Stake
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => window.open('https://t.me/averix_founder', '_blank')}
                  >
                    Join Telegram
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    View Leaderboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;