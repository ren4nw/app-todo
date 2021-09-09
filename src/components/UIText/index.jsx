import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const UIText = ({ style = {}, lines = 0, children }) => {
  return <Text style={[styles.text, style]} numberOfLines={lines ? lines : undefined}>{children}</Text>;
}

export default UIText;
