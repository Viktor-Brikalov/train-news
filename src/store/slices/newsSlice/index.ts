import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { newsApi } from '@/api/News/News';
import { GetNewsListRequestTypes, GetNewsRequestTypes } from '@/api/News/News.types';

import { INews } from '@/utils/types/news';
import { getError } from '@/utils/functions';

import { InitialStateType } from './types';
import { RootState } from '../..';

export const getNews = createAsyncThunk<
    INews[],
    GetNewsListRequestTypes,
    {
        rejectValue: string;
    }
>('news/get-news-list', async ({ ...props }, { rejectWithValue }) => {
    try {
        const res = await newsApi.getNewsList({ ...props });
        return res?.data.data;
    } catch (e) {
        let error: AxiosError = e as AxiosError;
        let message = error.message;
        localStorage.clear();
        return rejectWithValue(getError(message));
    }
});

export const getOneNews = createAsyncThunk<
    INews,
    GetNewsRequestTypes,
    {
        rejectValue: string;
    }
>('news/get-one-news', async ({ ...props }, { rejectWithValue }) => {
    try {
        const res = await newsApi.getOneNews({ ...props });
        return res?.data.data;
    } catch (e) {
        let error: AxiosError = e as AxiosError;
        let message = error.message;
        localStorage.clear();
        return rejectWithValue(getError(message));
    }
});

const initialState: InitialStateType = {
    newsList: [],
    currentNews: null,
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        initNewsSlice: (state, { payload }: PayloadAction<INews | null>) => {
            state.currentNews = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, { payload }) => {
            state.newsList = payload;
            return state;
        });
        builder.addCase(getOneNews.fulfilled, (state, { payload }) => {
            state.currentNews = payload;
            return state;
        });
    },
});

export const newsSelector = (state: RootState) => state.news;

export const { clearState, initNewsSlice } = newsSlice.actions;
