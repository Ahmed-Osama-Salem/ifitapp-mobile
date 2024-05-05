import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomTabBarButton = ({children, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.buttonStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0,
  },
  buttonStyle: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#F6E117',
  },
});
