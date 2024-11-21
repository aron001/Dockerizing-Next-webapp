// components/GreenBackgroundSection.tsx
import React from 'react';

const Cover = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-green-500 p-10 text-white">
      {/* Left Section: Text and Button */}
      
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
      <div>
      <h2 className="text-2xl font-semibold mb-4">
      Download now!
        </h2>
       
      </div>
        <h2 className="text-4xl font-bold mb-4">
          All Your Businees
        </h2>
        <h2 className="text-4xl font-bold mb-4">
          Expenses in one place
        </h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacus vitae lectus tincidunt laoreet.
        </p>
        <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
          Get a Free Demo
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className=" w-full h-3/4 absolute top-0 left-0 right-0"></div> {/* Green background visible at top */}
        <img
          src="cover.png" // Replace with your image path
          alt="Right Section Image"
          className="w-full max-w-md rounded-lg shadow-lg object-cover relative z-10"
        />
      </div>
    </section>
  );
};

export default Cover;
