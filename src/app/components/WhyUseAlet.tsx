// components/WhyUseAlet.tsx
import React from 'react';

const WhyUseAlet = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-gray-50">
      {/* Top Section with Headline and Description */}
    
        <h1 className='text-xl font-normal mb-4 md:mb-0 md:w-1/2 text-green-600 items-start flex flex-col md:flex-row  md:items-center -ml-52'>why use alet</h1>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-4xl mb-10">
        {/* Left Section: Headline */}
       
        <h2 className="text-3xl font-bold mb-4 md:mb-0 md:w-1/2 text-[#040815]">
          Easy, Simple, 
        </h2>
        
      
        {/* Right Section: Description */}
        <p className="text-[#596780] md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacus
          vitae lectus tincidunt laoreet. Nullam ac felis nec orci varius ultricies.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
          <div className="bg-silver-300 w-full h-3/4 flex items-center justify-center relative">
            <img
              src="whyusealet1.png" // Replace with your image path
              alt="Card Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" p-4 text-center w-full">
            <h3 className="text-[var(--Secondary-900,#040815)] font-[PlusJakartaSans] text-[24px] font-semibold leading-[36px] tracking-[-0.72px] sm:text-[20px] md:text-[22px]">Automatic invoice payment</h3>
            <p className="text-sm text-[#596780]">This is a description for the first card.</p>
            <p className="text-sm text-[#596780]">This is a description for the first card.he first card.</p>

          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
          <div className="bg-silver-300 w-full h-3/4 flex items-center justify-center relative">
            <img
              src="whyusealet2.png" // Replace with your image path
              alt="Card Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center w-full">
            <h3 className="text-[var(--Secondary-900,#040815)] font-[PlusJakartaSans] text-[24px] font-semibold leading-[36px] tracking-[-0.72px] sm:text-[20px] md:text-[22px]">Clear Payment History</h3>
            <p className="text-sm text-[#596780]">This is a description for the second card.</p>
            <p className="text-sm text-[#596780]">This is a description for the first card.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
          <div className="bg-silver-300 w-full h-3/4 flex items-center justify-center relative">
            <img
              src="atm.png" // Replace with your image path
              alt="Card Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" p-4 text-center w-full">
            <h3 className="text-[var(--Secondary-900,#040815)] font-[PlusJakartaSans] text-[24px] font-semibold leading-[36px] tracking-[-0.72px] sm:text-[20px] md:text-[22px]">Use of multi card payment</h3>
            <p className="text-xs text-[#596780]">This is a description for the third card.</p>
            <p className="text-xs text-[#596780]">This is a description for the third card.</p>
            <p className="text-xs text-[#596780]">This is a description for the third card.</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseAlet;
// whyuse alet , contactus,stisfiedcllient,quates