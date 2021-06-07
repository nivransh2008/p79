import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import BarterScreen from './BarterScreen'
import ExchangeScreen from './exchangeScreen';
import HomeScreen from './homeScreen';
import RecieverDetailsScreen from './components/RecieverDetailsScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import {AppStackNavigator} from './components/AppStackNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
 

export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: BarterScreen},
  BottomTab: {screen:AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);