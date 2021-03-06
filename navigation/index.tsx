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
import SignUpScreen from '../screens/Auth/SignUpScreen/SignUpScreen';
import SignInScreen from '../screens/Auth/SignInScreen/SignInScreen';
import Authentication from '../screens/Auth/Authentication';
import ForgetPasswordScreen from '../screens/Auth/ForgetPasswordScreen/ForgetPasswordScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Notification from '../screens/Notification/Notiications';
import Search from '../screens/Search/Search';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AddProjectModal from '../screens/AddProjectModal/AddProjectModal';
import { View } from '../components/Themed';
import { useAuthContext } from '../contexts/Auth/AuthContextProvider';
import ProjectDetail from '../screens/ProjectDetail/ProjectDetail';
import MyProjects from '../screens/MyProjects';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
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
  const authContext = useAuthContext();

  if (!authContext) return null;
  const { initializing, user } = authContext;

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notifications' }} />
          <Stack.Group>
            <Stack.Screen name="Create Project" component={AddProjectModal} />
            <Stack.Screen name="Project Details"
            options={({ route }) => ({ headerTitle: route.params.title, title: route.params.title })}
            component={ProjectDetail} />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false}} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false}} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerShown: false}} />
        </>
      )}
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
        component={MyProjects}
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
