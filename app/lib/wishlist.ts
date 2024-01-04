import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

export type WishlistProductType = {
    id: number;
    name: string;
    thumbnail: string
}

export type WishlistState = {
    products: WishlistProductType[]
}

const initialState: WishlistState = {
    products: []
}

export const wishlistSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishlistProductType>) => {
            if(state.products.find(product => product.id === action.payload.id)) {
                toast('Product already on your wishlist')
            } else {
                state.products = [...state.products, action.payload]
                toast('Product has been added to wishlist')
            }
        },
        removeToWishlist: (state, action: PayloadAction<{id: number}>) => {
            if(confirm("Remove this product?")) {
                state.products = state.products.filter(product => product.id !== action.payload.id)
                toast('Product has been removed to wishlist')
            }
        },
    }
})

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer