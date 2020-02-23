import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Hello from './screens/hello/index.js';
import Menu from './screens/menu/index.js';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StoreGetter } from './store';
import Scanner from './screens/scaner';
import Thanks from './screens/thanks';
import InfoPage from './screens/info-page';
import Info from './screens/info';

const AppNavigator = createStackNavigator(
    {
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
        Scanner: {
            screen: Scanner,
        },
        InfoPage: {
            screen: InfoPage,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(AppNavigator);
const storeGetter = new StoreGetter();

export default function App(props) {
    const [store, setStore] = useState(undefined);
    const [isInternet, setIsInternet] = useState(true);
    console.log(store);
    useEffect(() => {
        storeGetter.getStore().then(store => {
            setStore(store);

            store.subscribe(() => {
                const newIsInternet = store.getState().isInternet;
                if (newIsInternet !== isInternet) {
                    setIsInternet(newIsInternet);
                }
            });
        });
    }, []);

    if (!isInternet) {
        return (
            <Provider store={store}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text>Нема интернета</Text>
                </View>
            </Provider>
        );
    }

    if (store) {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    } else {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}
