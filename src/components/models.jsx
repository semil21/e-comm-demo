import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

import img1 from "@/images/top-img1.jpeg";
import img2 from "@/images/top-img2.jpeg";
import img3 from "@/images/top-img3.jpeg";
import img4 from "@/images/top-img4.jpeg";
import img5 from "@/images/top-img5.jpeg";
import img6 from "@/images/top-img6.jpeg";
import img7 from "@/images/top-img7.jpeg";
import img8 from "@/images/top-img8.jpeg";
import img9 from "@/images/top-img9.jpeg";

const imageMap = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
};

// Card component
const Card = ({ name, age, rating, imageUrl }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-auto">
      <div className="relative w-full h-64"> {/* Set a fixed height here */}
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Age: {age}</p>
        <div className="flex">
          {stars.map((filled, index) => (
            <FaStar
              key={index}
              className={`text-yellow-500 ${filled ? "" : "opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const CardContainer = () => {
  const cardData = [
    {
      name: "Alice",
      age: 25,
      rating: 4,
      imageUrl: imageMap.img1,
    },
    {
      name: "Honey Sethi",
      age: 30,
      rating: 5,
      imageUrl: imageMap.img2,
    },
    {
      name: "Heena Khan",
      age: 28,
      rating: 5,
      imageUrl: imageMap.img3,
    },
    {
      name: "Drishti Shukla",
      age: 34,
      rating: 5,
      imageUrl: imageMap.img4,
    },
    {
      name: "Sakshi Malhotra",
      age: 37,
      rating: 5,
      imageUrl: imageMap.img5,
    },
    {
      name: "Jia Chakrobarty",
      age: 32,
      rating: 5,
      imageUrl: imageMap.img6,
    },
    {
      name: "Vishaka Mukherjee",
      age: 27,
      rating: 5,
      imageUrl: imageMap.img7,
    },
    {
      name: "Christian Dsouza",
      age: 32,
      rating: 5,
      imageUrl: imageMap.img8,
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
