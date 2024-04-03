import React, {FC} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './todolist.styles.ts';
import {FILTER, TodolistType} from '../../../store/types/todolist';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {filteredTodo, removeTodo} from '../../../store/slices/todolist';
import {EditableInput} from '../../EditableInput';
import {Tasks} from '../../tasks';
import {selectTasks} from '../../../store/selectors/task';
import {addTask} from '../../../store/slices/tasks';
import {AddItemForm} from '../../add-item-form';

type Props = {
  todolist: TodolistType;
};

export const Todolist: FC<Props> = ({todolist}) => {
  const {title, id, filter} = todolist;

  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks);

  const removeTodoHandle = () => {
    dispatch(removeTodo({id}));
  };

  const addTaskHandle = (title: string) => {
    dispatch(addTask({todolistId: id, title}));
  };

  const filterTodoHandle = (filter: FILTER) => {
    dispatch(filteredTodo({id, filter}));
  };

  const filteredTasks = tasks[id].filter(task => {
    if (filter === FILTER.ACTIVE) {
      return !task.isDone;
    } else if (filter === FILTER.COMPLETED) {
      return task.isDone;
    } else {
      return tasks[id];
    }
  });

  return (
    <View style={styles.todolist}>
      <View style={styles.todolistBox}>
        <EditableInput title={title} callback={() => {}} />
        <TouchableOpacity style={styles.buttonAdd} onPress={removeTodoHandle}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
      <AddItemForm onCallback={addTaskHandle} />
      <FlatList
        data={filteredTasks}
        renderItem={({item}) => {
          return (
            <View>
              <Tasks todolistId={id} tasks={[item]} />
            </View>
          );
        }}
      />
      <View style={styles.filteredBtns}>
        {['ALL', 'ACTIVE', 'COMPLETED'].map((filter, index) => (
          <Button
            color={
              filter === FILTER.ALL
                ? 'red'
                : filter === FILTER.ACTIVE
                ? 'blue'
                : 'green'
            }
            title={filter}
            onPress={() => filterTodoHandle(filter as FILTER)}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};
