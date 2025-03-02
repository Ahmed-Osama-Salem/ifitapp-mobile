import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TypographyText from '../TypographyText/TypographyText';
import {moderateScale, scale} from 'react-native-size-matters';

interface ScreenGradientHeaderProps {
  content: string;
}
const isIos = Platform.OS === 'ios';

const ScreenGradientHeader = (props: ScreenGradientHeaderProps) => {
  return (
    <LinearGradient colors={['#F6E117', '#ffffff']} style={styles.gradient}>
      <TypographyText
        content={props.content}
        type="34_Bold"
        color="dark"
        styles={styles.typography}
      />
    </LinearGradient>
  );
};

export default ScreenGradientHeader;

const styles = StyleSheet.create({
  gradient: {
    height: isIos ? moderateScale(110) : moderateScale(85),
    marginBottom: 5,
  },
  typography: {
    textAlign: 'center',
    paddingHorizontal: scale(20),
    marginTop: isIos ? scale(50) : scale(20),
  },
});
