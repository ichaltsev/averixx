import React, { useEffect, useRef } from 'react';

const TradingChart = ({ symbol, className = "" }) => {
  const containerRef = useRef();
  const widgetRef = useRef();

  // Symbol mapping for TradingView
  const symbolMapping = {
    'BTC/USDT': 'BINANCE:BTCUSDT',
    'ETH/USDT': 'BINANCE:ETHUSDT', 
    'EUR/USD': 'FX:EURUSD',
    'XAU/USD': 'OANDA:XAUUSD',
    'GER40': 'XETR:DAX' // Placeholder for disabled symbol
  };

  useEffect(() => {
    if (containerRef.current && symbol) {
      // Clean up previous widget safely
      if (widgetRef.current && containerRef.current) {
        try {
          containerRef.current.innerHTML = '';
        } catch (error) {
          console.warn('Error cleaning up chart:', error);
        }
      }

      // Create new TradingView widget
      const script = document.createElement('script');
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

      if (containerRef.current) {
        try {
          containerRef.current.appendChild(script);
          widgetRef.current = script;
        } catch (error) {
          console.warn('Error appending chart script:', error);
        }
      }
    }
  }, [symbol]);

  return (
    <div className={`tradingview-widget-container ${className}`} style={{ height: '100%', width: '100%' }}>
      <div 
        ref={containerRef}
        className="tradingview-widget"
        style={{ height: '100%', width: '100%' }}
      />
      <div className="tradingview-widget-copyright">
        <a 
          href={`https://www.tradingview.com/symbols/${symbolMapping[symbol] || 'BINANCE:BTCUSDT'}/`}
          rel="noopener noreferrer" 
          target="_blank"
        >
          <span className="blue-text">{symbol || 'BTC/USDT'} Chart</span>
        </a>
      </div>
    </div>
  );
};

export default TradingChart;