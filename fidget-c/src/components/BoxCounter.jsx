import React, { useState, useEffect } from 'react';
import '../style/app.css';

function BoxCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 10 || counter < -10) {
      setCounter("OK, THAT'S IT!")
    }
  }, [counter]);

  useEffect(() => {
    if (isNaN(counter) && counter !== "OK, THAT'S IT!") {
      setCounter(0)
    }
  }, [counter]);

  return (
    <div className="box-counter">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default BoxCounter;