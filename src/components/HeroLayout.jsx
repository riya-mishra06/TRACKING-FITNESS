import React from "react";

const HeroLayout = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center rounded-xl overflow-hidden bg-[#19240F]">
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/1200x/18/69/f0/1869f085be5caf10c3b1436deb3c1677.jpg"
        alt="Person running illustration"
        className="absolute inset-0 w-[98vw] h-[70vh] object-cover rounded-xl m-auto"
      />

      {/* Overlay for soft tint (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f2ec]/60 via-[#f5f2ec]/40 to-[#f5f2ec]/10 rounded-xl"></div>

      {/* Text + Buttons */}
      <div className="relative text-center max-w-2xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Achieve Your Fitness Goals with FitTrack
        </h1>
        <p className="text-white mt-4 text-lg drop-shadow">
          Track your nutrition, workouts, and progress all in one place.
          Join thousands of users transforming their fitness journey.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-500 transition">
            Sign Up
          </button>
          <button className="bg-[#243c1f] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#2e4d28] transition">
            Try Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
