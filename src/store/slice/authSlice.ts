import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../models/data/authState";


const initialState: AuthState = {
    isLogin: false,
    user: null,
    pending: false,
    error: null
}

export const authSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => { }
})

export const { } = authSlice.actions
export default authSlice.reducer