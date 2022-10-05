// Components
import Button from "./Button";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="border-2 border-[#35454d] justify-center p-5">
      <ul className="list-none m-0 w-[600px] border-2 border-[#35454d] p-2">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="bg-[#35454d] text-[#ecf3f3] p-2 w-100 flex justify-between items-center transition-all duration-300 ease-in-out rounded-sm mb-2"
            >
              <span>{task.title}</span>
              <Button onClick={() => onDelete(task.id)}>Delete Task</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
