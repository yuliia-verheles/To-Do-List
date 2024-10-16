import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faEraser, faPencil} from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className={`todo ${task.completed ? 'completed' : 'uncompleted'}`} >
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon className={'check-icon'} icon={faCheck} onClick={() => toggleComplete(task.id)}/>
                <FontAwesomeIcon className={'edit-icon'} icon={faPencil} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon className={'delete-icon'} icon={faEraser} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default Todo;