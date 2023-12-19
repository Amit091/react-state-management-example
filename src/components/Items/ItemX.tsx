import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { decrement, increment } from "../../redux/counter";

export const Item4 = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="item item-4">
      <h1>Item4 &gt; {count}</h1>
      <div>
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
    </div>
  );
};

export default Item4;
