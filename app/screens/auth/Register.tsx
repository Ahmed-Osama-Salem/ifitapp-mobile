import {ScrollView, View} from 'react-native';
import React from 'react';
import AuthLayout from '../../modules/auth/AuthLayout';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
        }}>
        <View>
          <RegisterForm />
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

export default Register;
