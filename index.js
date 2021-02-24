import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



import React from 'react';
import dashboard from './dashboard';
/*
export const ProfileScreen = ({navigation}) => <dashboard navigation={navigation} name="Profile" />
export const NotificationScreen = ({navigation}) => <dashboard navigation={navigation} name="Notification" />
export const FeedbackScreen = ({navigation}) => <dashboard navigation={navigation} name="Feedback" />
export const MapScreen = ({navigation}) => <dashboard navigation={navigation} name="Map" />
export const HelpScreen = ({navigation}) => <dashboard navigation={navigation} name="Help" />
*/
AppRegistry.registerComponent(appName, () => App);