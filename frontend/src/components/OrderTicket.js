import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

const OrderTicket = ({ 
  selectedSymbol, 
  balance, 
  onPlaceOrder, 
  marketPrices = {} 
}) => {
  const [orderType, setOrderType] = useState('market');
  const [side, setSide] = useState('buy');
  const [riskPercent, setRiskPercent] = useState('1');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [limitPrice, setLimitPrice] = useState('');

  // Contract specifications
  const contractSpecs = {
    'BTC/USDT': { size: 0.001, minTick: 0.1 },
    'ETH/USDT': { size: 0.01, minTick: 0.01 },
    'EUR/USD': { size: 1000, minTick: 0.00001 },
    'XAU/USD': { size: 1, minTick: 0.01 },
    'GER40': { size: 0.1, minTick: 0.1 }
  };

  const currentPrice = marketPrices[selectedSymbol] || 0;
  const entryPrice = orderType === 'market' ? currentPrice : parseFloat(limitPrice) || 0;
  const slPrice = parseFloat(stopLoss) || 0;
  const tpPrice = parseFloat(takeProfit) || 0;
  const riskAmount = balance * (parseFloat(riskPercent) / 100);

  // Calculate position size based on risk
  const positionCalculation = useMemo(() => {
    if (!selectedSymbol || !entryPrice || !slPrice || !riskAmount) {
      return { quantity: 0, valid: false, reason: 'Missing required fields' };
    }

    const spec = contractSpecs[selectedSymbol];
    if (!spec) {
      return { quantity: 0, valid: false, reason: 'Invalid symbol' };
    }

    const priceDistance = Math.abs(entryPrice - slPrice);
    if (priceDistance < spec.minTick) {
      return { quantity: 0, valid: false, reason: 'Stop loss too close to entry' };
    }

    // Calculate max quantity based on risk
    const maxQuantity = Math.floor(riskAmount / (priceDistance * spec.size));
    
    if (maxQuantity < 1) {
      return { quantity: 0, valid: false, reason: 'Increase risk % or widen SL' };
    }

    return { quantity: maxQuantity, valid: true, reason: null };
  }, [selectedSymbol, entryPrice, slPrice, riskAmount]);

  // Validation
  const validation = useMemo(() => {
    const errors = [];
    
    // Risk validation
    if (parseFloat(riskPercent) > 5) {
      errors.push('Risk cannot exceed 5%');
    }
    
    // Stop loss validation
    if (side === 'buy' && slPrice >= entryPrice) {
      errors.push('Stop loss must be below entry price for long positions');
    }
    if (side === 'sell' && slPrice <= entryPrice) {
      errors.push('Stop loss must be above entry price for short positions');
    }
    
    // Take profit validation
    if (side === 'buy' && tpPrice <= entryPrice) {
      errors.push('Take profit must be above entry price for long positions');
    }
    if (side === 'sell' && tpPrice >= entryPrice) {
      errors.push('Take profit must be below entry price for short positions');
    }
    
    // Required fields
    if (!stopLoss || !takeProfit) {
      errors.push('Stop Loss and Take Profit are mandatory');
    }

    // GER40 disabled
    if (selectedSymbol === 'GER40') {
      errors.push('GER40 trading coming soon');
    }

    return {
      isValid: errors.length === 0 && positionCalculation.valid,
      errors
    };
  }, [side, entryPrice, slPrice, tpPrice, stopLoss, takeProfit, selectedSymbol, riskPercent, positionCalculation.valid]);

  const handlePlaceOrder = () => {
    if (!validation.isValid) return;

    const order = {
      symbol: selectedSymbol,
      side,
      type: orderType,
      quantity: positionCalculation.quantity,
      entryPrice: entryPrice,
      stopLoss: slPrice,
      takeProfit: tpPrice,
      riskAmount,
      riskPercent: parseFloat(riskPercent),
      timestamp: Date.now()
    };

    onPlaceOrder(order);
    
    // Reset form
    setStopLoss('');
    setTakeProfit('');
    if (orderType === 'limit') setLimitPrice('');
  };

  const quickRiskButtons = ['1', '2.5', '5'];

  return (
    <div className="p-4 space-y-4 bg-card border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Order Ticket</h3>
        <Badge variant="outline" className="text-xs">
          {selectedSymbol}
        </Badge>
      </div>

      <Separator />

      {/* Order Type & Side */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="orderType">Order Type</Label>
          <Select value={orderType} onValueChange={setOrderType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="market">Market</SelectItem>
              <SelectItem value="limit">Limit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="side">Side</Label>
          <Select value={side} onValueChange={setSide}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span>Buy/Long</span>
                </div>
              </SelectItem>
              <SelectItem value="sell">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                  <span>Sell/Short</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Limit Price (only for limit orders) */}
      {orderType === 'limit' && (
        <div className="space-y-2">
          <Label htmlFor="limitPrice">Limit Price</Label>
          <Input
            id="limitPrice"
            type="number"
            step="0.00001"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            placeholder="Enter limit price"
          />
        </div>
      )}

      {/* Risk Management */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Risk Management</Label>
          <Badge variant="secondary" className="text-xs">
            Max 5%
          </Badge>
        </div>

        {/* Quick Risk Buttons */}
        <div className="flex gap-2">
          {quickRiskButtons.map((percent) => (
            <Button
              key={percent}
              variant={riskPercent === percent ? "default" : "outline"}
              size="sm"
              onClick={() => setRiskPercent(percent)}
              className="flex-1"
            >
              {percent}%
            </Button>
          ))}
        </div>

        {/* Custom Risk Input */}
        <div className="space-y-2">
          <Label htmlFor="riskPercent">Risk % (Custom)</Label>
          <Input
            id="riskPercent"
            type="number"
            min="0.1"
            max="5"
            step="0.1"
            value={riskPercent}
            onChange={(e) => setRiskPercent(e.target.value)}
            placeholder="1.0"
          />
        </div>
      </div>

      {/* Stop Loss & Take Profit */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="stopLoss" className="text-red-500">
            Stop Loss *
          </Label>
          <Input
            id="stopLoss"
            type="number"
            step="0.00001"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            placeholder="Required"
            className="border-red-300 focus:border-red-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="takeProfit" className="text-green-500">
            Take Profit *
          </Label>
          <Input
            id="takeProfit"
            type="number"
            step="0.00001"
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
            placeholder="Required"
            className="border-green-300 focus:border-green-500"
          />
        </div>
      </div>

      {/* Position Info */}
      {entryPrice > 0 && (
        <div className="p-3 bg-muted rounded-lg space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Entry Price:</span>
            <span className="font-mono">{entryPrice.toFixed(5)}</span>
          </div>
          <div className="flex justify-between">
            <span>Risk Amount:</span>
            <span className="font-mono">{riskAmount.toFixed(2)} AVRX</span>
          </div>
          <div className="flex justify-between">
            <span>Position Size:</span>
            <span className="font-mono">
              {positionCalculation.quantity} contracts
            </span>
          </div>
          {positionCalculation.reason && !positionCalculation.valid && (
            <div className="flex items-center gap-2 text-yellow-600">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-xs">{positionCalculation.reason}</span>
            </div>
          )}
        </div>
      )}

      {/* Validation Errors */}
      {validation.errors.length > 0 && (
        <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center gap-2 text-red-400 mb-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="font-semibold text-sm">Validation Errors</span>
          </div>
          <ul className="text-xs space-y-1">
            {validation.errors.map((error, index) => (
              <li key={index} className="text-red-300">• {error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Place Order Button */}
      <Button
        onClick={handlePlaceOrder}
        disabled={!validation.isValid}
        className={`w-full h-12 font-semibold ${
          side === 'buy' 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-red-600 hover:bg-red-700 text-white'
        }`}
      >
        {side === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
      </Button>
    </div>
  );
};

export default OrderTicket;