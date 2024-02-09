import { useState } from "react";
import "./App.css";



// onClick attribute takes function as value.
// onClick(setColor("red")) -> it's bad practice cause you're giving function ref not the function
// therefore use callback to pass function
// onClick(() => setColor("red"))  -> now this callback function calls the function which is a good practice
function App() {
  const [color, setColor] = useState("powderblue");
  return (
    <div
      className="w-full h-screen duration-200 m-0"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 px-2 inset-x-0 flex flex-wrap justify-center shadow-lg bg-slate-500">
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="outline-dotted px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("powderblue")}
        >
          Powder Blue
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("violet")}
        >
          Violet
        </button>
      </div>
    </div>
  );
}

export default App;
