import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import HomePage from "./src/pages/HomePage"
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen component={HomePage} name="HOME"/>
        </Stack.Navigator>
      </NavigationContainer>    
    </Provider>
  );
}

