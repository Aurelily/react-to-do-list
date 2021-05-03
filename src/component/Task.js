import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ taskTab, setTaskTab, newTask, isDone, setIsDone }) => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState(0);

  const handleCheck = () => {
    if (checked === false) {
      const newTaskTab = [...taskTab];
      const indexTask = newTaskTab.indexOf(newTask);
      const taskDone = newTaskTab.splice(indexTask, 1);
      isDone = true;
      setTaskTab(newTaskTab);
      newTaskTab.push(taskDone);
      setTaskTab(newTaskTab);
      setChecked(true);
      console.log(newTaskTab);
      console.log("isDone:" + isDone);
    } else {
      setChecked(false);
      isDone = false;
      console.log("isDone:" + isDone);
    }
    setIsDone(isDone);
  };

  const handleTrashClick = () => {
    const newTaskTab = [...taskTab];
    const indexTask = newTaskTab.indexOf(newTask);
    newTaskTab.splice(indexTask, 1);
    setChecked(false);
    setTaskTab(newTaskTab);
    console.log(newTaskTab);
  };

  const handleTrashOver = () => {
    color === 0 ? setColor(1) : setColor(0);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        name="check"
        className="checkbox"
        checked={checked}
        onChange={handleCheck}
      ></input>
      <div className={checked === true ? "crossed" : ""}>{newTask}</div>
      <button
        className="trash"
        onClick={handleTrashClick}
        onMouseOver={handleTrashOver}
        onMouseOut={handleTrashOver}
      >
        <FontAwesomeIcon
          icon="trash"
          color={color === 0 ? "var(--violet-react)" : "var(--grey-react)"}
        />
      </button>
    </div>
  );
};
export default Task;
