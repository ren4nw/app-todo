import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import UIText from '../UIText';
import styles from './styles';

const UITextField = ({ label, value, onChangeText, autoFocus = false }) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <UIText style={styles.text}>{label}</UIText>
      <TextInput
        style={[
          styles.input,
          focused && { borderBottomColor: '#4E9898' },
        ]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={autoFocus}
      />
    </View>
  );
}

export default UITextField;