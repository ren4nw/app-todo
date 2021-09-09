import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import UIContainer from '../components/UIContainer';
import UITextField from '../components/UITextField';
import UIButton from '../components/UIButton';

const CreateTodo = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <UIContainer>
      <ScrollView>
        <UITextField label="Nome" value={name} onChangeText={text => setName(text)} />
        <UITextField label="Descrição" value={description} onChangeText={text => setDescription(text)} />
      </ScrollView>
      <UIButton>Adicionar</UIButton>
    </UIContainer>
  )
}

export default CreateTodo;
