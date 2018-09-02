import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import DetailScreenComponent from './DetailScreen'
import HomeScreenComponent from './HomeScreen'

const Main = createStackNavigator({
  HomeScreen: HomeScreenComponent,
  DetailScreen: DetailScreenComponent,
  initialRouteName: 'HomeScreen',
});

const TabBar = createBottomTabNavigator ({
  Monthly: Main,
})
const AppNavigator = createSwitchNavigator ({
  TabBar,

})

export default AppNavigator;
