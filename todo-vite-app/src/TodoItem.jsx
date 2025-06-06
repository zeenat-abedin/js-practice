import React from 'react'

export const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
  return (
    <li className='todo-item'>
        <span onClick={toggleTodo}>{todo.text}</span>
        <button onClick={deleteTodo}>Delete</button>
    </li>
  )
}
