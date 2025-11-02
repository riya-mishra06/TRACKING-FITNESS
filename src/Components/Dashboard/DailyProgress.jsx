const Bar = ({ label, consumed, total }) => {
  const percent = Math.round((consumed / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-600 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-300 mt-1">
        {consumed} / {total}
      </p>
    </div>
  );
};

const DailyProgress = ({ data }) => {
  return (
    <div className="bg-[#1A2613] rounded-xl p-4 md:p-6 mb-8">
      <h2 className="font-semibold text-lg mb-4">Today's Progress</h2>

      <Bar
        label="Calories Consumed"
        consumed={data.caloriesConsumed}
        total={data.caloriesTarget}
      />
      <Bar
        label="Protein Intake (g)"
        consumed={data.proteinConsumed}
        total={data.proteinGoal}
      />
      <Bar
        label="Fat Intake (g)"
        consumed={data.fatConsumed}
        total={data.fatGoal}
      />
    </div>
  );
};

export default DailyProgress;
