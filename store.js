import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/main.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as SecureStore from 'expo-secure-store';
import { PHONE_STATE, QR_STATE } from './reducer/typeOfState.js';
import fetchApi from './assets/scripts/fetchApi.js';
import { ADD_PHONE } from './assets/scripts/fetchTypes.js';


async function store() {
    const phone = await SecureStore.getItemAsync("Error");
    let qrNum
    if (phone) {
        qrNum = await fetchApi({
            type: ADD_PHONE,
            phone
        })
    } else {
        qrNum = "0"
    }

    let default_store = {
        phone: {
            TOS: PHONE_STATE,
            value: phone ? phone : "",
            state: phone ? PHONE_STATE.IS : PHONE_STATE.IS_NOT,
            qrNum: qrNum.qrNum,
        },
        qr: {
            TOS: QR_STATE,
            state: QR_STATE.READY,
        },
    }

    return createStore(rootReducer, default_store,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
}

export default store;