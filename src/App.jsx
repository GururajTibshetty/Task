import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";


function App() {
  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <Taskform />
      <TaskList />
      <Progresstracker /> 
      <button>clear all</button>
    </div>
  );
}

export default App;