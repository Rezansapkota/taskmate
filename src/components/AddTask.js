import React from "react";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updatedTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : todo
      );

      setTasklist(updatedTask);
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.elements.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      setTasklist([...tasklist, newTask]);
    }
    e.target.reset();
    setTask({});
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Things To Do"
          maxLength="50"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
