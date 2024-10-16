import React, { useState, useEffect } from 'react';
import  TodoForm from "./todoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./todo";
import TodoEditForm from "./todoEditForm";

const TodoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        const savedTasks = localStorage.getItem('todos');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

        setTodos((prevTodos) => prevTodos.sort((a, b) => a.completed - b.completed));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task,  isEditing: !todo.isEditing } : todo));
    };

    return (
        <div className="todo-wrapper">
            <h1>My List To Do!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <TodoEditForm editTodo={editTask}
                    task={todo}/>
                ) : (
                    <Todo task={todo} key={todo.id}
                          toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo}
                          editTodo={editTodo} />
                )
            ))}
        </div>
    );
};

export default TodoWrapper;