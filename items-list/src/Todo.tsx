import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState(['learn react', 'practice basic DSA', 'brush up Javascript']);
  const [text, setText] = useState('');

  function addTask() {
    setTodos([...todos, text]);
  }

  return (
    <>
      <div style={{ margin: 15 }}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={addTask} >
          Add Task
        </button>
      </div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </>
  );
}
