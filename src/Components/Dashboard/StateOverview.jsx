const Box = ({ label, value }) => (
  <div className="bg-[#233417] rounded-xl p-4 flex flex-col text-center">
    <span className="text-sm text-gray-300">{label}</span>
    <span className="text-xl md:text-2xl font-bold">{value}</span>
  </div>
);

const StateOverview = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
      <Box label="Calories Remaining" value={data.caloriesRemaining} />
      <Box label="Protein Goal" value={`${data.proteinGoal}g`} />
      <Box label="Fat Goal" value={`${data.fatGoal}g`} />
    </div>
  );
};

export default StateOverview;
