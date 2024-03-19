/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { increment, decrement, setCustomVal } from "./features/counterSlice";

function App() {
  const [ct, setCt] = useState(0);
  const counterVal = useSelector((state) => state.counterVal);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(increment());
  };
  const dec = () => {
    dispatch(decrement());
  };
  const setToCt = () => {
    dispatch(setCustomVal(ct));
  };

  return (
    <>
      <button onClick={inc}>Increment</button>
      <h2>{counterVal}</h2>
      <button onClick={dec}>Decrement</button>
      <input 
      type="text"
      name="Counter Value"
      value={ct}
      onChange={(e) => setCt(e.target.value)} />
    <button onClick={setToCt}>Set</button>
    </>
  );
}

export default App;
