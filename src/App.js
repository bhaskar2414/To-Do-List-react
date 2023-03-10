import "./App.css";

import { v4 as uuidv4 } from "uuid";

import ToDoList from "./components/todoList/TodoList";
import ToDoForm from "./components/todoForm/TodoForm";
import { useState, useEffect } from "react";
import todoImg from "./assets/todoList.png";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState("");

  useEffect(() => {
    const todosJSON = localStorage.getItem("todos");
    const todosRetrieved = JSON.parse(todosJSON);
    if (todosRetrieved && todosRetrieved.length > 0) {
      setTodos(todosRetrieved);
    }
  }, []);

  useEffect(() => {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem("todos", todosJSON);
    console.log(todosJSON);
  }, [todos]);

  const handleInputChange = (e) => {
    if (e.target.id === "todo-add-input") {
      setTodo(e.target.value);
    } else {
      setEditTodo(e.target.value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (e.target.id === "todo-add-form") {
      const newTodo = {
        id: uuidv4(),
        name: todo,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    } else {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name: editTodo };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEditTodoId(null);
      setEditTodo("");
    }
  };

  const removeTodo = (id) => {
    let message = "Are you sure want to delete?";
    if (window.confirm(message)) {
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(updatedTodos);
    }
  };

  const completedTodos = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const toggleEditMode = (id) => {
    const todo = todos.find((todo) => {
      return todo.id === id;
    });
    setEditTodoId(id);
    setEditTodo(todo.name);
  };

  return (
    <div className="app-container">
      <div className="app-img-container">
        <img className="app-img" src={todoImg} alt="app-img" />
      </div>

      <ToDoForm
        id="todo-add"
        type="text"
        btnText="Add"
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <ToDoList
        todos={todos}
        editTodo={editTodo}
        editTodoId={editTodoId}
        removeTodo={removeTodo}
        completedTodos={completedTodos}
        toggleEditMode={toggleEditMode}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;
