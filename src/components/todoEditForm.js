import React, {useState} from 'react';

const TodoEditForm = ({editTodo, task}) => {
    const [todos, setTodos] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(todos, task.id);
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={todos} placeholder='Update task...' onChange={(e) => setTodos(e.target.value)}/>
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    );
};

export default TodoEditForm;
