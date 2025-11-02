import React, { useState } from "react";
import { FaCamera, FaUser } from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Riya Mishra",
    email: "riyamishra@example.com",
    age: "24",
    height: "5.0 ft",
    weight: "50 kg",
    goal: "Lose Fat & Build Muscle",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#040603] text-white px-4 md:px-12 py-10">
      <h1 className="text-3xl font-semibold mb-6">Your Profile</h1>

      <div className="bg-[#0b1408] p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-[#0f1a0c] flex items-center justify-center border border-green-800 overflow-hidden">
            <FaUser className="text-5xl text-gray-500" />
          </div>
          <label className="absolute bottom-2 right-2 bg-lime-500 p-2 rounded-full cursor-pointer hover:bg-lime-400 transition">
            <FaCamera className="text-black" />
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Name + email */}
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>
      </div>

      {/* Form */}
      <form className="mt-10 bg-[#0b1408] p-6 rounded-xl grid gap-5 md:grid-cols-2">
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none"
          placeholder="Full Name"
        />

        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none"
          placeholder="Email"
        />

        <input
          name="age"
          value={user.age}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none"
          placeholder="Age"
        />

        <input
          name="height"
          value={user.height}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none"
          placeholder="Height"
        />

        <input
          name="weight"
          value={user.weight}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none"
          placeholder="Weight"
        />

        <input
          name="goal"
          value={user.goal}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none"
          placeholder="Fitness Goal"
        />
      </form>

      <button className="mt-6 bg-lime-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 transition">
        Save Changes
      </button>

      {/* Stats Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-[#0b1408] p-5 rounded-xl text-center">
          <h3 className="text-xl font-bold text-lime-400">50 kg</h3>
          <p className="text-gray-400 text-sm">Current Weight</p>
        </div>

        <div className="bg-[#0b1408] p-5 rounded-xl text-center">
          <h3 className="text-xl font-bold text-lime-400">5.0 ft</h3>
          <p className="text-gray-400 text-sm">Height</p>
        </div>

        <div className="bg-[#0b1408] p-5 rounded-xl text-center">
          <h3 className="text-xl font-bold text-lime-400">Lose Fat</h3>
          <p className="text-gray-400 text-sm">Goal</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
