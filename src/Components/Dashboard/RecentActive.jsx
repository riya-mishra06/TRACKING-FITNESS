const RecentActive = ({ activities }) => {
  return (
    <div className="bg-[#1A2613] rounded-xl p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-4">Recent Activities</h2>

      {activities.map((item, idx) => (
        <div key={idx} className="flex justify-between py-2 border-b border-gray-700 last:border-none">
          <div>
            <p className="font-medium">{item.food}</p>
            <p className="text-xs text-gray-400">{item.type}</p>
          </div>
          <p className="text-sm font-bold">{item.calories} kcal</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActive;
