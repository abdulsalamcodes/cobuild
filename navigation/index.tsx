/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home/Home';
import Bookmark from '../screens/Bookmark/Bookmark';
import NotFoundScreen from '../screens/NotFoundScreen';
import Notification from '../screens/Notification/Notiications';
import Search from '../screens/Search/Search';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AddProjectModal from '../screens/AddProjectModal/AddProjectModal';
import { View } from '../components/Themed';
import ProjectDetail from '../screens/ProjectDetail/ProjectDetail';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group>
        <Stack.Screen name="Create Project" component={AddProjectModal} />
        <Stack.Screen name="Project Details"
        options={({ route }) => ({ headerTitle: route.params.title, title: route.params.title })}
        component={ProjectDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingVertical: 10,
          paddingBottom: 10,
          height: 65
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'My Feed',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="My Projects"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="codesandbox" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={30} style={{ marginBottom: -3 }} {...props} />;
}
