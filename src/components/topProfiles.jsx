import React from "react";
import Image from "next/image";

import e1 from "@/images/e1.jpeg";
import e2 from "@/images/e2.jpeg";
import e3 from "@/images/e3.jpeg";
import e4 from "@/images/e4.jpeg";
import e5 from "@/images/e5.jpeg";
import e6 from "@/images/e6.jpeg";

const TopProfiles = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Our Top Escort Profiles
      </h1>

      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={e1}
              alt="Russian Escort"
              height={320} // Set height to maintain aspect ratio
              width={500}  // Set width according to your design
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-center">Russian Escort</h2>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={e2}
              alt="Housewife Escorts"
              height={320}
              width={500}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-center">Housewife Escorts</h2>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={e3}
              alt="College Girl Escort"
              height={320}
              width={500}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-center">College Girl Escort</h2>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={e4}
              alt="Private Party Girls"
              height={320}
              width={500}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-center">Private Party Girls</h2>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={e5}
              alt="Mature Aunty for Sex"
              height={320}
              width={500}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-center">Mature Aunty for Sex</h2>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={e6}
              alt="Hot Bhabhi Call Girl"
              height={320}
              width={500}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-center">Hot Bhabhi Call Girl</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProfiles;
