import React, {FC, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './add-item-form.styles.ts';

type Props = {
  onCallback: (title: string) => void;
};

export const AddItemForm: FC<Props> = ({onCallback}) => {
  const [text, setText] = useState('');

  const handleAddItemClick = () => {
    if (text && text.trim() !== '') {
      onCallback && onCallback(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={'Add item'}
      />
      <Pressable style={styles.buttonAdd} onPress={handleAddItemClick}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};
