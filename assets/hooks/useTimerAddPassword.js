import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addPasswordTimerSlice, selectAddPasswordTimer } from '../../store/addPasswordTimerSlice';
import { useAction } from './useAction';

export const useTimerAddPassword = () => {
    const timer = useSelector(selectAddPasswordTimer);
    const tick = useAction(addPasswordTimerSlice.actions.tick);
    const setTimer = useAction(addPasswordTimerSlice.actions.setTimer);
    useEffect(() => {
        const id = setInterval(() => {
            if (timer <= 0) {
                clearInterval(id);
            } else {
                tick();
            }
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);
    return [timer, setTimer];
};
