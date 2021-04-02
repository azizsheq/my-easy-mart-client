import React from 'react';
import './Deals.css';
import sad from '../../images/sad emoji.png';

const Deals = () => {
    return (
        <div className="dealsDiv">
            <h2>We are Sorry</h2>
            <img src={sad} alt="mem logo" />
            <h1>No Deals are Available !</h1>
            <h2>Please Visit Later</h2>
            <a href="/home">Back to Home</a>
        </div>
    );
};

export default Deals;