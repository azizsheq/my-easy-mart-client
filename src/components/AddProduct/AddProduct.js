import React from 'react';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className="addProductForm">
            <form action="">
                <label htmlFor="name">Product Name</label>
                <input id="name" type="text"/>

                <label htmlFor="price">Unite Price</label>
                <input id="price" type="text"/>

                <label htmlFor="description">Description</label>
                <input id="description" type="text"/>

                <label htmlFor="imageFile">Add Photo</label>
                <input id="imageFile" type="file"/>

                <button>Submit</button>
            </form>
    </div>
    );
};

export default AddProduct;