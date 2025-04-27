import React from "react";
import { FaFacebookF, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className= " h-auto w-[90%]   py-12 mx-20 rounded-lg my-20">
      <div className=" grid  md:grid-cols-5 gap-10 text-gray-600">
        {/*  */}
        <div>
          <h2 className="text-xl font-bold mb-4">Sign Up For Our Grocery products</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 border border-gray-700  rounded-l-md w-full"
            />
            <button className="bg-green-800 text-white px-4 rounded-r-md hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Category</h3>
          <ul className="space-y-2">
            <li>Dairy & Milk</li>
            <li>Snack & Spice</li>
            <li>Fast Food</li>
            <li>Juice & Drinks</li>
            <li>Seaffood</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Term & Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Sign in </h3>
          <ul className="space-y-2">
            <li>View Cart</li>
            <li>Return Policy</li>
            <li>Become a Vender</li>
            <li>Afflilate Program</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Noida</h3>
          <p>arjuncoder01@gmail.com</p>
          <p>+91-9027442948</p>
          <div className="flex space-x-4 mt-4">
            <FaGlobe />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
