import { useState } from "react";
import "./App.css";
import Item from "./components/Items/Item";
import Block from "./components/blocks/Block";
import Square from "./components/Square/Square";

interface IExample {
  e0: boolean;
  e1: boolean;
  e2: boolean;
}

export const App = () => {
  const [item, setItem] = useState(0);

  const [example, setExample] = useState<IExample>({
    e0: false,
    e1: false,
    e2: false,
  });

  const updateExample = (key: keyof IExample) => {
    setExample((prevExample) => ({
      ...{
        e0: false,
        e1: false,
        e2: false,
      },
      [key]: !prevExample[key],
    }));
  };

  return (
    <div>
      <nav>
        <button className="nav-link" onClick={() => updateExample(`e0`)}>
          Use State
        </button>
        <button className="nav-link" onClick={() => updateExample(`e1`)}>
          Passing state within components
        </button>
        <button className="nav-link" onClick={() => updateExample(`e2`)}>
          Redux toolkit
        </button>
      </nav>
      <div className="main-example">
        {example.e0 ? (
          <div>
            <h2 id="state-1">use state example</h2>
            <Block />
          </div>
        ) : null}

        {example.e1 ? (
          <div>
            <h2 id="state-2">Passing state within components</h2>
            <Item {...{ item, setItem }} />
          </div>
        ) : null}

        {example.e2 ? <Square /> : null}
      </div>
    </div>
  );
};

export default App;
