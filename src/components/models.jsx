import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ name, age, rating, imageUrl }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto">
      <img className="h-80 w-full object-cover" src={imageUrl} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Age: {age}</p>
        <div className="flex">
          {stars.map((filled, index) => (
            <FaStar key={index} className={`text-yellow-500 ${filled ? '' : 'opacity-50'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const CardContainer = () => {
  const cardData = [
    {
      name: 'Alice',
      age: 25,
      rating: 4,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Bob',
      age: 30,
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Charlie',
      age: 28,
      rating: 3,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David',
      age: 35,
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David',
      age: 35,
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David',
      age: 35,
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David',
      age: 35,
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David',
      age: 35,
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};


