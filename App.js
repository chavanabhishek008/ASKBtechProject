import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//import { NavigationContainer } from "@react-navigation/native";
import {Feather} from '@expo/vector-icons';
//import {Dimensions} from 'react-native';
import React from 'react';

import splash from './screens/splash';
import Loginpage from './screens/Loginpage';
import ForgotPassword from './screens/ForgotPassword';
import signup from './screens/signup';
import SideBar from './components/SideBar';
import dashboard from './screens/dashboard';
import Bills from './screens/Bills';
import coupon from './screens/coupon';
import PaymentHistory from './screens/PaymentHistory';
import meal from './screens/meal';
import lunch from './screens/lunch';
import dinner from './screens/dinner';
import snacks from './screens/snacks';
import breakfast from './screens/breakfast';
import ordersummary from './screens/ordersummary';
import order from './screens/order';

//import {drawer} from './drawer';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import MapScreen from './screens/MapScreen';
import HelpScreen from './screens/HelpScreen';

const stack=createStackNavigator({
  
  splash:{screen:splash,navigationOptions:{headerShown:false}},
  Loginpage:{screen:Loginpage,navigationOptions:{headerShown:false}},
  ForgotPassword:{screen:ForgotPassword,navigationOptions:{headerShown:false}},
  signup:{screen:signup,navigatonOptions:{headerShown:false}},
  //dashboard:{screen:dashboard,navigatonOptions:{header:null}},
},{
  initialRouteName: 'splash',
});
const DashboardStack = createStackNavigator({ // For header options
  dashboard: {screen:dashboard,navigationOptions:{headerShown:false}},
  Bills: {screen:Bills,navigationOptions:{headerShown:false}},
  coupon: {screen:coupon,navigationOptions:{headerShown:false}},
  PaymentHistory: {screen:PaymentHistory,navigationOptions:{headerShown:false}},
  meal: {screen:meal,navigationOptions:{headerShown:false}},
  lunch: {screen:lunch,navigationOptions:{headerShown:false}},
  dinner: {screen:dinner,navigationOptions:{headerShown:false}},
  snacks: {screen:snacks,navigationOptions:{headerShown:false}},
  breakfast: {screen:breakfast,navigationOptions:{headerShown:false}},
  ordersummary: {screen:ordersummary,navigationOptions:{headerShown:false}},
  order: {screen:order,navigationOptions:{headerShown:false}},
});



const drawerNav = createDrawerNavigator({
  dashboard: {screen:DashboardStack,navigationOptions:{title: "Dashboard", drawerIcon: ({ tintColor}) => <Feather name="home" size ={16} color={tintColor} />}},
  ProfileScreen:{screen:ProfileScreen,navigationOptions:{title: "Profile", drawerIcon: ({ tintColor}) => <Feather name="user" size ={16} color={tintColor} />}},
  NotificationScreen: {screen:NotificationScreen,navigationOptions:{title: "Notification", drawerIcon: ({ tintColor}) => <Feather name="bell" size ={16} color={tintColor} />}},
  FeedbackScreen: {screen:FeedbackScreen,navigationOptions:{title: "Feedback", drawerIcon: ({ tintColor}) => <Feather name="clipboard" size ={16} color={tintColor} />}},
  MapScreen: {screen:MapScreen,navigationOptions:{title: "Map", drawerIcon: ({ tintColor}) => <Feather name="map" size ={16} color={tintColor} />}},
  HelpScreen: {screen:HelpScreen,navigationOptions:{title: "Help",drawerIcon: ({ tintColor}) => <Feather name="help-circle" size ={16} color={tintColor} />}},
},{
  drawerPosition: 'right'
},{
  initialRouteName: 'dashboard',
},{
  contentComponent: props => <SideBar {...props} />,
  
 // drawerWidth: Dimensions.get("window").width * 0.85,
  //hideStatusBar: true,

  contentOptions: {
    activeBackgroundColor: "gray",
    activeTintColor: "#2c4e54",
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8,
    }
  }

  
})

const App = createSwitchNavigator({
  
  Authstack: stack,
  HomeDrawer: drawerNav,
  AuthStack2: DashboardStack,
 
})
export default createAppContainer(App);

