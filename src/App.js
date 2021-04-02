import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navigation from "./components/Navigation/Navigation";
import Checkout from "./components/Checkout/Checkout";
import NoMatch from "./components/NoMatch/NoMatch";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Deals from "./components/Deals/Deals";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navigation />
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/productDetails/:id">
            <Checkout />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
