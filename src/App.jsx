// Hooks
import { useState } from "react";

// Components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (task) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          title: task,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f3645b] to-[#fb8873] flex items-center justify-center">
      <div className="p-3 bg-[#ecf3f3] w-[700px]">
        <AddTask onAddTask={addTasks} />
        {tasks.length > 0 && <TaskList onDelete={deleteTask} tasks={tasks} />}
      </div>
    </div>
  );
}

export default App;
