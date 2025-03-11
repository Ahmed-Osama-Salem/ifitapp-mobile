import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TypographyText from '../../../../Common/DynamicComponents/TypographyText/TypographyText';
import {moderateScale} from 'react-native-size-matters';
import color from 'Theme/color';
import {convertToDate} from 'utils/ConvertDate';
import {ProfileIcon, ShowIcon} from 'modules/SvgIcons';

const QuestionSingleColumn = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.authorContainer}>
          <ProfileIcon colorStroke="#666E80" />
          <TypographyText
            content={I18nManager.isRTL ? 'محمد الفيت' : 'Mohamed Elfit'}
            type="12_Medium"
            color="dark"
          />
        </View>
        <TypographyText
          content={convertToDate('2021-09-01T00:00:00Z')}
          color="appGrey"
          type="12_Reguler"
        />
      </View>
      <TypographyText
        content={
          I18nManager.isRTL
            ? 'ما هي الأدوات المستخدمة في المساحة؟'
            : 'What are the tools used in surveying?'
        }
        color="dark"
        type="16_Medium"
        styles={styles.titleContainer}
      />
      <View style={styles.rowContainer}>
        <TypographyText
          content="Answers"
          color="dark"
          type="12_Reguler"
          //   styles={styles.titleContainer}
        />
        <ShowIcon />
      </View>
    </TouchableOpacity>
  );
};

export default QuestionSingleColumn;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: moderateScale(250),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.lightGrey2,
    paddingVertical: 10,
  },
  titleContainer: {
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
//fff59b
