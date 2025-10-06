import React from 'react';
import { tokenomicsData } from '../../mock/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Coins, TrendingUp, Lock, Flame } from 'lucide-react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The TFT token powers the entire Averix ecosystem with transparent distribution 
            and sustainable economics designed for long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Token Distribution Chart */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Token Distribution</h3>
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-4">
                {tokenomicsData.distribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white font-medium">{item.category}</span>
                    </div>
                    <span className="text-gray-300 font-semibold">{item.percentage}%</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{tokenomicsData.totalSupply}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Total Supply</div>
                </div>
              </div>
            </div>
          </div>

          {/* Token Utility */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Token Utility</h3>
            
            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Lock className="h-5 w-5" />
                  <span>Staking Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Lock TFT tokens for 14-360 days to access trading. Longer locks provide lower variable fees, 
                  with 360-day stakes potentially reaching 0% fees.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-white">
                  <TrendingUp className="h-5 w-5" />
                  <span>Rewards & Incentives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Earn TFT rewards through seasonal competitions, quest completion, and copy trading. 
                  35% of total supply is allocated to trader rewards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Flame className="h-5 w-5" />
                  <span>Deflationary Mechanism</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  A portion of platform fees is periodically converted and burned in TFT, 
                  creating deflationary pressure and supporting long-term value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Coins className="h-5 w-5" />
                  <span>Governance Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  TFT holders participate in DAO governance, voting on platform parameters, 
                  new features, and treasury management decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">35%</div>
            <div className="text-gray-300">Trader Rewards</div>
            <div className="text-sm text-gray-400 mt-2">Largest allocation for ecosystem participants</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">24M</div>
            <div className="text-gray-300">Team Vesting</div>
            <div className="text-sm text-gray-400 mt-2">Months for full team token unlock</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">360</div>
            <div className="text-gray-300">Max Stake Days</div>
            <div className="text-sm text-gray-400 mt-2">For maximum fee reduction benefits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;