
import React from 'react';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-orange-500 mb-4"></div>
      <p className="text-lg font-semibold text-gray-700">{message}</p>
      <p className="text-sm text-gray-500">Just a moment...</p>
    </div>
  );
};

export default Loader;
