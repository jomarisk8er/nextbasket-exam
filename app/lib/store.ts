import cartReducer from './cart'
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import wishlistReducer from './wishlist'

const cartPersistConfig = {
    key: 'cart',
    storage,
  };

  const wishlistPersistConfig = {
    key: 'wishlist',
    storage,
  };

const cartPersisReducer = persistReducer(cartPersistConfig, cartReducer);
const wishlistPersisReducer = persistReducer(wishlistPersistConfig, wishlistReducer);

export const store = configureStore({
    reducer: {
        cart:  cartPersisReducer,
        wishlist: wishlistPersisReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      })
})

export const persistor = persistStore(store);

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch