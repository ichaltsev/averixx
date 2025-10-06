import React from 'react';
import { ecosystemFeatures } from '../../mock/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Shield, Lock, TrendingUp, Users, Award, Trophy } from 'lucide-react';

const Ecosystem = () => {
  const iconMap = {
    Shield,
    Lock,
    TrendingUp,
    Users,
    Award,
    Trophy
  };

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-[#161616] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the comprehensive features that make Averix the ultimate 
            decentralized prop trading platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ecosystemFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Level Progression */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Level Progression System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/20 rounded-2xl p-6 border border-amber-500/20 text-center">
              <div className="text-2xl font-bold text-amber-400 mb-2">Bronze</div>
              <div className="text-sm text-gray-300 mb-4">Base trading access after staking TFT</div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• Trading access</div>
                <div>• Basic features</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-400/10 to-gray-500/20 rounded-2xl p-6 border border-gray-400/20 text-center">
              <div className="text-2xl font-bold text-gray-300 mb-2">Silver</div>
              <div className="text-sm text-gray-300 mb-4">Leaderboard visibility & copy trading follower</div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• ≥10 profitable trades</div>
                <div>• ≥40% winrate</div>
                <div>• ≥1.5 avg R:R</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/20 rounded-2xl p-6 border border-yellow-400/20 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">Gold</div>
              <div className="text-sm text-gray-300 mb-4">Reduced fees & higher quest weights</div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• ≥20 profitable trades</div>
                <div>• ≥50% winrate</div>
                <div>• ≥1.8 avg R:R</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400/10 to-purple-500/20 rounded-2xl p-6 border border-purple-400/20 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Prime</div>
              <div className="text-sm text-gray-300 mb-4">CopyTrader role & tournament access</div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• ≥30 profitable trades</div>
                <div>• ≥55% winrate</div>
                <div>• ≥2.0 avg R:R</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Instruments */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Available Trading Instruments</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['BTC/USDT', 'ETH/USDT', 'EUR/USD', 'XAU/USD'].map((instrument) => (
              <div key={instrument} className="bg-gradient-to-r from-white/10 to-white/15 rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">{instrument}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">More instruments added via governance</p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;