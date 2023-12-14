import { FC, } from "react";
type props = {
  counterB: number;
  setCounterB:(x:number)=>void
}
export const BlockB:FC<props> = ({counterB,setCounterB}) => {
  // const [counterB, setCounterB] = useState(0);
  return (
    <div className="block">
      My Counter B :{counterB}
      <div className="card">
        <button
          className="card-button"
          onClick={() => setCounterB(counterB + 1)}
        >
          Increase B&uarr;
        </button>
        <button
          className="card-button2"
          onClick={() => setCounterB(counterB - 1)}
        >
          Decrease B&darr;
        </button>
      </div>
    </div>
  );
};

export default BlockB;
