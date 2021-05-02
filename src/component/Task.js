import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ taskTab, setTaskTab, newTask, id }) => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState(0);

  const handleCheck = () => {
    if (checked === false) {
      setChecked(true);
      const newTaskTab = [...taskTab];
      const taskSplice = newTaskTab.splice(id, 1);
      newTaskTab.push(taskSplice);
      setTaskTab(newTaskTab);
      console.log("newTaskTab:" + newTaskTab);
    } else {
      setChecked(false);
    }
  };

  const handleTrashClick = () => {
    const newTaskTab = [...taskTab];
    const indexTask = newTaskTab.indexOf(newTask);
    newTaskTab.splice(indexTask, 1);
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
      <div className={checked === true ? "done" : ""}>{newTask}</div>
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
