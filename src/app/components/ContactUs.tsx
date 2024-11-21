// components/ContactUsComponent.tsx
import React from 'react';
import { HiOutlineMail, HiPhone } from 'react-icons/hi'; // Importing icons from react-icons

const ContactUs = () => {
  return (
    <section className="flex flex-col sm:flex-row items-start justify-between p-10 bg-gray-50 gap-8">
      {/* Left Section: Contact Us and Description */}
      <div className="flex flex-col items-start w-full sm:w-auto ml-16">
        <h2 className="text-[var(--Gray-900,#061C3D)] font-[PlusJakartaSans] text-[56px] font-semibold leading-[60px] tracking-[-0.84px] sm:text-[40px] md:text-[48px]">
          Contact Us
          <span className="mr-2">👋</span> {/* Wave icon */}

        </h2>
        <p className="text-[#061C3D] font-plus-jakarta-sans text-lg font-light leading-7">
          If you have any questions or inquiries, feel free to reach out to us.
        </p>
        <p className="text-[#061C3D] font-plus-jakarta-sans text-lg font-light leading-7">
           feel free to reach out to us.
        </p>
      </div>
      {/* Email Section */}
      <div className=" items-start">
        <img
          src="EnvelopeOpen.png" // Replace with your image path
          alt="phone call"
          className=" h-18 w-18  justify-items-center"
        />
        <div>
          <span className="text-[var(--Gray-500,#838E9E)] text-center font-[Lexend] text-[14px] font-normal leading-[1] tracking-[0.14px] uppercase">Email Address:</span>
          <p className="text-[var(--Gray-900,#061C3D)] text-center font-[Plus Jakarta Sans] text-[24px] font-normal leading-[32px] sm:text-[20px] md:text-[22px]">info@example.com</p> {/* Replace with your email */}
        </div>
      </div>

      {/* Phone Section */}
      <div className="items-start">
       
        <img
          src="PhoneCall.png" // Replace with your image path
          alt="phone call"
          className=" h-18 w-18  justify-items-center"
        />
        <div>
          <span className="text-[var(--Gray-500,#838E9E)] text-center font-[Lexend] text-[14px] font-normal leading-[1] tracking-[0.14px] uppercase">Phone Number:</span>
          <p className="text-[var(--Gray-900,#061C3D)] text-center font-[Plus Jakarta Sans] text-[24px] font-normal leading-[32px] sm:text-[20px] md:text-[22px]">+1 (234) 567-8900</p> {/* Replace with your phone number */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
