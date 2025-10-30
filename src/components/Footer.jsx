import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#19240F] text-[#9aa06f] py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Title */}
        <h2 className="text-white text-2xl font-semibold mb-3">Try Demo</h2>

        {/* Description */}
        <p className="text-sm mb-6 max-w-md mx-auto md:mx-0">
          Explore FitTrack with limited features. No sign-up required.
        </p>

        {/* Centered Try Demo Button */}
        <div className="mb-10">
          <button className="bg-[#47641f] hover:bg-[#3a4e1a] text-white px-6 py-2 rounded-full transition">
            Try Demo
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center md:justify-start space-x-12 mb-6 text-sm text-[#8f9a5e]">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="#privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-white transition">
            Terms of Service
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-center md:text-left text-[#8f9a5e]">
          © 2024 FitTrack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
