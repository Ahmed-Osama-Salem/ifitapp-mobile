import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  // TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';
import {
  NotifyIcon,
  HumburgerMenuIcon,
  SearchIcon,
} from '../../../modules/SvgIcons';
import {DrawerNavigationProp} from '@react-navigation/drawer';
type NavProp = DrawerNavigationProp<Record<string, undefined>>;

const isIos = Platform.OS === 'ios';

const HeaderNav = ({navigation}: {navigation: NavProp}) => {
  const windowHeight = useWindowDimensions().height;

  const headerHeight = isIos ? windowHeight * 0.122 : windowHeight * 0.07;
  return (
    <View style={{...styles.headerNav, height: isIos ? headerHeight : 70}}>
      <SafeAreaView style={styles.iosSafeArea}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.ifitLogo}
            source={require('../../../assets/header-logo.png')}
          />
          <Text style={styles.typography}>iFit</Text>
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
          {/* <TouchableWithoutFeedback
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Text>Logout</Text>
          </TouchableWithoutFeedback> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  headerNav: {
    backgroundColor: '#F6E117',
    flexDirection: 'row',
    alignItems: isIos ? 'baseline' : 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // apply shadow to the header
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iosSafeArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: 'auto',
    height: '100%',
  },
  typography: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold',
    transform: [{translateY: -10}, {translateX: -10}],
    color: '#000',
  },
  controlContainer: {
    flexDirection: 'row',
    height: 'auto',
    alignItems: isIos ? 'baseline' : 'center',
    justifyContent: 'space-between',
  },
  ifitLogo: {width: 45, height: 45, resizeMode: 'contain'},
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 28,
  },
});
