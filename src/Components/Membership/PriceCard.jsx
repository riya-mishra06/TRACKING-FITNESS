import React from "react";
import FeatureList from "./FeatureList";

const PriceCard = ({ title, price, tag, features }) => {
  return (
    <div className="bg-[#0b1408] p-6 rounded-xl border border-green-800 transition hover:scale-[1.02]">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {tag && <span className="text-xs bg-lime-500 text-black px-2 py-1 rounded-full">{tag}</span>}
      </div>

      <p className="text-3xl font-bold mt-2">${price}<span className="text-base text-gray-400">/month</span></p>

      <FeatureList list={features} />

      <button className="mt-4 w-full bg-[#365c1c] hover:bg-[#4d7a2e] px-4 py-2 rounded-full transition">
        Upgrade
      </button>
    </div>
  );
};

export default PriceCard;
