'use client'

import 'react-toastify/dist/ReactToastify.css';

import { persistor, store } from "../lib/store"

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify';

export default function StoreProvider({children}: {children: React.ReactNode}) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
        <ToastContainer position='bottom-right'/>
    </Provider>
}