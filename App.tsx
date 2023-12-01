import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import Routes from "src/routes";
import { DashboardProvider } from "src/Context/Dashboard.context";

function App(): JSX.Element {
  return (
    <DashboardProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <StatusBar style="light" />
          <Routes />
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </DashboardProvider>
  );
}

export default App;
