import React from "react";

const MealEntry = ({ meals, deleteMeal, editMeal }) => {
  return (
    <div className="bg-[#091a05] p-5 rounded-xl mt-6">
      <h2 className="text-lg font-semibold mb-4">Added Items </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-green-800">
            <tr>
              <th className="p-2 text-left">Food</th>
              <th className="p-2 text-left">Qty</th>
              <th className="p-2">Cal</th>
              <th className="p-2">Prot</th>
              <th className="p-2">Carbs</th>
              <th className="p-2">Fat</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {meals.map((m, i) => (
              <tr key={i} className="border-b border-green-900">
                <td className="p-2">{m.food}</td>
                <td className="p-2">{m.qty}</td>
                <td className="p-2 text-center">{m.calories}</td>
                <td className="p-2 text-center">{m.protein}g</td>
                <td className="p-2 text-center">{m.carbs}g</td>
                <td className="p-2 text-center">{m.fat}g</td>
                <td className="p-2 flex gap-2 justify-center">
                  <button
                    className="text-blue-400 hover:text-blue-500"
                    onClick={() => editMeal(i)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-400 hover:text-red-500"
                    onClick={() => deleteMeal(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {meals.length === 0 && (
              <tr>
                <td colSpan="7" className="py-3 text-center text-gray-400">
                  No meals added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealEntry;
