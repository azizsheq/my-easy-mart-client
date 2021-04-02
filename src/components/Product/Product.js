import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import './Product.css';

const Products = ({ product }) => {

    const history = useHistory();

    const handleOrder = (id) => {
        // console.log('user email: ', loggedInUser.email);
        // for passing the id using history
        // console.log('Clicked product id: ', id);
        const url = `/productDetails/${id}`;
        history.push(url);
    }

    return (
        <div className="productDiv">
            <img className="productImage" src={product.imageURL} alt="" />
            <p className="productName">{product.name}</p>
            <p>{product.description}</p>
            <div className="productDivBottom">
                <p className="productPrice"><FontAwesomeIcon icon={faDollarSign} />{product.price}</p>
                <button className="btnBuyNow" onClick={() => handleOrder(product._id)}>Buy now</button>
            </div>
        </div>
    );
};

export default Products;