import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});

    return (
        <div className="container">
            <h1>Clicked Product ID : {id}</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <Link to='/home'>
                            <Button className="btn btn-warning">Back to Home</Button>
                        </Link>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Button className="btn btn-success" onClick={() => alert('Thank You !')}>Checkout</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;