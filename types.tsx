/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  Notification: undefined;
  NotFound: undefined;
  'Create Project': undefined;
  'SignIn': undefined;
  'SignUp': undefined;
  "Authentication": undefined;
  "ForgetPassword": undefined;
  'Project Details': undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Bookmark: undefined;
  "My Projects": undefined;
  "Authentication": undefined;
  "ForgetPassword": undefined;
  'SignIn': undefined;
  'SignUp': undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
  >;

export interface ProjectCardType {
  id: number,
  title: string,
  github: string,
  myLinkedIn: string,
  myTwitter: string,
  myEmail: string,
  phone: string,
  description: string,
  }
