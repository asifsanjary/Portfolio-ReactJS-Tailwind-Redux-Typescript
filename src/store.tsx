import { configureStore } from '@reduxjs/toolkit'
import NavBarReducer from './components/Header/NavBarSlice'

export const store = configureStore({
    reducer: {
        navbar: NavBarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>