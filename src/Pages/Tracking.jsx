import React, { useState } from "react";
import Nutrition from "../Components/tracking/Nutrition";
// import MealEntry from "../Components/tracking/MealEntry";
import Nav from "../Components/Common.jsx/Nav";

const Tracking = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  return (
<>
<Nav/>
    <div className="min-h-screen bg-[#040603] text-white p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Daily Nutrition Tracking
      </h1>

      <Nutrition addMeal={addMeal} />
    </div>

</>
  );
};

export default Tracking;
