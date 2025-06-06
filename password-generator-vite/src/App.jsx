import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-={}:<>?"

    for (let i = 1; i < length; i++) {
     Math.floor(Math.random() * str.length + 1)
    }
  })

  return (
    <div className="w-full max-w-md mx-auto shadow-md  bg-gray-800 text-orange-500">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <input 
          type="range"
          id="numbers"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}
          name=""
        />
        <label className="text-gray-400" htmlFor="numbers">Numbers</label>
      </div>
      <div className="flex text-sm gap-x-2">
        <input 
          type="checkbox"
          id="characterInput"
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}
          name=""
        />
        <label className="text-gray-400" htmlFor="charInput">Character</label>
      </div>
    </div>
  );
}

export default App;
