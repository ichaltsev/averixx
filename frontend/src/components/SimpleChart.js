import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const SimpleChart = ({ symbol }) => {
  const [price, setPrice] = useState(0);
  const [change, setChange] = useState(0);
  const [isPositive, setIsPositive] = useState(true);

  // Mock prices for different symbols
  const basePrices = {
    'BTC/USDT': 43250.50,
    'ETH/USDT': 2580.75,
    'EUR/USD': 1.08945,
    'XAU/USD': 2025.30,
    'GER40': 16890.2
  };

  useEffect(() => {
    const basePrice = basePrices[symbol] || 43250.50;
    setPrice(basePrice);
    
    // Simulate price movements
    const interval = setInterval(() => {
      const volatility = {
        'BTC/USDT': 50,
        'ETH/USDT': 10,
        'EUR/USD': 0.0005,
        'XAU/USD': 5,
        'GER40': 20
      }[symbol] || 50;
      
      const changeAmount = (Math.random() - 0.5) * 2 * volatility;
      const newPrice = basePrice + changeAmount;
      const percentChange = ((newPrice - basePrice) / basePrice) * 100;
      
      setPrice(newPrice);
      setChange(percentChange);
      setIsPositive(percentChange >= 0);
    }, 2000);

    return () => clearInterval(interval);
  }, [symbol]);

  const formatPrice = (price) => {
    if (symbol === 'EUR/USD') {
      return price.toFixed(5);
    } else if (symbol === 'XAU/USD') {
      return price.toFixed(2);
    } else if (symbol === 'BTC/USDT' || symbol === 'GER40') {
      return price.toFixed(1);
    } else {
      return price.toFixed(2);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Mock Chart Line */}
      <div className="absolute inset-4">
        <svg className="w-full h-full">
          <path
            d="M 0 60 Q 100 40 200 50 T 400 45 T 600 55 T 800 40 T 1000 35"
            fill="none"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            strokeWidth="2"
            className="opacity-80"
          />
        </svg>
      </div>

      {/* Price Info Overlay */}
      <div className="absolute top-4 left-4 text-white z-10">
        <div className="text-lg font-bold mb-1">{symbol}</div>
        <div className="text-xs text-gray-400 mb-3">Live Market Simulation</div>
        
        <div className="text-2xl font-mono font-bold mb-1">
          ${formatPrice(price)}
        </div>
        
        <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {isPositive ? '+' : ''}{change.toFixed(2)}%
          <span className="text-gray-500 text-xs ml-1">(24h)</span>
        </div>
      </div>

      {/* Chart Controls */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        {['1m', '5m', '15m', '1h', '4h', '1D'].map((interval) => (
          <button
            key={interval}
            className={`px-2 py-1 text-xs rounded ${
              interval === '15m' 
                ? 'bg-white text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {interval}
          </button>
        ))}
      </div>

      {/* TradingView Credit */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500">
        Chart Simulation • Powered by Averix
      </div>
    </div>
  );
};

export default SimpleChart;