import React from "react";

function TodoItem({
  todoName = "buy milk",
  toDoDate = "11/11/2011",
  onDeleteitem,
}) {
  return (
    <>
      <div>
        <h3>{todoName}</h3>
      </div>
      <div>
        <p>{toDoDate}</p>
      </div>
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 max-w-24"
        onClick={() => {
          onDeleteitem(todoName);
        }}
      >
        Delate
      </button>
    </>
  );
}

export default TodoItem;
