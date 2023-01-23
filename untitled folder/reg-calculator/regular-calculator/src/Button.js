import React, { useState } from "react";
import "./button.css";

function Button() {
    const [count, setCount] = useState(0); 
  return (
    <div className="counter">
    <h1>Counter App</h1>
      <div>
        <h2>{count}</h2>
        <div>
        <button className="increment" onClick={() => setCount(count + 1)}> Increment </button>
        <button className="decrement" onClick={() => setCount(count - 1)} disabled={count === 0 }> Decrement </button>
        <button className="reset" onClick={() => setCount(count * 0)} disabled={count === 0}> Reset </button>
      </div>
      </div>
    </div>
  );
}

export default Button;