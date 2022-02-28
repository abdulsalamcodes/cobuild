import React, { ChangeEvent } from 'react'
import { Platform, Text, TextInput } from 'react-native'
import { View } from '../Themed'
import styles from './InputFieldStyles';
import { Feather } from '@expo/vector-icons';

interface inputFieldType {
  label: string, value: string, multiline: boolean | undefined,
  errorMessage: string,
  onChangeText: (e: string | ChangeEvent<any>) => void, onBlur: (e: any) => void
}

const InputField = ({ label, value, multiline, onChangeText, onBlur, errorMessage }: inputFieldType) => {
  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput multiline={multiline}
        numberOfLines={10}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={{...styles.input, height: multiline ? 100: 50}}
        placeholder={`Enter ${label}`}
        value={value} />
       <Text style={{ color: 'red' }}>
            {errorMessage}  
        </Text>
    </View>
  )
}

export default InputField
