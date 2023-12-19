import { FC } from "react";
import Item4 from "./Item4";
type props = {
  item: number;
  setItem: (x: number) => void;
};
export const Item3: FC<props> = ({ item, setItem }) => {
  return (
    <div className="item item-3">
      <h1>Item3 &gt; {item}</h1>
      <button onClick={() => setItem(item + 2)}>&#x21C8;</button>
      <Item4 {...{ item, setItem }} />
    </div>
  );
};

export default Item3;
