import React, { useState, useEffect } from 'react';
import { roadmapData } from '../../mock/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle, Clock, Calendar, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const [animatedMilestones, setAnimatedMilestones] = useState(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-milestone-index');
            if (index !== null) {
              setTimeout(() => {
                setAnimatedMilestones(prev => new Set([...prev, parseInt(index)]));
              }, parseInt(index) * 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const milestones = document.querySelectorAll('[data-milestone-index]');
    milestones.forEach(milestone => observer.observe(milestone));

    return () => observer.disconnect();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-[#CFCFCF]" />;
      case 'current':
        return <Clock className="h-5 w-5 text-[#E0E0E0]" />;
      case 'upcoming':
        return <Calendar className="h-5 w-5 text-[#9A9A9A]" />;
      case 'planned':
        return <ArrowRight className="h-5 w-5 text-[#9A9A9A]" />;
      default:
        return <CheckCircle className="h-5 w-5 text-[#CFCFCF]" />;
    }
  };

  const getMilestoneStyles = (status, index) => {
    const isAnimated = animatedMilestones.has(index);
    
    switch (status) {
      case 'completed':
        return {
          dot: 'bg-[#CFCFCF]',
          card: `bg-gradient-to-br from-[#2A2A2A]/50 to-[#1C1C1C]/30 border-[#2A2A2A] hover:border-[#3A3A3A] ${isAnimated ? 'animate-in slide-in-from-left-4 fade-in duration-500' : 'opacity-0'}`,
          text: 'text-[#B3B3B3]',
          title: 'text-[#CFCFCF]'
        };
      case 'current':
        return {
          dot: 'bg-[#FFFFFF] shadow-[0_0_16px_rgba(255,255,255,0.4)] animate-pulse',
          card: `bg-gradient-to-br from-[#1C1C1C] to-[#161616] border-[#E6E6E6]/30 hover:border-[#E6E6E6]/50 ${isAnimated ? 'animate-in slide-in-from-right-4 fade-in duration-500' : 'opacity-0'}`,
          text: 'text-[#E0E0E0]',
          title: 'text-[#FFFFFF]'
        };
      case 'upcoming':
      case 'planned':
      default:
        return {
          dot: 'bg-[#3A3A3A]',
          card: `bg-gradient-to-br from-[#161616] to-[#1C1C1C] border-[#2A2A2A] hover:border-[#3A3A3A] ${isAnimated ? 'animate-in slide-in-from-left-4 fade-in duration-500' : 'opacity-0'}`,
          text: 'text-[#9A9A9A]',
          title: 'text-[#B3B3B3]'
        };
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#E0E0E0] to-[#B3B3B3] bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            Our journey from MVP to the world's leading decentralized prop trading platform. 
            Each milestone brings us closer to revolutionizing Web3 trading.
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#2A2A2A] hidden lg:block" />
          
          <div className="space-y-12">
            {roadmapData.map((milestone, index) => {
              const styles = getMilestoneStyles(milestone.status, index);
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  data-milestone-index={index}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#2A2A2A] to-[#1C1C1C] border-2 border-[#3A3A3A] items-center justify-center relative z-10 backdrop-blur-sm">
                    <div className={`w-8 h-8 rounded-full ${styles.dot} flex items-center justify-center transition-all duration-300`}>
                      {milestone.status === 'current' && (
                        <div className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 max-w-lg">
                    <Card className={`${styles.card} transition-all duration-300 group hover:scale-105`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className={`${styles.title} text-xl font-bold transition-colors duration-300`}>
                            {milestone.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(milestone.status)}
                            <span className={`text-sm font-semibold ${styles.text} uppercase tracking-wider opacity-80`}>
                              {milestone.quarter}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {milestone.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3 group/item">
                              <div className={`w-2 h-2 ${styles.dot} rounded-full mt-2 flex-shrink-0 transition-all duration-200 group-hover/item:scale-125`} />
                              <span className={`${styles.text} text-sm leading-relaxed transition-colors duration-300`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#161616]/60 rounded-2xl p-8 backdrop-blur-sm border border-[#2A2A2A] max-w-2xl mx-auto hover:border-[#3A3A3A] transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#E0E0E0] mb-4">Be Part of the Journey</h3>
            <p className="text-[#B3B3B3] mb-6 leading-relaxed">
              Join our community and help shape the future of decentralized prop trading. 
              Early supporters get exclusive benefits and priority access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://t.me/averix_founder', '_blank')}
                className="bg-[#E0E0E0] text-[#0A0A0A] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFFFFF] transition-colors duration-200 shadow-[0_0_20px_rgba(224,224,224,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Join Telegram
              </button>
              <button 
                onClick={() => window.open('mailto:averix.found@gmail.com', '_blank')}
                className="border border-[#2A2A2A] text-[#E0E0E0] px-6 py-3 rounded-lg font-semibold hover:bg-[#1C1C1C] hover:border-[#3A3A3A] transition-all duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;