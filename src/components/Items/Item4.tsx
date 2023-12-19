import { FC } from "react";

type props = {
  item: number;
  setItem: (x: number) => void;
};

export const Item4: FC<props> = ({ item, setItem }) => {
  return (
    <div className="item item-4">
      <h1>Item4 &gt; {item}</h1>
      <button onClick={() => setItem(item + 1)}>+</button>
      <button onClick={() => setItem(item - 1)}>&minus;</button>
    </div>
  );
};

export default Item4;
