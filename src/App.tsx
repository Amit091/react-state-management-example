import { useState } from "react";
import "./App.css";
import Item from "./components/Items/Item";
import Block from "./components/blocks/Block";

export const App = () => {
  const [item, setItem] = useState(0);

  return (
    <>
      <nav>
        <a className="nav-link" href="#state-1">Use State</a>
        <a className="nav-link" href="#state-2">Passing state within components</a>
      </nav>
      <div>
        <h2 id="state-1">use state example</h2>
        <Block />
      </div>
      <div>
        <h2 id="state-2">Passing state within components</h2>
        <Item {...{ item, setItem }} />
      </div>
    </>
  );
};

export default App;
