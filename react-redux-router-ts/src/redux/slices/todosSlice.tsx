import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    { id: "abc1", task: "Cook", completed: false },
    { id: "abc2", task: "Debug", completed: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    // changes the complete status of the todo
    toggleTodo: (state, action: PayloadAction<string>) => {
      // looks like we are mutating the state directly, but actually not
      // under the hood redux toolkit uses immer to prevent directly mutating state
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
