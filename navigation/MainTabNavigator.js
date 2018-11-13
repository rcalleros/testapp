import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MerchantProfile from '../components/MerchantProfile/MerchantProfile';
import FollowersList from '../components/FollowersList/FollowersList';
import SyncMerchantsScreen from '../screens/SyncMerchantsScreen';
import NewTradeScreen from '../screens/NewTradeScreen';
import HomeIcon from '../components/Icons/HomeIcon';
import SearchIcon from '../components/Icons/SearchIcon';
import AppIcon from '../components/Icons/AppIcon';
import Colors from '../constants/Colors';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  MerchantProfile: MerchantProfile,
  FollowersList: FollowersList
});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <HomeIcon isActive={focused} />
  ),
};
// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
const SyncMerchantsStack = createStackNavigator({
  SyncMerchants: SyncMerchantsScreen,
});
SyncMerchantsStack.navigationOptions = {
  tabBarLabel: 'search',
  tabBarIcon: ({ focused }) => (
    <SearchIcon isActive={focused} />
  ),
};

const NewTradeStack = createStackNavigator({
  NewTrade: NewTradeScreen,
});
NewTradeStack.navigationOptions = {
  tabBarLabel: 'search',
  tabBarIcon: ({ focused }) => (
    <AppIcon isActive={focused} />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SyncMerchantsStack,
  NewTradeStack,
  LinksStack,
  SettingsStack,
},{
  tabBarOptions:{
    showLabel:false,
    style:{
      backgroundColor:Colors.primaryColor
    }
  }
});
