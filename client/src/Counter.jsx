import React, { useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>−</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;