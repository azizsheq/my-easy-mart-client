import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {

    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [product, setProduct] = useState({});

    const [checkoutProduct, setCheckoutProduct] = useState({
        userEmail: '',
        orderDate: '',
        productName: '',
        productPrice: '',
        productImage: ''
    });


    // fetch for getting same product from server 
    useEffect(() => {
        // const url = `http://localhost:5055/getClickedProduct/${id}`;
        const url = `https://secure-atoll-57993.herokuapp.com/getClickedProduct/${id}`;
        // console.log('url: ', url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data);
                const {imageURL, name, price} = data;
                const newOrder = {
                    userEmail: loggedInUser.email,
                    orderDate: Date(),
                    productName: name,
                    productPrice: price,
                    productImage: imageURL
                }
                setCheckoutProduct(newOrder);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id])



    const handleCheckout = () => {
        // console.log('Checkout Clicked');
        // setting new order object
        // console.log(checkoutProduct);
        // fetch for sending checkout product data to server 
        // const orderURL = `http://localhost:5055/addToOrders`;
        const orderURL = `https://secure-atoll-57993.herokuapp.com/addToOrders`;
        fetch(orderURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkoutProduct),
        })
            .then(response => {
                // console.log("Server side response: ", response);
            })
            .catch(error => {
                console.error('Server side Error:', error);
            });
        alert('Order Successful !')
    }

    
    return (
        <div className="container">
            <h1>Checkout here </h1>
            {/* <h1>Clicked Product ID : {id}</h1> */}
            <div className="container checkoutDiv">
                <Container>
                    <Row>
                        <Col md={6}>Description</Col>
                        <Col md={2} className="colQty">Quantity</Col>
                        <Col md={4} className="toRight">Price</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}><b>{product.description}</b></Col>
                        <Col md={2} className="colQty"><b>1</b></Col>
                        <Col md={4} className="toRight"><b>$ {product.price}</b></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}><b>Total</b></Col>
                        <Col md={2} className="colQty"></Col>
                        <Col md={4} className="toRight"><b>$ {product.price}</b></Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col md={4}>
                        <Link to='/home'>
                            <Button className="btn btn-warning">Back to Home</Button>
                        </Link>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="toRight">
                        <Link to="/home">
                        <Button className="btn btn-success" onClick={handleCheckout}>Checkout</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;