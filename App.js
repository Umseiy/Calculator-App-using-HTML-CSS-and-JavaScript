npx create-react-app my-counter-app
      cd my-counter-app
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Click Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;


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
