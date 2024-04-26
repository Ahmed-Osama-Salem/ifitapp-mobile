import React from 'react';
import LoginForm from './components/LoginForm';
import AuthLayout from '../../modules/auth/AuthLayout';
import {ScrollView} from 'react-native';

const Login = () => {
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
