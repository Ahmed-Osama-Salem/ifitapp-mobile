import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AuthService from '../../../server/auth/AuthService';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {Shadows} from '../../../utils/theme';

const OTPVerifyForm = () => {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef<any>([]);
  const authPromise = new AuthService();
  const navigation: any = useNavigation();

  const verifyOtpCode = async () => {
    return authPromise
      .VerifyOtpService({otp: otp})
      .then(response => {
        console.log('response::', response.data.message);
        if (response.data) {
          Toast.show({
            type: 'success',
            text1: response.data.message,
          });
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2000);
        }
        return response;
      })
      .catch(error => {
        console.log('error::', error.response.data.message);
        return error;
      });
  };

  const handleOTPChange = (index: number, value: number | string) => {
    const newOTP: any = otp.split('');
    newOTP[index] = value;
    setOTP(newOTP.join(''));

    if (!value && index > 0) {
      inputRefs.current[index - 1].focus(); // Move focus to the previous field
    } else if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move focus to the next field
    }
  };

  const [focusedField, setFocusedField] = useState<number | null>(null);

  const handleFieldFocus = (index: number) => {
    setFocusedField(index);
  };

  const handleFieldBlur = () => {
    setFocusedField(null);
  };

  return (
    <View style={styles.otpScreen}>
      <Text style={styles.formHeader}>Verify your account</Text>
      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={[
              styles.otpInput,
              focusedField === index && styles.focusedInput, // Apply focused style conditionally
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleOTPChange(index, value)}
            onFocus={() => handleFieldFocus(index)} // Handle field focus
            onBlur={handleFieldBlur} // Handle field blur
            ref={ref => (inputRefs.current[index] = ref)}
            returnKeyType={index === 5 ? 'done' : 'next'} // Set return key type
            onSubmitEditing={() => {
              if (index === 5) {
                // Handle submission
              } else {
                inputRefs.current[index + 1].focus(); // Move focus to the next field
              }
            }}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                inputRefs.current[index - 1].focus(); // Move focus to the previous field
              }
            }}
          />
        ))}
      </View>
      <Text style={styles.footerText}>Check your account for the code</Text>
      <TouchableOpacity style={styles.authButton} onPress={verifyOtpCode}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerifyForm;

const styles = StyleSheet.create({
  otpScreen: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 2,
    backgroundColor: '#FFF',
    height: '100%',
    ...Shadows.container,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 5,
  },
  focusedInput: {
    borderColor: '#F6E117',
  },
  authButton: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  formHeader: {
    fontSize: 25,
    fontWeight: '700',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
});
