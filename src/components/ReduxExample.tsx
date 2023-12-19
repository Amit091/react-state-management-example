import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { decrement, increment, incrementByAmount } from "../redux/counter";


export const ReduxExample = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>count:{count}</h2>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="increment By Amount"
        onClick={() => dispatch(incrementByAmount(333))}
      >
        increment By Amount
      </button>
    </div>
  );
};

export default ReduxExample;
