import React from 'react'

export default function TaskList({ task, updateTask, deleteTask }) {

    const toggleComplete = (index) => {
        const updatedTasks = {...task[index], completed: !task[index].completed};
        updateTask(updatedTasks  ,index)
    }
  return (

    <ul>
        {task.map((task, index)=>(
            <li key={index}>
                <div>
                    <span>{task.text} 
                        <small> {task.priority}, {task.category }</small>
                    </span>
                </div>

                <div>      
                   <button onClick={()=> toggleComplete(index)}>
                    {task.completed ? "Undo" :  "Complete"}</button>
                   <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
  )
}
