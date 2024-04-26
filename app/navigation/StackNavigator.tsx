import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import OTPVerify from '../screens/auth/OTPVerify';
import HomeTabNavigation from './HomeTabNavigation';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="otp-verify" component={OTPVerify} />
        <Stack.Screen name="HomeApp" component={HomeTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
