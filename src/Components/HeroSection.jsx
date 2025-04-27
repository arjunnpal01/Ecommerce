import React, { useState, useEffect } from 'react';
import img1 from '/image/hero1.jpg';
import img2 from '/image/hero2.jpg';

const slides = [
  {
    image: img1,
    price: '$29.99',
    title: 'Explore fresh & juicy fruits',
    buttonText: 'Shop Fruits →',
  },
  {
    image: img2,
    price: '$49.99',
    title: 'Get the best organic veggies',
    buttonText: 'Shop Veggies →',
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-center items-center py-10 bg-white">
      <div className="relative w-[90%]">
        {/* Background Image */}
        <img
          src={current.image}
          alt="Hero"
          className="w-full h-auto rounded-xl shadow-lg object-cover transition-all duration-500"
        />

        {/* Text Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-8 md:px-16">
          <div className="bg-white/80 p-6 rounded-xl max-w-md shadow-lg">
            <p className="text-green-700 text-lg md:text-xl font-semibold mb-2">
              Starting at <span className="text-green-800 font-bold">{current.price}</span>
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-700 drop-shadow-lg">
              {current.title}
            </h1>
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition font-semibold">
              {current.buttonText}
            </button>
          </div>
        </div>

        {/* Dot Indicators - Centered below image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                i === index ? 'bg-green-600' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
