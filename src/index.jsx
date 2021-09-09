import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import CreateTodo from './screens/CreateTodo';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#7c4ccf" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="CreateTodo" component={CreateTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

registerRootComponent(Navigation);

export default Navigation;
