import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoBlock from './screens/info/';
import HelloBlock from './screens/hello/';
import { createStackNavigator, createAppContainer } from "react-navigation";

// let Info = InfoBlock()
// let Hello = HelloBlock()

const AppNavigator = createStackNavigator({
  Home: {
    screen: HelloBlock,
  },
  Info: {
    screen: InfoBlock,
  },
}, {
    initialRouteName: 'Home',
    headerMode:'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
  
}




