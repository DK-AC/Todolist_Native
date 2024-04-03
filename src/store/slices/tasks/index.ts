import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TasksType} from '../../types/tasks';
import {v1} from 'uuid';
import {addTodo} from '../todolist';

type TaskState = {
  tasks: TasksType;
};

const initialState: TaskState = {
  tasks: {},
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (
      state,
      action: PayloadAction<{todolistId: string; taskId: string}>,
    ) => {
      const {tasks} = state;
      const {todolistId, taskId} = action.payload;
      const currentTasks = tasks[todolistId];

      const index = currentTasks.findIndex(task => task.id === taskId);
      if (index !== -1) currentTasks.splice(index, 1);
    },
    addTask: (
      state,
      action: PayloadAction<{
        todolistId: string;
        title: string;
      }>,
    ) => {
      const {tasks} = state;
      const {todolistId, title} = action.payload;

      tasks[todolistId].unshift({id: v1(), isDone: false, title});
    },
    changeStatusTask: (
      state,
      action: PayloadAction<{
        todolistId: string;
        taskId: string;
        isDone: boolean;
      }>,
    ) => {
      const {tasks} = state;
      const {todolistId, isDone, taskId} = action.payload;
      const currentTasks = tasks[todolistId];

      const index = currentTasks.findIndex(task => task.id === taskId);
      if (index !== -1) currentTasks[index].isDone = isDone;
    },
    changeTitleTask: (
      state,
      action: PayloadAction<{
        todolistId: string;
        taskId: string;
        title: string;
      }>,
    ) => {
      const {tasks} = state;
      const {todolistId, title, taskId} = action.payload;
      const currentTasks = tasks[todolistId];

      const index = currentTasks.findIndex(task => task.id === taskId);
      if (index !== -1) currentTasks[index].title = title;
    },
  },
  extraReducers: builder => {
    builder.addCase(addTodo, (state, action) => {
      state.tasks[action.payload.todolistId] = [];
    });
  },
});

export const taskReducer = tasksSlice.reducer;

export const {removeTask, changeTitleTask, changeStatusTask, addTask} =
  tasksSlice.actions;
