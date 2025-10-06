import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Menu, X, LogOut, Wallet, Copy, Check } from 'lucide-react';
import WalletModal from './WalletModal';
import { toast } from '../hooks/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [copied, setCopied] = useState(false);
  const { user, disconnectWallet } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/', section: 'hero' },
    { name: 'About', href: '/#about', section: 'about' },
    { name: 'Tokenomics', href: '/#tokenomics', section: 'tokenomics' },
    { name: 'Ecosystem', href: '/#ecosystem', section: 'ecosystem' },
    { name: 'Roadmap', href: '/#roadmap', section: 'roadmap' },
    { name: 'Whitepaper', href: '/whitepaper', section: 'whitepaper' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;
      
      const sections = ['hero', 'about', 'tokenomics', 'ecosystem', 'roadmap'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (href, section) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/');
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected successfully.",
    });
  };

  const copyAddress = async () => {
    if (user?.address) {
      await navigator.clipboard.writeText(user.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard.",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/e37qpmnv_logo.png" 
                alt="Averix" 
                className="h-8 w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Averix
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-white ${
                    (location.pathname === item.href || 
                     (item.section && activeSection === item.section))
                      ? 'text-white border-b border-white/50'
                      : 'text-gray-300 hover:border-b hover:border-white/30'
                  } pb-1`}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      Dashboard
                    </Button>
                  </Link>
                  
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-white/5 to-white/10 rounded-full px-3 py-2 border border-white/10">
                    <span className="text-lg">{user.walletIcon}</span>
                    <span className="text-sm text-white font-mono">{user.truncatedAddress}</span>
                    <button
                      onClick={copyAddress}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                  
                  <Button 
                    onClick={handleDisconnect}
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => setIsWalletModalOpen(true)}
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-200"
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#161616]/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    (location.pathname === item.href || 
                     (item.section && activeSection === item.section))
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  } rounded-md`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-white/10 mt-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <span className="text-lg">{user.walletIcon}</span>
                        <span className="font-mono">{user.truncatedAddress}</span>
                      </div>
                    </div>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      onClick={handleDisconnect}
                      variant="ghost" 
                      className="w-full text-gray-300 hover:text-white hover:bg-white/10"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Disconnect
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => {
                      setIsWalletModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    <Wallet className="h-4 w-4 mr-2" />
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;