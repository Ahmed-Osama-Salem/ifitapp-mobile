import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DotFlagIcon} from '../../../modules/SvgIcons';

interface FAQFlagProps {
  status: 'Answered' | 'Unanswered' | 'InReview';
}

const FAQFlag = (props: FAQFlagProps) => {
  const FlagStatus = {
    Answered: (
      <>
        <DotFlagIcon colorStroke="green" />
        <Text>Answered</Text>
      </>
    ),
    Unanswered: (
      <>
        <DotFlagIcon colorStroke="red" />
        <Text>Answered</Text>
      </>
    ),
    InReview: (
      <>
        <DotFlagIcon colorStroke="blue" />
        <Text>Answered</Text>
      </>
    ),
  };
  return <View style={styles.flagContainer}>{FlagStatus[props.status]}</View>;
};

export default FAQFlag;

const styles = StyleSheet.create({
  flagContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},
  textContent: {
    color: '#666E80',
    fontFamily: 'Nunito-Regular',
    marginTop: 5,
  },
});
