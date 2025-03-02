import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { PRODUCTS_URL } from "../../service/urls";




const getBestSellerProducts = createAsyncThunk('products/getBestSellerProducts',
    async (params: object) => {
        const response = await getRequest(params, PRODUCTS_URL.BEST_SELLER_PRODUCTS)
        return response.data
    })

const getPopularProducts = createAsyncThunk('products/getPopularProducts',
    async (params: object) => {
        const response = await getRequest(params, PRODUCTS_URL.POPULAR_PRODUCTS)
        return response.data
    })

export { getBestSellerProducts, getPopularProducts }