import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import OTPVerify from '../screens/auth/OTPVerify';
import HomeTabNavigation from './HomeTabNavigation';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import PostDetailsScreen from '../screens/Blog/post/PostDetailsScreen';
import AskQuestion from 'screens/askQuestsion/AskQuestsion';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';
import {I18nManager} from 'react-native';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  console.log(I18nManager.isRTL);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="otp-verify" component={OTPVerify} />
        <Stack.Screen
          name="Ask-Question"
          component={AskQuestion}
          options={{
            presentation: 'fullScreenModal',
            animation: 'slide_from_bottom',
            header: () => <ScreenGradientHeader content="Ask a Question" />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="HomeApp"
          component={HomeTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
