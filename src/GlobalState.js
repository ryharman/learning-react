import React, { useReducer, createContext } from 'react';
import { todoReducer } from "./todoReducer";

/* Allows for use of useContext(TodoContext)
** in a hook to manipulate the global state
** with the TodoReducer function.
*/
export const TodoContext = createContext();

// Gets initialstate from localstorage
const initialState = () => {
  if(JSON.parse(localStorage.getItem('todo')) === null) {
    return { 
      1: { 
        id: 1, 
        done: false, 
        label: "Placeholder task", 
        content:"Placeholder content", 
        editable: false 
      } 
    };
  } else {
    return JSON.parse(localStorage.getItem('todo'));
  }
};

// Used to enclose child components to provide state
export const TodoContextProvider = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState());

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodoContext.Provider>
  );
}