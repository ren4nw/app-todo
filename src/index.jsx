import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import CreateTodo from './screens/CreateTodo';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
