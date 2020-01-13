
import {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {reducerTypes} from "../../reducer/main";


let isTimer = false;

export const useTimerAddPassword = () => {
    const timer = useSelector(state => state[reducerTypes.addPasswordTimer]);
    const dispatch = useDispatch();
    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("1234", timer);
            if(timer > 0){
                dispatch({
                    type:reducerTypes.addPasswordTimer,
                    value: timer - 1
                })
            }
        }, 1000);

        return ()=>{
            clearInterval(id)
        }
    }, [timer]);

    const setTimer = useCallback(
        (sec) => {
            dispatch({
                type:reducerTypes.addPasswordTimer,
                value: sec
            })
        }, []
    );

    return [timer, setTimer]
};