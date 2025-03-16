import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, Shadows} from '../../../utils/theme';
import {allowFontScaling} from 'Common/DynamicComponents/TypographyText/Typography.system';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import CountdownTimer from './CountdownTimer';
import {store} from 'Redux/Store';
import {verifyOtpThunk} from 'Redux/Slices/Auth/RegisterSlice';

const OTPVerifyForm = () => {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef<any>([]);
  const [seconds, setSeconds] = useState(60);
  const route = useRoute();

  const navigation: any = useNavigation();

  const verifyOtpCode = async () => {
    try {
      console.log({otp: otp, email: route.params?.email});

      await store
        .dispatch(verifyOtpThunk({otp: otp, email: route.params?.email}))
        .unwrap()
        .then((res: any) => {
          console.log('res', res);
          if (!res.data) {
            Object.keys(res).forEach(field => {
              res[field].forEach((message: string) => {
                return Toast.show({
                  type: 'ifit',
                  visibilityTime: 4000,
                  props: {
                    variant: 'error',
                    message: message,
                  },
                });
              });
            });

            return;
          }

          Toast.show({
            type: 'ifit',
            visibilityTime: 4000,
            props: {
              variant: 'success',
              message: I18nManager.isRTL
                ? 'تم التحقق بنجاح'
                : 'Verified Successfully',
            },
          });
          setTimeout(() => {
            navigation.navigate('Login');
          }, 1500);
        });
    } catch (err) {
      console.log('err', err);
    }
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
      <TypographyText
        type="20_Bold"
        content="Verify your account"
        color="dark"
      />
      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            allowFontScaling={allowFontScaling}
            key={index}
            style={[
              styles.otpInput,
              focusedField === index && styles.focusedInput,
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => {
              handleOTPChange(index, value);
            }}
            onFocus={() => handleFieldFocus(index)}
            onBlur={handleFieldBlur}
            ref={ref => (inputRefs.current[index] = ref)}
            returnKeyType={index === 5 ? 'done' : 'next'}
            onSubmitEditing={() => {
              if (index === 5) {
              } else {
                inputRefs?.current[index + 1]?.focus();
              }
            }}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace' && index >= 0) {
                index > 0 && inputRefs?.current[index - 1]?.focus();
              }
            }}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <TypographyText
        type="12_Medium"
        content="Check your email for the code"
        color="ifitGrey"
      />
      <View style={[{flexDirection: 'row'}, styles.countDownTimer]}>
        <CountdownTimer seconds={seconds} setSeconds={setSeconds} />
      </View>
      <TouchableOpacity style={styles.authButton} onPress={verifyOtpCode}>
        <TypographyText type="16_Bold" content="Verify_account" color="dark" />
      </TouchableOpacity>
      {seconds === 0 && (
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Login')}>
          <TypographyText type="16_Medium" content="Retry" color="ifitGrey" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OTPVerifyForm;

const styles = StyleSheet.create({
  otpScreen: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    direction: 'ltr',
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 2,
    backgroundColor: '#FFF',
    height: '100%',
    ...Shadows.container,
  },
  countDownTimer: {justifyContent: 'space-between'},
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
    color: Colors.text.primary,
  },
  focusedInput: {
    borderColor: '#F6E117',
  },
  authButton: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // borderStyle: 'solid',
    // borderWidth: 1,
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
    fontFamily: 'Nunito-Bold',
    color: Colors.text.primary,
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    marginVertical: 10,
    color: Colors.text.secondary,
  },
});
