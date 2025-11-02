import React, { useState } from "react";
import MealEntry from "./MealEntry";

const Nutrition = () => {
  const [form, setForm] = useState({
    date: "",
    food: "",
    qty: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const [meals, setMeals] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.food || !form.qty || !form.calories) {
      alert("Please fill required fields");
      return;
    }

    if (editIndex !== null) {
      const updatedMeals = [...meals];
      updatedMeals[editIndex] = form;
      setMeals(updatedMeals);
      setEditIndex(null);
    } else {
      setMeals([...meals, form]);
    }

    setForm({
      date: "",
      food: "",
      qty: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });
  };

  const deleteMeal = (i) => {
    setMeals(meals.filter((_, index) => index !== i));
  };

  const editMeal = (i) => {
    setForm(meals[i]);
    setEditIndex(i);
  };

  return (
    <div className="w-full p-6 text-white">


      {/* Form */}
      <div className="grid md:grid-cols-2 gap-4 bg-[#071503] p-5 rounded-xl">
        
        <div>
          <label>Date</label>
          <input type="date" name="date" value={form.date}
            onChange={handleChange}
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

        <div>
          <label>Food Item</label>
          <input name="food" value={form.food}
            onChange={handleChange}
            placeholder="Enter food"
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

        <div>
          <label>Quantity (grams/ml)</label>
          <input name="qty" value={form.qty}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

        <div>
          <label>Calories</label>
          <input name="calories" value={form.calories}
            onChange={handleChange}
            placeholder="Enter calories"
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

        <div>
          <label>Protein</label>
          <input name="protein" value={form.protein}
            onChange={handleChange}
            placeholder="Enter protein"
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

        <div>
          <label>Carbs</label>
          <input name="carbs" value={form.carbs}
            onChange={handleChange}
            placeholder="Enter carbs"
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

        <div>
          <label>Fat</label>
          <input name="fat" value={form.fat}
            onChange={handleChange}
            placeholder="Enter fat"
            className="w-full bg-[#1b3011] p-2 rounded-md"
          />
        </div>

      </div>

      <button 
        onClick={handleSubmit}
        className="mt-4 bg-lime-500 text-black px-6 py-2 rounded-xl hover:bg-lime-400"
      >
        {editIndex !== null ? "Update Meal" : "Add"}
      </button>

      <MealEntry meals={meals} deleteMeal={deleteMeal} editMeal={editMeal} />
    </div>
  );
};

export default Nutrition;
