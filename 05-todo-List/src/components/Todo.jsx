import { useState } from "react";

function Todo() {
  //   let inptValue = "";

  const [Task, setTask] = useState("");

  const [value, setValue] = useState("");
  return (
    <div className="">
      <p>{value}</p>

      <input
        placeholder="enter your task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setValue(Task);
        }}
      >
        {" "}
        Add Task
      </button>
    </div>
  );
}
export default Todo;
