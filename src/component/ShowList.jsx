import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { ToDoItemContext } from "../store/todoItemStore";

function ShowList({}) {
  const { todoItem, DeleateItem } = useContext(ToDoItemContext);
  return (
    <>
      {todoItem.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          toDoDate={item.date}
          onDeleteitem={DeleateItem}
        />
      ))}
    </>
  );
}

export default ShowList;
