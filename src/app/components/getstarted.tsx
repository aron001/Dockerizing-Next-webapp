 
 // components/GreenBackgroundSection.tsx
import React from 'react';

const Getstarted = () => {
  return (
  <div className='bg-white'>
 {/* Bottom Text and Button Section */}
 <div className="relative text-center z-10 -mt-28">
     {/* Centered Button */}
 <button className="bg-green-500 text-white font-light py-2 px-3 rounded-full hover:bg-green-600 transition duration-300">
   Get Started
 </button>
 {/* Bold Text */}
 <h2 className="text-2xl font-bold mb-1 mt-5 text-gray-950">Easy, Simple,</h2>
 <h2 className="text-2xl font-bold mb-2 text-gray-950">Affordable</h2>

 {/* Thin Text Description */}
 <p className="text-gray-500 text-sm mb-4">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
   Proin ut lacus vitae lectus tincidunt laoreet.
 </p>


</div>
</div>
  );
};

export default Getstarted;

 
 