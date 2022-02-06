import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "../Components/SearchBar";

// import { useParams } from "react-router-dom";

const Welcome = () => {

    const [petData, setPetData] = useState([]);
    const [loggedInPet, setLoggedInPet] = useState([]);

    const loginYourPet = (pet) => {
        let petEndpoint =
          process.env.REACT_APP_BACKEND_URL + "/profile/" + pet.id;
    
        axios
          .get(petEndpoint)
          .then((response) => {
            setPetData([...response.data]);
            setLoggedInPet(pet);
          })
          .catch((err) => console.log(err));
      };
    

    return (
        <div>
            <h1>Welcome</h1>
                <div>
                    <input type="text" placeholder="Enter your pet id!"/> 
                </div>
                <button onClick={loginYourPet}><Link to="/profile">Log In</Link></button>
                <button><Link to="/">Create Profile</Link></button>
            </div>
    );
};

export default Welcome;