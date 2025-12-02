import { useState } from "react";

function Form({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === "") return;
    addTodo({ title, completed: false, id: Date.now() });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nuevo todo"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Form;
