import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottiLogoView from '../../modules/elements/LottiLogoView';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LottiLogoView />
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
