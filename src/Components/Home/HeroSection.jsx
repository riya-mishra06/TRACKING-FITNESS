import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#040603] ">
          <section className="relative w-[100vw] h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mx-auto max-w-[1200px] p-3">
      
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-[90vh] object-cover"
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80"
        alt="Fitness Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative text-center px-5">
        <h1 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">
          Achieve Your Fitness Goals with <span className="text-lime-400">NirogLife</span>
        </h1>

        <p className="mt-4 text-gray-200 text-sm md:text-lg max-w-xl mx-auto">
          Track nutrition, workouts, and progress in one place. Join thousands of users transforming their lifestyle.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 transition">
            Sign Up
          </button>
          <button className="bg-white/20 backdrop-blur text-white border border-white px-8 py-3 rounded-full hover:bg-white/30 transition">
            Try Demo
          </button>
        </div>
      </div>
    </section>
    </div>
  
  );
};

export default Hero;
