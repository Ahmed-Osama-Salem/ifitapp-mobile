/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
import HeaderNav from '../screens/home/components/HeaderNav';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {moderateScale} from 'react-native-size-matters';
import {BlogIcon, FQAIcon, HomeIcon, ProfileIcon} from 'modules/SvgIcons';
import color from 'Theme/color';
import {Switch} from 'react-native-gesture-handler';
import useChangeLang from 'Hooks/useChangeLang';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const [isArabic, setIsArabic] = useState(I18nManager.isRTL);
  const {switchLanguage} = useChangeLang();
  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    switchLanguage(isArabic ? 'en' : 'ar');
  };
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.ifitLogo}
            source={require('../assets/header-logo.png')}
          />
          <TypographyText
            content="iFit"
            type="18_Bold"
            color="dark"
            styles={I18nManager.isRTL ? styles.typographyAr : styles.typography}
          />
        </View>
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemTab}
            onPress={() => props.navigation.navigate(item.route)}>
            {item.icon && (
              <View
                style={{
                  ...styles.iconItemContainer,
                  backgroundColor:
                    props.state.routeNames[0] === item.route
                      ? color.sunYellow
                      : color.lightGrey,
                }}>
                <item.icon colorStroke={'#666E80'} />
              </View>
            )}
            <TypographyText
              content={item.label}
              color="dark"
              type="14_Bold"
              styles={styles.tabLabel}
            />
          </TouchableOpacity>
        ))}
        <View>
          <View style={styles.divider} />
          <TypographyText
            content="Settings"
            color="dark"
            type="16_Bold"
            styles={styles.text}
          />
          {/* <TypographyText
            content="Privacy Policy"
            color="dark"
            type="16_Bold"
            styles={styles.text}
          />
          <TypographyText
            content="Terms of Service"
            color="dark"
            type="16_Bold"
            styles={styles.text}
          /> */}
          <View style={styles.rowContainer}>
            <View>
              <TypographyText
                content="change_lang"
                color="dark"
                type="14_Medium"
                styles={styles.text}
              />
              <TypographyText
                content={!isArabic ? 'عربي' : 'English'}
                color="ifitGrey"
                type="12_Bold"
                styles={styles.text}
              />
            </View>
            <Switch
              value={isArabic}
              onValueChange={toggleLanguage}
              thumbColor={isArabic ? color.light : color.lightGrey}
              trackColor={{false: '#767577', true: color.sunYellow}}
            />
          </View>
          <View style={styles.divider} />
          <TypographyText
            content="Dont_have_account?"
            color="dark"
            type="14_Reguler"
            styles={styles.text}
          />
          <View style={styles.authContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => props.navigation.navigate('Register')}>
              <TypographyText
                content="Make_account"
                color="dark"
                type="14_Bold"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnYellow}
              onPress={() => props.navigation.navigate('Login')}>
              <TypographyText content="login" color="dark" type="14_Bold" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const drawerItems = [
  {label: 'Home', route: 'Home', icon: HomeIcon},
  {label: 'Articles', route: 'Blog', icon: BlogIcon},
  {label: 'Questions', route: 'FAQ', icon: FQAIcon},
  {label: 'Profile', route: 'Settings', icon: ProfileIcon},
];

const DrawerNavigator = () => {
  return (
    <View style={{flex: 1, direction: I18nManager.isRTL ? 'rtl' : 'ltr'}}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            width: 250,
            backgroundColor: 'white',
          },
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          header: props => <HeaderNav {...props} />,
          headerShown: true,
        }}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {},
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    marginBottom: moderateScale(20),
  },
  typography: {
    position: 'absolute',
    left: 38,
    top: 20,
  },
  typographyAr: {
    position: 'absolute',
    left: 38,
    top: 13,
  },
  ifitLogo: {width: 45, height: 45, resizeMode: 'contain'},
  tabLabel: {
    textAlign: 'left',
  },
  iconItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 40,
    height: 40,
    borderRadius: 10,
    shadowColor: color.gray,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 0,
  },
  itemTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    gap: 20,
  },
  divider: {
    height: 1,
    backgroundColor: color.lightGrey2,
    marginVertical: moderateScale(20),
  },
  text: {
    textAlign: 'left',
    paddingLeft: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
  },
  btnYellow: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.sunYellow,
    borderRadius: 100,
  },
  btn: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.lightGrey,
    borderRadius: 100,
    marginVertical: moderateScale(10),
  },
  authContainer: {
    // marginTop: 20,
  },
});

export default DrawerNavigator;
