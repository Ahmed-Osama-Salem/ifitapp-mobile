import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  I18nManager,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import registerSchema from '../../../helpers/validation/registerSchema';
import Toast from 'react-native-toast-message';
import {Colors, Shadows} from '../../../utils/theme';
import BackArrowButton from 'modules/elements/BackArrowButton';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {useTranslation} from 'react-i18next';
import {TextStyle} from 'Common/DynamicComponents/TypographyText/Typography.system';
import color from 'Theme/color';
import {store} from 'Redux/Store';
import {registerUserThunk} from 'Redux/Slices/Auth/RegisterSlice';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const RegisterForm = () => {
  const navigation: any = useNavigation();
  // const authPromise = new AuthService();
  const [registerToggle, setRegisterToggle] = useState<
    'contact-info' | 'pass-confirm'
  >('contact-info');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {t} = useTranslation('translation');

  // Animation values
  const contactOpacity = useSharedValue(1);
  const contactTranslateX = useSharedValue(0);
  const passOpacity = useSharedValue(0);
  const passTranslateX = useSharedValue(100);

  const animateToStep = (step: 'contact-info' | 'pass-confirm') => {
    if (step === 'pass-confirm') {
      contactOpacity.value = withTiming(0, {duration: 300});
      contactTranslateX.value = withTiming(-100, {duration: 300});
      passOpacity.value = withTiming(1, {duration: 300});
      passTranslateX.value = withTiming(0, {duration: 300});
    } else {
      passOpacity.value = withTiming(0, {duration: 300});
      passTranslateX.value = withTiming(100, {duration: 300});
      contactOpacity.value = withTiming(1, {duration: 300});
      contactTranslateX.value = withTiming(0, {duration: 300});
    }
    // 🔹 Set state *after* animation starts to avoid flickering
    setTimeout(() => {
      setRegisterToggle(step);
    }, 100);
  };

  const contactInfoStyle = useAnimatedStyle(() => ({
    opacity: contactOpacity.value,
    transform: [{translateX: contactTranslateX.value}],
  }));

  const passConfirmStyle = useAnimatedStyle(() => ({
    opacity: passOpacity.value,
    transform: [{translateX: passTranslateX.value}],
  }));

  const registerValues = {
    firstName: '',
    email: '',
    lastName: '',
    password: '',
    confirm_password: '',
  };

  const LoginNavigation = () => {
    navigation.navigate('Login');
  };

  const registerUser = async (values: typeof registerValues) => {
    setIsSubmitting(true);

    try {
      await store
        .dispatch(
          registerUserThunk({
            email: values.email,
            password: values.password,
            first_name: values.firstName,
            last_name: values.lastName,
          }),
        )
        .unwrap()
        .then((response: any) => {
          console.log(response, 'dsdas');
          if (!response.data) {
            Object.keys(response).forEach(field => {
              response[field].forEach((message: string) => {
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
                ? 'تحقق من بريدك الإلكتروني للحصول على رمز التحقق'
                : 'Check your email for the verification code',
            },
          });
          setTimeout(() => {
            navigation.navigate('otp-verify', {
              email: values.email,
            });
          }, 1000);
        })
        .catch((error: any) => {
          console.log('error:', error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      setIsSubmitting(false);

      console.log('error::', error);
      return error;
    }
  };

  return (
    <View>
      <View style={styles.screenContainer}>
        <View style={styles.icon}>
          <BackArrowButton />
          <TypographyText content="Make_account" type="24_Bold" color="dark" />
        </View>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <TypographyText content="slogan" type="12_Medium" color="dark" />
        </View>

        <View style={styles.inputsContainer}>
          <Formik
            validationSchema={registerSchema}
            initialValues={registerValues}
            onSubmit={registerUser}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={{width: '100%', gap: 20}}>
                {registerToggle === 'contact-info' ? (
                  <Animated.View
                    style={[styles.stepContainer, contactInfoStyle]}>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder={t('first name')}
                        style={styles.inputStyle}
                        value={values.firstName}
                        onBlur={handleBlur('firstName')}
                        onChangeText={handleChange('firstName')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.firstName && errors.firstName && (
                        <TypographyText
                          content={errors.firstName}
                          type="12_Medium"
                          color="redRibbon"
                        />
                      )}
                    </View>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder={t('last name')}
                        style={styles.inputStyle}
                        value={values.lastName}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.lastName && errors.lastName && (
                        <TypographyText
                          content={errors.lastName}
                          type="12_Medium"
                          color="redRibbon"
                        />
                      )}
                    </View>
                    <View>
                      <TextInput
                        keyboardType="email-address"
                        placeholder={t('email')}
                        style={styles.inputStyle}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.email && errors.email && (
                        <TypographyText
                          content={errors.email}
                          type="12_Medium"
                          color="redRibbon"
                        />
                      )}
                    </View>

                    <TouchableOpacity
                      style={styles.authButton}
                      onPress={() => {
                        handleBlur('firstName');
                        handleBlur('lastName');
                        handleBlur('email');
                        // handleSubmit(); // Trigger validation manually
                        if (
                          values.firstName &&
                          values.lastName &&
                          values.email
                        ) {
                          // setRegisterToggle('pass-confirm');
                          animateToStep('pass-confirm');
                        }
                      }}>
                      <TypographyText
                        content="Continue"
                        type="14_Bold"
                        color="dark"
                      />
                    </TouchableOpacity>
                  </Animated.View>
                ) : null}
                {registerToggle === 'pass-confirm' && (
                  <Animated.View
                    style={[styles.stepContainer, passConfirmStyle]}>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder={t('password')}
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.password && errors.password && (
                        <TypographyText
                          content={errors.password}
                          type="12_Medium"
                          color="redRibbon"
                        />
                      )}
                    </View>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder={t('confirm_password')}
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        value={values.confirm_password}
                        onChangeText={handleChange('confirm_password')}
                        onBlur={handleBlur('confirm_password')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.confirm_password && errors.confirm_password && (
                        <TypographyText
                          content={errors.confirm_password}
                          type="12_Medium"
                          color="redRibbon"
                        />
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.authButton}
                      disabled={isSubmitting}
                      onPress={handleSubmit as any}>
                      {isSubmitting ? (
                        <ActivityIndicator style={{padding: 4}} />
                      ) : (
                        <TypographyText
                          content="Make_account"
                          type="14_Bold"
                          color="dark"
                        />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        animateToStep('contact-info');
                      }}>
                      <TypographyText
                        content="back_to_previous"
                        color="dark"
                        type="14_Bold"
                      />
                    </TouchableOpacity>
                  </Animated.View>
                )}
              </View>
            )}
          </Formik>

          <View style={styles.registerContainer}>
            <TypographyText
              content="you already have an account"
              color="dark"
              type="12_Medium"
              styles={styles.text}
            />
            <View style={styles.authContainer}>
              <TouchableOpacity style={styles.btn} onPress={LoginNavigation}>
                <TypographyText content="login" color="dark" type="14_Bold" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;
const styles = StyleSheet.create({
  screenContainer: {
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
  formHeader: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: Colors.text.primary,
  },
  formDescription: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Nunito-Medium',
    color: Colors.text.secondary,
    marginTop: 10,
  },
  inputsContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    gap: 25,
  },
  inputStyle: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    padding: 12,
    borderRadius: 50,
    fontFamily: TextStyle['12_Reguler'].fontFamily,
    fontSize: TextStyle['12_Reguler'].fontSize,
    color: color.dark,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  authButton: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  registerLink: {
    color: '#231A16',
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  icon: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    alignItems: 'center',
    width: '80%',
    gap: 20,
  },
  btn: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.lightGrey,
    borderRadius: 100,
    width: '100%',
  },
  authContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
  },
  stepContainer: {
    width: '100%',
    gap: 20,
  },
});
