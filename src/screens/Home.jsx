import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UIContainer from '../components/UIContainer';
import UIButton from '../components/UIButton';
import UIListItem from '../components/UIListItem';

const Home = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('CreateTodo');
  };

  return (
    <UIContainer>
      <ScrollView>
        <UIListItem />
        <UIListItem />
      </ScrollView>
      <UIButton handlePress={handlePress}>Adicionar tarefa</UIButton>
    </UIContainer>
  )
};

export default Home;
