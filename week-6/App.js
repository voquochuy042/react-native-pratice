import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './component/ProductList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Page2 from './component/Page2';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
export default function App() {
  const Tab = createBottomTabNavigator();
  const [state, setstate] = useState(0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Page2'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'ProductList') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Page2') {
              // You can add another condition for 'Page2' if needed.
              iconName = focused ? 'airplane' : 'airplane-outline';
            }
            // Return the appropriate icon name for each tab.
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: true,

        }}
      >
        <Tab.Screen name='ProductList' component={ProductList} />
        <Tab.Screen name='Page2' component={Page2} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
