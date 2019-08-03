import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './screens/info/';
import Hello from './screens/hello/';
import Menu from './screens/menu/';
import Scaner from './screens/scaner/';
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
  Home: {
    screen: Hello,
  },
  Info: {
    screen: Info,
  },
  Menu: {
    screen: Menu,
  },
  Scaner: {
    screen: Scaner,
  }
}, {
    initialRouteName: 'Home',
    headerMode:'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
  
}




