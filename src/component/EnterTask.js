const EnterTask = ({ task, setTask, taskTab, setTaskTab, id, setId }) => {
  const handleOnChange = (event) => {
    setTask(event.target.value);
    console.log(task);
  };

  const handleOnSubmit = (event) => {
    if (task !== "") {
      event.preventDefault();
      const newTaskTab = [...taskTab];
      newTaskTab.unshift(task);
      console.log("taskTab:" + newTaskTab);
      setTaskTab(newTaskTab);
      id = id + 1;
      setId(id);
      console.log("id:" + id);
    }
  };
  return (
    <div className="addTask">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="New task"
          value={task}
          onChange={handleOnChange}
        />
        <button>Add task</button>
      </form>
    </div>
  );
};

export default EnterTask;
