import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {selectTodolists} from '../../store/selectors/todolist';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addTodo} from '../../store/slices/todolist';
import {Todolist} from './todolist';
import {AddItemForm} from '../add-item-form';
import {v1} from 'uuid';

export const Todolists: FC = () => {
  const dispatch = useAppDispatch();
  const todolists = useAppSelector(selectTodolists);

  const addTodoHandle = (title: string) => {
    dispatch(addTodo({todolistId: v1(), title}));
  };

  return (
    <View>
      <AddItemForm onCallback={addTodoHandle} />
      <FlatList
        data={todolists}
        keyExtractor={({id}) => id}
        renderItem={({item}) => {
          return <Todolist todolist={item} />;
        }}
      />
    </View>
  );
};
