import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import AllJobs from '../screens/AllJobs';
import AppBottomTab from './AppBottomTab';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AppBottomTab" component={AppBottomTab} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AllJobs" component={AllJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
