import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('category/get', async () => {
    const res = await axios.get('http://localhost:5000/product')
    return res.data
})

export const postProductsThunk = createAsyncThunk('category/post', async (newCategory) => {
    const res = await axios.post('http://localhost:5000/product', newCategory)
    return res.data
})

export const deleteProductsThunk = createAsyncThunk('category/delete', async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`)
    return id
})

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(postProductsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.categories.push(action.payload)
            })
            .addCase(deleteProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = state.categories.filter(item => item._id !== action.payload);
            })
            
    }
})

export default dashboardSlice.reducer