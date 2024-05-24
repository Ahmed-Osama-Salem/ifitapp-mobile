import React from 'react';
import LoginForm from './components/LoginForm';
import AuthLayout from '../../modules/auth/AuthLayout';

const Login = () => {
  //check on platform if ios or android
  // const isIos = Platform.OS === 'ios';
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
