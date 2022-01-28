import React from "react";
import axios from "axios";

const homePage = () => {

    const findUsername = require('axios');
    axios 
        .get('${process.env.REACT_APP_BACKEND_URL}/humans',{
            params: {
                key: process.env.REACT_APP_BACKEND_URL,
                q: document.getElementById("searchBox"),
                format: 'json',
            }
        })
        .then((response) => {
            console.log('Username found', response.data);
        })
        .catch((error) => {
            console.log('Username not found', error.response.data);
            return (
                <p>Username not found</p>
            )
        });

    return (
        <div>
            <h1>Welcome</h1>
            <div className="searchBox">
                <input type="text"></input>
            </div>
            <div className="searchButton">        
                <button onClick={findUsername}>Search Username</button>
            </div>
        </div>
    );
};

export default homePage;