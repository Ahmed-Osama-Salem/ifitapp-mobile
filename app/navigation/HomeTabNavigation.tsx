/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import FAQ from '../screens/faq/FAQ';
import Blog from '../screens/Blog/Blog';
import Settings from '../screens/settings/Settings';
import HeaderNav from '../screens/home/components/HeaderNav';
import {
  AskIcon,
  BlogIcon,
  FQAIcon,
  HomeIcon,
  ProfileIcon,
} from '../modules/SvgIcons';
import AskQuestsion from '../screens/askQuestsion/AskQuestsion';
import CustomTabBarButton from '../modules/elements/CustomTabBarButton';

const isIos = Platform.OS === 'ios';

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
        tabBarShowLabel: false,
        header() {
          return <HeaderNav />;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <HomeIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <Text
                style={
                  focused ? {color: '#F6E117'} : appTabStyles.noneActiveTab
                }>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <BlogIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <Text
                style={
                  focused ? {color: '#F6E117'} : appTabStyles.noneActiveTab
                }>
                Blog
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ask"
        component={AskQuestsion}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <AskIcon colorStroke={focused ? '#fff' : '#000'} />
            </View>
          ),

          tabBarButton: props => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarLabel: 'FAQ',
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <FQAIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <Text
                style={
                  focused ? {color: '#F6E117'} : appTabStyles.noneActiveTab
                }>
                Q&A
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <ProfileIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <Text
                style={
                  focused ? {color: '#F6E117'} : appTabStyles.noneActiveTab
                }>
                Me
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;

const appTabStyles = StyleSheet.create({
  appTabsContainer: {
    height: isIos ? 80 : 70,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 10,
    gap: 3,
  },
  noneActiveTab: {
    color: '#C9C9C9',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
});
