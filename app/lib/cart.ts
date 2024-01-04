import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

export type CartProductType = {
    id: number;
    name: string;
    quantity: number;
    thumbnail: string
    price: number
    color?: string
}

export type CartState = {
    products: CartProductType[]
}

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProductType>) => {
            if(state.products.find(product => product.id === action.payload.id)) {
                state.products = state.products.map(product => {
                    if(product.id === action.payload.id) {
                        return {...product, quantity: product.quantity + action.payload.quantity}
                    } else {
                        return product
                    }
                })
            } else {
                state.products = [...state.products, action.payload]
            }

            
            toast('Product has been added to cart')
        },
        removeToCart: (state, action: PayloadAction<{id: number}>) => {
            if(confirm("Remove this product?")) {
                state.products = state.products.filter(product => product.id !== action.payload.id)
                toast('Product has been removed to cart')
            }
        },
        updateCart: (state, action: PayloadAction<{id: number; quantity: number}>) => {
            state.products = state.products.map(product => {
                if(product.id === action.payload.id) {
                    return {...product, quantity: action.payload.quantity}
                } else {
                    return product
                }
            })

            toast('Product in the cart has been updated')
        }
    }
})

export const { addToCart, removeToCart, updateCart } = cartSlice.actions

export default cartSlice.reducer