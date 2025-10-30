"use client";

import { useState, useEffect } from "react";

// Function to fetch meal ideas from the API
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white border rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {ingredient ? `Meal ideas for “${ingredient}”` : "Select an item to see meal ideas"}
      </h2>

      {meals.length === 0 && ingredient ? (
        <p className="text-gray-600">No meal ideas found for this ingredient.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="border rounded-md p-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center text-center"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-28 object-cover rounded-md mb-2"
              />
              <p className="text-gray-800 font-medium">{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
