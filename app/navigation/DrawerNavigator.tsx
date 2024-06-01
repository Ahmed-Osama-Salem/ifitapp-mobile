/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import {Text, View, StyleSheet} from 'react-native';
import HeaderNav from '../screens/home/components/HeaderNav';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <DrawerContentScrollView {...props} style={styles.drawerContent}>
          <View>
            <Text>hello</Text>
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
});

export default DrawerNavigator;
