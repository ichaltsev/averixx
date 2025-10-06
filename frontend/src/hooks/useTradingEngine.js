import { useState, useEffect, useCallback } from 'react';

const DEMO_BALANCE = 10000; // 10,000 AVRX demo balance
const STORAGE_KEY = 'averix_trading_data';

// Mock market data - in real app this would come from API
const MOCK_MARKET_PRICES = {
  'BTC/USDT': 43250.5,
  'ETH/USDT': 2580.75,
  'EUR/USD': 1.08945,
  'XAU/USD': 2025.30,
  'GER40': 16890.2
};

export const useTradingEngine = () => {
  const [balance, setBalance] = useState(DEMO_BALANCE);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [history, setHistory] = useState([]);
  const [marketPrices, setMarketPrices] = useState(MOCK_MARKET_PRICES);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setBalance(data.balance || DEMO_BALANCE);
        setPositions(data.positions || []);
        setOrders(data.orders || []);
        setHistory(data.history || []);
      } catch (error) {
        console.error('Failed to load trading data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever state changes
  const saveData = useCallback((newBalance, newPositions, newOrders, newHistory) => {
    const data = {
      balance: newBalance,
      positions: newPositions,
      orders: newOrders,
      history: newHistory,
      lastUpdated: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, []);

  // Simulate market price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketPrices(prevPrices => {
        const newPrices = { ...prevPrices };
        
        // Add small random movements to prices
        Object.keys(newPrices).forEach(symbol => {
          const currentPrice = newPrices[symbol];
          const volatility = {
            'BTC/USDT': 0.001,    // 0.1%
            'ETH/USDT': 0.0015,   // 0.15%
            'EUR/USD': 0.0005,    // 0.05%
            'XAU/USD': 0.001,     // 0.1%
            'GER40': 0.0008       // 0.08%
          }[symbol] || 0.001;
          
          const change = (Math.random() - 0.5) * 2 * volatility;
          newPrices[symbol] = currentPrice * (1 + change);
        });
        
        return newPrices;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate equity (balance + unrealized P/L)
  const equity = balance + positions.reduce((total, position) => {
    const currentPrice = marketPrices[position.symbol] || position.entryPrice;
    const priceDiff = position.side === 'buy' 
      ? (currentPrice - position.entryPrice) 
      : (position.entryPrice - currentPrice);
    
    const contractSize = {
      'BTC/USDT': 0.001,
      'ETH/USDT': 0.01,
      'EUR/USD': 1000,
      'XAU/USD': 1,
      'GER40': 0.1
    }[position.symbol] || 1;
    
    return total + (priceDiff * position.quantity * contractSize);
  }, 0);

  // Place a new order
  const placeOrder = useCallback((orderData) => {
    const newOrder = {
      id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...orderData,
      status: 'pending',
      timestamp: Date.now()
    };

    if (orderData.type === 'market') {
      // Execute market order immediately
      executeOrder(newOrder);
    } else {
      // Add limit order to pending orders
      const newOrders = [...orders, newOrder];
      setOrders(newOrders);
      saveData(balance, positions, newOrders, history);
    }
  }, [balance, positions, orders, history, saveData]);

  // Execute an order (convert to position)
  const executeOrder = useCallback((order) => {
    const newPosition = {
      id: `pos_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      symbol: order.symbol,
      side: order.side,
      quantity: order.quantity,
      entryPrice: order.entryPrice,
      stopLoss: order.stopLoss,
      takeProfit: order.takeProfit,
      riskAmount: order.riskAmount,
      openedAt: Date.now()
    };

    const newPositions = [...positions, newPosition];
    setPositions(newPositions);
    
    // Remove from orders if it was a limit order
    const newOrders = orders.filter(o => o.id !== order.id);
    setOrders(newOrders);
    
    saveData(balance, newPositions, newOrders, history);
  }, [positions, orders, history, balance, saveData]);

  // Close a position
  const closePosition = useCallback((positionId, realizedPnL) => {
    const position = positions.find(p => p.id === positionId);
    if (!position) return;

    const exitPrice = marketPrices[position.symbol] || position.entryPrice;
    
    // Add to history
    const historyEntry = {
      id: `hist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...position,
      exitPrice,
      pnl: realizedPnL,
      closedAt: Date.now()
    };

    const newHistory = [historyEntry, ...history];
    const newPositions = positions.filter(p => p.id !== positionId);
    const newBalance = balance + realizedPnL;

    setHistory(newHistory);
    setPositions(newPositions);
    setBalance(newBalance);
    
    saveData(newBalance, newPositions, orders, newHistory);
  }, [positions, orders, history, balance, marketPrices, saveData]);

  // Cancel a pending order
  const cancelOrder = useCallback((orderId) => {
    const newOrders = orders.filter(o => o.id !== orderId);
    setOrders(newOrders);
    saveData(balance, positions, newOrders, history);
  }, [orders, positions, history, balance, saveData]);

  // Reset demo account
  const resetDemo = useCallback(() => {
    setBalance(DEMO_BALANCE);
    setPositions([]);
    setOrders([]);
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Check for stop loss / take profit triggers
  useEffect(() => {
    positions.forEach(position => {
      const currentPrice = marketPrices[position.symbol];
      if (!currentPrice) return;

      let shouldClose = false;
      
      // Check stop loss
      if (position.side === 'buy' && currentPrice <= position.stopLoss) {
        shouldClose = true;
      } else if (position.side === 'sell' && currentPrice >= position.stopLoss) {
        shouldClose = true;
      }
      
      // Check take profit
      if (position.side === 'buy' && currentPrice >= position.takeProfit) {
        shouldClose = true;
      } else if (position.side === 'sell' && currentPrice <= position.takeProfit) {
        shouldClose = true;
      }

      if (shouldClose) {
        const priceDiff = position.side === 'buy' 
          ? (currentPrice - position.entryPrice) 
          : (position.entryPrice - currentPrice);
        
        const contractSize = {
          'BTC/USDT': 0.001,
          'ETH/USDT': 0.01,
          'EUR/USD': 1000,
          'XAU/USD': 1,
          'GER40': 0.1
        }[position.symbol] || 1;
        
        const realizedPnL = priceDiff * position.quantity * contractSize;
        closePosition(position.id, realizedPnL);
      }
    });
  }, [positions, marketPrices, closePosition]);

  // Check for limit order executions
  useEffect(() => {
    orders.forEach(order => {
      const currentPrice = marketPrices[order.symbol];
      if (!currentPrice) return;

      let shouldExecute = false;
      
      // Check if limit order should be executed
      if (order.side === 'buy' && currentPrice <= order.entryPrice) {
        shouldExecute = true;
      } else if (order.side === 'sell' && currentPrice >= order.entryPrice) {
        shouldExecute = true;
      }

      if (shouldExecute) {
        executeOrder({ ...order, entryPrice: currentPrice });
      }
    });
  }, [orders, marketPrices, executeOrder]);

  return {
    balance,
    equity,
    positions,
    orders,
    history,
    marketPrices,
    placeOrder,
    closePosition,
    cancelOrder,
    resetDemo
  };
};