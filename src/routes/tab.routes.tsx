import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Feather } from '@expo/vector-icons';

import { Dashboard } from "src/screens/Dashboard";
import { Profile } from "src/screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabComponent() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard"
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="file-medical" size={20} color={color} />
        ),
        tabBarLabel: 'Inicio'
      }}
      component={Dashboard} />
      <Tab.Screen name="Menu" 
      options={{
        tabBarIcon: ({ color }) => (
            <Feather name="menu" size={20} color={color}  />
        ),
      }}
      component={Profile} />
    </Tab.Navigator>
  );
}
