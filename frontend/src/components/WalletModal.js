import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Loader2, Wallet, AlertCircle, Download, CheckCircle } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const WalletModal = ({ isOpen, onClose }) => {
  const { connectWallet, isConnecting, supportedWallets, getWalletDetectionStatus } = useAuth();
  const [connectingWallet, setConnectingWallet] = useState(null);

  const handleWalletConnect = async (walletId) => {
    try {
      setConnectingWallet(walletId);
      await connectWallet(walletId);
      toast({
        title: "Wallet Connected!",
        description: "Welcome to Averix. Your trading journey begins now.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: error.message || "Unable to connect wallet. Please try again.",
        variant: "destructive"
      });
    } finally {
      setConnectingWallet(null);
    }
  };

  const getStatusIcon = (walletId) => {
    const status = getWalletDetectionStatus(walletId);
    const isCurrentlyConnecting = connectingWallet === walletId;
    
    if (isCurrentlyConnecting) {
      return <Loader2 className="h-4 w-4 animate-spin text-white" />;
    }
    
    switch (status) {
      case 'detecting':
        return <Loader2 className="h-3 w-3 animate-spin text-[#9A9A9A]" />;
      case 'installed':
        return <CheckCircle className="h-4 w-4 text-[#CFCFCF]" />;
      case 'not_installed':
        return <Download className="h-3 w-3 text-[#9A9A9A]" />;
      default:
        return null;
    }
  };

  const getStatusText = (walletId) => {
    const status = getWalletDetectionStatus(walletId);
    
    switch (status) {
      case 'detecting': return 'Detecting...';
      case 'installed': return 'Installed';
      case 'not_installed': return 'Install';
      default: return '';
    }
  };

  const isWalletClickable = (walletId) => {
    const status = getWalletDetectionStatus(walletId);
    return status === 'installed' && !isConnecting;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#161616] to-[#1C1C1C] border-[#2A2A2A] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold flex items-center justify-center gap-2 text-[#E0E0E0]">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-[#B3B3B3] text-sm mb-4">
              Connect your BNB Chain wallet to access trading features and personalized dashboard.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F3BA2F]/10 to-[#F3BA2F]/5 rounded-full px-4 py-2 border border-[#F3BA2F]/20">
              <div className="w-4 h-4 bg-[#F3BA2F] rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">B</span>
              </div>
              <span className="text-[#E0E0E0] text-sm font-medium">BNB Chain Network</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[#E0E0E0] font-semibold text-center mb-4">Choose Your Wallet</h3>
            
            <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto custom-scrollbar">
              {supportedWallets.map((wallet) => {
                const status = getWalletDetectionStatus(wallet.id);
                const isCurrentlyConnecting = connectingWallet === wallet.id;
                const clickable = isWalletClickable(wallet.id);
                
                return (
                  <Card 
                    key={wallet.id} 
                    className={`bg-gradient-to-r from-[#1C1C1C] to-[#161616] border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-200 ${
                      clickable ? 'hover:from-[#2A2A2A] hover:to-[#1C1C1C] cursor-pointer' : 'opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <CardContent className="p-4">
                      <Button
                        onClick={() => clickable && handleWalletConnect(wallet.id)}
                        disabled={!clickable}
                        className="w-full justify-start bg-transparent hover:bg-transparent text-white border-none p-0 h-auto disabled:opacity-100"
                      >
                        <div className="flex items-center space-x-4 w-full">
                          <div 
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2A2A2A] to-[#161616] border border-[#3A3A3A] flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: wallet.icon }}
                          />
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-[#E0E0E0] text-base">{wallet.name}</div>
                            <div className="text-xs text-[#9A9A9A] flex items-center gap-1 mt-1">
                              {getStatusIcon(wallet.id)}
                              <span>{getStatusText(wallet.id)}</span>
                            </div>
                          </div>
                          {isCurrentlyConnecting && (
                            <div className="text-[#9A9A9A] text-xs">
                              Connecting...
                            </div>
                          )}
                        </div>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2A2A2A]/30 to-[#1C1C1C]/30 rounded-lg p-4 border border-[#2A2A2A]">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-[#CFCFCF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[#E0E0E0] font-medium text-sm mb-1">Secure Connection</div>
                <p className="text-[#9A9A9A] text-xs leading-relaxed">
                  Only connect wallets you control. Never share your private keys or seed phrases. 
                  All connections are secure and your keys remain in your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;