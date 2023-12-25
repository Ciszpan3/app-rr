import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Products.css'

const list = ['jet', 'motorcycle', 'tank']

const ProductsListPage = () => {


    const productsList = list.map(item => {
        return (
            <li key={item}>
                <Link to={`/product/${item}`} >{item}</Link>
            </li>
        )
})

    return ( 
        <div>
            <h2>Lista produktów</h2>
            <ul className='products'>
                {productsList}
            </ul>
        </div>
    );
}
 
export default ProductsListPage;