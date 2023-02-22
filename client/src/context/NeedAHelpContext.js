import { createContext, useReducer } from "react";

export const ToDoListContext = createContext();

export default function ContextProvider({ children }) {
  const toDoListReducer = (state, action) => {
    switch (action.type) {
      case "getUserTask":
        return {
          ...state,
          userTask: [...action.payload],
        };
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

  const [stateHelp, dispatchHelp] = useReducer(toDoListReducer, {
    todo: [],
    userTask: [],
  });

  return (
    <ToDoListContext.Provider
      value={{
        stateHelp,
        dispatchHelp,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
}
