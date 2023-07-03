/* eslint-disable react/prop-types */
import "./App.css";

function Box({ val }) {
  return <button className="box">{val}</button>;
}

function Board() {
  return (
    <div className="board">
      <div className="row-1">
        <Box val={1} />
        <Box val={2} />
        <Box val={3} />
      </div>
      <div className="row-2">
        <Box val={4} />
        <Box val={5} />
        <Box val={6} />
      </div>
      <div className="row-3">
        <Box val={7} />
        <Box val={8} />
        <Box val={9} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
