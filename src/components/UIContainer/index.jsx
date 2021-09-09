import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from  './styles';

const UIContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

export default UIContainer;