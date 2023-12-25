import React from 'react';
import {Routes, Route} from 'react-router-dom'
import '../styles/Header.css'

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const firstImage = <img src={img1} alt='góry'/>
const secondImage = <img src={img2} alt='góry'/>
const thirdImage = <img src={img3} alt='góry'/>

const Header = () => {
    return (
        <div className='header'>
            <Routes>
                <Route path='/' element={firstImage}/>
                <Route path='/products' element={secondImage}/>
                <Route path='/contact' element={thirdImage}/>
                <Route path='/admin' element={firstImage}/>
                <Route path='*' element={secondImage}/>
            </Routes>
        </div> 

    );
}
 
export default Header;