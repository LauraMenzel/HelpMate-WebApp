import { createContext, useReducer } from "react";

export const ToDoListContext = createContext();

export const toDoListReducer = (state, action) => {
  switch (action.type) {
    case "getTodo":
      return {
        ...state,
        todo: [...action.payload],
      };
    case "addTodo":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "deleteItem":
      return {
        ...state,
        todo: [...state.todo.filter((item) => item._id !== action.payload)],
      };
    default:
      return state;
  }
};

export const ToDoListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoListReducer, {
    todo: [],
  });

  return (
    <ToDoListContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
