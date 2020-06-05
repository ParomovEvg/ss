import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAction } from './useAction';
import { fetchQrNum, selectQrNum, selectQrNumIsLoading } from '../../store/qrNumSlice';

export const useQrNum = () => {
    const isLoading = useSelector(selectQrNumIsLoading);
    const qrNum = useSelector(selectQrNum);
    const fetchQrNum = useAction(fetchQrNum);
    useEffect(() => {
        fetchQrNum();
    }, []);
    return [isLoading, qrNum];
};
