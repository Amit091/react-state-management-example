import { useState } from "react";

export const BlockD = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="block">
      My Counter D :{counter}
      <div className="card">
        <button
          className="card-button"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          Increase D&uarr;
        </button>
        <button
          className="card-button2"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          Decrease D&darr;
        </button>
      </div>
    </div>
  );
};

export default BlockD;
