import React, { ChangeEvent } from 'react'
import { Platform, Text, TextInput, View } from 'react-native'
// import { View } from '../Themed'
import { StyleSheet, ViewStyle } from 'react-native';
import styles from './InputFieldStyles';

interface inputFieldType {
  label: string, value: string, multiline: boolean | undefined,
  errorMessage: string,
  placeholder?: string,
  isPassword?: boolean,
  noLabel?: boolean,
  inputContainerStyles?: ViewStyle,
  onChangeText: (e: string | ChangeEvent<any>) => void, onBlur: (e: any) => void
}

const InputField = ({ label, value, multiline, onChangeText, onBlur, errorMessage, placeholder, inputContainerStyles, isPassword, noLabel }: inputFieldType) => {
  return (
    <View style={inputContainerStyles}>
      {noLabel ? null : <Text style={styles.label}>{label}</Text>}
      <TextInput multiline={multiline}
        numberOfLines={10}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={{...styles.input, height: multiline ? 100: 50}}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        value={value} 
      />
       {errorMessage ? (
        <Text style={{ color: 'red' }}>
            {errorMessage}  
        </Text>
      ) : null}
    </View>
  )
}

export default InputField
