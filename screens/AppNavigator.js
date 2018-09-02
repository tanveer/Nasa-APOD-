import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import DetailScreenComponent from './DetailScreen'
import HomeScreenComponent from './HomeScreen'
import DailyScreenComponent from './DailyScreen'

const Main = createStackNavigator({
  HomeScreen: HomeScreenComponent,
  DetailScreen: DetailScreenComponent,
  initialRouteName: 'HomeScreen',
});

const DailyScreen = createStackNavigator({
  Daily: DailyScreenComponent,
})

const TabBar = createBottomTabNavigator({
  Daily: DailyScreen,
  Monthly: Main,
})

const AppNavigator = createSwitchNavigator({
  TabBar,

})

export default AppNavigator;
