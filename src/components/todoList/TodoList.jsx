import "./todoList.css";
import Todo from "../todo/Todo";

const ToDoList = ({
    todos,
    removeTodo,
    completedTodos,
    editTodoId,
    editTodo,
    toggleEditMode,
    onChange,
    onSubmit
}) => {
    const renderTodos = ()=>{
        if(todos.length){
            return todos.map((todo)=>{
              return (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completedTodos={completedTodos} toggleEditMode={toggleEditMode} editTodo={editTodo}
                editTodoId={editTodoId} onChange={onChange}
                onSubmit={onSubmit}/>
              )  
            })
        }
        return <p className="errorMessage">There are no ToDos</p>
    }
return <div className="todoList-container">{renderTodos()}</div>
}
export default ToDoList