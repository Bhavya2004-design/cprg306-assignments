"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const increment = () => {
        if (quantity <20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    
    const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    alert(
      `Item added: ${item.name || "(no name)"}, Quantity: ${item.quantity}, Category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const buttonClass = (disabled) =>
    `px-4 py-2 rounded-md text-lg font-bold text-white transition ${
      disabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-100 flex flex-col space-y-4"
    >
      <input
        type="text"
        placeholder="Item Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 rounded-md p-2 text-gray-800"
      />

      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2 bg-white p-1 rounded-md shadow-sm">
          <span className="px-3 py-2 border rounded-md text-lg font-semibold">
            {quantity}
          </span>

          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={buttonClass(quantity === 1)}
          >
            −
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={buttonClass(quantity === 20)}
          >
            +
          </button>
        </div>


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 rounded-md p-2 text-gray-800 flex-1"
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
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md"
      >
        Add Item
      </button>
    </form>
  );
}

    
