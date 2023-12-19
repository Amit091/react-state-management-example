import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { decrement, increment, incrementByAmount } from "../../redux/counter";

export const Square4 = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="square square-4">
      <h2>Square4 Count &gt; {count}</h2>
      <div className="row">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button
        aria-label="increment By Amount"
        onClick={() => dispatch(incrementByAmount(333))}
      >
        increase By 333
      </button>
      <button
        aria-label="increment By Amount"
        onClick={() => dispatch(incrementByAmount(-333))}
      >
        decrease By 333
      </button>
    </div>
  );
};

export default Square4;
