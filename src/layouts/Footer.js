import React from 'react';
import {Routes, Route, useParams} from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
    return ( 
        <div className='footer'>
            <p>Stopka</p>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:page' element={<Pages/>}/>
                <Route path='/:page/:idProduct' element={<ProductPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

const Home = () => {
    return (
        <div>Jesteś na <span>stronie głównej</span></div>
    )
}

const Pages = () => {

    const {page} = useParams()

    return (
        <div>Jesteś na <span>{page}</span></div>
    )
}

const ProductPage = () => {

    const {idProduct} = useParams()

    return (
        <div>Jesteś na <span>{idProduct}</span></div>
    )
}

const ErrorPage = () => {
    return (
        <div>Taka strona nie istnieje</div>
    )
}
 
export default Footer;