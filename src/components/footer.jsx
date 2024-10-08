import React from 'react'

const Footer = () => {
    const phoneNumber = '+917070801847'; 
    const whatsappNumber = '+917070801847'; 
    const telegramPhoneNumber = '+917070801847'; 

    return (
      <div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
          >
            Call Now
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="inline-flex items-center justify-center px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
          >
            WhatsApp
          </a>
          <a
            href={`https://t.me/${telegramPhoneNumber}`}
            className="inline-flex items-center justify-center px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
          >
            Telegram
          </a>
        </div>
      </div>
    )
}

export default Footer
