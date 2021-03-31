import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className="addProductForm">
            <div className="container">
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                            Product Name
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDescription">
                        <Form.Label column sm={4}>
                            Description
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter Description" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPrice">
                        <Form.Label column sm={4}>
                            Price
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter Unite Price" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFile">
                        <Form.Label column sm={4}>
                            Add Photo
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="file"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={8}></Col>
                        <Col sm={4}>
                            <Button variant="primary" size="lg" block type="submit">Save</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;