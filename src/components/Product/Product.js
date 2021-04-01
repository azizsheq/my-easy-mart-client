import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Products = ({product}) => {
    return (
        <div className="productDiv">
            <img className="productImage" src={product.imageURL} alt=""/>
            <p className="productName">{product.name}</p>
            <p>{product.description}</p>
            <div className="productDivBottom">
                <p className="productPrice"><FontAwesomeIcon icon={faDollarSign}/>&nbsp;{product.price}</p>
                <button className="btnBuyNow">Buy now</button>
            </div>
        </div>
    );
};

export default Products;