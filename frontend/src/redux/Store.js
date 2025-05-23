import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/ProductSlice.js'
import dashboardSlice from './reducers/DashboardSlice.js'

export const store = configureStore({
    reducer: {
       products: productReducer,
        categories: dashboardSlice
    }
})