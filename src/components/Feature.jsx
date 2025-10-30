import React from "react";
import { FaChartLine, FaFileAlt, FaUsers } from "react-icons/fa";

const Feature = () => {
  const features = [
    {
      icon: <FaChartLine className="text-lime-400 text-3xl mb-4" />,
      title: "Tracking",
      description:
        "Easily log your meals, workouts, and daily activities to monitor your progress.",
    },
    {
      icon: <FaFileAlt className="text-lime-400 text-3xl mb-4" />,
      title: "Reports",
      description:
        "Visualize your progress with detailed reports and analytics to identify trends and areas for improvement.",
    },
    {
      icon: <FaUsers className="text-lime-400 text-3xl mb-4" />,
      title: "Community",
      description:
        "Connect with other users, share your journey, and find motivation within the FitTrack community.",
    },
  ];

  return (
    <section className="bg-[#0f1f0f] text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          FitTrack offers a comprehensive suite of tools to help you stay on
          track and achieve your fitness goals.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#162816] border border-[#2e3e2c] rounded-lg p-8 hover:bg-[#1d351b] transition-all duration-300 shadow-md hover:shadow-lime-400/10"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
