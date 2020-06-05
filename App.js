import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Hello from './screens/hello/index.js';
import Menu from './screens/menu/index.js';
import { Provider, useSelector } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { store } from './store/store';
import Scanner from './screens/scaner';
import Thanks from './screens/thanks';
import InfoPage from './screens/info-page';
import Info from './screens/info';
import { useSelectorFactory } from './assets/hooks/useSelectorFactory';
import { selectContentIsLoading } from './store/contentSlice';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Hello,
    },
    // Thanks: {
    //     screen: Thanks,
    // },
    // Info: {
    //     screen: Info,
    // },
    // Menu: {
    //     screen: Menu,
    // },
    // Scanner: {
    //     screen: Scanner,
    // },
    // InfoPage: {
    //     screen: InfoPage,
    // },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App(props) {
  // console.log(store);
  // useEffect(() => {
  //     storeGetter.getStore().then(store => {
  //         setStore(store);
  //
  //         store.subscribe(() => {
  //             const newIsInternet = store.getState().isInternet;
  //             if (newIsInternet !== isInternet) {
  //                 setIsInternet(newIsInternet);
  //             }
  //         });
  //     });
  // }, []);

  // if (!isInternet) {
  //     return (
  //         <Provider store={store}>
  //             <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
  //                 <Text>Нема интернета</Text>
  //             </View>
  //         </Provider>
  //     );
  // }
  return (
    <Provider store={store}>
      {() => {
        const isLoading = useSelector(selectContentIsLoading);
        if (isLoading) {
          return <AppContainer />;
        } else {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <ActivityIndicator size="large" />
            </View>
          );
        }
      }}
    </Provider>
  );
}
