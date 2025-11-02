import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full bg-[#040603] text-white py-3 px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/src/assets/logos.png" // your logo path here
          alt="logo"
          className="h-[8vh]"
        />
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-10 text-sm font-medium">
        <li className="cursor-pointer hover:text-[#9EE52E]">Home</li>
        <li className="cursor-pointer hover:text-[#9EE52E]">Features</li>
        <li className="cursor-pointer hover:text-[#9EE52E]">Pricing</li>
        <li className="cursor-pointer hover:text-[#9EE52E]">Support</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="bg-[#9EE52E] text-black px-5 py-2 rounded-full font-medium hover:bg-[#8ad926] transition">
          Sign Up
        </button>
        <button className="bg-[#2A381D] px-5 py-2 rounded-full font-medium hover:bg-[#354927] transition">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
