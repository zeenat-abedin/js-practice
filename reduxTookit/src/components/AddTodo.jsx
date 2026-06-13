import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  
  return <div>AddTodo</div>;
};

export default AddTodo;
