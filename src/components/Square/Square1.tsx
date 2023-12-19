import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Square2 from "./Square2";

export const Square1 = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div className="square square-1">
      <h2>Square1 Count &gt; {count}</h2>
      <Square2 />
    </div>
  );
};

export default Square1;
