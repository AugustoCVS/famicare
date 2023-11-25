import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

import { Dashboard } from "src/screens/Dashboard";
import { Menu } from "src/screens/Menu";
import { Family } from "src/screens/Family";
import { Appointments } from "src/screens/Appointments";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF872C",
        tabBarInactiveTintColor: "#4E4D53",
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          height: 88,
          backgroundColor: "#F9F8F8",
        },
      }}
      initialRouteName="Dashboard"
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clinic-medical" size={20} color={color} />
          ),
          tabBarLabel: "Inicio",
        }}
        component={Dashboard}
      />

      <Tab.Screen
        name="Appointments"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-medical" size={20} color={color} />
          ),
          tabBarLabel: "Agenda",
        }}
        component={Appointments}
      />

      <Tab.Screen
        name="Family"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="family-restroom" size={20} color={color} />
          ),
          tabBarLabel: "Familia",
        }}
        component={Family}
      />

      <Tab.Screen
        name="Menu"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="menu" size={20} color={color} />
          ),
        }}
        component={Menu}
      />
    </Tab.Navigator>
  );
}
