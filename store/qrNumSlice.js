import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'ky';

export const fetchQrNum = createAsyncThunk('qrNum/fetch', () => {
    return api.get('qr/count');
});

export const qrNumSlice = createSlice({
    name: 'qrNum',
    initialState: {
        isLoading: false,
        value: 0,
    },
    reducers: {},
    extraReducers: {
        [fetchQrNum.pending]: state => {
            state.isLoading = true;
        },
        [fetchQrNum.fulfilled]: state => {
            state.isLoading = false;
            state.value = false;
        },
        [fetchQrNum.rejected]: state => {
            state.isLoading = false;
        },
    },
});

export const selectQrNum = state => state.qrNum.value;
export const selectQrNumIsLoading = state => state.qrNum.isLoading;
