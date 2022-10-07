import {useContext} from 'react';
import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext';



function TaskList() {

  const { tasks } = useContext(TaskContext);
    if(tasks.length === 0) {

        return <h1 className='text-white text-4xl font-bold text-center'>No hay valores aun</h1>
    }
 
    


  return (
    <div className='grid grid-cols-4 gap-2 auto-cols-min'>
      {tasks.map((tasks) =>(  
     <TaskCard key={tasks.id} task={tasks} />
      
      ))}
      
    </div>
   
  );
  
      }


export default TaskList;
