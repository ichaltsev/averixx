import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import TradingTerminal from './pages/TradingTerminal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="App bg-[#0A0A0A] text-white min-h-screen">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trade" element={<TradingTerminal />} />
                <Route path="/trading" element={<TradingTerminal />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Toaster />
            <div className="aria-live" aria-live="polite" aria-atomic="true"></div>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;