import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from 'react-router-dom';

const Products = ({product}) => {

    const history = useHistory();

    const handleOrder = (id) => {
        console.log('Clicked product id: ', id);
        const url = `/orderDetails/${id}`;
        history.push(url);
    }

    return (
        <div className="productDiv">
            <img className="productImage" src={product.imageURL} alt=""/>
            <p className="productName">{product.name}</p>
            <p>{product.description}</p>
            <div className="productDivBottom">
                <p className="productPrice"><FontAwesomeIcon icon={faDollarSign}/>{product.price}</p>
                {/* <Link to="/checkout"> */}
                    <button className="btnBuyNow" onClick={() => handleOrder(product._id)}>Buy now</button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Products;