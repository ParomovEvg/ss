import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

const fetchContent = createAsyncThunk('content/get', () => api.get('content'));

export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        isLoading: false,
        screens: [],
    },
    reducers: {},
    extraReducers: {
        [fetchContent.pending]: state => {
            state.isLoading = true;
        },
        [fetchContent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.screens = action.payload;
        },
        [fetchContent.rejected]: state => {
            state.isLoading = false;
        },
    },
});

export const contentSelector = state => state.content.screens;
export const selectContentIsLoading = start => start.content.isLoading;

export const screenSelectorFactory = screenName =>
    createSelector(contentSelector, screens => screens.find(screen => screen.name === screenName));

export const selectTextFieldFactory = (screenName, fieldName) =>
    createSelector(
        screenSelectorFactory(screenName),
        screen => screen?.textFields.find(field => field.name === fieldName)?.value?.value ?? ''
    );

export const selectImgFieldFactory = (screenName, fieldName) =>
    createSelector(
        screenSelectorFactory(screenName),
        screen => screen?.imgFields.find(field => field.name === fieldName)?.img?.url ?? ''
    );
