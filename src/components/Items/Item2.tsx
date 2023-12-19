import { FC } from "react";
import Item3 from "./Item3";
type props = {
  item: number;
  setItem: (x: number) => void;
};

export const Item2: FC<props> = ({ item, setItem }) => {
  return (
    <div className="item item-2">
      <h1>Item2 &gt; {item}</h1>
      <button onClick={() => setItem(item - 2)}>&#x21CA;</button>
      <Item3 {...{ item, setItem }} />
    </div>
  );
};

export default Item2;
