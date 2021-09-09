import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UIText from '../UIText';
import styles from './styles';

const UIButton = ({ handlePress = null, icon = false, children }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {icon && (
        <MaterialIcons name={icon} style={styles.icon} />
      )}
      <UIText style={styles.text}>{children}</UIText>
    </TouchableOpacity>
  );
}

export default UIButton;
