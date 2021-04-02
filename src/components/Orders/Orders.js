import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Orders.css';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/getOrderedProduct')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
        displaySpinner(false);  // to stop the spinner
    }, [])

    // function to display and hide the spinner
    const displaySpinner = (show) => {
        const spinner = document.getElementById("loadingSpinner"); // getting the spinner div
        if (show) {
            spinner.style.display = "block";  // to display
        }
        else {
            spinner.style.display = "none"; // to hide 
        }
    }

    const deleteOrder = () => {

    }

    return (
        <div className="container">
            <h1>Welcome back, {loggedInUser.name}</h1>
            <h2>Your orders are here - </h2>
            <div id="loadingSpinner" className="spinnerDiv">
                <Spinner animation="border" variant="success" />
            </div>
            <div className="orderDiv">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Order Date</th>
                            <th className="toCenter">Price</th>
                            <th className="toCenter">Review</th>
                        </tr>
                    </thead>
                    {
                        products.map(product =>
                            <tbody key={product._id}>
                                <tr>
                                    <td>{product.productName}</td>
                                    <td>{product.orderDate}</td>
                                    <td className="toCenter">{product.productPrice}</td>
                                    <td className="toCenter"><FontAwesomeIcon icon={faInfoCircle} style={{ color: 'gray' }}
                                        onClick={() => deleteOrder(product._id)} /></td>
                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default Orders;