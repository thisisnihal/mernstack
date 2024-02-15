import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
// simply exporting a store object
export const store = configureStore({
    reducer: todoReducer
})