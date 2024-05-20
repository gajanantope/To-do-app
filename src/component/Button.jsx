import React, { useContext, useRef, useState } from "react";
import { ToDoItemContext } from "../store/todoItemStore";

function Button() {
  const { addNewItems } = useContext(ToDoItemContext);
  const Name = useRef();
  const Date = useRef();

  const handleAddTodo = () => {
    const todoName = Name.current.value;
    const todoDate = Date.current.value;

    addNewItems(todoName, todoDate);
    Name.current.value = "";
    Date.current.value = "";
  };
  return (
    <>
      <div className="border-black ">
        <input
          type="text"
          placeholder="Enter Your To Do"
          ref={Name}
          className="border-2 border-black rounded-md pl-2"
        />
      </div>
      <div>
        <input className="border-black" type="date" name="gajanan" ref={Date} />
      </div>
      <button
        type="button"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 max-w-24"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </>
  );
}
export default Button;
