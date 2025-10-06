import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Trading Disclaimer
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Last updated:</strong> January 15, 2024
          </p>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
              ⚠️ Important Risk Warning
            </h2>
            <p className="text-yellow-700 dark:text-yellow-300">
              Trading cryptocurrencies involves substantial risk of loss and is not suitable for all investors. 
              The high degree of leverage can work against you as well as for you. Before deciding to trade 
              cryptocurrencies, you should carefully consider your investment objectives, level of experience, 
              and risk appetite.
            </p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. No Investment Advice
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The information provided on Averix Trading Terminal is for educational and informational 
              purposes only. It is not intended as investment advice, financial advice, or trading advice. 
              Always conduct your own research and consult with a qualified financial advisor before 
              making investment decisions.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Market Risks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cryptocurrency markets are highly volatile and unpredictable. Prices can fluctuate 
              dramatically in short periods, leading to significant losses. Factors affecting prices include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Market sentiment and speculation</li>
              <li>Regulatory changes and government policies</li>
              <li>Technological developments and security issues</li>
              <li>Economic factors and global events</li>
              <li>Liquidity constraints and market manipulation</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Technical Risks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Trading through our platform involves technical risks including:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>System downtime or technical failures</li>
              <li>Network connectivity issues</li>
              <li>Data feed delays or inaccuracies</li>
              <li>Software bugs or glitches</li>
              <li>Cybersecurity threats and hacking attempts</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Regulatory Risks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cryptocurrency regulations are evolving and vary by jurisdiction. Changes in regulations 
              may affect the legality, taxation, or availability of cryptocurrency trading in your region.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Past Performance
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Past performance is not indicative of future results. Historical data, charts, and 
              analysis should not be relied upon as a guarantee of future performance.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. User Responsibility
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Users are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Understanding the risks involved in cryptocurrency trading</li>
              <li>Making informed trading decisions</li>
              <li>Managing their risk exposure</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Securing their account and private keys</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Averix Trading Terminal shall not be liable for any trading losses, financial damages, 
              or other consequences resulting from the use of our platform or services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              For questions about this disclaimer, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Email: support@averix-terminal.com
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
