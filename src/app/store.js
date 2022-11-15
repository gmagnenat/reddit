import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import feedReducer from '../features/feed/feedSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        feed: feedReducer,
    },
});
