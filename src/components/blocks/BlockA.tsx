import { FC } from "react";

type props = {
  counterA: number;
  setCounterA:(x:number)=>void
}

export const BlockA:FC<props> = ({counterA,setCounterA}) => {
  // const [counterA, setCounterA] = useState(0);
  return (
    <div className="block">
      My Counter A : {counterA}
      <div className="card">
        <button
          className="card-button"
          onClick={() => setCounterA(counterA + 1)}
        >
          Increase A&uarr;
        </button>
        <button
          className="card-button2"
          onClick={() => setCounterA(counterA - 1)}
        >
          Decrease A&darr;
        </button>
      </div>
    </div>
  );
};

export default BlockA;
