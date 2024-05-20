import { createContext } from "react";

export const ToDoItemContext = createContext({
  todoItem: [],
  addNewItems: () => {},
  DeleateItem: () => {},
});
