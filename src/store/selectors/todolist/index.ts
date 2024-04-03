import {RootState} from '../../types';

export const selectTodolists = (state: RootState) => state.todolist.todolists;
