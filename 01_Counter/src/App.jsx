import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [inRange, setinRange] = useState(false);
  return (
    <>
      <h1>Counter</h1>
      <h1>Value : {value}</h1>
      <button
        onClick={() => {
          if (!inRange || value > 0) {
            setPrevValue(value);
            setValue(value - 1);
          }
        }}
      >
        decrease by 1
      </button>{" "}
      <button
        onClick={() => {
          setPrevValue(value);
          setValue(0);
        }}
      >
        reset
      </button>{" "}
      <button
        onClick={() => {
          if (!inRange || value < 20) {
            setPrevValue(value);
            setValue(value + 1);
          }
        }}
      >
        increase by 1
      </button>
      <br />
      <br />
      <h3>
        value in range 0-20
        <input
          type="checkbox"
          checked={inRange}
          onChange={() => {
            setinRange(prev => !prev);
          }}
        />
      </h3>
      <h2>Prev Value : {prevValue}</h2>
    </>
  );
}

export default App;
