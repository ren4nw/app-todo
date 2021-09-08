import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('CreateTodo');
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Criar todo</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Home;
