import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("bg-red-500");

  return (
    <>
      <div className={`${color} w-full min-h-screen`}>
        <div className="bg-white rounded-3xl fixed flex flex-wrap bottom-12 justify-center m-20 p-3">
          <button
            onClick={() => {
              setColor("bg-red-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("bg-green-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("bg-blue-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("bg-orange-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-orange-500"
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("bg-gray-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-gray-500"
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("bg-yellow-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("bg-pink-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-pink-500"
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("bg-purple-500");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-purple-500"
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("bg-purple-200");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl bg-purple-200"
          >
            Levender
          </button>
          <button
            onClick={() => {
              setColor("bg-white");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl border-gray-300 border-2 bg-white"
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("bg-black");
            }}
            className="mx-2 my-1 px-6 py-2 text-md rounded-xl text-white bg-black"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
