import React, { useState, useEffect } from "react";
import "./App.css";

const increments = [1, 2, 5, 10];

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "Count: " + count;
  });
  return (
    <div className="App">
      <div>Count: {count}</div>
      <div>
        {increments.map((value) => {
          return (
            <button onClick={() => setCount(count + value)}>+{value}</button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
