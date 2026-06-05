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

  return (
    <>
      <div style={{ margin: 15 }}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </>
  );
}
