import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container">
            <h1>Welcome back, {loggedInUser.name}</h1>
            <h2>Your orders are here - </h2>
            
        </div>
    );
};

export default Orders;