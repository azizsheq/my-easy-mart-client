import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <div className="searchDiv">
                <input className="homeSearch" type="text"placeholder="Search . . ."></input>
                <button className="searchButton"><FontAwesomeIcon icon={faSearch} />&nbsp;Search</button>
            </div>
            <h1>HOME</h1>
        </div>
    );
};

export default Home;