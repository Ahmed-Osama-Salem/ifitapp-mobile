import React from 'react';
import AuthLayout from '../../modules/auth/AuthLayout';
import OTPVerifyForm from './components/OTPVerifyForm';
import {ScrollView} from 'react-native';

const OTPVerify = () => {
  return (
    <AuthLayout>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <OTPVerifyForm />
      </ScrollView>
    </AuthLayout>
  );
};

export default OTPVerify;
