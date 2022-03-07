import React, { useRef } from 'react';
import {View, Text, ScrollView, Button, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputField from '../InputField/InputField';
import FormButton from '../FormButton/FormButton';
import styles from './ForgetPasswordScreenStyle';
import ForgotPasswordImage from '../../../assets/images/svg/forgot-password.svg'
import { RootStackScreenProps } from '../../../types';

const ForgetPasswordScreen = ({ navigation }: RootStackScreenProps<'SignIn'>) => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
  })

  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Forgot</Text>
        <Text style={styles.header}>Password?</Text>
        <ForgotPasswordImage height={150} style={styles.image} />
        <View style={styles.formWrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
              return (
                <>
                  <Text style={styles.forgetText}>
                    Please enter the email associated with 
                    your account.
                  </Text>
                  <InputField
                    label="Email"
                    noLabel
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    multiline={false} value={values.email}
                    inputContainerStyles={{marginBottom: 10}}
                    errorMessage={(touched.email && errors.email) ? errors.email : ''} 
                  />

                  <View style={styles.btnWrapper}>
                    <FormButton title='Submit' onPress={handleSubmit} />
                  </View>
                  <View style={styles.toLoginWrapper}>
                    <Text style={styles.toLoginText}>Remember password?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                      <Text style={styles.toLoginBtnText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )
            }}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ForgetPasswordScreen;
