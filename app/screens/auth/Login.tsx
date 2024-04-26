import React from 'react';
import LoginForm from './components/LoginForm';
import AuthLayout from '../../modules/auth/AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
