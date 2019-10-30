import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import Info from './screens/info/index.js';
import Hello from './screens/hello/index.js';
import Menu from './screens/menu/index.js';
import Scaner from './screens/scaner/index.js';
import Thanks from './screens/thanks/index.js';
import { Provider } from 'react-redux';
import getStore from './store.js';
import { createStackNavigator, createAppContainer } from "react-navigation";
import IP from "./screens/information_page.js";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Hello,
  },
  Thanks: {
    screen: Thanks,
  },
  Info: {
    screen: Info,
  },
  Menu: {
    screen: Menu,
  },
  Scaner: {
    screen: Scaner,
  },
  IP: {
    screen: IP,
  }
}, {
    initialRouteName: 'Menu',
    headerMode:'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  state={isLoaded:false};
  componentDidMount(){
    getStore().then((store)=>{
      
      this.setState({
        store,
        isLoaded:true,
      })

      store.subscribe(function () {
        const globalState = store.getState()
      
        if(globalState.qr.iError){
          this.setState({
            iError: globalState.qr.iError
          })
        }
      
      })
    })
  }



  render(){
    const store = this.state.store
    if(this.state.isLoaded){
      if(this.state.iError){
        return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <Text>{this.state.iError}</Text>
        </View>)
      } else return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
        );
      
    } else {
      return(<View style={{justifyContent:'center', alignItems:'center', flex:1}}><ActivityIndicator size="large" /></View>)
    }
    
  }
}




