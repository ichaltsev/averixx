import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Shield, TrendingUp, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Enforced risk rules with position limits, mandatory SL/TP, and violation tracking for disciplined trading.'
    },
    {
      icon: TrendingUp,
      title: 'Merit-Based Progression',
      description: 'Level up from Bronze to Prime through seasonal performance with transparent, on-chain achievements.'
    },
    {
      icon: Award,
      title: 'Seasonal Competitions',
      description: '30-day seasons with public leaderboards, rewards, and recognition for top performing traders.'
    },
    {
      icon: Users,
      title: 'Copy Trading',
      description: 'Follow Prime traders and copy their strategies with built-in risk guardrails and transparent metrics.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Averix
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Averix revolutionizes prop trading by combining the discipline of traditional prop firms 
            with the transparency and incentives of Web3. Our platform enforces risk management 
            while rewarding merit through seasonal competitions and progressive leveling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">The Problem We Solve</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">Retail traders struggle with risk discipline and transparent performance tracking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">Traditional prop firms are off-chain and permissioned, limiting openness</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">Lack of verifiable trader identity and merit-based progression systems</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              An on-chain-aware, risk-enforced trading environment with seasonal merit systems 
              and aligned incentives. Trade with confidence knowing every action is transparent, 
              every achievement is verifiable, and every reward is earned through skill.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-white/5 to-white/10 rounded-full px-8 py-4 backdrop-blur-sm border border-white/10">
            <span className="text-white font-semibold">How it works:</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">Stake TFT</span>
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-gray-300">Trade (Risk-Managed)</span>
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-gray-300">Earn Rewards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;