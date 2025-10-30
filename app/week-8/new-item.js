"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg shadow-md p-6 flex flex-col space-y-4"
    >
      <label className="font-semibold text-gray-800">Item Name</label>
      <input
        type="text"
        placeholder="e.g., milk, 4 L 🥛"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 rounded-md p-2"
      />

      <label className="font-semibold text-gray-800">
        Quantity (1–20)
      </label>
      <p className="text-gray-700">Current: <span className="font-bold">{quantity}</span></p>

      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-md text-lg font-bold text-white ${
            quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          −
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-lg font-bold text-white ${
            quantity === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>

      <label className="font-semibold text-gray-800">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-400 rounded-md p-2"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
      >
        Add Item
      </button>
    </form>
  );
}
