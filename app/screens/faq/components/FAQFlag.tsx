import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DotFlagIcon} from '../../../modules/SvgIcons';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';

interface FAQFlagProps {
  status: 'Answered' | 'Unanswered' | 'pending';
}

const FAQFlag = (props: FAQFlagProps) => {
  const FlagStatus = {
    Answered: (
      <>
        <DotFlagIcon colorStroke="green" />
        <TypographyText content="Answered" type="12_Bold" color="ifitGrey" />
      </>
    ),
    Unanswered: (
      <>
        <DotFlagIcon colorStroke="red" />
        <TypographyText content="Unanswered" type="12_Bold" color="ifitGrey" />
      </>
    ),
    pending: (
      <>
        <DotFlagIcon colorStroke="blue" />
        <TypographyText content="Pending" type="12_Bold" color="ifitGrey" />
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
