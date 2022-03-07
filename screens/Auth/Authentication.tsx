import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CobuildImage from '../../assets/images/svg/cobuild-1.svg'
import { RootTabScreenProps } from '../../types';
import styles from './AuthenticationStyles';

type SplashScreenProp = {
  navigation: boolean,
}

const Authentication = ({ navigation }: RootTabScreenProps<'Authentication'>) => {
  return (
    <View style={styles.splashScreen}>
      <CobuildImage height={200} />
      <Text style={styles.title}>COBUILD</Text>
      <Text style={styles.subText}>Collaboration made easy</Text>
      <Text style={styles.about}>Cobuild is a mobile application built for developers to discover new projects built by fellow developers and contribute to the project.</Text>
      <View style={styles.cta}>
        <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupBtnText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signinBtnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Authentication;
