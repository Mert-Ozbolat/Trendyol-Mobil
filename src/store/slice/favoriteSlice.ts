import { createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from '../../models/data/favoriteState';

const initialState: FavoriteState = {
    favorites: [],
    pending: false,
    error: null,
};
export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const product = action.payload;
            const exitingProduct = state.cart.find(item => item.id === product.id);
            if (exitingProduct) exitingProduct.quantity += 1;
            else state.cart.push({ ...product, quantity: 1 });

            state.totalPrice = state.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0,
            );
        },

        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(item => item.id !== productId);
            state.totalPrice = state.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0,
            );
        },
    },
});

export const { addCart, removeFromCart } = favoriteSlice.actions;
export default favoriteSlice.reducer;