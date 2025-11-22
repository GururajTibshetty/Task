import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

export default function TaskList({ task, updateTask, deleteTask }) {

    const toggleComplete = (index) => {
        const updatedTasks = {...task[index], completed: !task[index].completed};
        updateTask(updatedTasks  ,index)
    }
  return (
   <div className='task-list'>
    <ul>
        {task.map((task, index)=>(
            <li key={index} className= {task.completed ? "completed" : ""}>
                <div className='task-info'>
                    <div className='task-mis'>
                        <span>{task.text}</span>
                        <div>
                        <small className='task-details' > Priority: {task.priority}</small>
                        <small className='task-details'> Category: {task.category} </small>
                        </div>
                    </div>
                </div>
                <p className='date'>{task.dueDate ? new Date(task.dueDate).toISOString().split("T")[0] : "No date set"}</p>
                   <div>
                   <button onClick={()=> toggleComplete(index)} title={task.completed ? "Undo" : "Complete"}>
                    <FaCheck />
                   </button>
                   <button onClick={() => deleteTask(index)} title="Delete"><FaTrash color='red' /></button>
                    </div>
            </li>
        ))}
    </ul>
    </div>
  )
}
