import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "../Components/SearchBar";
// import { useParams } from "react-router-dom";

const homePage = () => {
    // let { username } = useParams();

    let username = document.getElementById("searchBox");

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
            {/* <div className="searchBox">
                <input type="text"></input>
            </div>
            <div className="pageLinks">         */}
                {/* <Link to="/profile">Log In</Link>  */}
                <div>
                    <SearchBar placeholder="Enter your username!"/> 
                </div>
                <button>Log In</button>
                <button><Link to="/createprofile">Create Profile</Link></button>
            </div>
        // </div>
    );
};

export default homePage;