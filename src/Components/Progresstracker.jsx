import React from 'react'

export default function Progresstracker({ tasks }) {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  return (
    <div className='progress-tracker'>
        <p>
            {completedTasks} of {totalTasks} tasks completed ({progressPercentage.toFixed(2)}%)
        </p>

        <div className='progress-bar'>
            <div className='progress' style={{ width: `${progressPercentage}%` }}></div>

        </div>
       
    </div>
  )
}
