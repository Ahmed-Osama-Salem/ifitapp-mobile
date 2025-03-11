import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  I18nManager,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import loginSchema from '../../../helpers/validation/loginSchema';
import {Colors, Shadows} from '../../../utils/theme';
import {store} from 'Redux/Store';
import {loginUserThunk} from 'Redux/Slices/Auth/loginSlice';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {TextStyle} from 'Common/DynamicComponents/TypographyText/Typography.system';
import color from 'Theme/color';
import {moderateScale} from 'react-native-size-matters';
import BackArrowButton from 'modules/elements/BackArrowButton';
import {useTranslation} from 'react-i18next';

const LoginForm = () => {
  // const isDark = useColorScheme() === 'dark';
  const navigation: any = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {t} = useTranslation('translation');

  const loginValues = {
    email: '',
    password: '',
  };
  const loginUser = async (values: typeof loginValues) => {
    setIsSubmitting(true);

    try {
      await store
        .dispatch(
          loginUserThunk({
            email: values.email,
            password: values.password,
          }),
        )
        .unwrap()
        .then((response: any) => {
          console.log(response);

          Toast.show({
            type: 'ifit',
            visibilityTime: 4000,
            props: {
              variant: 'success',
              message: t('welcome') + ' ' + response.data.data.email,
              // response.data.data.first_name +
              // ' ' +
              // response.data.data.last_name,
            },
          });
        })
        .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => {
            navigation.navigate('HomeApp');
          }, 1000);
        });
    } catch (error: any) {
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
      <View style={styles.icon}>
        <BackArrowButton
          onGoBack={() => {
            navigation.navigate('HomeApp');
          }}
        />
        <TypographyText content="login" type="24_Bold" color="dark" />
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
                  placeholder={
                    I18nManager.isRTL ? 'البريد الالكتروني' : 'Email'
                  }
                  style={styles.inputStyle}
                  placeholderTextColor={Colors.text.secondary}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <TypographyText
                    content={errors.email}
                    type="12_Medium"
                    color="redRibbon"
                  />
                )}
              </View>
              <View>
                <TextInput
                  keyboardType="default"
                  placeholder={I18nManager.isRTL ? 'كلمة المرور' : 'Password'}
                  secureTextEntry={true}
                  style={styles.inputStyle}
                  placeholderTextColor={Colors.text.secondary}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && (
                  <TypographyText
                    content={errors.password}
                    type="12_Medium"
                    color="redRibbon"
                  />
                )}
              </View>
              <TouchableOpacity>
                <TypographyText
                  content="Forget my password ?"
                  type="12_Medium"
                  color="dark"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.authButton}
                disabled={isSubmitting}
                onPress={handleSubmit as any}>
                {isSubmitting ? (
                  <ActivityIndicator style={{padding: 6}} />
                ) : (
                  <TypographyText content="login" type="16_Bold" color="dark" />
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <View style={styles.registerContainer}>
          <TypographyText
            content="Dont_have_account?"
            color="dark"
            type="12_Medium"
            styles={styles.text}
          />
          <View style={styles.authContainer}>
            <TouchableOpacity style={styles.btn} onPress={RegisterNavigation}>
              <TypographyText
                content="Make_account"
                color="dark"
                type="14_Bold"
              />
            </TouchableOpacity>
          </View>
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
    paddingTop: moderateScale(30),
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
    borderStyle: 'solid',
    // borderWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    marginTop: moderateScale(20),
  },
  errorText: {
    color: Colors.red,
    fontSize: 12,
    fontFamily: 'Nunito-Medium',
    marginTop: 5,
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
  },
  text: {
    textAlign: 'left',
  },
  icon: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    alignItems: 'center',
    width: '80%',
    gap: 20,
  },
});
