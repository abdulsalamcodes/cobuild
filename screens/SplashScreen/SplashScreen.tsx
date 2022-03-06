import React from 'react';
// import CoBuildImage from '../../assets/images/svg/cobuild-1.svg';
// import Co
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './SplashScreenStyles';

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <Text style={styles.title}>COBUILD</Text>
      <Text>Collaboration made easy</Text>
    </View>
  )
}

export default SplashScreen;
