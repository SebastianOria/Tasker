import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTasks } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        onClick={() => deleteTasks(task.id)}
        className="bg-red-500 p-2 py-1 rounded-md mt-4 hover:bg-red-400"
        >
        Eliminar Tarea
      </button>
    </div>
  );
}
