import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[#161616] to-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/e37qpmnv_logo.png" 
                alt="Averix" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Averix</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Building the future of decentralized finance through disciplined prop trading with Web3 incentives.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/averix_founder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:averix.found@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#tokenomics" className="text-gray-300 hover:text-white transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/#ecosystem" className="text-gray-300 hover:text-white transition-colors">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/#roadmap" className="text-gray-300 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/whitepaper" className="text-gray-300 hover:text-white transition-colors">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-left">
                  Risk Disclosure
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-left">
                  Documentation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Averix. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Founder: Ivan Chaltsev</span>
              <a 
                href="mailto:averix.found@gmail.com" 
                className="hover:text-white transition-colors flex items-center"
              >
                Contact <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;