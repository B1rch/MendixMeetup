import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StateExample from '../screens/StateExample';
import LinksScreen from '../screens/LinksScreen';
import PropsExample from '../screens/PropsExample';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    State: StateExample
  },
  config
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
  config
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
  config
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
  PropsStack,
  HomeStack,
  LinksStack
});

tabNavigator.path = '';

export default tabNavigator;
