import React from "react";
import { useParams } from "react-router-dom";

function PetProfile(){
    let { username } = useParams();
    return (
        <div>
           Welcome, { username }!
        </div>
    )
}

export default PetProfile;





