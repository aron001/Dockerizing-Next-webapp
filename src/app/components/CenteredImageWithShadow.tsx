// components/CenteredImageWithWingShadow.tsx
import React from 'react';

const CenteredImageWithShadow = () => {
  return (
  

  
    <div className="flex items-center justify-center min-h-screen bg-white relative overflow-hidden">
      {/* Wing Shadow Image */}
      <img
        src="shadow.png" // Replace with your shadow image path
        alt="Wing Shadow"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] "
        aria-hidden="true"
      />

      {/* Centered Image */}
      <div className="relative z-10">
        <img
          src="dashboard.png" // Replace with your main image path
          alt="Centered Display"
          className="w-[100%] max-w-2xl object-cover rounded-lg shadow-lg"
        />
        
      </div>
    </div>

  
  );
};

export default CenteredImageWithShadow;
