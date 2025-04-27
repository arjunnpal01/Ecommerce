import React from 'react';
import { FaStar, FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import img1 from '/image/almonds.jpg';
import img2 from '/image/dates.jpg';
import img3 from '/image/lichi.jpg';
import img4 from '/image/smoked.jpg';
import img5 from '/image/chips.jpg';

const products = [
  {
    title: "California Almonds ",
    category: "Dried Fruits",
    price: 49,
    oldPrice: 65,
    badge: "SALE",
    rating: 4,
    image: img1
  },
  {
    title: "Dates Value Fresh Pouch Dates",
    category: "Cookies",
    price: 78,
    oldPrice: 90,
    badge: "SALE",
    rating: 4,
    image: img2
  },
  {
    title: "Fresh Lichi 500g Pack",
    category: "Foods",
    price: 49,
    oldPrice: 60,
    badge: "Sale",
    rating: 5,
    image: img3
  },
  {
    title: "Smoked Honey Spiced",
    category: "Dried Fruits",
    price: 25,
    oldPrice: 35,
    
    rating: 4,
    image: img4
  },
  {
    title: "Banana Chips Snack",
    category: "Foods",
    price: 32,
    oldPrice: 45,
    badge: "NEW",
    rating: 3,
    image: img5
  },
];

const NewArrivals = () => {
  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-700">New <span className='text-green-800'>Arrivals</span></h2>
          <p className="text-sm text-gray-500"> Shop online for new arrivals and get free shipping!</p>
        </div>
        {/* <div className="text-right">
          <p className="text-sm text-gray-600">Ends In:</p>
          <span className="font-mono text-xl text-red-600">228 Days 17 : 25 : 56</span>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {products.map((product, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4 relative hover:shadow-md transition-all">
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
                  product.badge === 'SALE' ? 'bg-gray-700 text-white' : 'bg-green-800 text-white'
                }`}
              >
                {product.badge}
              </span>
            )}

            {/* Product Image Placeholder */}
            <div className="w-full h-48  flex items-center justify-center rounded mb-4 ">
           <img src={product.image} alt={product.title} className="max-h-full object-contain mb-4" />
            </div>

            {/* Category */}
            <p className="text-xs text-gray-400">{product.category}</p>

            {/* Title */}

            {/* Price */}
            <h4 className="font-semibold text-sm text-gray-600">{product.title}</h4>

            {/* Rating */}
            <div className="flex items-center space-x-1 mt-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-xs ${
                    index < product.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <div className="mt-2">
              <span className="font-bold text-gray-700">${product.price.toFixed(2)}</span>{' '}
              <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>
            </div>

            {/* Icons */}
            {/* <div className="flex justify-around mt-3 text-gray-500 text-sm">
              <FaHeart className="cursor-pointer hover:text-red-500" />
              <FaEye className="cursor-pointer hover:text-blue-500" />
              <FaShoppingCart className="cursor-pointer hover:text-green-500" />
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
