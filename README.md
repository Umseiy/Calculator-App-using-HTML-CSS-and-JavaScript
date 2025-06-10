import React, { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setStep(value);
    } else {
      setStep(1); // Fallback if input is cleared or invalid
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Click Counter</h1>
      
      <div className="text-5xl font-bold mb-4">{count}</div>
      
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={decrement} 
          className="bg-red-500 text-white px-4 py-2 rounded-2xl shadow hover:bg-red-600 transition"
        >
          - Decrease
        </button>
        <button 
          onClick={increment} 
          className="bg-green-500 text-white px-4 py-2 rounded-2xl shadow hover:bg-green-600 transition"
        >
          + Increase
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-lg font-medium">Step:</label>
        <input 
          type="number" 
          value={step} 
          onChange={handleStepChange}
          className="border rounded px-2 py-1 w-20 text-center"
        />
      </div>
    </div>
  );
}￼Enter
