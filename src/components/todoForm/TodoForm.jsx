import { RiSaveLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

import "./todoForm.css"

const ToDoForm = ({
    id,
    type,
    value,
    btnText,
    onSubmit,
    onChange
})=>{
    return (
        <form  id={`${id}-form`} onSubmit={(e)=>onSubmit(e)}>
            <div>
                <input type={type}  name="todoName"  value={value} id={`${id}-input`} onChange={(e) => onChange(e)} required/>
                <span className='highlight'></span>
                <span className='bar'></span>
                <label htmlFor="1" className="todoForm-label"> {
                    id==="todo-add" ? "Todo: " : "" 
                }</label>
            </div>
            <button  id={`${id}-btn`} className="form-submit-btn" type="submit">
            {btnText === "Add" ? (
            <FaPlus className='btn-icon-add' />
            ) : (
            <RiSaveLine className='btn-icon-save' />
            )}
            </button>
        </form>
    )
}

export default ToDoForm;