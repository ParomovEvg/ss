import {useDispatch, useSelector} from "react-redux";
import {useRequest} from "./useRequest";
import {useState, useEffect} from 'react';
import {AUTH, QR} from "../../server_constants";
import {reducerTypes} from "../../reducer/main";

export const useQrNum = ({
    onError = () =>{},
    onEnd = () =>{}
}) => {
    const dispatch = useDispatch();
    const req = useRequest();
    const {phone, token, qrNum} = useSelector(state => state);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=>{
        setIsLoading(true);
        if(!phone && !token) {
            setIsLoading(false);
            onError('Не определён телефон');
            return;
        }

        req({
            type:QR.NUM_BY_PHONE,
            body:{
                token,phone
            }
        }).then((res)=>{
            dispatch({
                type: reducerTypes.qrNum,
                value: res,
            });
            onEnd(res);
        }).catch(error => onError(error))
            .finally(()=>{
                setIsLoading(false);
            })
    }, [phone, token]);

    return [isLoading,qrNum];

};