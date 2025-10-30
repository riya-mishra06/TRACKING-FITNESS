import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Annual",
      price: 365,
      duration: "year",
      features: [
        "Unlimited Tracking",
        "Detailed Reports",
        "Community Access",
        "Priority Support",
      ],
    },
    {
      title: "Lifetime",
      price: 5000,
      duration: "20 years",
      features: [
        "Unlimited Tracking",
        "Detailed Reports",
        "Community Access",
        "Priority Support",
        "Lifetime Access",
      ],
    },
  ];

  return (
    <section className="bg-[#0f1f0f] text-white py-16 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-8">Pricing Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#1f2d1f] border border-[#2e3e2c] rounded-lg p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-gray-400">/{plan.duration}</span>
              </div>
            </div>

            <button className="bg-[#3a4e1a] hover:bg-[#47641f] text-white rounded-full py-2 text-center mb-6 transition">
              Choose Plan
            </button>

            <ul className="flex flex-col space-y-2 text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-lime-400 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
