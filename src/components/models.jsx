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
      imageUrl: 'https://imgs.search.brave.com/T2gvzMh2TzA7CAWKtmVr6akyDJ04bRsqT1tqwEDQzOc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXNtYWdhemluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDkvQmlraW5p/LU1vbWVudHMtb2Yt/MjAyNC1hbml0dGEt/NTg1LmpwZz93PTEw/MDAmcXVhbGl0eT04/NiZzdHJpcD1hbGw',
    },
    {
      name: 'Honey Sethi',
      age: 30,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/221070642/vip2x/3794a3ba-3f2a-422c-ba93-7daf0580ac8a.jpeg',
    },
    {
      name: 'Heena Khan',
      age: 28,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/325369058/large/0b9fdad1-a699-4d87-9435-94ba3f46963c.jpeg',
    },
    {
      name: 'Drishti Shukla',
      age: 34,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/331777186/large/58d30c40-49cf-41c4-87b7-33e2a2b695eb.jpeg',
    },
    {
      name: 'Sakshi Malhotra',
      age: 37,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/314770587/large/bf1f17d9-d2e4-4367-9612-17b649f02b8d.jpeg',
    },
    {
      name: 'Jia Chakrobarty',
      age: 32,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/320376062/large/80050e63-77c0-4a5d-a2ed-1ac48854dc92.jpg',
    },
    {
      name: 'Vishaka Mukherjee',
      age: 27,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/331856017/large/18fc872c-51b3-4349-bb7d-5dc5fff5d780.jpeg',
    },
    {
      name: 'Christian Dsouza',
      age: 32,
      rating: 5,
      imageUrl: 'https://media-eu.viva-images.com/vivastreet_gb/clad/331766183/large/3942d9c5-a3b3-4e86-aad3-0731cc8e628c.jpeg',
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


