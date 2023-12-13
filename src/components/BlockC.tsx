import { useState } from "react";

export const BlockC = () => {
  const [counterC, setCounterC] = useState(0);
  return (
    <div className="block">
      My Counter C :{counterC}
      <div className="card">
        <button
          className="card-button"
          onClick={() => setCounterC((counterC) => counterC + 1)}
        >
          Increase C&uarr;
        </button>
        <button
          className="card-button2"
          onClick={() => setCounterC((counterC) => counterC - 1)}
        >
          Decrease C&darr;
        </button>
      </div>
    </div>
  );
};

export default BlockC;