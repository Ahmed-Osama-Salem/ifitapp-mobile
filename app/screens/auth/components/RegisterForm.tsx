import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthService from '../../../server/auth/AuthService';
import {Formik} from 'formik';
import registerSchema from '../../../helpers/validation/registerSchema';

const RegisterForm = () => {
  const navigation: any = useNavigation();
  const authPromise = new AuthService();

  const registerValues = {
    name: '',
    email: '',
    phone_number: '',
    password: '',
  };

  const LoginNavigation = () => {
    navigation.navigate('Login');
  };

  const registerUser = async (values: typeof registerValues) => {
    return authPromise
      .RegisterService(values)
      .then(response => {
        console.log('response::', response.data.message);
        return response;
      })
      .catch(error => {
        console.log('error::', error.response.data.message);
        return error;
      });
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
                <View>
                  <TextInput
                    keyboardType="default"
                    placeholder="Name"
                    style={styles.inputStyle}
                    value={values.name}
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
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
                  />
                  {touched.phone_number && errors.phone_number && (
                    <Text style={styles.errorText}>{errors.phone_number}</Text>
                  )}
                </View>
                <View>
                  <TextInput
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={handleSubmit as any}>
                  <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  formHeader: {
    fontSize: 25,
    fontWeight: '700',
  },
  formDescription: {
    fontSize: 16,
    fontWeight: '500',
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
