import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import ProductsListPage from '../pages/ProductsListPage'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage'

const Page = () => {
    return ( 
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductsListPage/>}/>
            <Route path='/product/:id' element={<ProductsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    );
}
 
export default Page;