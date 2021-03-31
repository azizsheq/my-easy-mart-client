import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import './Admin.css'

const Admin = () => {
    return (
        <div className="adminMainDiv">

            <div className="adminLeft">
                <ul className="adminUL">
                    <li><h1>ADMIN</h1></li>
                </ul>
                <Router>
                    <ul className="adminUL">
                        <li><Link className="adminA" to="/manageProduct">Manage Product</Link></li>
                        <li><Link className="adminA" to="/addProduct">Add Product</Link></li>
                        <li><Link className="adminA" to="/editProduct">Edit Product</Link></li>
                    </ul>
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
                </Router>
            </div>

            <div className="adminRight">

            </div>

        </div>
    );
};

export default Admin;