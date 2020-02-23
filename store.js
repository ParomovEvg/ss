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

            const qrNum = (phone && token) ? await this.getQrNum(token, phone) : 0;


            const default_store ={
                ...(this.default_store),
                phone: 0,
                token: 0,
                qrNum,
                text
            };

            return createStore(rootReducer, default_store,
                composeWithDevTools(
                    applyMiddleware(thunk)
                )
            );
        } catch (e) {
            console.error(e);
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
        }).then(res => res.data)
    }

    async getText(){
        return await fetchApi({
            type: requestTypes.INIT.LAST_UPDATE
        }).then(res => res.data)
    }
}
