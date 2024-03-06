import { useState } from "react";
import "./App1.css";
import "./App.css";

function App() {
  const [task, setTask] = useState({
    id: 0,
    value: "",
  });
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeEvent = (tega) => {
    const objValue = {
      id: tasks.length < 1 ? 0 : tasks[tasks.length - 1].id + 1,
      value: tega.target.value,
    };
    setTask(objValue);
    // console.log(task)
  };

  const handleSubmit = () => {
    if (task.value.trim() === "") {
      // console.log("pls input a task");
      setErrorMessage("Please enter a task");
    } else {
      setTasks([...tasks, task]);
      setTask({ id: 0, value: "" });
      setErrorMessage("");
    }
  };

  const handleDelete = (todo) => {
    setTasks(tasks.filter((task) => task.id !== todo.id));
  };

  return (
    <div className="container">
      <h1 style={{color:'blue'}}>Todo App</h1>
      <div className="task">
        <input
          type="text"
          value={task.value}
          onChange={(e) => onChangeEvent(e)}
        />
        <button className="btn" onClick={handleSubmit}>
          Add todo
        </button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="tasks">
        <h4 style={{ color: "blue", backgroundColor:'#f4f5', }}>No of tasks: {tasks.length}</h4>
        {tasks.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <li>{todo.value}</li>
              <button
                key={todo.value}
                className="delete"
                onClick={() => handleDelete(todo)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
