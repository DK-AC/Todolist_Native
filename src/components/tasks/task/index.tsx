import {Button, View} from 'react-native';
import React, {FC} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {TaskType} from '../../../store/types/tasks';
import {useAppDispatch} from '../../../store/hooks';
import {
  changeStatusTask,
  changeTitleTask,
  removeTask,
} from '../../../store/slices/tasks';
import {styles} from './task.styles.ts';
import {EditableInput} from '../../EditableInput';

type Props = {
  todolistId: string;
  task: TaskType;
};
export const Task: FC<Props> = ({todolistId, task}) => {
  const {isDone, title, id} = task;

  const dispatch = useAppDispatch();

  const remoteTaskHandle = () => {
    dispatch(removeTask({todolistId, taskId: id}));
  };

  const changeStatusTaskHandle = () => {
    dispatch(changeStatusTask({todolistId, taskId: id, isDone: !isDone}));
  };

  const changeTitleTaskHandle = () => {
    dispatch(changeTitleTask({todolistId, taskId: id, title}));
  };

  return (
    <View style={styles.taskBox}>
      <CheckBox
        style={{marginRight: 10}}
        disabled={false}
        value={isDone}
        onValueChange={changeStatusTaskHandle}
      />
      <EditableInput title={title} callback={changeTitleTaskHandle} />
      <Button title={'X'} onPress={remoteTaskHandle} />
    </View>
  );
};
