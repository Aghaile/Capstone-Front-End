import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "../Components/SearchBar";

// import { useParams } from "react-router-dom";

const Welcome = () => {

    const [id, setId] = useState("");
    const [pet, setCurrentPetName] = useState()

    const greet = (event) => {
        event.preventDefault();
        const pet = {id};
        const response = axios.get("http://127.0.0.1:5000/pet" + pet.id, pet); 
        setCurrentPetName(response.data)
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