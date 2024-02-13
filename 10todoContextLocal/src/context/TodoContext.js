import { createContext, useContext } from "react";


/**
 * This context stores an array 
 * This context keeps the method definition and value
 * 
 */
export const TododContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo message ",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TododContext)
}
export const TodoProvider = TododContext.Provider