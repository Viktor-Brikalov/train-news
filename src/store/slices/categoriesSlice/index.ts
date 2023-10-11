import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { categoriesApi } from '@/api/Categories/Categories';
import { GetNewsListRequestTypes } from '@/api/News/News.types';
import { GetCategoryRequestTypes } from '@/api/Categories/Categories.types';

import { ICategory } from '@/utils/types/categories';
import { getError } from '@/utils/functions';

import { InitialStateType } from './types';
import { RootState } from '../..';

export const getCategories = createAsyncThunk<
    ICategory[],
    GetNewsListRequestTypes,
    {
        rejectValue: string;
    }
>('categories/get-categories-list', async ({ ...props }, { rejectWithValue }) => {
    try {
        const res = await categoriesApi.getCategoriesList({ ...props });
        return res?.data.data;
    } catch (e) {
        let error: AxiosError = e as AxiosError;
        let message = error.message;
        localStorage.clear();
        return rejectWithValue(getError(message));
    }
});

export const getOneCategory = createAsyncThunk<
    ICategory,
    GetCategoryRequestTypes,
    {
        rejectValue: string;
    }
>('categories/get-category', async ({ ...props }, { rejectWithValue }) => {
    try {
        const res = await categoriesApi.getCategory({ ...props });
        return res?.data.data;
    } catch (e) {
        let error: AxiosError = e as AxiosError;
        let message = error.message;
        localStorage.clear();
        return rejectWithValue(getError(message));
    }
});

const initialState: InitialStateType = {
    categoriesList: [],
    currentCategory: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        clearCategoriesState: () => {
            return initialState;
        },
        initCategorySlice: (state, { payload }: PayloadAction<InitialStateType>) => {
            state = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.categoriesList = payload;
            return state;
        });
        builder.addCase(getOneCategory.fulfilled, (state, { payload }) => {
            state.currentCategory = payload;
            return state;
        });
    },
});

export const categoriesSelector = (state: RootState) => state.categories;

export const { clearCategoriesState, initCategorySlice } = categoriesSlice.actions;
