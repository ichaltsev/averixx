import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const SUPPORTED_WALLETS = {
  bnb: [
    { id: 'metamask', name: 'MetaMask', icon: '🦊' },
    { id: 'trustwallet', name: 'Trust Wallet', icon: '🛡️' },
    { id: 'safepal', name: 'SafePal', icon: '🔐' },
    { id: 'tokenpocket', name: 'TokenPocket', icon: '💼' },
    { id: 'mathwallet', name: 'MathWallet', icon: '🧮' },
    { id: 'onto', name: 'ONTO Wallet', icon: '🔗' },
    { id: 'bitkeep', name: 'BitKeep', icon: '🔑' },
    { id: 'blocto', name: 'Blocto', icon: '🌊' },
    { id: 'zerion', name: 'Zerion Wallet', icon: '⚡' },
    { id: 'rabby', name: 'Rabby Wallet', icon: '🐰' }
  ],
  sui: [
    { id: 'sui_wallet', name: 'Sui Wallet', icon: '🌊' },
    { id: 'suiet', name: 'Suiet', icon: '💧' },
    { id: 'ethos', name: 'Ethos Wallet', icon: '⚖️' }
  ]
};

const generateMockAddress = (walletId) => {
  const prefixes = {
    metamask: '0x',
    trustwallet: '0x',
    safepal: '0x',
    tokenpocket: '0x',
    mathwallet: '0x',
    onto: '0x',
    bitkeep: '0x',
    blocto: '0x',
    zerion: '0x',
    rabby: '0x',
    sui_wallet: '0x',
    suiet: '0x',
    ethos: '0x'
  };
  
  const addresses = {
    metamask: '0x742d35Cc6641C396b9db2093E69aA4b295e5A9F7',
    trustwallet: '0x8E8C1A4b7e6D4f5A3B2C9D8E7F6A5B4C3D2E1F0A',
    safepal: '0x1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C',
    tokenpocket: '0x9A8B7C6D5E4F3A2B1C0D9E8F7A6B5C4D3E2F1A0B',
    mathwallet: '0x5D4C3B2A1F0E9D8C7B6A5F4E3D2C1B0A9F8E7D6C',
    onto: '0x3F2E1D0C9B8A7F6E5D4C3B2A1F0E9D8C7B6A5F4E',
    bitkeep: '0x7A6B5C4D3E2F1A0B9C8D7E6F5A4B3C2D1E0F9A8B',
    blocto: '0x2E1F0A9B8C7D6E5F4A3B2C1D0E9F8A7B6C5D4E3F',
    zerion: '0x6C5D4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8C7D',
    rabby: '0x4B3C2D1E0F9A8B7C6D5E4F3A2B1C0D9E8F7A6B5C',
    sui_wallet: '0x8F7A6B5C4D3E2F1A0B9C8D7E6F5A4B3C2D1E0F9A',
    suiet: '0x1E0F9A8B7C6D5E4F3A2B1C0D9E8F7A6B5C4D3E2F',
    ethos: '0x5A4B3C2D1E0F9A8B7C6D5E4F3A2B1C0D9E8F7A6B'
  };
  
  return addresses[walletId] || '0x742d35Cc6641C396b9db2093E69aA4b295e5A9F7';
};

const truncateAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('averix_wallet_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const connectWallet = async (walletId, network = 'bnb') => {
    setIsConnecting(true);
    
    // Simulate wallet connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const selectedWallet = SUPPORTED_WALLETS[network].find(w => w.id === walletId);
    const address = generateMockAddress(walletId);
    
    const userData = {
      id: walletId,
      walletId,
      walletName: selectedWallet?.name || 'Unknown Wallet',
      walletIcon: selectedWallet?.icon || '🔗',
      address,
      truncatedAddress: truncateAddress(address),
      network,
      level: 'Bronze',
      connectedAt: new Date().toISOString()
    };
    
    setUser(userData);
    localStorage.setItem('averix_wallet_user', JSON.stringify(userData));
    setIsConnecting(false);
    
    return userData;
  };

  const disconnectWallet = () => {
    setUser(null);
    localStorage.removeItem('averix_wallet_user');
  };

  const value = {
    user,
    loading,
    isConnecting,
    connectWallet,
    disconnectWallet,
    supportedWallets: SUPPORTED_WALLETS,
    truncateAddress
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};