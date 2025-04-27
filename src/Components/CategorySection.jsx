import React from 'react';
import {
  FaAppleAlt,
  FaBreadSlice,
  FaCarrot,
  FaCheese,
  FaPizzaSlice,
  FaGlassMartini,
} from 'react-icons/fa';

const categories = [
  { icon: <FaAppleAlt size={30} />, name: 'Fruits', items: 30, discount: '30%' },
  { icon: <FaBreadSlice size={30} />, name: 'Bakery', items: 65 },
  { icon: <FaCarrot size={30} />, name: 'Vegetables', items: 58, discount: '15%' },
  { icon: <FaCheese size={30} />, name: 'Dairy & Milk', items: 48, discount: '10%' },
  { icon: <FaPizzaSlice size={30} />, name: 'Snack & Spice', items: 59 },
  { icon: <FaGlassMartini size={30} />, name: 'Juice & Drinks', items: 45,discount: '10%' }, 
];

const CategorySection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm relative text-center hover:shadow-md transition-all flex flex-col items-center justify-center"
          >
            {cat.discount && (
              <span className="absolute top-2 right-2 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded">
                {cat.discount}
              </span>
            )}
            <div className="flex items-center justify-center mb-2 text-gray-700">
              {cat.icon}
            </div>
            <h4 className="font-semibold text-gray-700 text-sm">{cat.name}</h4>
            <p className="text-xs text-gray-500">{cat.items} items</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
