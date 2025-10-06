import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Loader2, Wallet, AlertCircle } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const WalletModal = ({ isOpen, onClose }) => {
  const { connectWallet, isConnecting, supportedWallets } = useAuth();
  const [selectedNetwork, setSelectedNetwork] = useState('bnb');
  const [connectingWallet, setConnectingWallet] = useState(null);

  const handleWalletConnect = async (walletId) => {
    try {
      setConnectingWallet(walletId);
      await connectWallet(walletId, selectedNetwork);
      toast({
        title: "Wallet Connected!",
        description: "Welcome to Averix. Your trading journey begins now.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Unable to connect wallet. Please try again.",
        variant: "destructive"
      });
    } finally {
      setConnectingWallet(null);
    }
  };

  const isWalletInstalled = (walletId) => {
    // Mock wallet detection - in reality, you'd check window.ethereum, etc.
    const installedWallets = ['metamask', 'trustwallet', 'safepal', 'sui_wallet'];
    return installedWallets.includes(walletId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#161616] to-[#0A0A0A] border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold flex items-center justify-center gap-2">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-300 text-sm text-center">
            Connect your wallet to access trading features and personalized dashboard.
          </p>

          <Tabs value={selectedNetwork} onValueChange={setSelectedNetwork} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/5">
              <TabsTrigger value="bnb" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                BNB Chain
              </TabsTrigger>
              <TabsTrigger value="sui" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                Sui Network
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="bnb" className="space-y-2 mt-4">
              <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                {supportedWallets.bnb.map((wallet) => {
                  const isInstalled = isWalletInstalled(wallet.id);
                  const isCurrentlyConnecting = connectingWallet === wallet.id;
                  
                  return (
                    <Card key={wallet.id} className="bg-gradient-to-r from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-200">
                      <CardContent className="p-3">
                        <Button
                          onClick={() => handleWalletConnect(wallet.id)}
                          disabled={isConnecting || !isInstalled}
                          className="w-full justify-start bg-transparent hover:bg-white/10 text-white border-none p-0 h-auto"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{wallet.icon}</span>
                            <div className="flex-1 text-left">
                              <div className="font-semibold">{wallet.name}</div>
                              {!isInstalled && (
                                <div className="text-xs text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  Not installed
                                </div>
                              )}
                            </div>
                            {isCurrentlyConnecting && (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            )}
                          </div>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="sui" className="space-y-2 mt-4">
              <div className="grid grid-cols-1 gap-2">
                {supportedWallets.sui.map((wallet) => {
                  const isInstalled = isWalletInstalled(wallet.id);
                  const isCurrentlyConnecting = connectingWallet === wallet.id;
                  
                  return (
                    <Card key={wallet.id} className="bg-gradient-to-r from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-200">
                      <CardContent className="p-3">
                        <Button
                          onClick={() => handleWalletConnect(wallet.id)}
                          disabled={isConnecting || !isInstalled}
                          className="w-full justify-start bg-transparent hover:bg-white/10 text-white border-none p-0 h-auto"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{wallet.icon}</span>
                            <div className="flex-1 text-left">
                              <div className="font-semibold">{wallet.name}</div>
                              {!isInstalled && (
                                <div className="text-xs text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  Not installed
                                </div>
                              )}
                            </div>
                            {isCurrentlyConnecting && (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            )}
                          </div>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Hot Wallet Notice</span>
            </div>
            <p className="text-xs text-gray-300">
              Only connect wallets you control. Never share your private keys or seed phrases.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;