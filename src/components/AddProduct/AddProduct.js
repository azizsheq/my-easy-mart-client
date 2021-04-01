import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './AddProduct.css'

const AddProduct = () => {

    // using state for form data and errors related to form data
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});


    // to set the field
    const setField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }


    // form validation
    const findFormErrors = () => {
        const { name, description, price} = formData
        const newErrors = {}

        // name errors
        if (!name || name === '') newErrors.name = 'cannot be blank!'
        else if (name.length < 2) newErrors.name = 'name is too short!'
        // description errors
        if (!description || description === '') newErrors.description = 'cannot be blank!'
        else if (description.length < 2) newErrors.description = 'name is too short!'
        // price errors
        if (!price || price === '') newErrors.price = 'price cannot be blank!'

        return newErrors
    }


    // handel the form submission 
    const handelSubmit = e => {
        e.preventDefault();
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            console.log(formData);
            const url = `http://localhost:5055/addProduct`;

            // fetch for sending new product data to server 
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    console.log("Server side response: ", response);
                })
                .catch(error => {
                    console.error('Server side Error:', error);
                });
            alert('Product Uploading Successful !')
        }
    }


    // image uploading handle to imagebb
    const handleImageUpload = event => {
        // console.log(event.target.files[0]);

        // preparing image data
        const imageData = new FormData();
        imageData.set('key', 'de4a8d0b1762d8d476fab2a09edc351c');
        imageData.append('image', event.target.files[0]);

        // fetch for uploading file in imagebb using api
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imageData
        })
            .then(response => response.json())
            .then(result => {
                // console.log('Success:', result);
                // console.log('image url:', result.data.display_url);
                // setting image data into the field
                setField("imageURL", result.data.display_url)
            })
            .catch(error => {
                console.error('image Error:', error);
            });
    }


    return (
        <div className="addProductForm">
            <div className="container">
                <Form onSubmit={handelSubmit}>
                    
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                            Product Name
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter Name"
                                onChange={e => setField('name', e.target.value)}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDescription">
                        <Form.Label column sm={4}>
                            Description
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter Description"
                                onChange={e => setField('description', e.target.value)} 
                                isInvalid={!!errors.description}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.description}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPrice">
                        <Form.Label column sm={4}>
                            Price
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter Unite Price"
                                onChange={e => setField('price', e.target.value)}
                                isInvalid={!!errors.price}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.price}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFile">
                        <Form.Label column sm={4}>
                            Add Photo
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="file" onChange={handleImageUpload}/>
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