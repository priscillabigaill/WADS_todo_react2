import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All"); // Default filter
  const [editorMode, setEditorMode] = useState(false); // State to control editor mode

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function editTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function FilterButton(props) {
    return (
      <button
        type="button"
        className={`btn toggle-btn ${props.isPressed ? 'bg-violet-900 text-white' : 'bg-violet-200 text-black'} mx-2 my-1 mt-3`}
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
  

  return (
    <>
      <div className="bg-white p-5 rounded-lg w-full mt-3">
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="bg-white p-5 rounded-lg w-full mt-7">
        {FILTER_NAMES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
        <div className="bg-white border border-violet-900 p-5 rounded-lg mt-7">
          <TodoList
            todos={todos.filter(FILTER_MAP[filter])}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            editorMode={editorMode}
          />
        </div>
      </div>
      <button
        className="bg-yellow-300 hover:bg-yellow-200 text-yellow-800 font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-500 rounded mt-3 mb-3 mr-3"
        onClick={() => setEditorMode(!editorMode)}
      >
        {editorMode ? "Exit Editor" : "Editor"}
      </button>
      <Link to="/">
        <button className="bg-yellow-300 hover:bg-yellow-200 text-yellow-800 font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-500 rounded mt-3">
          Back
        </button>
      </Link>
    </>
  );
}

export default Todo;
