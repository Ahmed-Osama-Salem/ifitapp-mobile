import React from 'react';
import AuthLayout from '../../modules/auth/AuthLayout';
import OTPVerifyForm from './components/OTPVerifyForm';

const OTPVerify = () => {
  return (
    <AuthLayout>
      <OTPVerifyForm />
    </AuthLayout>
  );
};

export default OTPVerify;
