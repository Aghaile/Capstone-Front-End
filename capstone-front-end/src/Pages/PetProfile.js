import React from "react";
import {Link} from "react-router-dom";
import YourProfile from '../Components/YourProfile';
import NavSection from "../Components/NavSection"
import "./PetProfile.css";


function PetProfile(){
    return (
        <div>
        <div class="float-container">

            <div class="float-child" id='navBar'>
                <NavSection />
            </div>

            <div class="float-child" id="mainPart">
                <YourProfile />
            </div>
        </div>
            
        <div className="returnHomeButtonOnProfile">
            <button className="goHomeButton"><Link to="/">Return Home</Link></button>
        </div>
        </div>
    )
}

export default PetProfile;





