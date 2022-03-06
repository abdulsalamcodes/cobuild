import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import styles from './FormButtonStyles';

type FormButton = {
  title: string,
  onPress: () => void,
  submitting: boolean,
}

const FormButton = ({ onPress, title, submitting }: FormButton) => {
  return (
      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.btnTextStyle}>
          {submitting ? 'Loading...' : title}
        </Text>
      </TouchableOpacity>
  )
}

export default FormButton;
