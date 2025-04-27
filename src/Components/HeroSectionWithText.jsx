import React from "react";

const HeroSectionWithText = () => {
  return (
    <div className="relative w-[90%] mx-auto my-10 rounded-lg overflow-hidden">
      {/* Background Image */}
      <img
        src="/image/hero3.jpg"
        alt="Healthy Choices"
        className="w-full h-[400px] object-cover"
      />

      {/* Text on Top Right */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-end px-10 py-8 text-gray-700 text-right">
        <h2 className="text-4xl font-bold mb-3 drop-shadow-lg">Fresh Fruits</h2>
        <h3 className="text-4xl font-semibold mb-2 drop-shadow">Healthy Products</h3>
        <p className="text-lg mb-4 text-green-800 font-semibold">30% off sale <span className="text-gray-700">Hurry up!!!</span></p>
        <button className="bg-green-800 text-white hover:bg-green-700 px-6 py-2 rounded shadow-lg">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default HeroSectionWithText;
