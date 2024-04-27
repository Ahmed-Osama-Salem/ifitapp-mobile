import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BackNavigator = () => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={styles.authButton}
      onPress={() => {
        navigate.goBack();
      }}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackNavigator;

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: '#F6E117',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 17,
  },
});
