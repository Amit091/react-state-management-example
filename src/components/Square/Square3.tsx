import Square4 from "./Square4";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const Square3 = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div className="square square-3">
      <h2>Square3 Count &gt; {count}</h2>
      <Square4 />
    </div>
  );
};

export default Square3;
