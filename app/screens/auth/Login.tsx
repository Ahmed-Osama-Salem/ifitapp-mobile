import React from 'react';
import LoginForm from './components/LoginForm';
import AuthLayout from '../../modules/auth/AuthLayout';
import {Platform, ScrollView} from 'react-native';

const Login = () => {
  //check on platform if ios or android
  const isIos = Platform.OS === 'ios';
  return (
    <AuthLayout>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
        }}>
        <LoginForm />
      </ScrollView>
    </AuthLayout>
  );
};

export default Login;
