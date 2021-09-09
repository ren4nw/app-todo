import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UIText from '../UIText';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UIHeader = ({ navigation, title = '' }) => {
  return (
    <View style={styles.container}>
      <View>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleContainer}>
        <UIText style={styles.title}>{title}</UIText>
      </View>
    </View>
  );
}

export default UIHeader;