import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Todolists} from './src/components/todolists';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store.ts';
import 'react-native-get-random-values';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Todolists />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
});
