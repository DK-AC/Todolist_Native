import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  todolist: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
  },
  todolistBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filteredBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAdd: {
    padding: 7,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
