import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DanhSach from './screens/DanhSach';
import { Provider } from 'react-redux';
import store from './redux/store';
import GioHang from './screens/GioHang';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='danhsach' component={DanhSach} />
          <Stack.Screen name='giohang' component={GioHang} />

        </Stack.Navigator>
      </NavigationContainer >
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
