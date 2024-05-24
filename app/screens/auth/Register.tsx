import {View} from 'react-native';
import React from 'react';
import AuthLayout from '../../modules/auth/AuthLayout';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <View>
        <RegisterForm />
      </View>
    </AuthLayout>
  );
};

export default Register;
