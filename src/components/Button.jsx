import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <View style={styles.button}>
      <Text style={styles.texto}>{props.texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 12,
  },
  texto: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Button;
