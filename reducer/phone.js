import * as types from '../actions/types.js';
import { PHONE_STATE } from './typeOfState.js';
import * as SecureStore from 'expo-secure-store';


export default function (state = {}, action) {
    switch (action.type) {
        case types.SET_PHONE_START:
            return {
                ...state,
                state: PHONE_STATE.CHANGING,
            };
        case types.SET_PHONE_RESOLVED:
            SecureStore.setItemAsync('phone', action.phone)
            return {
                ...state,
                value: action.phone,
                state: PHONE_STATE.IS,
                qrNum: action.qrNum
            };
        case types.SET_PHONE_REJECTED:
            return {
                ...state,
                state: state.value ? PHONE_STATE.IS : PHONE_STATE.IS_NOT,
            };

        case types.SET_QR_RESOLVED:
            return {
                ...state,
                qrNum: action.num,
            }

        default:
            return state;
    }

};

