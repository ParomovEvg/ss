import { createSlice } from '@reduxjs/toolkit';

export const addPasswordTimerSlice = createSlice({
    name: 'addPasswordTimer',
    initialState: 0,
    reducers: {
        tick: state => Math.max(state - 1, 0),
        reset: () => 0,
        setTimer: (state, action) => action.payload,
    },
});
export const selectAddPasswordTimer = state => state.addPasswordTimer;
