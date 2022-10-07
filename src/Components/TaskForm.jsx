import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext';


export default function TaskForm() {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);


  const handleSubmit = (event) => {
    event.preventDefault();

    createTask({
        title,
        description
    });
    setTitle('')
    setDescription('')

  };

  return (

    <div className="max-w-md mx-auto">
          <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
      <input className="bg-slate-300 p-3 w-full mb-2"
        placeholder="escribe tu tarea"
        onChange={function (event) {
          setTitle(event.target.value);
        }}
        value = {title}
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2"
        placeholder="escribe la descripcion de la tarea"
        onChange={function (event) {
          setDescription(event.target.value);
          
        }}
        value = {description}
      />

      <button className="bg-indigo-500 px-3 py-1 text-white  ">Crear</button>
    </form>


    </div>

  );
}
