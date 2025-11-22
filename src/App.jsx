import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import React from "react";
import "./Style.css";


export default function App() {
const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  } ,[tasks]);

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }
   
   const updateTask = (updatedTask, index) => {
    // Logic to update a task
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    // Logic to delete a task
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTask = () => {
    setTasks([]);
  };

  return (
    <div className="App">
    <header>
      <h1>Welcome to Task Manager</h1>
      <p className="tagline">Manage your tasks efficiently</p>
    </header>
      <Taskform addTask={addTask} />
      <TaskList task={tasks} 
      updateTask={updateTask} 
      deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} /> 
      {tasks.length>0 && <button onClick={clearTask} className="clear-button"> clear all</button>}
     
    </div>
  )
}

