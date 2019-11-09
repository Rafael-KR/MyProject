import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';
import Profile from './Profile';

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NavStack = createStackNavigator(
  {
    Blogs: {
      screen: Blogs,
      navigationOptions: () => ({
        headerTitle: 'Events',
        headerStyle: {
          backgroundColor: '#00A9F4',
        },
        headerTitleStyle: {
          color: '#FFF',
        },
      }),
    },
    Edit: {
      screen: Edit,
      navigationOptions: () => ({
        headerTitle: 'Edit',
        headerStyle: {
          backgroundColor: '#00A9F4',
        },
        headerTitleStyle: {
          color: '#FFF',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const tabBarIcon = name => ({tintColor}) => (
  <MaterialIcons
    style={{backgroundColor: 'transparent'}}
    name={name}
    color={tintColor}
    size={24}
  />
);

const BottomTab = createBottomTabNavigator({
  Events: {
    screen: NavStack,
    navigationOptions: {
      tabBarIcon: tabBarIcon('home'),
    },
  },
  'Create event': {
    screen: Post,
    navigationOptions: {
      tabBarIcon: tabBarIcon('add'),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: tabBarIcon('account-circle'),
    },
  },
});

export default Routes = createAppContainer(BottomTab);
