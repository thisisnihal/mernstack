/* name ends with slice means it's a reducer */
import { createSlice, nanoid } from "@reduxjs/toolkit";
/**
 * nanoid method is used to generate Ids
 */

/**
 * Here we are creating initial state for store
 * it takes an object
 * this object have one key-value pair
 * key is "todos" and value is an array which stores an object as each element
 *
 */
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World"
    }
  ]
};
/**
 * here's a function to manipulate the state of store
 * it's a reducer/slice
 *
 */
export const todoSlice = createSlice({
  // slices have a inbuilt name key property, you have to pass value
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
      
    },
    removeTodo: (state, action) => {
      const id = action.payload
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    // check once
    // updateTodo: (state, action) => {
    //   const id = action.payload.id;
    //   const newText = action.payload.text;
    //   state.todos = state.todos.filter((item) => {
    //     if (item.id === id) {
    //       item.text = newText;
    //     }
    //   });
    // },
  }
});

// In context api we used to pass only function declaration
// But in reducers we pass the function definition also.
// key "reducers" takes an object. This object takes key as function ref name and value as function
// which take two arg state and action
// "state" is current state and action is the new state that we'll be passing.

//
export const { addTodo, removeTodo } = todoSlice.actions;

// exporting to aware the store
export default todoSlice.reducer;
