import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([
    'learn advanced React in depth',
    'practice basic DSA',
    'brush up Javascript',
  ]);
  const [text, setText] = useState('');

  function addTask() {
    if (!todos.includes(text)) {
      setTodos([...todos, text]);
    }
    setText('');
  }

  function deleteTodo(todo: string) {
    setTodos(todos.filter((curr) => curr !== todo));
  }

  return (
    <>
      <div style={{ margin: 15 }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {todos.map((todo) => (
        <li key={todo}>
          {todo} <button onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
      ))}
    </>
  );
}
