import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

const ScreenLayout = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
