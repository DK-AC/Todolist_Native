import {configureStore} from '@reduxjs/toolkit';
import {todolistReducer} from './slices/todolist';
import {taskReducer} from './slices/tasks';

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
    task: taskReducer,
  },
});
