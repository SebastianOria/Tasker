import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);   

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTasks(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTasks: deleteTasks,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
