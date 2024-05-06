import {
  Image,
  Platform,
  StyleSheet,
  Text,
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

const isIos = Platform.OS === 'ios';

const HeaderNav = () => {
  // const navigation: any = useNavigation();
  return (
    <View style={styles.headerNav}>
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
            <HumburgerMenuIcon />
          </View>
          {/* <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Login');
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
    height: isIos ? 110 : 70,
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
    alignItems: 'center',
  },
  typography: {
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
    transform: [{translateY: 12}, {translateX: -10}],
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ifitLogo: {width: 50, height: 50, resizeMode: 'contain'},
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 28,
  },
});
