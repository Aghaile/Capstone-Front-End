import React from "react";
import {Link} from "react-router-dom";
import BigSquare from '../Components/BigSquare';

import "./PetProfile.css";
// import { UserContext } from "./UserContext";

// const msg = useContext(UserContext);

function PetProfile(){
    return (
        <div>
        <div className="greeting">
            <BigSquare/>
        </div>
        <div className="returnHomeButtonOnProfile">
            <button className="goHomeButton"><Link to="/welcome">Return Home</Link></button>
        </div>
        </div>
    )
}

export default PetProfile;





