import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello world!' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const todo = {
        id: nanoid(),
        text: payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer;