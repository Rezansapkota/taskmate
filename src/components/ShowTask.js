import React from "react";

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handelDelete = (id) => {
    const updatedtasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedtasklist);
  };
  const handelEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">ToDo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handelEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={() => handelDelete(todo.id)} className="ni bi-trash">
              {" "}
            </i>
          </li>
        ))}
      </ul>
    </section>
  );
};
