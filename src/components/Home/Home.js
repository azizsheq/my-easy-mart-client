import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';

const Home = () => {
    const  [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/getProducts')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setProducts(data)
        })
    },[])
    return (
        <div>
            <div className="searchDiv">
                <input className="homeSearch" type="text"placeholder="Search . . ."></input>
                <button className="searchButton"><FontAwesomeIcon icon={faSearch} />&nbsp;Search</button>
            </div>
            <h1>HOME</h1>
            <div className="homeMainDiv">
                {
                    products.map(product => <Product product={product} key={product._id}/>)
                }
            </div>
        </div>
    );
};

export default Home;