import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '+919122220479';
  const whatsappNumber = '+919122220479';

  return (
    <>
      {/* Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-around items-center md:hidden z-50">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
          aria-label="Call"
        >
          <FaPhone size={24} />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="flex items-center justify-center p-3 text-white bg-green-600 hover:bg-green-700 rounded-full transition duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Desktop/Tablet Buttons (above each other on the right) */}
      <div className="hidden md:flex fixed bottom-0 right-0 flex-col items-center space-y-4 p-4 z-50">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
          aria-label="Call"
        >
          <FaPhone size={24} />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="flex items-center justify-center p-3 text-white bg-green-600 hover:bg-green-700 rounded-full transition duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </>
  );
};

export default Footer;
