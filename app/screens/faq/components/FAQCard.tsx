import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShowIcon} from '../../../modules/SvgIcons';
import FAQFlag from './FAQFlag';

const FAQCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>17 june, 2022</Text>
      <Text style={styles.faqContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={styles.faqControl}>
        <FAQFlag status="Answered" />
        <ShowIcon />
      </View>
    </View>
  );
};

export default FAQCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: '#E1E2E6FC',
    borderWidth: 1,
    borderRadius: 10,
  },
  textStyles: {
    color: '#98A1B3',
    fontFamily: 'Nunito-Regular',
  },
  faqContent: {
    color: '#666E80',
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
  },
  faqControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
