import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Last updated:</strong> January 15, 2024
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              By accessing and using Averix Trading Terminal, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Averix Trading Terminal provides a cryptocurrency trading platform with advanced 
              charting tools, real-time market data, and portfolio management features.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Users are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Maintaining the security of their account credentials</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Using the service in a lawful and ethical manner</li>
              <li>Not engaging in fraudulent or manipulative trading activities</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Risk Disclosure
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cryptocurrency trading involves substantial risk of loss and is not suitable for all 
              investors. Past performance is not indicative of future results.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Service Availability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We strive to maintain high service availability but do not guarantee uninterrupted 
              access. The service may be temporarily unavailable for maintenance or updates.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              To the maximum extent permitted by law, Averix Trading Terminal shall not be liable 
              for any indirect, incidental, special, or consequential damages.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to terminate or suspend your account at any time for violation 
              of these terms or for any other reason at our discretion.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to modify these terms at any time. Users will be notified of 
              significant changes via email or platform notification.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Email: legal@averix-terminal.com
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
