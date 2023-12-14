import { FC } from "react";
import Item1 from "./Item1";
type props = {
  item: number;
  setItem:(x:number)=>void
}

export const Item: FC<props> = ({item,setItem }) => {
  return (
    <div className="item item-0" onClick={()=>setItem(item-1)}>
      <h1>Item &gt; {item}</h1>
      <Item1 {...{item,setItem}}/>
    </div>
  );
};

export default Item;
