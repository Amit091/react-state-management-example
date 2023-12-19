import Square3 from "./Square3";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { decrement, increment } from "../../redux/counter";

export const Square2 = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="square square-2">
      <div className="row">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h2>Square Count &gt; {count}</h2>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Square3 />
    </div>
  );
};

export default Square2;
