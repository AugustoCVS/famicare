import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import TabRoutes from "./tab.routes";
import { HealthHistoric } from "src/screens/HealthHistoric";
import { Appointments } from "src/screens/Appointments";
import { Exams } from "src/screens/Exams";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  TabDashboard: undefined;
  HealthHistoric: undefined;
  Appointments: undefined;
  Exams: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        component={TabRoutes}
      />

      <Stack.Screen
        name="HealthHistoric"
        options={{
          title: "Histórico Médico",
          headerTransparent: false,
          headerShown: true,
        }}
        component={HealthHistoric}
      />

      <Stack.Screen
        name="Appointments"
        options={{
          title: "Consultas",
          headerTransparent: false,
          headerShown: true,
        }}
        component={Appointments}
      />

      <Stack.Screen
        name="Exams"
        options={{
          title: "Exames",
          headerTransparent: false,
          headerShown: true,
        }}
        component={Exams}
      />
    </Stack.Navigator>
  );
}
