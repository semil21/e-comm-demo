import React from 'react';

export const Pricing = () => {
  const pricingPlans = [
    {
      title: '1 Hour',
      items: [
        '₹8,000',
        'Single Shot',
        'Without Condom Sucking',
        'Clubbing',
        'Handjob',
        'Single Person',
      ],
    },
    {
      title: '2 Hour',
      items: [
        '₹15,000',
        'Double Trips',
        'Without Condom Sucking',
        'Clubbing',
        'Handjob',
        'Double Person',
      ],
    },
    {
      title: 'Full Night',
      items: [
        '₹30,000',
        'Triple Shot',
        'Without Condom Sucking',
        'Time Duration 8 Hours',
        'Clubbing',
        'Handjob',
        'Double Person',
      ],
    },
  ];

  return (
    <div className='mt-5'>
      <h1 class="text-3xl md:text-4xl font-bold mb-2 text-center">
        Our Rates
      </h1>
    
    <div className="container mx-auto p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        
            <div className="p-6 flex-grow flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2 text-center">{plan.title}</h2>
              <ul className="space-y-2 mb-4 flex-grow flex items-center justify-center flex-col">
                {plan.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
