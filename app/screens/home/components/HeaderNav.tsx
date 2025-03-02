import {
  Image,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import {
  NotifyIcon,
  HumburgerMenuIcon,
  SearchIcon,
} from '../../../modules/SvgIcons';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
type NavProp = DrawerNavigationProp<Record<string, undefined>>;

const isIos = Platform.OS === 'ios';

const HeaderNav = ({navigation}: {navigation: NavProp}) => {
  return (
    <LinearGradient colors={['#F6E117', '#ffffff']} style={styles.headerNav}>
      <View style={styles.iosSafeArea}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.ifitLogo}
            source={require('../../../assets/header-logo.png')}
          />
          <TypographyText
            content="iFit"
            type="18_Bold"
            color="dark"
            styles={styles.typography}
          />
        </View>
        <View style={styles.controlContainer}>
          <View style={styles.iconGroup}>
            <SearchIcon />
            <NotifyIcon />
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <View>
                <HumburgerMenuIcon />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: isIos ? moderateScale(110) : moderateScale(85),
  },
  iosSafeArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: isIos ? 45 : 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
  },
  typography: {
    position: 'absolute',
    left: 38,
    top: 20,
  },
  controlContainer: {
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ifitLogo: {width: 45, height: 45, resizeMode: 'contain'},
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 28,
  },
});
