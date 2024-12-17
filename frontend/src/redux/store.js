// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cveReducer from './cveSlice';

export const store = configureStore({
    reducer: {
        cve: cveReducer,
    },
});
