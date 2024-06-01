import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthService from '../../../server/auth/AuthService';
import {Formik} from 'formik';
import registerSchema from '../../../helpers/validation/registerSchema';
import Toast from 'react-native-toast-message';
import {Colors, Shadows} from '../../../utils/theme';

const RegisterForm = () => {
  const navigation: any = useNavigation();
  const authPromise = new AuthService();
  const [registerToggle, setRegisterToggle] = useState<
    'contact-info' | 'pass-confirm'
  >('contact-info');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const registerValues = {
    name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  };

  const LoginNavigation = () => {
    navigation.navigate('Login');
  };

  const registerUser = async (values: typeof registerValues) => {
    setIsSubmitting(true);
    try {
      const response = await authPromise.RegisterService(values);

      setIsSubmitting(false);

      console.log('response::', response);
      if (response.data) {
        Toast.show({
          type: 'success',
          text1: response.data.message,
        });
        setTimeout(() => {
          navigation.navigate('otp-verify');
        }, 2000);
      }
      return response;
    } catch (error) {
      setIsSubmitting(false);
      Toast.show({
        type: 'error',
        text1: 'try to register again',
      });
      console.log('error::', error);
      return error;
    }
  };

  return (
    <View>
      <View style={styles.screenContainer}>
        <Text style={styles.formHeader}>Sign up</Text>
        <Text style={styles.formDescription}>
          to i Fit, the first engineering community app
        </Text>

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
                  <>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder="Name"
                        style={styles.inputStyle}
                        value={values.name}
                        onBlur={handleBlur('name')}
                        onChangeText={handleChange('name')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.name && errors.name && (
                        <Text style={styles.errorText}>{errors.name}</Text>
                      )}
                    </View>
                    <View>
                      <TextInput
                        keyboardType="email-address"
                        placeholder="Email"
                        style={styles.inputStyle}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}
                    </View>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder="Phone Number"
                        style={styles.inputStyle}
                        value={values.phone_number}
                        onChangeText={handleChange('phone_number')}
                        onBlur={handleBlur('phone_number')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.phone_number && errors.phone_number && (
                        <Text style={styles.errorText}>
                          {errors.phone_number}
                        </Text>
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.authButton}
                      onPress={() => {
                        if (
                          !errors.email &&
                          !errors.phone_number &&
                          !errors.name
                        ) {
                          setRegisterToggle('pass-confirm');
                        }
                      }}>
                      <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                  </>
                ) : null}
                {registerToggle === 'pass-confirm' && (
                  <>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      )}
                    </View>
                    <View>
                      <TextInput
                        keyboardType="default"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        value={values.confirm_password}
                        onChangeText={handleChange('confirm_password')}
                        onBlur={handleBlur('confirm_password')}
                        placeholderTextColor={Colors.text.secondary}
                      />
                      {touched.confirm_password && errors.confirm_password && (
                        <Text style={styles.errorText}>
                          {errors.confirm_password}
                        </Text>
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.authButton}
                      disabled={isSubmitting}
                      onPress={handleSubmit as any}>
                      {isSubmitting ? (
                        <ActivityIndicator />
                      ) : (
                        <Text style={styles.buttonText}>Sign up</Text>
                      )}
                    </TouchableOpacity>
                    <Button
                      onPress={() => setRegisterToggle('contact-info')}
                      title="Back"
                    />
                  </>
                )}
              </View>
            )}
          </Formik>
          <View style={{gap: 10}}>
            <Text>you already have an account,</Text>
            <TouchableWithoutFeedback onPress={LoginNavigation}>
              <Text style={{textAlign: 'center', ...styles.registerLink}}>
                Login
              </Text>
            </TouchableWithoutFeedback>
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
    padding: 10,
    borderRadius: 50,
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    color: Colors.text.primary,
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
    gap: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
