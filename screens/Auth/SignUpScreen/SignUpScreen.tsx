import React, { useRef } from 'react';
import {View, Text, ScrollView, Button, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputField from '../InputField/InputField';
import FormButton from '../FormButton/FormButton';
import { useAuthContext } from '../../../contexts/Auth/AuthContextProvider';
import styles from './SignUpScreenStyles';
import { RootTabScreenProps } from '../../../types';

const SignUpScreen = ({ navigation }: RootTabScreenProps<'SignUp'>) => {
  const authContext = useAuthContext();
  if (!authContext) return null;

  const { signUpHandler, loading} = authContext;

  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .required('Password is required'),
    confirmPassword:  Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Create</Text>
        <Text style={styles.header}>Account</Text>
        <View style={styles.formWrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => signUpHandler(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
              return (
                <>
                  <InputField
                    label="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    multiline={false} value={values.name}
                    inputContainerStyles={{marginBottom: 10}}
                    errorMessage={(touched.name && errors.name) ? errors.name : ''} 
                  />
                  <InputField
                    label="Username"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    multiline={false} value={values.username}
                    inputContainerStyles={{marginBottom: 10}}
                    errorMessage={(touched.username && errors.username) ? errors.username : ''} 
                  />
                  <InputField
                    label="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    multiline={false} value={values.email}
                    inputContainerStyles={{marginBottom: 10}}
                    errorMessage={(touched.email && errors.email) ? errors.email : ''} 
                  />
                  <InputField
                    label="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    multiline={false} value={values.password}
                    inputContainerStyles={{marginBottom: 10}}
                    isPassword
                    errorMessage={(touched.password && errors.password) ? errors.password : ''} 
                  />
                  <InputField
                    label="Confirm Password"
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    multiline={false} value={values.confirmPassword}
                    isPassword
                    errorMessage={(touched.confirmPassword && errors.confirmPassword) ? errors.confirmPassword : ''} 
                  />

                  <View style={styles.btnWrapper}>
                    <FormButton submitting={loading} title='Create account' onPress={handleSubmit} />
                  </View>
                  <View style={styles.toLoginWrapper}>
                    <Text style={styles.toLoginText}>Already have an account?</Text>
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

export default SignUpScreen;
