import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ShowIcon} from '../../../modules/SvgIcons';
import FAQFlag from './FAQFlag';
import {QuestionResult} from 'Redux/Slices/Questions/questionSlice';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';

const FAQCard = ({question}: {question: QuestionResult}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TypographyText
          content={question?.author?.email}
          type="12_Reguler"
          color="ifitGrey"
        />
        <TypographyText
          content="17 june, 2022"
          type="12_Reguler"
          color="ifitGrey"
        />
      </View>
      <TypographyText
        content={question?.title}
        type="14_Bold"
        color="dark"
        styles={styles.faqContent}
      />
      <TypographyText
        content={question.question}
        type="12_Bold"
        color="ifitGrey"
        styles={styles.faqContent}
      />
      <View style={styles.faqControl}>
        <FAQFlag status={question?.status} />
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
  faqContent: {
    marginTop: 5,
  },
  faqControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
