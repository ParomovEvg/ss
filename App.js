import React, {useEffect, useState} from 'react';
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
import {StoreGetter} from "./store";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Hello,
  },
  // Thanks: {
  //   screen: Thanks,
  // },
  // Info: {
  //   screen: Info,
  // },
  Menu: {
    screen: Menu,
  },
  // Scaner: {
  //   screen: Scaner,
  // },
  // IP: {
  //   screen: IP,
  // }
}, {
    initialRouteName: 'Menu',
    headerMode:'none'
});

const AppContainer = createAppContainer(AppNavigator);
const storeGetter = new StoreGetter();

export default function App (props){

    const [store, setStore] = useState(undefined);
    const [isInternet, setIsInternet] = useState(true);

    useEffect(()=>{
        storeGetter.getStore().then((store)=>{
            setStore(store);

            store.subscribe(()=>{
                const newIsInternet = store.getState().isInternet;
                if(newIsInternet !== isInternet){
                    setIsInternet(newIsInternet);
                }
            })
        });
    },[]);

    if(!isInternet){
        return(<View style={{justifyContent:'center', alignItems:'center', flex:1}}><Text>
            Нема интернета
        </Text></View>)
    }

    if(store){
       return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
        );
    } else {
      return(<View style={{justifyContent:'center', alignItems:'center', flex:1}}><ActivityIndicator size="large" /></View>)
    }

}




