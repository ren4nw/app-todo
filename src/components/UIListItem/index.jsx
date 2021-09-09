import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UIText from '../UIText';
import styles from './styles';

const UIListItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.dateContainer}>
        <UIText style={styles.textHeader}>15/09</UIText>
        <UIText style={styles.time}>20:00</UIText>
      </View>
      <View style={styles.descriptionContainer}>
        <UIText style={styles.textHeader} lines={1}>Estudar React</UIText>
        <UIText style={styles.todoDescription} lines={1}>hooks e state</UIText>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <MaterialIcons name="alarm" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

export default UIListItem;
