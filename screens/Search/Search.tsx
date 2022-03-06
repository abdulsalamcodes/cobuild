
import React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './SearchStyles';

export default function Search({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/Search/Search.tsx" />
    </View>
  );
}
