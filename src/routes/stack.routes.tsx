import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  TabDashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackRoutes() {
  return (
      <Stack.Navigator
      initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={Home}
        />

        <Stack.Screen
          name="TabDashboard"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={TabRoutes}/>
      </Stack.Navigator>
  );
}
