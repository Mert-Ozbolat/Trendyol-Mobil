import { createSlice } from "@reduxjs/toolkit"
import { CartState } from "../../models/data/cartState"

const initialState: CartState = {
    cart: [],
    totalPrice: 0
}
export const cartSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const product = action.payload;
            const exitingProduct = state.cart.find(item => item.id === product.id);
            if (exitingProduct) exitingProduct.quantity += 1;
            else state.cart.push({ ...product, quantity: 1 });

            state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        },
    },

})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer