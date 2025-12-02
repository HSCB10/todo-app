function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={() => toggleComplete(todo.id)} style={{ marginLeft: "10px" }}>
        {todo.completed ? "Pendiente" : "Completado"}
      </button>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "5px" }}>
        Eliminar
      </button>
    </li>
  );
}

export default TodoItem;
