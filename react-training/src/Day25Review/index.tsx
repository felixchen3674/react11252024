import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import Input from "./Input";
import Pagination from "./Pagination";
import Todos from "./Todos";

// 1. state change and parent rerender will cause the components to re-render

export default function Day25Review() {
  const [count, setCount] = useState(0);

  // every time component re-renders
  // everything except for hooks, in the function body will re-run

  const handleClick = useCallback(() => {
    // useCallback will memoize the function itself
    const id = Math.random();
  }, []);

  const address = useMemo(() => {
    // useMemo will memoize the return value of the function
    return {
      street: "123",
      zip: "123123213",
    };
  }, [count]);

  return (
    <div>
      <h1>Day 25 review</h1>
      <div>Parent: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Rerender</button>
      <Child a={"a"} handleClick={handleClick} address={address} />

      {/* <Input /> */}

      <Todos />
    </div>
  );
}
