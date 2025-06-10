# Click-counter-app
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600"
        >
          Decrease
        </button>
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
