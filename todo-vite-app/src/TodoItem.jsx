import React from 'react'

const TodoItem = ({todo, onToggle, onDelete}) => {
  return (
    <li className='todo-item'>
        <span className={`todo-text ${todo.isCompleted ? 'completed' : ''}`} onClick={() => onToggle(todo.id)}>{todo.text}</span>
        <button className='delete-button' onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem;