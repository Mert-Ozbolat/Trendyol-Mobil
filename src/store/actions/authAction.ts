import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest } from "../../service/verbs";
import { AUTH_URLS } from "../../service/urls";


const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
    const response = await postRequest(params, AUTH_URLS.LOGIN)
    return response.data
})


export { userLogin }