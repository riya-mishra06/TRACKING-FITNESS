import React, { useState } from "react";
import PriceCard from "../Components/Membership/PriceCard";
import FeatureList from "../Components/Membership/FeatureList";
import Nav from "../Components/Common.jsx/Nav";

const MemberShip = () => {
  const [currentPlan] = useState("Premium");
  const [nextPayment] = useState("July 15, 2024");

  return (
 <>
   <Nav/>
    
    <div className="min-h-screen bg-[#040603] text-white px-4 md:px-12 py-10  mt-20">
      <h1 className="text-3xl font-semibold mb-6">Membership</h1>

      {/* Current Plan */}
      <div className="bg-[#0b1408] p-6 rounded-xl mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-gray-400 text-sm">Current Plan</p>
          <h2 className="text-xl font-semibold">{currentPlan}</h2>
          <p className="text-green-400 text-sm">Active</p>
          <p className="text-gray-400 text-sm mt-1">Next payment on {nextPayment}</p>

          <button className="mt-3 bg-[#365c1c] hover:bg-[#4d7a2e] px-4 py-2 rounded-full text-sm transition">
            Manage
          </button>
        </div>

        {/* Image placeholder */}
        <div className="w-full md:w-64 h-40 bg-[#1b2913] rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg"
            className="object-cover w-full h-full"
            alt="fitness"
          />
        </div>
      </div>

      {/* Upgrade Your Plan */}
      <h2 className="text-xl font-semibold mb-4">Upgrade Your Plan</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <PriceCard
          title="Premium"
          price="19.99"
          features={["Unlimited access to workouts", "Personalized nutrition plans", "Community support", "Progress tracking"]}
        />
        <PriceCard
          title="Premium Plus"
          price="29.99"
          tag="Best Value"
          features={["All Premium features", "1:1 coaching sessions", "Advanced analytics", "Exclusive content"]}
        />
      </div>

      {/* Payment Section */}
      <div className="mt-12 bg-[#0b1408] p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

        <form className="grid gap-5 md:grid-cols-2">
          <input className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none" placeholder="Card Number" />

          <input className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none" placeholder="MM/YY" />

          <input className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none" placeholder="CVV" />

          <input className="p-3 rounded-lg bg-[#0f1a0c] border border-green-900 outline-none" placeholder="Name on Card" />
        </form>

        <button className="mt-6 bg-lime-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 transition">
          Update Payment Method
        </button>
      </div>
    </div>
 </>
  );
};

export default MemberShip;
