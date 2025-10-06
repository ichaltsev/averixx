import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Last updated:</strong> January 15, 2024
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              use our trading services, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Account information (email, username, profile data)</li>
              <li>Trading activity and transaction history</li>
              <li>Device and browser information</li>
              <li>Usage analytics and performance data</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Provide and maintain our trading services</li>
              <li>Process transactions and manage your account</li>
              <li>Improve our platform and develop new features</li>
              <li>Communicate with you about updates and support</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Email: privacy@averix-terminal.com
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
