import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './route/AppDrawer';
import AppStack from './route/AppStack';
import { PaperProvider } from 'react-native-paper';
import AppBottomTab from './route/AppBottomTab';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppBottomTab />
      </NavigationContainer>
    </PaperProvider>
  );
}