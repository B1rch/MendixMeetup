import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Basics from '../screens/Basics';
import StateExample from '../screens/StateExample';
import LinksScreen from '../screens/LinksScreen';
import PropsExample from '../screens/PropsExample';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#FE7333'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Futura',
    letterSpacing: 5
  }
};

const BasicsStack = createStackNavigator(
  {
    Basics: Basics
  },
  {
    defaultNavigationOptions,
    config
  }
);

BasicsStack.navigationOptions = {
  tabBarLabel: 'Basics',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-code' : 'md-code'}
    />
  )
};

BasicsStack.path = '';

const HomeStack = createStackNavigator(
  {
    State: StateExample
  },
  {
    defaultNavigationOptions,
    config
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'State',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

HomeStack.path = '';

const PropsStack = createStackNavigator(
  {
    Props: PropsExample
  },
  {
    defaultNavigationOptions,
    config
  }
);

PropsStack.navigationOptions = {
  tabBarLabel: 'Props',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-image' : 'md-image'}
    />
  )
};

PropsStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    defaultNavigationOptions,
    config
  }
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

LinksStack.path = '';

const tabNavigator = createBottomTabNavigator({
  BasicsStack,
  PropsStack,
  HomeStack,
  LinksStack
});

tabNavigator.path = '';

export default tabNavigator;
