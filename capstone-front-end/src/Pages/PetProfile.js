import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";


function PetProfile(){
    let { username } = useParams();
    return (
        <div>
            <div className="profileHome">
                Welcome, { username }!
            </div>
            <button className="goHomeButton"><Link to="/">Return Home</Link></button>
        </div>
    )
}

export default PetProfile;





