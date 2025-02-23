import { useState } from "react";

function AddTodo() {
  const [input, setInput] = useState("");

  const addTodoHandler = () => {
    console.log(input);
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        value={input}
        placeholder="Enter todo..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
