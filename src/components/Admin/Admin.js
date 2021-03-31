import React from "react";
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faDollarSign, faFileUpload, faPlus, faThLarge, faTrash } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
    return (
        <div className="adminMainDiv">
            <Router>
                <div className="adminLeft">
                    <h1>ADMIN</h1>
                    <ul className="adminUL">
                        <li><Link className="adminA" to="/manageProduct"><FontAwesomeIcon icon={faThLarge} />&nbsp;Manage Product</Link></li>
                        <li><Link className="adminA" to="/addProduct"><FontAwesomeIcon icon={faPlus} />&nbsp;Add Product</Link></li>
                        <li><Link className="adminA" to="/editProduct"><FontAwesomeIcon icon={faEdit} />&nbsp;Edit Product</Link></li>
                    </ul>
                </div>
                <div className="adminRight">
                    <Switch>
                        <Route path="/addProduct">
                            <AddProduct />
                        </Route>
                        <Route path="/manageProduct">
                            <ManageProduct />
                        </Route>
                        <Route path="/editProduct">
                            <EditProduct />
                        </Route>
                    </Switch>
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                    <FontAwesomeIcon icon={faFileUpload} />
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>


            </Router>



        </div>
    );
};

export default Admin;