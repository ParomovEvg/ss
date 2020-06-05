import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phone: '',
    password: '',
    token: '',
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isTokenValid = true;
            state.token = action.payload.token;
        },
        logout: (state, action) => {
            state.token = '';
            state.isLoading = false;
            state.isTokenValid = false;
        },
        onChangePhone: (state, action) => {
            state.phone = action.payload;
        },
        onChangePassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const selectIsLogin = state => state.auth.token;
