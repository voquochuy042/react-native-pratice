import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopNearMe from './screens/ShopNearMe';
import Drink from './screens/Drink';
import Cart from './screens/Cart';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{
          headerShown: false,

        }}>
          <Stack.Screen name='drink' component={Drink} />
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='shop' component={ShopNearMe} />
          <Stack.Screen name='cart' component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
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
