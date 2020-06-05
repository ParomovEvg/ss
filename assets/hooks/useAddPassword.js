import { useState } from 'react';
import { useTimerAddPassword } from './useTimerAddPassword';
import { api } from '../../api/api';
import { useContentTextField } from './useContentTextField';
import { menuLoginTextFields, screensList } from '../constants';

export const useAddPassword = (onEnd = () => {}) => {
    const [timer, setTimer] = useTimerAddPassword();
    const [isLoading, setIsLoading] = useState(false);
    const timerLength = useContentTextField(screensList.menuLogin, menuLoginTextFields.timerLength);
    const addPassword = phone => {
        if (timer > 0) {
            return false;
        }
        api.post('auth/generatePassword', {
            body: {
                phone,
            },
        })
            .json()
            .then(res => {
                onEnd(res);
                setTimer(timerLength);
            })
            .finally(() => setIsLoading(false));
    };

    return [isLoading, addPassword];
};
