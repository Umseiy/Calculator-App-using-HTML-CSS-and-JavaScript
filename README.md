import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={decrease}
          className={`px-4 py-2 rounded-2xl text-white ${count === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
          disabled={count === 0}
        >
          Decrease
        </button>
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600"
        >
          Increase
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
