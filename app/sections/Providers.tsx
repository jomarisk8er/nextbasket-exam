'use client'

import 'react-toastify/dist/ReactToastify.css';

import { persistor, store } from "../lib/store"

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import useTheme from '../lib/materialui';

export default function Providers({children}: {children: React.ReactNode}) {
    const theme = useTheme()

    return <ThemeProvider theme={theme}>
                <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
                <ToastContainer position='bottom-right'/>
            </Provider>
        </ThemeProvider>
}