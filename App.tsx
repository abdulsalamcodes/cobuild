import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContextProvider } from './contexts/Auth/AuthContextProvider';
import { ToastContexProvider } from './contexts/ToastContext/ToastContext';
import Toast from 'react-native-toast-message';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <ToastContexProvider>
          <AuthContextProvider>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </AuthContextProvider>
        </ToastContexProvider>
        <Toast />
      </>
    );
  }
}
