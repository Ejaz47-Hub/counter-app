import React, { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center gap-30 ">
      <button
        onClick={() => {
          setcount(count - 1);
        }}
        className="w-20 bg-green-300 cursor-pointer"
      >
        -
      </button>
      <p className="w-20 bg-amber-400 text-center">{count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
        className="w-20 bg-green-400 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
