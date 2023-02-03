import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0); // First index main variable declare hua or 2nd index main uski value..

  // let count = 0;

  // let add = () => {
  //   if (count < 10) setCount(count + 1);
  // };

  // const [arr, setArr] = useState(["APPLE,MANGO"]);
  // let add = () => {
  //   arr.push("orange");
  //   // arr.push("123");
  //   console.log();
  //   setArr([...arr]);
  // };
  const [arr, setArr] = useState(["APPLE,MANGO"]);
  const [Text, setText] = useState("");
  let add = () => {
    arr.push(Text);
    // arr.push("123");
    console.log();
    setArr([...arr]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{count}</p> */}
        {/* <button onClick={add}>add</button> */}

        {/* {arr.map((x, i) => (
          <p>{x}</p>
        ))}
        <button onClick={add}>add</button> */}
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="ENTER Text"
        ></input>
        {arr.map((x, i) => (
          <p>{x}</p>
        ))}

        <p>{Text}</p>
        <button onClick={add}>add</button>
      </header>
    </div>
  );
}

export default App;
