import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // use effect runs after every render (any time any piece of state changes) by default
  useEffect(
    function myEffect() {
      console.log("MY EFFECT WAS CALLED!");
    },
    [count] // this is an array of dependencies. it tells effect to only run when count state changes
  );

  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
}
