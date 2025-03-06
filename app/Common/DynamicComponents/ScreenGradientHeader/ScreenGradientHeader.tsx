import {I18nManager, Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TypographyText from '../TypographyText/TypographyText';
import {moderateScale, scale} from 'react-native-size-matters';
import BackArrowButton from 'modules/elements/BackArrowButton';

interface ScreenGradientHeaderProps {
  content: string;
}
const isIos = Platform.OS === 'ios';

const ScreenGradientHeader = (props: ScreenGradientHeaderProps) => {
  return (
    <LinearGradient colors={['#F6E117', '#ffffff']} style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <BackArrowButton />
        </View>
        <TypographyText
          content={props.content}
          type="30_Bold"
          color="dark"
          styles={styles.typography}
        />
      </View>
    </LinearGradient>
  );
};

export default ScreenGradientHeader;

const styles = StyleSheet.create({
  gradient: {
    height: isIos ? moderateScale(110) : moderateScale(85),
    flexDirection: 'row',
    alignItems: 'center',
    direction: !I18nManager.isRTL ? 'ltr' : 'rtl',
    // marginBottom: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  typography: {
    textAlign: 'center',
    paddingHorizontal: scale(20),
    marginTop: isIos ? scale(50) : scale(20),
  },
  icon: {
    marginTop: isIos ? scale(50) : scale(20),
  },
});
