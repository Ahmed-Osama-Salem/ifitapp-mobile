import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation();

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
        <TextInput
          keyboardType="default"
          placeholder="Email"
          style={styles.inputStyle}
        />
        <TextInput
          keyboardType="default"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputStyle}
        />
        <TouchableWithoutFeedback>
          <Text>Forget my password ?</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
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
  },
  registerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
