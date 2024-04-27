import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.loginContainer}>
        <SafeAreaView>
          <View style={styles.loginHeader}>
            <Image source={require('../../assets/ifit-logo.png')} />
            <Text style={styles.loginContent}>i Fit</Text>
          </View>
        </SafeAreaView>
      </View>
      {children}
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  loginContainer: {
    paddingHorizontal: 24,
    height: '35%',
    backgroundColor: '#F6E117',
  },
  loginHeader: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
  },
  loginContent: {
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Nunito-ExtraBold',
  },
  highlight: {
    fontWeight: '700',
  },
});
