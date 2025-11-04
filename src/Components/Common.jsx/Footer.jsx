const Footer = () => {
  return (
    <footer className=" bg-[#040603] text-gray-300 py-16 px-5 border-t border-white/10">
      
      {/* Try Demo Section */}
      <div id="Support" className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Try Demo
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          Explore NirogLife with limited features. No sign-up required.
        </p>

        <button className="bg-lime-400/20 text-lime-300 px-6 py-2 rounded-full font-medium 
          hover:bg-lime-400 hover:text-black transition-all shadow-md">
          Try Demo
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-6 text-sm">
        <a href="#" className="hover:text-lime-300 transition">About</a>
        <a href="#" className="hover:text-lime-300 transition">Contact</a>
        <a href="#" className="hover:text-lime-300 transition">Privacy Policy</a>
        <a href="#" className="hover:text-lime-300 transition">Terms of Service</a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} NirogLife. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
