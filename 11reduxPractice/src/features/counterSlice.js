import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterVal: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterVal += 1;
      console.log("hello from counterSlice.js");
    },
    decrement: (state) => {
      state.counterVal -= 1;
    },
    setCustomVal: (state, action) => {
        const val = action.payload;
        state.counterVal = Number(val);
    }
  },
});

export const { increment, decrement, setCustomVal} = counterSlice.actions;
export default counterSlice.reducer;
