
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './HomeStyles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Image, TouchableOpacity } from 'react-native';
import { primary } from '../../constants/Colors';
import ProjectCard from '../../components/ProjectCard/ProjectCard';


const TrendingScreen = () => (
  <View style={styles.tabItem} >
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </View>
);

const PopularScreen = () => (
  <View style={styles.tabItem}>
    <Text>Popular</Text>
  </View>
);
const RecentScreen = () => (
  <View style={styles.tabItem}>
    <Text>Recent</Text>
  </View>
);



export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <View style={styles.topHeader}>
        <View>
          <Image style={styles.avatar} source={{
            url: 'https://i.pinimg.com/564x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
          }} />
        </View>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>My Projects</Text></TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: primary }
        }}>
        <Tab.Screen name="Trending" component={TrendingScreen} />
        <Tab.Screen name="Popular" component={PopularScreen} />
        <Tab.Screen name="Recent" component={RecentScreen} />
      </Tab.Navigator>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          ...styles.plusIcon
        })}
        onPress={() => navigation.navigate('Modal')}
      >
        <Feather name='plus' color='#fff' size={35} />
      </Pressable>
    </>
  );
}
