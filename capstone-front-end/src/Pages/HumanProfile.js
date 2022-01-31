import React from "react";
import { useParams } from "react-router-dom";

function HumanProfile(){
    let { username } = useParams();
    return (
        <div>
           Welcome, { username }!
        </div>
    )
}

export default HumanProfile;





