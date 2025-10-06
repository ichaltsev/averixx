import React, { useEffect, useRef, useState } from 'react';

const TradingChart = ({ symbol, className = "" }) => {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Symbol mapping for TradingView
  const symbolMapping = {
    'BTC/USDT': 'BINANCE:BTCUSDT',
    'ETH/USDT': 'BINANCE:ETHUSDT', 
    'EUR/USD': 'FX:EURUSD',
    'XAU/USD': 'OANDA:XAUUSD',
    'GER40': 'XETR:DAX' // Placeholder for disabled symbol
  };

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (containerRef.current && symbol) {
        try {
          // Clean up previous widget safely
          if (widgetRef.current && containerRef.current) {
            containerRef.current.innerHTML = '';
          }

          // Create new TradingView widget
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
          script.async = true;
          
          script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: symbolMapping[symbol] || 'BINANCE:BTCUSDT',
            interval: "15",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            backgroundColor: "rgba(0, 0, 0, 1)",
            gridColor: "rgba(42, 46, 57, 0)",
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            calendar: false,
            hide_volume: false,
            support_host: "https://www.tradingview.com"
          });

          script.onload = () => {
            setIsLoading(false);
            setError(null);
          };

          script.onerror = () => {
            setError('Failed to load TradingView chart');
            setIsLoading(false);
          };

          if (containerRef.current) {
            containerRef.current.appendChild(script);
            widgetRef.current = script;
          }
        } catch (error) {
          console.warn('Error setting up chart:', error);
          setError('Chart initialization error');
          setIsLoading(false);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [symbol]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (containerRef.current && widgetRef.current) {
        try {
          containerRef.current.innerHTML = '';
        } catch (error) {
          console.warn('Error cleaning up chart on unmount:', error);
        }
      }
    };
  }, []);

  return (
    <div className={`tradingview-widget-container relative ${className}`} style={{ height: '100%', width: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-center">
            <div className="animate-pulse mb-2">Loading Chart...</div>
            <div className="text-sm text-gray-400">{symbol || 'BTC/USDT'}</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-red-400 text-center">
            <div className="mb-2">Chart Error</div>
            <div className="text-sm text-gray-400">{error}</div>
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="tradingview-widget"
        style={{ height: '100%', width: '100%' }}
      />
      
      {!error && (
        <div className="tradingview-widget-copyright">
          <a 
            href={`https://www.tradingview.com/symbols/${symbolMapping[symbol] || 'BINANCE:BTCUSDT'}/`}
            rel="noopener noreferrer" 
            target="_blank"
          >
            <span className="blue-text">{symbol || 'BTC/USDT'} Chart</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default TradingChart;