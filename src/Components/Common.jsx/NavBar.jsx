import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const smoothScroll = (e, id) => {
  e.preventDefault();
  if (id !== "#") {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  const navigate = useNavigate(); // ✅ moved inside component

  const navLinks = useMemo(() => [
    { name: "Home", id: "#Home" },
    { name: "Features", id: "#Features" },
    { name: "Pricing", id: "#Pricing" },
    { name: "Support", id: "#Support" },
  ], []);

  return (
    <div className="nav fixed top-0 left-0 z-40 w-full bg-transparent backdrop-blur-lg">
      <nav className="w-full bg-[#040603] text-white py-3 px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/logos.png"
            alt="logo"
            className="h-[8vh]"
          />
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-10 text-sm font-medium">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.id}
              onClick={(e) => smoothScroll(e, item.id)}
              className="cursor-pointer hover:text-[#9EE52E]"
            >
              {item.name}
            </a>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#9EE52E] text-black px-5 py-2 rounded-full font-medium hover:bg-[#8ad926] transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#2A381D] px-5 py-2 rounded-full font-medium hover:bg-[#354927] transition"
          >
            Log In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
