import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}>
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
    </ScrollView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#F6E117',
  },
  screenContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  loginContainer: {
    paddingHorizontal: 24,
    height: '30%',
    backgroundColor: '#F6E117',
  },
  loginHeader: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
  },
  loginContent: {
    fontSize: 42,
    fontFamily: 'Nunito-ExtraBold',
    color: '#000',
  },
});
