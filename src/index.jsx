import React, { useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import CreateTodo from './screens/CreateTodo';
import UIHeader from './components/UIHeader';

const Stack = createStackNavigator();

const App = () => {
  const [ready, setReady] = useState(false);

  const getResources = async () => {
    await Font.loadAsync({
      OpenSansLight: require('../assets/fonts/OpenSans-Light.ttf'),
      OpenSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    setReady(true);
  };

  useEffect(() => {
    getResources();
  }, []);

  if (!ready) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#fb6c54" />
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              header: ({ navigation, options }) => (
                <UIHeader navigation={navigation} title={options.title} />
              ),
            }}
          >
          <Stack.Screen name="Home" component={Home} options={{ title: 'Lista de Tarefas' }} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="CreateTodo" component={CreateTodo} options={{ title: 'Adicionar Tarefa' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);

export default App;
