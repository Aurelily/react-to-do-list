import "./App.css";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Task from "./component/Task";
import EnterTask from "./component/EnterTask";

import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faList } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faList);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [task, setTask] = useState("");
  const [taskTab, setTaskTab] = useState([]);
  const [id, setId] = useState(0);

  return (
    <div className={darkMode && "darkMode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <EnterTask
          task={task}
          setTask={setTask}
          taskTab={taskTab}
          setTaskTab={setTaskTab}
          id={id}
          setId={setId}
        />
        <div className="toDoList">
          {taskTab.map((newTask, index) => {
            return (
              <Task
                key={index}
                id={id}
                newTask={newTask}
                taskTab={taskTab}
                setTaskTab={setTaskTab}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
