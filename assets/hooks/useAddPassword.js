import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {reducerTypes} from "../../reducer/main";
import {useRequest} from "./useRequest";
import {AUTH} from "../../server_constants";
import {useTimerAddPassword} from "./useTimerAddPassword";

export const useAddPassword = (onEnd = () => {}) => {

    const [timer, setTimer] = useTimerAddPassword();

    const req = useRequest();
    const [isLoading, setIsLoading] = useState(false);
    const addPassword = (phone) => {
        if(timer > 0){
            return false;
        }

        setIsLoading(true);
        req({
            type: AUTH.ADD_PASS,
            body:{
                phone,
            }
        }).then( res =>{
            setIsLoading(false);
            onEnd(res);
            setTimer(120)
        });
    };

    return [isLoading, addPassword];

};