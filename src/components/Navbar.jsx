import React from 'react';
import logo from '../assets/Logo.png'; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="bg-[#1b2b1b] text-white flex justify-between items-center px-8 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <a href="#" className="hover:text-lime-400 transition">Home</a>
        <a href="#" className="hover:text-lime-400 transition">Features</a>
        <a href="#" className="hover:text-lime-400 transition">Pricing</a>
        <a href="#" className="hover:text-lime-400 transition">Support</a>
        
        {/* Buttons */}
        <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-lime-500 transition">
          Sign Up
        </button>
        <button className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-600 transition">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
