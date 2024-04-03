import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {TaskType} from '../../store/types/tasks';
import {Task} from './task';

type Props = {
  todolistId: string;
  tasks: TaskType[];
};
export const Tasks: FC<Props> = ({todolistId, tasks}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => {
        return <Task task={item} todolistId={todolistId} />;
      }}
      keyExtractor={({id}) => id}
    />
  );
};
