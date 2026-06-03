import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState(['learn react', 'practice basic DSA', 'brush up Javascript']);
  return (
    <>
      <input type="text" />
      <button onClick={() => {}}>Add Task</button>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </>
  );
}
