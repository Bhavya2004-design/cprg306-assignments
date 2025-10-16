"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  // Sort helpers (don’t trim or lowercase names so emojis stay visible)
  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByCategory = (a, b) => a.category.localeCompare(b.category);

  // Sort the data copy
  let sortedItems = [...itemsData];
  if (sortBy === "name") {
    sortedItems.sort(sortByName);
  } else if (sortBy === "category") {
    sortedItems.sort(sortByCategory);
  }

  // Group by category
  const groupedItems = sortedItems.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const sortedCategoryKeys = Object.keys(groupedItems).sort();

  // Shared button styling
  const baseBtn =
    "px-4 py-2 rounded-md font-semibold transition text-white hover:bg-yellow-500";

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Top control buttons */}
      <div className="flex justify-center mb-6 space-x-3">
        <button
          type="button"
          onClick={() => {
            setGrouped(false);
            setSortBy("name");
          }}
          className={`${baseBtn} ${
            sortBy === "name" && !grouped ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => {
            setGrouped(false);
            setSortBy("category");
          }}
          className={`${baseBtn} ${
            sortBy === "category" && !grouped ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          Sort by Category
        </button>

        <button
          type="button"
          onClick={() => setGrouped(true)}
          className={`${baseBtn} ${grouped ? "bg-yellow-500" : "bg-gray-600"}`}
        >
          Group by Category
        </button>
      </div>

      {/* Display items */}
      {!grouped ? (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="space-y-6">
          {sortedCategoryKeys.map((category) => (
            <div key={category}>
              <h2 className="text-blue-500 font-bold text-lg mb-2 capitalize">
                {category}
              </h2>
              <ul>
                {groupedItems[category].map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
