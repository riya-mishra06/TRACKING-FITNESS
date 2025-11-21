import React, { useState } from "react";
import WelcomeCard from "../Components/Dashboard/WelcomeCard";
import StateOverview from "../Components/Dashboard/StateOverview";
import DailyProgress from "../Components/Dashboard/DailyProgress";
import RecentActive from "../Components/Dashboard/RecentActive";
import Nav from "../Components/Common.jsx/Nav";

const DashBoard = () => {
  const [userData] = useState({
    name: "Emily",
    date: "Monday, October 21st",
    caloriesRemaining: 1850,
    proteinGoal: 120,
    fatGoal: 60,
    caloriesConsumed: 1150,
    caloriesTarget: 1500,
    proteinConsumed: 60,
    fatConsumed: 36,
    activities: [
      { food: "Oatmeal with Berries", type: "Breakfast", calories: 350 },
      { food: "Chicken Salad Sandwich", type: "Lunch", calories: 450 },
      { food: "Apple with Almond Butter", type: "Snack", calories: 150 },
      { food: "Salmon with Roasted Vegetables", type: "Dinner", calories: 500 },
    ],
  });

  return (
 <>
 <div>
  <Nav/>
     <div className="min-h-screen  bg-[#040603] text-white mt-20 p-4 md:p-8">
      <WelcomeCard name={userData.name} date={userData.date} />
      <StateOverview data={userData} />
      <DailyProgress data={userData} />
      <RecentActive activities={userData.activities} />
    </div>
 </div>
 </>
  );
};

export default DashBoard;
