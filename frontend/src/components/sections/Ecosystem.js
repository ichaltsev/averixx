import React, { useState, useEffect } from 'react';
import { ecosystemFeatures } from '../../mock/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Shield, Lock, TrendingUp, Users, Award, Trophy } from 'lucide-react';

const Ecosystem = () => {
  const [progressAnimated, setProgressAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const progressSection = document.getElementById('level-progression');
    if (progressSection) {
      observer.observe(progressSection);
    }

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    Shield,
    Lock,
    TrendingUp,
    Users,
    Award,
    Trophy
  };

  const levels = [
    { 
      id: 'bronze', 
      name: 'Bronze', 
      description: 'Base trading access after staking TFT',
      requirements: ['Trading access', 'Basic features'],
      progress: 100,
      isActive: false,
      isCompleted: true
    },
    { 
      id: 'silver', 
      name: 'Silver', 
      description: 'Leaderboard visibility & copy trading follower',
      requirements: ['≥10 profitable trades', '≥40% winrate', '≥1.5 avg R:R'],
      progress: 75,
      isActive: true,
      isCompleted: false
    },
    { 
      id: 'gold', 
      name: 'Gold', 
      description: 'Reduced fees & higher quest weights',
      requirements: ['≥20 profitable trades', '≥50% winrate', '≥1.8 avg R:R'],
      progress: 0,
      isActive: false,
      isCompleted: false
    },
    { 
      id: 'prime', 
      name: 'Prime', 
      description: 'CopyTrader role & tournament access',
      requirements: ['≥30 profitable trades', '≥55% winrate', '≥2.0 avg R:R'],
      progress: 0,
      isActive: false,
      isCompleted: false
    }
  ];

  const getLevelColors = (level) => {
    if (level.isCompleted) {
      return {
        dot: 'bg-[#CFCFCF]',
        card: 'from-[#2A2A2A]/50 to-[#1C1C1C]/30 border-[#2A2A2A]',
        text: 'text-[#B3B3B3]',
        progress: '#CFCFCF'
      };
    }
    if (level.isActive) {
      return {
        dot: 'bg-[#FFFFFF] shadow-[0_0_12px_rgba(255,255,255,0.3)]',
        card: 'from-[#1C1C1C] to-[#161616] border-[#3A3A3A]',
        text: 'text-[#E0E0E0]',
        progress: '#F2F2F2'
      };
    }
    return {
      dot: 'bg-[#3A3A3A]',
      card: 'from-[#161616] to-[#1C1C1C] border-[#2A2A2A]',
      text: 'text-[#9A9A9A]',
      progress: '#3A3A3A'
    };
  };

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-[#161616] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#E0E0E0] to-[#B3B3B3] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            Explore the comprehensive features that make Averix the ultimate 
            decentralized prop trading platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ecosystemFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={index} className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#161616]/60 border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 group backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2A2A2A] to-[#1C1C1C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#3A3A3A]">
                    <Icon className="h-8 w-8 text-[#E0E0E0]" />
                  </div>
                  <CardTitle className="text-[#E0E0E0] text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#B3B3B3] text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Level Progression System */}
        <div className="mb-16" id="level-progression">
          <h3 className="text-3xl font-bold text-[#E0E0E0] text-center mb-12">Level Progression System</h3>
          
          {/* Progress Track */}
          <div className="relative mb-8">
            <div className="flex justify-between items-center">
              {levels.map((level, index) => {
                const colors = getLevelColors(level);
                return (
                  <div key={level.id} className="flex flex-col items-center relative z-10">
                    <div className={`w-6 h-6 rounded-full ${colors.dot} transition-all duration-300 mb-3`} />
                    <span className={`text-sm font-medium ${colors.text} transition-colors duration-300`}>
                      {level.name}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* Progress Line */}
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#1C1C1C] -z-0">
              <div 
                className={`h-full bg-gradient-to-r from-[#F2F2F2] to-[#CFCFCF] transition-all duration-700 ease-out`}
                style={{ 
                  width: progressAnimated ? '25%' : '0%',
                  filter: 'drop-shadow(0 0 4px rgba(242, 242, 242, 0.3))'
                }}
              />
            </div>
          </div>

          {/* Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => {
              const colors = getLevelColors(level);
              return (
                <Card 
                  key={level.id} 
                  className={`bg-gradient-to-br ${colors.card} transition-all duration-300 hover:scale-105 group cursor-default`}
                  style={{
                    animationDelay: progressAnimated ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`text-2xl font-bold ${colors.text} mb-2 transition-colors duration-300`}>
                      {level.name}
                    </div>
                    <div className={`text-sm ${colors.text} mb-4 opacity-80 leading-relaxed`}>
                      {level.description}
                    </div>
                    
                    {/* Progress Bar */}
                    {level.progress > 0 && (
                      <div className="mb-4">
                        <div className="w-full bg-[#1C1C1C] rounded-full h-2 mb-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-700 ease-out"
                            style={{ 
                              width: progressAnimated ? `${level.progress}%` : '0%',
                              backgroundColor: colors.progress,
                              boxShadow: level.isActive ? `0 0 8px ${colors.progress}40` : 'none'
                            }}
                          />
                        </div>
                        <div className={`text-xs ${colors.text} opacity-60`}>
                          {level.progress}% Complete
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-1 text-xs text-left">
                      {level.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className={`flex items-start space-x-2 ${colors.text} opacity-70`}>
                          <div className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trading Instruments */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#E0E0E0] mb-8">Available Trading Instruments</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['BTC/USDT', 'ETH/USDT', 'EUR/USD', 'XAU/USD'].map((instrument) => (
              <div key={instrument} className="bg-gradient-to-r from-[#1C1C1C] to-[#161616] rounded-full px-6 py-3 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors duration-200">
                <span className="text-[#E0E0E0] font-semibold">{instrument}</span>
              </div>
            ))}
          </div>
          <p className="text-[#9A9A9A] text-sm mt-4">More instruments added via governance</p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;