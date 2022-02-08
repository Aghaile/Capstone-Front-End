import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "../Components/SearchBar";

// import { useParams } from "react-router-dom";

const Welcome = () => {

    const [id, setId] = useState("");
    const [petName, setCurrentPetName] = useState()

    const greet = () => {
        const petName = {id};
        const response = axios.get(
            "http://127.0.0.1:5000/pet" + petName.id, petName
        ); setCurrentPetName(response.data)
        console.log(response.data)
    };

    return (
        <div>
            <h1>Welcome</h1>
                <div>
                    <SearchBar placeholder="Enter your pet login!"/> 
                </div>
                <button onClick={greet}><Link to="/profile/:login">Log In</Link></button>
                <button><Link to="/createprofile">Create Profile</Link></button>
            </div>
    );
};

export default Welcome;