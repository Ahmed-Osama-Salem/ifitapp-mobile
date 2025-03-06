/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {I18nManager, Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FAQ from '../screens/faq/FAQ';
import Blog from '../screens/Blog/Blog';
import Settings from '../screens/settings/Settings';
import {
  AskIcon,
  BlogIcon,
  FQAIcon,
  HomeIcon,
  ProfileIcon,
} from '../modules/SvgIcons';
import AskQuestsion from '../screens/askQuestsion/AskQuestsion';
import CustomTabBarButton from '../modules/elements/CustomTabBarButton';
import DrawerNavigator from './DrawerNavigator';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {moderateScale} from 'react-native-size-matters';

const isIos = Platform.OS === 'ios';

const EmptyComponent = () => {
  return <></>;
};

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
        animation: 'shift',
      }}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <HomeIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <TypographyText
                content="Home"
                type={focused ? '12_Medium' : '12_Reguler'}
                color={focused ? 'sunYellow' : 'ifitGrey'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: 'Blog',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <BlogIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <TypographyText
                content="Blog"
                type={focused ? '12_Medium' : '12_Reguler'}
                color={focused ? 'sunYellow' : 'ifitGrey'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ask"
        component={EmptyComponent}
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarLabel: 'FAQ',
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <FQAIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <TypographyText
                content="Q&A"
                type={focused ? '12_Medium' : '12_Reguler'}
                color={focused ? 'sunYellow' : 'ifitGrey'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={appTabStyles.tabItem}>
              <ProfileIcon colorStroke={focused ? '#F6E117' : '#666E80'} />
              <TypographyText
                content="Account"
                type={focused ? '12_Medium' : '12_Reguler'}
                color={focused ? 'sunYellow' : 'ifitGrey'}
              />
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
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
    paddingHorizontal: moderateScale(8),
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 10,
    gap: I18nManager.isRTL ? 0 : 3,
    width: 60,
  },
  noneActiveTab: {
    color: '#C9C9C9',
    // fontSize: 14,
    // fontFamily: 'Nunito-Regular',
  },
});
