"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByCategory = (a, b) => a.category.localeCompare(b.category);

  let sortedItems = [...items];
  if (sortBy === "name") sortedItems.sort(sortByName);
  else if (sortBy === "category") sortedItems.sort(sortByCategory);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-800 font-semibold">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
