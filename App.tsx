import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Stack/StackNavigator';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    })
  }
})

const App: React.FC = () => {
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer >
  );
}

export default App;
