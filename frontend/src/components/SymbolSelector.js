import React from 'react';
import { Button } from './ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Badge } from './ui/badge';

const SymbolSelector = ({ selectedSymbol, onSymbolChange }) => {
  const symbols = [
    { symbol: 'BTC/USDT', name: 'Bitcoin', enabled: true },
    { symbol: 'ETH/USDT', name: 'Ethereum', enabled: true },
    { symbol: 'EUR/USD', name: 'Euro Dollar', enabled: true },
    { symbol: 'XAU/USD', name: 'Gold', enabled: true },
    { symbol: 'GER40', name: 'DAX Index', enabled: false }
  ];

  return (
    <div className="flex items-center gap-4 p-4 border-b border-border">
      {/* Desktop - Button Grid */}
      <div className="hidden md:flex items-center gap-2">
        {symbols.map((item) => (
          <div key={item.symbol} className="relative">
            <Button
              variant={selectedSymbol === item.symbol ? "default" : "outline"}
              onClick={() => item.enabled && onSymbolChange(item.symbol)}
              disabled={!item.enabled}
              className={`
                relative min-w-[80px] h-10 text-sm font-medium transition-all
                ${!item.enabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${selectedSymbol === item.symbol 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-400'
                }
              `}
            >
              {item.symbol}
              {!item.enabled && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 text-xs px-1 py-0"
                >
                  Soon
                </Badge>
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Mobile - Dropdown */}
      <div className="md:hidden flex-1">
        <Select value={selectedSymbol} onValueChange={onSymbolChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Symbol" />
          </SelectTrigger>
          <SelectContent>
            {symbols.map((item) => (
              <SelectItem 
                key={item.symbol} 
                value={item.symbol}
                disabled={!item.enabled}
                className={!item.enabled ? 'opacity-50' : ''}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{item.symbol}</span>
                  <span className="text-sm text-muted-foreground ml-2">{item.name}</span>
                  {!item.enabled && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Soon
                    </Badge>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Symbol Info */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">
          {symbols.find(s => s.symbol === selectedSymbol)?.name || 'Bitcoin'}
        </span>
      </div>
    </div>
  );
};

export default SymbolSelector;