/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    // Simulate a delay for the splash screen
    setTimeout(() => {
      // Navigate to the desired screen after the delay
      navigation.replace('Login');
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ifit-logo.png')}
        // style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6E117',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
