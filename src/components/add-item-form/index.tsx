import React, {FC, useState, useRef} from 'react';
import {Pressable, Text, TextInput, View, Alert} from 'react-native';
import {styles} from './add-item-form.styles.ts';

type Props = {
  onCallback: (title: string) => void;
};

export const AddItemForm: FC<Props> = ({onCallback}) => {
  const [text, setText] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleAddItemClick = () => {
    if (text && text.trim() !== '') {
      onCallback && onCallback(text);
      setText('');
      inputRef.current?.blur();
    } else {
      Alert.alert('Alert Title', 'Title is required');
    }
  };

  return (
    <View style={styles.inputBox}>
      <TextInput
        ref={inputRef}
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
