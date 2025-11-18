import React from 'react'

export default function Taskform() {
  return (
    <form>
        <div>
            <input type="text" placeholder='Enter the task' />
            <button type="submit">Add Task </button>
        </div>

        <div>
            <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            
            <select name="" id="">
                <option value="Work">Work</option>
                <option value="personal">personal</option>
                <option value="General">General</option>
            </select>
        </div>  
    </form>
  )
}
