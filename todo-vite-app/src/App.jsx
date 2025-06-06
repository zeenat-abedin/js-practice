import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function handleInput(e) {
    setInput(e.target.value)
  }

  const addTodo = () => {
    if(!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='app-container'>
      <h1 className='app-title'>Todo vite app</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={handleInput}
          className='todo-input'
          type='text'
          placeholder='Add todo...'
        />
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-list'>
       {
        todos.map(todo =>
           <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )
       }
      </ul>
    </div>
  )
}

export default App
