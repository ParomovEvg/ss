import { createStore, applyMiddleware } from 'redux';
import rootReducer, {reducerTypes} from './reducer/main';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as SecureStore from 'expo-secure-store';
import fetchApi from './assets/scripts/fetchApi.js';
import {requestTypes} from "./assets/scripts/fetchApi";



export class StoreGetter{

    default_store = {
        isInternet: true,
        loading: false,
        qrNum: 0,
        infoId: 0,
        phone: undefined,
        token: undefined,
        text: undefined,
        addPasswordTimer: 0,
        changingPassword: false,
    };

    async getStore(){
        try{
            let [phone, token, text] = await Promise.all([
                this.getPhone(),
                this.getToken(),
                this.getText()
            ]);

            text = JSON.parse(text)[0].text;
            text = JSON.parse(text);
            const qrNum = phone && token ? await this.getQrNum(token, phone) : 0;
            console.log({
                phone,
                token,
                qrNum,
                text
            });

            const default_store ={
                ...(this.default_store),
                phone,
                token,
                qrNum,
                text
            };

            return createStore(rootReducer, default_store,
                composeWithDevTools(
                    applyMiddleware(thunk)
                )
            );
        } catch (e) {
            const default_store ={
                ...(this.default_store),
                isInternet: false,

            };

            return createStore(rootReducer, default_store,
                composeWithDevTools(
                    applyMiddleware(thunk)
                )
            );
        }
    }

     async getPhone(){
        return SecureStore.getItemAsync(reducerTypes.phone);
    }

    async getToken(){
        return SecureStore.getItemAsync(reducerTypes.token);
    }

    async getQrNum(token, phone){
        return await fetchApi({
            type:requestTypes.QR.NUM_BY_PHONE,
            body:{
                token,
                phone,
            },
        })
    }

    async getText(){
        return await fetchApi({
            type: requestTypes.INIT.LAST_UPDATE
        })
    }
}