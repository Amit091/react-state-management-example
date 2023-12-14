import { useState } from "react";
import { BlockA, BlockB, BlockC, BlockD } from ".";

export const Block = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  return (  
      <div className="main">
        <div className="container">
          <div className="container-box">
            <BlockA counterA={counterA} setCounterA={setCounterA} />
          </div>
          <div className="container-box">
            <BlockB counterB={counterB} setCounterB={setCounterB} />
          </div>
        </div>
        <div className="container">
          <div className="container-box">
            <BlockC />
          </div>
          <div className="container-box">
            <BlockD />
          </div>
      </div>
      </div>
      );
  };

export default  Block;