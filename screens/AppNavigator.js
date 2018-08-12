import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DetailScreenComponent from './DetailScreen'
import HomeScreenComponent from './HomeScreen'

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreenComponent,
  DetailScreen: DetailScreenComponent,
  initialRouteName: 'HomeScreen',
});

export default AppNavigator;
