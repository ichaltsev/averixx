import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#161616] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img 
            src="https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/e37qpmnv_logo.png" 
            alt="Averix" 
            className="h-20 w-20 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
            style={{
              filter: isLoaded ? 'none' : 'blur(4px)',
              transform: isLoaded ? 'scale(1)' : 'scale(0.8)'
            }}
          />
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Averix
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-gray-200">
            Building the Future of
            <span className="block mt-2 font-semibold text-white">
              Decentralized Finance
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A decentralized prop trading platform that combines trading discipline with Web3 incentives. 
            Stake TFT tokens, trade with enforced risk management, and earn rewards through seasonal competitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg" 
              className="group bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg px-8 py-6 font-semibold"
            >
              Explore Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link to="/whitepaper">
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg px-8 py-6 font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Read Whitepaper
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="group text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 text-lg px-8 py-6 font-semibold"
              onClick={() => window.open('https://t.me/averix_founder', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">5%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Max Position Size</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">30</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Day Seasons</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">360</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Max Stake Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;