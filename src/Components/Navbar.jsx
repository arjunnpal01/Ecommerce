import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; // ✅ Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   
  return (
    <nav  className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side (unchanged) */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold text-gray-700">Navbar</Link>
            <Link to="/" className="mx-4 text-gray-700 hover:text-green-800 text-sm font-medium">Home</Link>
            <Link to="/"  className="text-gray-700 hover:text-green-800 text-sm font-medium">Categories</Link>
            <Link to="/" className="text-gray-700 hover:text-green-800 text-sm font-medium">Offers</Link>
            
            <div className="hidden md:flex ml-4">
              <input
                type="search"
                placeholder="Search"
                className="px-12 py-1 border border-gray-700 rounded-l focus:outline-none focus:ring focus:border-blue-300 text-sm"
              />
              <button
                type="submit"
                className="mx-1 px-4 py-2 bg-green-800 text-white text-sm rounded-r-md hover:bg-green-700"
              >
                Search
              </button>
            </div>
          </div>

          {/* ✅ Right Side - Icons instead of text buttons */}
          <div className="hidden md:flex items-center space-x-4 text-gray-700 text-lg">
            <Link to="/login" className="flex items-center hover:text-green-800 transition">
              <FaUser className="mr-2" />
              <span className="text-sm">Login</span>
            </Link>

            <button className="flex items-center hover:text-green-800 transition">
              <FaHeart className="mr-2" />
              <span className="text-sm">Wishlist</span>
            </button>
            <button className="flex items-center text-gray-700 px-3 py-2 border border-gray-700 rounded-md hover:text-green-800 transition">
              <FaShoppingCart className="mr-2" />
              <span className="text-sm">Cart</span>
            </button>
          </div>

          {/* Mobile menu toggle (unchanged) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (optional to add icons here too) */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-gray-100">
          <a href="#" className="block text-gray-700 hover:text-green-800">Home</a>
          <a href="#" className="block text-gray-700 hover:text-green-800">About</a>
          <a href="#" className="block text-gray-700 hover:text-green-800">Contact</a>
          <input
            type="search"
            placeholder="Search"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="w-full px-4 py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Search
          </button>
          <button className="w-full px-4 py-2 bg-greene-600 text-white rounded-md hover:text-green-800">
            Login
          </button>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:text-green-800">
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
