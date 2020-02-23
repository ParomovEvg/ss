import {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {reducerTypes} from "../../reducer/main";
import {useRequest} from "./useRequest";
import {AUTH} from "../../server_constants";
import * as SecureStore from "expo-secure-store";

export const useSendPassword = ({onError = () => {}, onEnd = () => {}}) => {
    const dispatch = useDispatch();
    const req = useRequest();
    const [isLoading, setIsLoading] = useState(false);
    const sendPassword = (phone, pass) => {
        setIsLoading(true);
        return  req({
            type: AUTH.SEND_PASSWORD,
            body:{
                phone,
                pass,
            }
        }).then( res =>{
            setIsLoading(false);
            if(res.token){
                dispatch({
                    type:reducerTypes.phone,
                    value:res.phone
                });
                SecureStore.setItemAsync(reducerTypes.phone, res.phone);
                dispatch({
                    type:reducerTypes.token,
                    value:res.token,
                });
                SecureStore.setItemAsync(reducerTypes.token, res.token);
                dispatch({
                    type: reducerTypes.changingPassword,
                    value: false,
                });
                onEnd(res);
            } else {
                onError('Неверный пароль')
            }
            return res
        });
    };

    return [isLoading, sendPassword]

};
