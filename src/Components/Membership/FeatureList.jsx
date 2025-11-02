import React from "react";
import { FaCheck } from "react-icons/fa";

const FeatureList = ({ list }) => {
  return (
    <ul className="mt-4 space-y-2">
      {list.map((item, index) => (
        <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
          <FaCheck className="text-lime-500" /> {item}
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
