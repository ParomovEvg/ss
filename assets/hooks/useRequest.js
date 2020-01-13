import req from "../scripts/fetchApi";
import {useDispatch} from "react-redux";
import {reducerTypes} from "../../reducer/main";

export const useRequest = () => {
    const dispatch = useDispatch();

    return (data) =>{
        return  req(data).then((res)=>{
            if(res._status !== 200) throw  res;
            return res
        }).catch((e)=>{
            console.error(e);
            dispatch({
                type: reducerTypes.isInternet,
                value: false,
            });
            return []
        })
    }
};