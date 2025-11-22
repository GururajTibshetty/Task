import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Taskform({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  const date = new Date()
  const [dueDate, setDueDate] = useState(date);

  const handlesubmit = (e) => {
    e.preventDefault();

    addTask({
      text: task,
      priority,
      category,
      dueDate,
      completed: false,
    });

    // Reset
    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form onSubmit={handlesubmit} className="task-form">
      <div id="inp">
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {/* ⚡ DatePicker with Icon */}
        <div className="date-picker-wrapper">
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="yyyy-MM-dd"
            customInput={
              <div className="date-input">
                <span className="calendar-icon">📅</span>
                <span className="date-text">
                  {dueDate ? dueDate.toISOString().split("T")[0] : ""}
                </span>
              </div>
            }
          />
        </div>

        <button type="submit" disabled={task.trim() === ""}>
          Add task
        </button>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}
