import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [todos, setTodos] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        setTodos('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={todos} placeholder='Enter your task...' onChange={(e) => setTodos(e.target.value)}/>
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    );
};

export default TodoForm;