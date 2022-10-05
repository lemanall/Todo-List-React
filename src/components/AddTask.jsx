// Hooks
import { useState } from "react";

// Components
import Button from "./Button";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask("");
  };

  const enterTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="h-[100px] bg-[#35454d] flex items-center justify-center">
      <form onSubmit={submitFormHandler}>
        <input
          onChange={enterTask}
          value={task}
          className="w-[400px] mr-1 inline-block p-3 bg-transparent border border-[#ecf3f3] text-[#ecf3f3] rounded-sm text-sm focus:outline-none"
          type="text"
          placeholder="Add your task"
        />
        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
