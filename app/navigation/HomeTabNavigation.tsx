/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import FAQ from '../screens/faq/FAQ';
import Blog from '../screens/Blog/Blog';
import Settings from '../screens/settings/Settings';
import HeaderNav from '../screens/home/components/HeaderNav';

const HomeTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#F6E117',
        tabBarInactiveTintColor: '#C9C9C9',
        tabBarStyle: appTabStyles.appTabsContainer,
        tabBarLabelStyle: appTabStyles.noneActiveTab,
        header(props) {
          return <HeaderNav {...props} />;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({focused}) => (
          //   <View style={appTabStyles.tabItem}>
          //     <Text style={focused ? {color: '#000000'} : {color: '#C9C9C9'}}>
          //       Home
          //     </Text>
          //   </View>
          // ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: 'Blog',
          // tabBarIcon: ({focused}) => (
          //   <View style={appTabStyles.tabItem}>
          //     <Text style={focused ? {color: '#000000'} : {color: '#C9C9C9'}}>
          //       Blog
          //     </Text>
          //   </View>
          // ),
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarLabel: 'FAQ',
          // tabBarIcon: ({focused}) => (
          //   <View style={appTabStyles.tabItem}>
          //     <Text style={focused ? {color: '#000000'} : {color: '#C9C9C9'}}>
          //       FAQ
          //     </Text>
          //   </View>
          // ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          // tabBarIcon: ({focused}) => (
          //   <View style={appTabStyles.tabItem}>
          //     <Text style={focused ? {color: '#000000'} : {color: '#C9C9C9'}}>
          //       Settings
          //     </Text>
          //   </View>
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;

const appTabStyles = StyleSheet.create({
  appTabsContainer: {
    height: 100,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  noneActiveTab: {
    fontSize: 16,
  },
});
