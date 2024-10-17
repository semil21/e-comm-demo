import React from 'react';
import { FaPhone, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '+917070801847';
  const whatsappNumber = '+917070801847';
  const telegramPhoneNumber = '+917070801847';

  return (
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
      
      {/* Telegram Button */}
      <a
        href={`https://t.me/${telegramPhoneNumber}`}
        className="flex items-center justify-center p-3 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300"
        aria-label="Telegram"
      >
        <FaTelegram size={24} />
      </a>
    </div>
  );
};

export default Footer;
