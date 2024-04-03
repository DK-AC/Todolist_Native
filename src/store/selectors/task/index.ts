import {RootState} from '../../types';

export const selectTasks = (state: RootState) => state.task.tasks;
