import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FILTER, TodolistType} from '../../types/todolist';
import {v1} from 'uuid';

type TodolistState = {
  todolists: TodolistType[];
};

const initialState: TodolistState = {
  todolists: [],
};

const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{title: string; todolistId: string}>,
    ) => {
      const {title, todolistId} = action.payload;
      const {todolists} = state;
      todolists.unshift({id: todolistId, filter: FILTER.ALL, title});
    },
    removeTodo: (state, action: PayloadAction<{id: string}>) => {
      const {todolists} = state;
      const {id} = action.payload;
      const index = todolists.findIndex(todo => todo.id === id);
      if (index !== -1) todolists.splice(index, 1);
    },
    filteredTodo: (
      state,
      action: PayloadAction<{id: string; filter: FILTER}>,
    ) => {
      const {todolists} = state;
      const {filter, id} = action.payload;
      const index = todolists.findIndex(todo => todo.id === id);
      if (index !== -1) todolists[index].filter = filter;
    },
  },
});

export const {addTodo, removeTodo, filteredTodo} = todolistSlice.actions;
export const todolistReducer = todolistSlice.reducer;
