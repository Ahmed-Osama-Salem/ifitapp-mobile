import {I18nManager, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackArrowIcon} from '../SvgIcons';
import color from 'Theme/color';

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
    transform: [{rotate: !I18nManager.isRTL ? '0deg' : '180deg'}],
    shadowColor: color.gray,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 0,
  },
});
