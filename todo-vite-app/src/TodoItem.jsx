import React from 'react'

const TodoItem = ({todo, onToggle, onDelete}) => {
  return (
    <li className='todo-item'>
        <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem;