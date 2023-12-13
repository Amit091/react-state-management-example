import { useState } from "react";
export const BlockA = () => {
  const [counterA, setCounterA] = useState(0);
  return (
    <div className="block">
      My Counter A : {counterA}
      <div className="card">
        <button
          className="card-button"
          onClick={() => setCounterA((counterA) => counterA + 1)}
        >
          Increase A&uarr;
        </button>
        <button
          className="card-button2"
          onClick={() => setCounterA((counterA) => counterA - 1)}
        >
          Decrease A&darr;
        </button>
      </div>
    </div>
  );
};

export default BlockA;
