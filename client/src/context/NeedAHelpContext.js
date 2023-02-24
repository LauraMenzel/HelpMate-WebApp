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

      case "getAllTasks":
        return {
          ...state,
          allTasks: [...action.payload],
        };
      case "deleteItem":
        return {
          ...state,
          userTask: [
            ...state.userTask.filter((item) => item._id !== action.payload),
          ],
          allTasks: [
            ...state.allTasks.filter((item) => item._id !== action.payload),
          ],
        };
      default:
        return state;
    }
  };

  const [stateHelp, dispatchHelp] = useReducer(toDoListReducer, {
    allTasks: [],
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
