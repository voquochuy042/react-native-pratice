import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './redux/Counter';
import { useState } from 'react';
import store from './redux/store';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <Counter count={count} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
