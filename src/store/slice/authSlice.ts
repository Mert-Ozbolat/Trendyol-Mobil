import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../models/data/authState";
import { userLogin } from "../actions/authAction";


const initialState: AuthState = {
    isLogin: false,
    user: null,
    pending: false,
    error: null,
    token: null
}

export const authSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(userLogin.pending, state => {
                state.pending = true
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.pending = false;
                state.isLogin = true
                state.token = action.payload.token
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.pending = false
                state.error = action.error
                state.isLogin = false
            })
    }
})

export default authSlice.reducer