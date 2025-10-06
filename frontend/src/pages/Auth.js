import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Wallet, Shield, Users, TrendingUp } from 'lucide-react';
import WalletModal from '../components/WalletModal';

const Auth = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: Shield,
      title: 'Secure Trading',
      description: 'Connect your wallet and trade with enforced risk management protocols'
    },
    {
      icon: TrendingUp,
      title: 'Level Up',
      description: 'Progress from Bronze to Prime through seasonal performance'
    },
    {
      icon: Users,
      title: 'Copy Trading',
      description: 'Follow Prime traders and copy their successful strategies'
    }
  ];

  return (
    <>
      <div className="pt-16 min-h-screen bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <img 
              src="https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/e37qpmnv_logo.png" 
              alt="Averix" 
              className="h-16 w-16 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Connect Your Wallet
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of decentralized prop trading. Connect your wallet to access 
              personalized dashboard, trading features, and seasonal competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Wallet Connection */}
            <div className="order-2 lg:order-1">
              <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl mb-4">Choose Your Wallet</CardTitle>
                  <p className="text-gray-300">
                    Connect your wallet to unlock all Averix features and start your trading journey.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <button
                    onClick={() => setIsWalletModalOpen(true)}
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-lg p-6 flex items-center justify-center space-x-3 font-semibold text-lg group"
                  >
                    <Wallet className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span>Connect Wallet</span>
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-4">Supported Networks</p>
                    <div className="flex justify-center space-x-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/30 rounded-full flex items-center justify-center mb-2 border border-yellow-400/20">
                          <span className="text-yellow-400 font-bold text-sm">BNB</span>
                        </div>
                        <span className="text-xs text-gray-400">BNB Chain</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/30 rounded-full flex items-center justify-center mb-2 border border-blue-400/20">
                          <span className="text-blue-400 font-bold text-sm">SUI</span>
                        </div>
                        <span className="text-xs text-gray-400">Sui Network</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-green-400" />
                      Secure Connection
                    </h4>
                    <p className="text-sm text-gray-300">
                      Your wallet stays secure. We never store your private keys or seed phrases. 
                      Only connect wallets you control and trust.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Features */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">Why Connect Your Wallet?</h2>
              
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 group">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">What happens after connecting?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Access your personalized trading dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Start with Bronze level and progress to Prime</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Participate in seasonal competitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Earn achievements and unlock features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
      />
    </>
  );
};

export default Auth;