"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    const itemWithId = {
      id: Math.random().toString(36).substring(2, 9),
      name: newItem.name,
      quantity: newItem.quantity,
      category: newItem.category,
    };
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uFE0F)/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-black mb-8">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
