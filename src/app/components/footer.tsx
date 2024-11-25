// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      items: ['One vas', 'AlertSms'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Our Partner', 'Contact Us', 'Newsletter'],
    },
    {
      title: 'Follow Us',
      items: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube'],
    },
  ];

  return (
    <footer className="bg-white text-gray-900 p-10 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        
        {/* Left Side: Logo, takes 1/4 width */}
        <div className="flex-shrink-0 w-full md:w-1/4 mb-6 md:mb-0">
          <Image
            src="/footer.png" // Replace with your logo path
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Right Side: Sections, takes 3/4 width */}
        <div className="flex flex-row md:flex-row gap-8 w-full md:w-3/4 justify-evenly">
          {footerSections.map((section) => (
            <div key={section.title} className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600  hover:text-black transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    {/* Bottom Line and Links */}
<div className="border-t border-gray-300 mt-6 pt-4">
  <div className="container mx-auto text-balance text-sm">
    <p className="text-sm text-gray-900 flex flex-col md:flex-row md:space-x-2">
      <a href="/privacy-policy" className="hover:text-black  text-gray-900 transition-colors font-semibold">
        Privacy Policy
      </a>
      <span className="hidden md:inline">|</span>
      <a href="/terms-conditions" className="hover:text-black transition-colors text-gray-900 font-semibold ">
        Terms & Conditions
      </a>
      <span className="hidden md:inline">|</span>
      <a  className="hover:text-black transition-colors text-gray-900 font-semibold">
        Cookie Policy
      </a>
    </p>
  </div>
</div>

    </footer>
  );
};

export default Footer;
