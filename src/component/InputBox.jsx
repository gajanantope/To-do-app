import React from "react";

function InputBox() {
  return (
    <>
      <div className="border-black ">
        <input
          type="text"
          placeholder="Enter Your To Do"
          className="border-2 border-black rounded-md pl-2"
        />
      </div>
    </>
  );
}

export default InputBox;
