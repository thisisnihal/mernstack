import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

/**
 * To create a Slice we have to pass three things
 * name of the slice
 * initial state of the slice
 * reducers object contains methods/actions to manipulate the slice/state
 * reducers have access to two things state and action
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
        state.status = false;
        state.userData = null;
    }
  },
});

// inside reducers, 'login' and 'logout' are called the actions
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
