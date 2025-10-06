import React from 'react';
import { roadmapData } from '../../mock/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle, Clock, Calendar, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'current':
        return <Clock className="h-5 w-5 text-blue-400" />;
      case 'upcoming':
        return <Calendar className="h-5 w-5 text-yellow-400" />;
      case 'planned':
        return <ArrowRight className="h-5 w-5 text-gray-400" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'from-blue-500/10 to-blue-600/20 border-blue-500/20';
      case 'upcoming':
        return 'from-yellow-500/10 to-yellow-600/20 border-yellow-500/20';
      case 'planned':
        return 'from-gray-500/10 to-gray-600/20 border-gray-500/20';
      default:
        return 'from-green-500/10 to-green-600/20 border-green-500/20';
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey from MVP to the world's leading decentralized prop trading platform. 
            Each milestone brings us closer to revolutionizing Web3 trading.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden lg:block" />
          
          <div className="space-y-12">
            {roadmapData.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/20 border-2 border-white/20 items-center justify-center relative z-10">
                  {getStatusIcon(milestone.status)}
                </div>
                
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <Card className={`bg-gradient-to-br ${getStatusColor(milestone.status)} hover:from-white/15 hover:to-white/25 transition-all duration-300 group`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-xl">{milestone.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(milestone.status)}
                          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                            {milestone.quarter}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Be Part of the Journey</h3>
            <p className="text-gray-300 mb-6">
              Join our community and help shape the future of decentralized prop trading. 
              Early supporters get exclusive benefits and priority access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://t.me/averix_founder', '_blank')}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Join Telegram
              </button>
              <button 
                onClick={() => window.open('mailto:averix.found@gmail.com', '_blank')}
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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