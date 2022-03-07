import React, { useRef } from 'react';
import {View, Text, ScrollView, Button, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import * as Yup from 'yup';
import CobuildImage from '../../../assets/images/svg/cobuild-2.svg'
import { Formik } from 'formik';
import InputField from '../InputField/InputField';
import FormButton from '../FormButton/FormButton';
import styles from './SignInScreenStyles';
import { RootStackScreenProps } from '../../../types';
import { useAuthContext } from '../../../contexts/Auth/AuthContextProvider';

const SignUpScreen = ({ navigation }: RootStackScreenProps<'SignIn'>) => {
  const authContext = useAuthContext();
  if (!authContext) return null;
  const { signInHandler, loading } = authContext;
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string()
      .required('Password is required'),
  })

  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.header}>Back</Text>
        <CobuildImage style={styles.image} height={130} />
        <View style={styles.formWrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => signInHandler(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
              return (
                <>
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
                  <View style={styles.forgetPContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                      <Text style={styles.toLoginBtnText}>Forget Password?</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.btnWrapper}>
                    <FormButton submitting={loading} title='Login' onPress={handleSubmit} />
                  </View>
                  <View style={styles.toLoginWrapper}>
                    <Text style={styles.toLoginText}>New to Cobuild?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                      <Text style={styles.toLoginBtnText}>Create account</Text>
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
