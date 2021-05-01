import "./App.css";

import Footer from "./component/Footer";
import Task from "./component/Task";

import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [task, setTask] = useState("");
  const [taskTab, setTaskTab] = useState([]);
  const newTaskTab = [...taskTab];

  const handleSubmit = (event) => {
    setTask(event.target.value);
    console.log(task);
  };

  const handleClick = () => {
    newTaskTab.push(task);
    console.log("newTaskTab:" + newTaskTab);
    return setTaskTab(newTaskTab);
  };

  return (
    <div className="container">
      <div className="header">React To Do List</div>
      <div className="project">
        <div className="addTask">
          <input type="text" value={task} onChange={handleSubmit} />
          <button onClick={handleClick}>Add task</button>
        </div>
        <div className="toDoList">
          {newTaskTab.map((newTask, index) => {
            return <Task key={index} newTask={newTask} />;
          })}
        </div>
        <div className="zoneDone">
          <p>Zone done !</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
