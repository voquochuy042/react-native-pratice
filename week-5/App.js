import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text, View
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import Home from './components/screen/Home';
import ChooseColor from './components/screen/Screen2';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Choose"} component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
