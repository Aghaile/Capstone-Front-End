import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "../Components/SearchBar";

// import { useParams } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
                <div>
                    <SearchBar placeholder="Enter your pet login!"/> 
                </div>
                <button><Link to="/profile/:login">Log In</Link></button>
                <button><Link to="/">Create Profile</Link></button>
            </div>
    );
};

export default Welcome;