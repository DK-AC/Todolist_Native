import {Pressable, Text, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import {styles} from './editable-input.styles.ts';

type Props = {
  title: string;
  callback: () => void;
};

export const EditableInput: FC<Props> = ({title, callback}) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(title);

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
    }
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleBlur = () => {
    if (text && text.trim() !== '') {
      setEditMode(false);
      callback();
      setText(text.trim());
    }
  };

  return (
    <>
      {editMode ? (
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
        />
      ) : (
        <Pressable
          style={styles.container}
          onPress={toggleEditMode}
          onLongPress={toggleEditMode}>
          <Text style={styles.title}>{text}</Text>
        </Pressable>
      )}
    </>
  );
};
