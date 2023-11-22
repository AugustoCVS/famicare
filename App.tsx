import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import StackComponent from './src/routes/stack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <NativeBaseProvider>
        <StatusBar style="light" />
        <StackComponent />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;

