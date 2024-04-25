import { useState } from "react";
import { addTask, removeTask } from "./ToDoActionCreator";
import { connect } from "react-redux";

function ToDo({ tasks, addTask, removeTask }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit() {
    if (taskName.trim() !== "") {
      addTask(taskName.trim());
      setTaskName("");
    }
  }

  return (
    <div className="todo--container">
      <div className="todo--container--tasks">
        <div className="todo--container--displaying--tasks">
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="tasks--items">
                <h3>{task.text}</h3>
                <button onClick={() => removeTask(task.id)}>Remove Task</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

        <br /><br /><br />

      <div className="todo--container--adding--tasks">
        <div className="todo--container--input">
            <input
            type="text"
            placeholder="Enter the Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="todo--container--input--text"
            />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.ToDoReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskName) => dispatch(addTask(taskName)),
    removeTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
