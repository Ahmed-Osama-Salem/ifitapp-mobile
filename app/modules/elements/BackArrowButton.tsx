import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackArrowIcon} from '../SvgIcons';

const BackArrowButton = () => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        navigate.goBack();
      }}>
      <BackArrowIcon />
    </TouchableOpacity>
  );
};

export default BackArrowButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F6E117',
  },
});
