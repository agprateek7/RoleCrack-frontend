import React from 'react';

const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-6 h-6 border-4 border-gray-400 border-t-white rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
