import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ newTask }) => {
  const [checked, setChecked] = useState(false);
  const [remove, setRemove] = useState(true);
  const [color, setColor] = useState(0);
  const [status, setStatus] = useState("unDone");

  const handleCheck = () => {
    if (checked === false) {
      setChecked(true);
      setStatus("done");
      return status;
    } else {
      setChecked(false);
      setStatus("unDone");
      return status;
    }
  };

  const handleTrashClick = () => {
    remove === true ? setRemove(false) : setRemove(true);
  };

  const handleTrashOver = () => {
    color === 0 ? setColor(1) : setColor(0);
  };

  return (
    <div className={remove === true ? "task" : "task remove"}>
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
        <span>{status}</span>
        <FontAwesomeIcon
          icon="trash"
          color={color === 0 ? "var(--violet-react)" : "var(--grey-react)"}
        />
      </button>
    </div>
  );
};
export default Task;
