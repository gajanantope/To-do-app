import { useReducer, useState } from "react";

import "./App.css";
import Title from "./component/Title.jsx";
import Button from "./component/Button.jsx";
// import Date from "./component/Date.jsx";
// import InputBox from "./component/InputBox.jsx";
import ShowList from "./component/ShowList.jsx";
import { ToDoItemContext } from "./store/todoItemStore.jsx";

const todoItemReducer = (currvalue, action) => {
  let newTodoItem = currvalue;
  if (action.type === "ADD_ITEM") {
    newTodoItem = [
      ...currvalue,
      { name: action.payload.todoitem, date: action.payload.duedate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currvalue.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItem;
};
function App() {
  let initialTodoItem = [
    { name: "buy milk", date: "11/11/2011" },
    { name: "go to college", date: "11/11/2011" },
    { name: "do assignment", date: "11/10/2019" },
  ];

  const [todoItem, disptchItem] = useReducer(todoItemReducer, []);

  const addNewItems = (todoitem, duedate) => {
    const newTodoItemAction = {
      type: "ADD_ITEM",
      payload: {
        todoitem,
        duedate,
      },
    };
    disptchItem(newTodoItemAction);
  };

  const DeleateItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    disptchItem(deleteItemAction);
  };

  return (
    <>
      <ToDoItemContext.Provider value={{ todoItem, addNewItems, DeleateItem }}>
        <Title></Title>
        <div className="grid cw grid-cols-3 gap-2 max-w-4xl mx-auto mt-5">
          <Button></Button>
          <ShowList></ShowList>
        </div>
      </ToDoItemContext.Provider>
    </>
  );
}

export default App;
