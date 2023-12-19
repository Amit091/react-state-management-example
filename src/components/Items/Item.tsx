import { FC } from "react";
import Item1 from "./Item1";
type props = {
  item: number;
  setItem: (x: number) => void;
};

export const Item: FC<props> = ({ item, setItem }) => {
  return (
    <div className="item-parent">
      <div className="item item-0">
        <h1>Item &gt; {item}</h1>
        <button onClick={() => setItem(item - 1)}>&darr;</button>
        <Item1 {...{ item, setItem }} />
      </div>
    </div>
  );
};

export default Item;
