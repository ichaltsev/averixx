import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <img 
            src="https://customer-assets.emergentagent.com/job_b4f9138b-d805-4933-9217-0f17e5eccf05/artifacts/e37qpmnv_logo.png" 
            alt="Averix" 
            className="h-16 w-16 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-200">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full border-white/30 text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          <p>Need help? Contact us at</p>
          <a href="mailto:averix.found@gmail.com" className="text-white hover:underline">
            averix.found@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;