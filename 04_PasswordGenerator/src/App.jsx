import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const passwordRef = useRef(null);

  const strength = length * (26 + 10 * numberAllowed + 26 * upperCaseAllowed + 32 * characterAllowed);

  const passwordGenerator = () => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (upperCaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "`~!@#$%^&*'()_+=-:;/|}{[]()?><,.";
    let generatedpassword = "";
    for (let i = 0; i < length; i++) {
      generatedpassword += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(generatedpassword);
  };
  useEffect(() => {
    passwordGenerator();
    setIsCopied(false);
  }, [length, upperCaseAllowed, numberAllowed, characterAllowed]);

  const copyToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center bg-blue-500">
        <div className="w-full">
          <div className="w-full rounded-2xl max-w-md h-50 mx-auto bg-white my-8 p-5">
            <h1 className="text-3xl ">Password Generator</h1>
            <div className="w-full flex justify-between border-gray-300 border-2 rounded-md">
              <input
                type={hidden ? "password" : "text"}
                className="w-full h-8 rounded-md outline-none text-gray-500 font-mono"
                value={password}
                readOnly
                ref={passwordRef}
              />
              <button
                className=" px-2 rounded-md"
                onClick={() => {
                  setHidden(prev => !prev);
                }}
              >
                {!hidden ? (
                  <svg
                    className="h-5 w-5 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />{" "}
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="w-full flex justify-between py-1">
              <div className={`flex ${strength < 700 ? "text-red-500" : strength < 1000 ? "text-orange-300" : strength < 2500 ? "text-green-400" : "text-green-600"} `}>
                {/* {strength} */}
                <svg
                  className="h-5 w-5 mt-0.5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {strength < 700 ? "weak " : strength < 1000 ? "average " : strength < 2500 ? "strong " : "very strong "}password
              </div>
              <button
                onClick={copyToClipBoard}
                className="bg-yellow-500 px-2 rounded-sm"
              >
                {isCopied ? "copied" : "copy"}
              </button>
            </div>
            <div className="w-full">
              <input
                className="w-full"
                type="range"
                min={6}
                max={50}
                value={length}
                onChange={e => {
                  setLength(e.target.value);
                }}
              />
            </div>
            <div className="w-full flex">
              <div className="w-1/2 text-left">Password Length : {length}</div>
              <div className="w-1/2 flex justify-end">
                <input
                  type="checkbox"
                  className="w-4 mr-1"
                  checked={upperCaseAllowed}
                  onChange={() => {
                    setUpperCaseAllowed(prev => !prev);
                  }}
                />
                A-Z
                <input
                  type="checkbox"
                  className="w-4 mr-1 ml-5"
                  checked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed(prev => !prev);
                  }}
                />
                0-9
                <input
                  type="checkbox"
                  className="w-4 mr-1 ml-5"
                  checked={characterAllowed}
                  onChange={() => {
                    setCharacterAllowed(prev => !prev);
                  }}
                />
                !@#
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
