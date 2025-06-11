import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-4xl font-bold mb-4">Click Counter</h1>
      <div className="text-6xl font-semibold">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={handleIncrease}
          className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
