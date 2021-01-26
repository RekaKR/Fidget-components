import React, { useState } from 'react';
import '../style/app.css';

function BoxCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="box-counter">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default BoxCounter;