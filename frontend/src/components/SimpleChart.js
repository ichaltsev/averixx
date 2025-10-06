import React from 'react';

const SimpleChart = ({ symbol }) => {
  return (
    <div className="w-full h-full bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center">
      <div className="text-center text-white">
        <div className="text-2xl font-bold mb-2">{symbol}</div>
        <div className="text-gray-400">Chart Placeholder</div>
        <div className="mt-4 text-green-500">$43,250.50</div>
        <div className="text-sm text-gray-500">+2.45% (24h)</div>
      </div>
    </div>
  );
};

export default SimpleChart;