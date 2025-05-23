import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from '../mshop/layout/Layout'
import Home from '../mshop/home/Home'
import Dashboard from '../mshop/dashboard/Dashboard'
import Basket from '../mshop/basket/Basket'
import Wishlist from '../mshop/wishlist/Wishlist'
import NotFound from '../mshop/home/notFound/NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='wishlist' element={<Wishlist/>}/>
                     <Route path='*' element={<NotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
