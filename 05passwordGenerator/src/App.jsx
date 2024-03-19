import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [canUseNumber, setCanUseNumber] = useState(false);
  const [canUseCharacter, setCanUseCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (canUseNumber) {
      str += "0123456789";
      // str.concat("1234567890"); // not working : (
      console.log(str);
    }
    if (canUseCharacter) {
      str += "!@#$%^&*_-+=[]{}~`";
    }
    for (let i = 1; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx);
    }
    setPassword(pass);
  }, [length, canUseNumber, canUseCharacter, password, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, canUseNumber, canUseCharacter]);

  const passwordRef = useRef(null);
  const copyBtnRef = useRef(null);
  // you can also use useCallback to cache
  const copyPassword = () => {
    passwordRef.current?.select();
    console.log("passwordRef: ",passwordRef.current?.type);
    console.log("copyBtnRef: ", copyBtnRef.current?.className);
    navigator.clipboard.writeText(password);
    setCopyBtnText("Copied!");
    setTimeout(() => {
      setCopyBtnText("Copy");
    }, 1500);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="transition ease-in-out duration-200 outline-none bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassword}
            ref={copyBtnRef}
          >
            {copyBtnText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1.5">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>

            <input
              type="checkbox"
              id="numberInput"
              onChange={() => {
                setCanUseNumber((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              id="characterInput"
              onChange={() => {
                setCanUseCharacter((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
