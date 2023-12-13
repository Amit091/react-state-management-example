import { useState } from "react";

export const BlockB = () => {
  const [counterB, setCounterB] = useState(0);
  return (
    <div className="block">
      My Counter B :{counterB}
      <div className="card">
        <button
          className="card-button"
          onClick={() => setCounterB((counterB) => counterB + 1)}
        >
          Increase B&uarr;
        </button>
        <button
          className="card-button2"
          onClick={() => setCounterB((counterB) => counterB - 1)}
        >
          Decrease B&darr;
        </button>
      </div>
    </div>
  );
};

export default BlockB;
