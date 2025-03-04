/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import HeaderNav from '../screens/home/components/HeaderNav';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {moderateScale} from 'react-native-size-matters';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
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
                styles={styles.typography}
              />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
              style={{padding: 10}}>
              <TypographyText content="Home" color="dark" type="20_Bold" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Blog')}
              style={{padding: 10}}>
              <TypographyText content="Articels" color="dark" type="20_Bold" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('FAQ')}
              style={{padding: 10}}>
              <TypographyText content="Question" color="dark" type="20_Bold" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}
              style={{padding: 10}}>
              <TypographyText content="Settings" color="dark" type="20_Bold" />
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      )}
      screenOptions={{
        drawerContentStyle: styles.drawerContent,
        header: props => <HeaderNav {...props} />, // add the HeaderNav component here
        headerShown: true,
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    zIndex: 50,
  },
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
  controlContainer: {
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ifitLogo: {width: 45, height: 45, resizeMode: 'contain'},
});

export default DrawerNavigator;
