import { BarChart3, FileText, Users } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Tracking",
    desc: "Log your meals, workouts, and daily activities to monitor your progress.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Reports",
    desc: "Track your progress with detailed analytics to identify trends & improvements.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    desc: "Connect with users, share your journey, and find motivation together.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="Features" className="px-2   bg-[#040603]">
      <div className="max-w-6xl mx-auto text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Key Features
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          FitTrack provides tools to help you stay on track and achieve your fitness goals.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md 
              hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]
              transition-all duration-300 text-left"
            >
              <div className="bg-lime-400/20 text-lime-300 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
