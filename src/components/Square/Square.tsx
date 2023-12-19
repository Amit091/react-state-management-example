import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { decrement, increment } from "../../redux/counter";
import Square1 from "./Square1";
import "./Square.css";

export const Square = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="square-parent">
      <div className="square square-0">
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
        <Square1 />
      </div>
    </div>
  );
};

export default Square;
