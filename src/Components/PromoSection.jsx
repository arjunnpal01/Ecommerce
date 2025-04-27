import React from 'react';

const PromoSection = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      
      {/* Card 1 - Snacks */}
      <div className="relative rounded-xl overflow-hidden h-[300px]">
        <img
          src="/image/hero22.jpg"
          alt="Snack Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10  flex flex-col justify-center items-end p-6 text-white">
          <span className="text-sm bg-gray-700 px-2 py-1 rounded">70% Off</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-700">Tasty Snack &<br />Fastfood</h2>
          <p className="text-sm mt-1 text-gray-700">The Flavor Of Something Special</p>
          <button className="mt-3  bg-green-800 px-4 py-2 rounded hover:bg-green-700">Shop Now</button>
        </div>
      </div>

      {/* Card 2 - Fruits */}
      <div className="relative rounded-xl overflow-hidden h-[300px]">
        <img
          src="/image/hero11.jpg"
          alt="Fruits Banner"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-10  flex flex-col justify-center items-end p-6 text-white">
          <span className="text-sm bg-gray-700 px-2 py-1 rounded">50% Off</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-700">Fresh Fruits &<br />Veggies</h2>
          <p className="text-sm mt-1 text-gray-800">A Healthy Meal For Every One</p>
          <button className="mt-3  bg-green-800 px-4 py-2 rounded hover:bg-green-700">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
