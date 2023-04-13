import { useState } from "react";

export function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Añadir</button>
    </form>
  );
}

export default TaskForm;
