import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { newsSlice } from './slices/newsSlice';
import { categoriesSlice } from './slices/categoriesSlice';

const rootReducer = combineReducers({
    news: newsSlice.reducer,
    categories: categoriesSlice.reducer,
});

export const setupStore = (initialState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;

export default store;
