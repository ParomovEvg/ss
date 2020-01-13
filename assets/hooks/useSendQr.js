import {useState, useEffect, useCallback} from 'react'
import {useRequest} from "./useRequest";
import {QR} from "../../server_constants";
import {useSelector} from "react-redux";

export const useSendQr = ({onEnd = () => {}, onError = () => {}})=>{
    const req = useRequest();
    const { phone, token } = useSelector(state => state);
    const [isLoading, setIsLoading] = useState(false);

    const sendQr = useCallback ((qrString) => {

        setIsLoading(true);
        req({
            type:QR.ADD_QR,
            xml:qrString,
            body:{
                phone,
                token,
            }
        }).then((res)=>{
            console.log({res});
            onEnd(res);
        }).catch(e =>{
            console.error({e});
            onError(e)
        }).finally(()=>{
            setIsLoading(false);
        })
    }, [phone, token]);

    return [isLoading, sendQr];

};