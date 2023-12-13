import "./App.css";
import { BlockA, BlockB, BlockC, BlockD } from "./components/";

export const App = () => {

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="container-box">
            <BlockA />
          </div>
          <div className="container-box">
            <BlockB />
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
    </>
  );
};

export default App;
