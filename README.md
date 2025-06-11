import React, { useState } from "react";

// Counter Display Component
function CounterDisplay({ count }) {
  return (
    <div className="text-6xl font-bold text-gray-800 mb-6">{count}</div>
  );
}

// Counter Buttons Component
function CounterControls({ onIncrease, onDecrease }) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={onIncrease}
        className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-600 transition"
      >
        Increase
      </button>
      <button
        onClick={onDecrease}
        className="bg-red-500 text-white px-6 py-3 rounded-2xl shadow hover:bg-red-600 transition"
      >
        Decrease
      </button>
    </div>
  );
}

// Main App Component
export default function ClickCounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-200 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Click Counter App</h1>
      <CounterDisplay count={count} />
      <CounterControls onIncrease={handleIncrease} onDecrease={handleDecrease} />
    </div>
  );
}
