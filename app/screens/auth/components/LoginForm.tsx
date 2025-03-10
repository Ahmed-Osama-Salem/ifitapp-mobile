import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AuthService from '../../../server/auth/AuthService';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import loginSchema from '../../../helpers/validation/loginSchema';
import {Colors, Shadows} from '../../../utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {Color} from 'Theme/color';
import { RootState, store } from 'Redux/Store';
import { loginUser } from 'Redux/Slices/Auth/AuthSlice';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  // const isDark = useColorScheme() === 'dark';
  const navigation: any = useNavigation();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  // const authPromise = new AuthService();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const loginValues = {
    email: '',
    password: '',
  };

  const handleUserLogin = async (values: typeof loginValues) => {
    try {
      const resp = await store.dispatch(loginUser({email:values.email, password:values.password})).unwrap();
    } catch (error) {
      console.log(error, "first, errror")
      console.log(error, "error")
    }
    /*
    try {
      const response = await authPromise.LoginService(values);
      setIsSubmitting(false);
      const jsonValue = JSON.stringify(response.data.data.user);


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
      setIsSubmitting(false);
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });

      return error.response.data;
    }
    */
  };

  const RegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.screenContainer}>
      <TypographyText
        color={Colors.text.primary as Color}
        content="sign-in"
        type="24_Medium"
      />
      <TypographyText
        styles={{marginTop: 10}}
        color={Colors.text.secondary as Color}
        content="slogan"
        type="16_Reguler"
      />

      <View style={styles.inputsContainer}>
        <Formik
          validationSchema={loginSchema}
          initialValues={loginValues}
          onSubmit={handleUserLogin}>
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
                  placeholderTextColor={Colors.text.secondary}
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
                  placeholderTextColor={Colors.text.secondary}
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
    marginTop: 10,
    fontFamily: 'Nunito-Medium',
    color: Colors.text.secondary,
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
    color: Colors.text.primary,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Nunito-bold',
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
    color: Colors.red,
    fontSize: 12,
    fontFamily: 'Nunito-Medium',
    marginTop: 5,
  },
});
