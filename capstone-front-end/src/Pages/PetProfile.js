import React from "react";
import {Link} from "react-router-dom";
import BigSquare from '../Components/BigSquare';
import "./PetProfile.css";


function PetProfile(){
    return (
        <div>
        <div className="greeting">
            <BigSquare />
        </div>
        <div className="returnHomeButtonOnProfile">
            <button className="goHomeButton"><Link to="/">Return Home</Link></button>
        </div>
        </div>
    )
}

export default PetProfile;





