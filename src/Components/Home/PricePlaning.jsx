import { Check } from "lucide-react";

const plans = [
  {
    title: "Annual",
    price: "₹365",
    period: "/year",
    features: [
      "Unlimited Tracking",
      "Detailed Reports",
      "Community Access",
      "Priority Support",
    ],
  },
  {
    title: "Lifetime",
    price: "₹5000",
    period: "/20 years",
    features: [
      "Unlimited Tracking",
      "Detailed Reports",
      "Community Access",
      "Priority Support",
      "Lifetime Access",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="px-5 py-20  bg-[#040603] text-white">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Pricing Plans
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all 
              hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>

              <button className="w-full bg-lime-400/20 text-lime-300 py-3 rounded-full font-semibold mb-6 
                hover:bg-lime-400 hover:text-black transition-all">
                Choose Plan
              </button>

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-lime-300" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
