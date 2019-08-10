import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './screens/info/index.js';
import Hello from './screens/hello/index.js';
import Menu from './screens/menu/index.js';
import Scaner from './screens/scaner/index.js';
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
    initialRouteName: 'Menu',
    headerMode:'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
  
}




