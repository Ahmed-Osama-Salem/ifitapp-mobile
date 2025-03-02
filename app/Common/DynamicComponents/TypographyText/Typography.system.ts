import {I18nManager} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const isRTL = () => I18nManager.isRTL;

export const Fonts = {
  FONT_FAMILY_EXTRABOLD: isRTL() ? 'Nunito-ExtraBold' : 'Nunito-Bold',
  FONT_FAMILY_BOLD: isRTL() ? 'Nunito-Bold' : 'Nunito-Bold',
  FONT_FAMILY_SEMIBOLD: isRTL() ? 'Nunito-Medium' : 'Nunito-Medium',
  FONT_FAMILY_REGULAR: isRTL() ? 'Nunito-Regular' : 'Nunito-Regular',
  FONT_FAMILY_MEDIUM: isRTL() ? 'Nunito-Medium' : 'Nunito-Medium',
  // FONT_FAMILY_LIGHT: isRTL() ? 'Cairo-Light' : 'Montserrat-Light',
};

export const Size = {
  h0: moderateScale(72),
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(24),
  h5: moderateScale(20),
  h6: moderateScale(19),
  h7: moderateScale(10),
  '18': moderateScale(18),
  regular: moderateScale(16),
  medium: moderateScale(14),
  small: 12,
  tiny: moderateScale(8.5),
};

export const TextStyle = {
  h0: {
    fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
    fontSize: Size.h0,
  },
  h1: {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.h1,
  },
  h2: {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h2,
  },
  h3: {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h3,
  },
  h4: {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h4,
  },
  h5: {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h5,
  },
  h6: {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h6,
  },
  normal: {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.regular,
  },
  description: {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.medium,
  },
  '9_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.tiny,
  },
  '9_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.tiny,
  },
  '9_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.tiny,
  },
  '9_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.tiny,
  },
  '10_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.h7,
  },
  '10_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h7,
  },
  '10_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h7,
  },
  '10_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.h7,
  },
  '12_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.small,
  },
  '12_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.small,
  },
  '12_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.small,
  },
  '12_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.small,
  },
  '14_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.medium,
  },
  '14_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.medium,
  },
  '14_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.medium,
  },
  '14_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.medium,
  },
  '16_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.regular,
  },
  '16_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.regular,
  },
  '16_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.regular,
  },
  '16_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.regular,
  },
  '18_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size['18'],
  },
  '18_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size['18'],
  },
  '18_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size['18'],
  },
  '18_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size['18'],
  },
  '20_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.h5,
  },
  '20_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h5,
  },
  '20_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h5,
  },
  '20_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.h5,
  },
  '24_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.h4,
  },
  '24_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h4,
  },
  '24_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h4,
  },
  '24_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.h4,
  },
  '30_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.h3,
  },
  '30_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h3,
  },
  '30_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h3,
  },
  '30_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.h3,
  },
  '34_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.h2,
  },
  '34_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.h2,
  },
  '34_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.h2,
  },
  '34_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.h2,
  },
};

export const allowFontScaling = false;
