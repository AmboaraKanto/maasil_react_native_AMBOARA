import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AjoutScreen from '../screens/AjoutScreen';
import PostScreen from '../screens/PostScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list` : 'md-list'
      }
    />
  ),
};

HomeStack.path = '';

const AjoutStack = createStackNavigator(
  {
    Ajout: AjoutScreen,
  },
  config
);

AjoutStack.navigationOptions = {
  tabBarLabel: 'Ajouter un To Do',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} />
  ),
};

AjoutStack.path = '';

const PostStack = createStackNavigator(
  {
    Post: PostScreen,
  },
  config
);

PostStack.navigationOptions = {
  tabBarLabel: 'Posts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} />
  ),
};

PostStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AjoutStack,
  PostStack,
});

tabNavigator.path = '';

export default tabNavigator;
