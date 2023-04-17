import { useState } from "react";

export function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Añadir</button>
    </form>
  );
}

export default TaskForm;
