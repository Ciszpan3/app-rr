import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Product from '../components/Product'
import '../styles/Products.css'

const ProductsPage = () => {

    const { id } = useParams()

    return ( 
        <div className='product'>
            <h2>Strona produktu</h2>
            <Product id={id}/>
            <Link to='/products'>Powrót</Link>
        </div>
    );
}
 
export default ProductsPage;