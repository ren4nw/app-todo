import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('CreateTodo');
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de tarefas</Text>
      </View>
      <View style={styles.content}>
        <Text>content</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#7c4ccf',
  },
  header: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 20,
  },
});

export default Home;
