import { useState, useEffect } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch inicial de todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (!res.ok) throw new Error("Error al cargar los todos");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los todos");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Función para agregar un nuevo todo
  const addTodo = todo => setTodos([todo, ...todos]);

  // Función para alternar completado/pendiente
  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Función para eliminar un todo
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Renderizado de estados de carga y error
  if (loading) return <p>Cargando todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Todos</h2>
      <Form addTodo={addTodo} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
