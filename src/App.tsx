import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './routes/drawer';
import { LogBox, StatusBar } from 'react-native';

LogBox.ignoreAllLogs();

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={NavTheme}>
        <Drawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
