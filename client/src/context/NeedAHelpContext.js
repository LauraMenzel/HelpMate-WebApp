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
      case "getInProgressUserTask":
        return {
          ...state,
          userInProgressTask: [...action.payload],
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
      case "deleteHelper":
        return {
          ...state,
          userInProgressTask: [
            ...state.userInProgressTask.filter(
              (item) => item._id !== action.payload
            ),
          ],
        };
      case "editTask":
        const taskIdx = state.userTask.findIndex(
          (item) => item._id === action.payload._id
        );
        const newUserTask = [...state.userTask];
        const newAllTasks = [...state.allTasks];
        newUserTask[taskIdx] = action.payload;
        newAllTasks[taskIdx] = action.payload;
        return {
          ...state,
          userTask: [...newUserTask],
          allTasks: [...newAllTasks],
        };
      case "setTaskHelper":
        const helpersIdx = state.allTasks.findIndex(
          (item) => item._id === action.payload._id
        );

        const newAllHelpers = [...state.allTasks];

        newAllHelpers[helpersIdx] = action.payload;
        return {
          ...state,

          allTasks: [...newAllHelpers],
        };
      case "getHelpAcceptedTask":
        return {
          ...state,
          helpAcceptedTask: [...action.payload],
        };
      default:
        return state;
    }
  };

  const [stateHelp, dispatchHelp] = useReducer(toDoListReducer, {
    allTasks: [],
    userTask: [],
    userInProgressTask: [],
    helpAcceptedTask: [],
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
