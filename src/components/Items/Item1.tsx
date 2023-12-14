import { FC } from "react";
import Item2 from "./Item2";
type props = {
  item: number;
  setItem:(x:number)=>void
}
export const Item1: FC<props> = ({item,setItem }) => {
  return (
    <div className="item item-1" onClick={()=>setItem(item+1)}>
      <h1>Item1 &gt; { item}</h1>
      <Item2/>
    </div>
  );
};

export default Item1;
