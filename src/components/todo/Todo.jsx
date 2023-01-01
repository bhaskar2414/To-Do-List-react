import "./todo.css";
import TodoForm from "../todoForm/TodoForm";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const Todo = ({
  todo,
  removeTodo,
  completedTodos,
  toggleEditMode,
  editTodoId,
  editTodo,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="todo-container">
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={() => completedTodos(todo.id)}
      />
      {editTodoId === todo.id ? (
        <TodoForm
          id="todo-edit"
          type="text"
          btnText="Update"
          value={editTodo}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      ) : (
        <div className="todo-text-btn">
          <p className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
            {todo.name}
          </p>
          <div className="todo-btn">
            <button
              className="btn-group"
              onClick={() => toggleEditMode(todo.id)}
            >
              <FiEdit className="icon edit-btn" />
            </button>
            <button className="btn-group" onClick={() => removeTodo(todo.id)}>
              <RiDeleteBin6Line className="icon delete-btn" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
