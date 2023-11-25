import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from 'auth/FirebaseConfig';
import { Dashboard } from 'src/screens/Dashboard';

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  Dashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen 
          name="Dashboard"  
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} 
          component={Dashboard} />
          <Stack.Screen 
          name="Home"  
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} 
          component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
