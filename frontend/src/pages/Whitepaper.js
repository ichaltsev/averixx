import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Whitepaper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    window.open('https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/20f6ypbl_WhitePaper.html', '_blank');
  };

  const sections = [
    { title: '1. Vision & Summary', anchor: 'vision' },
    { title: '2. Problem & Insight', anchor: 'problem' },
    { title: '3. How Averix Works', anchor: 'how-it-works' },
    { title: '4. Core Mechanics', anchor: 'mechanics' },
    { title: '5. Levels & Progression', anchor: 'levels' },
    { title: '6. Achievement Badges', anchor: 'achievements' },
    { title: '7. Quest System', anchor: 'quests' },
    { title: '8. Copy-Trading Marketplace', anchor: 'copy-trading' },
    { title: '9. Mentor Program', anchor: 'mentor' },
    { title: '10. Tokenomics', anchor: 'tokenomics' },
    { title: '11. Architecture & Security', anchor: 'architecture' },
    { title: '12. Compliance', anchor: 'compliance' },
    { title: '13. KPIs & Metrics', anchor: 'kpis' },
    { title: '14. Roadmap', anchor: 'roadmap' }
  ];

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-300">Loading whitepaper...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/e37qpmnv_logo.png" 
              alt="Averix" 
              className="h-16 w-16 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Averix Whitepaper
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">Decentralized Prop Trading Platform</p>
            <p className="text-gray-400">
              Founder: <span className="text-white font-semibold">Ivan Chaltsev</span> | 
              Contact: <a href="mailto:averix.found@gmail.com" className="text-white hover:underline">averix.found@gmail.com</a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleDownload} className="bg-white text-black hover:bg-gray-200">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/20f6ypbl_WhitePaper.html', '_blank')}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Online
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#${section.anchor}`}
                      className="block text-sm text-gray-300 hover:text-white transition-colors py-1 border-l-2 border-transparent hover:border-white/30 pl-3"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardContent className="p-8">
                {/* Embedded Whitepaper Content */}
                <div className="prose prose-invert max-w-none">
                  <section id="vision" className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Vision & Summary</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Averix combines prop-trading discipline with Web3 incentives. Access to trading is unlocked by staking the TFT token for fixed terms. Risk is enforced at the order layer: position ≤ 5% of balance; max allowed R:R ≤ 5; mandatory SL/TP.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      30-day seasons with public leaderboards drive merit, while Level NFTs (Bronze → Silver → Gold → Prime) and non-transferable SBT-style achievements create a verifiable trader identity.
                    </p>
                  </section>

                  <section id="problem" className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Problem & Insight</h2>
                    <ul className="text-gray-300 space-y-2 mb-4">
                      <li>• Retail traders struggle with risk discipline and transparent performance.</li>
                      <li>• Prop firms enforce rules, but are off-chain/permissioned → limited openness.</li>
                      <li>• Averix brings on-chain-aware, risk-enforced environment with seasonal merit and aligned incentives.</li>
                    </ul>
                  </section>

                  <section id="how-it-works" className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">3. How Averix Works</h2>
                    <div className="flex items-center justify-center space-x-4 py-6 bg-gradient-to-r from-white/5 to-white/10 rounded-lg">
                      <span className="text-white font-semibold">Stake TFT</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-white font-semibold">Trade (Risk-Managed)</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-white font-semibold">Earn (Rewards / Buffs)</span>
                    </div>
                  </section>

                  <section id="mechanics" className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Core Mechanics</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Staking Access</h3>
                        <p className="text-gray-300">Lock TFT for 14 / 30 / 90 / 180 / 360 days. Longer lock → lower variable fee; at 360 days variable fee can reach 0%. During lock, access is active; after maturity, principal + applicable rewards can be withdrawn.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Risk Engine (enforced)</h3>
                        <p className="text-gray-300">Orders must comply with risk rules: position ≤ 5%; R:R ≤ 5; SL/TP mandatory. Non-compliant orders are rejected; violations are logged.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Instruments at Launch</h3>
                        <p className="text-gray-300">BTC/USDT, ETH/USDT, EUR/USD, XAU/USD; expansions via governance.</p>
                      </div>
                    </div>
                  </section>

                  {/* Continue with more sections... */}
                  <div className="text-center mt-12 p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-lg">
                    <p className="text-gray-300 mb-4">View the complete whitepaper with all technical details</p>
                    <Button onClick={handleDownload} className="bg-white text-black hover:bg-gray-200">
                      <Download className="h-4 w-4 mr-2" />
                      Download Full Whitepaper
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;