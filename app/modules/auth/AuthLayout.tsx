import {
  I18nManager,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import color from 'Theme/color';

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.loginContainer}>
          <SafeAreaView>
            <View style={styles.loginHeader}>
              <Image source={require('../../assets/ifit-logo.png')} />
              <TypographyText
                content="iFit"
                type="34_Bold"
                color="dark"
                styles={
                  I18nManager.isRTL ? styles.typographyAr : styles.typography
                }
              />
            </View>
          </SafeAreaView>
        </View>
        {children}
      </View>
    </ScrollView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: color.sunYellow,
  },
  screenContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  loginContainer: {
    paddingHorizontal: 24,
    height: '28%',
    backgroundColor: color.sunYellow,
  },
  loginHeader: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  loginContent: {
    fontSize: 42,
    fontFamily: 'Nunito-ExtraBold',
    color: '#000',
  },
  typography: {
    transform: [{translateY: 20}],
  },
  typographyAr: {
    transform: [{translateY: 20}],
  },
});
