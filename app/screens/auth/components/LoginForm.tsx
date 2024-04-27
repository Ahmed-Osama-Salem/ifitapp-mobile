import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AuthService from '../../../server/auth/AuthService';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import loginSchema from '../../../helpers/validation/loginSchema';

const LoginForm = () => {
  const navigation: any = useNavigation();
  const authPromise = new AuthService();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const loginValues = {
    email: '',
    password: '',
  };
  const loginUser = async (values: typeof loginValues) => {
    setIsSubmitting(true);
    try {
      const response = await authPromise.LoginService(values);
      setIsSubmitting(false);
      console.log('====================================');
      console.log('response::::', response);
      console.log('====================================');
      if (response.data.status === 200) {
        Toast.show({
          type: 'success',
          text1: response.data.message,
        });
        setTimeout(() => {
          navigation.navigate('HomeApp');
        }, 2000);
      }

      return response;
    } catch (error: any) {
      console.log('====================================');
      console.log('error::', error.response.data);
      console.log('====================================');
      setIsSubmitting(false);
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });

      return error.response.data;
    }
  };

  const RegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.formHeader}>Log in</Text>
      <Text style={styles.formDescription}>
        to i Fit , the first engineering community app
      </Text>
      <View style={styles.inputsContainer}>
        <Formik
          validationSchema={loginSchema}
          initialValues={loginValues}
          onSubmit={loginUser}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={{width: '100%', gap: 20}}>
              <View>
                <TextInput
                  keyboardType="default"
                  placeholder="Email"
                  style={styles.inputStyle}
                  placeholderTextColor="#231A16"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View>
                <TextInput
                  keyboardType="default"
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.inputStyle}
                  placeholderTextColor="#231A16"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <TouchableWithoutFeedback>
                <Text>Forget my password ?</Text>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                style={styles.authButton}
                disabled={isSubmitting}
                onPress={handleSubmit as any}>
                {isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.buttonText}>Sign in</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <View style={styles.registerContainer}>
          <Text>Or</Text>
          <TouchableWithoutFeedback onPress={RegisterNavigation}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  formHeader: {
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Nunito-Bold',
  },
  formDescription: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    fontFamily: 'Nunito-Medium',
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
    fontFamily: 'Nunito-Medium',
  },
  registerLink: {
    color: '#231A16',
    textDecorationLine: 'underline',
    fontFamily: 'Nunito-Medium',
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
    fontFamily: 'Nunito-Medium',
    marginTop: 5,
  },
});
