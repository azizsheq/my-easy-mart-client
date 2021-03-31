import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="searchDiv">
                <input className="homeSearch" type="text"placeholder="Search . . ."/>
                <button className="searchButton">Search</button>
            </div>
            <h1>HOME</h1>
        </div>
    );
};

export default Home;