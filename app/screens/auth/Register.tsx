import React from 'react';
import AuthLayout from '../../modules/auth/AuthLayout';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
