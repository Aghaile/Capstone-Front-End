import React from "react";
import {Link} from "react-router-dom";
import NavSection from "../Components/NavSection"
import FindPals from "../Components/FindPalsSection";
import "./FindPals.css";


function FindPalsPage(){
    return (
        <div>
        <div class="float-container">

            <div class="float-child" id='navBar'>
                <NavSection />
            </div>

            <div class="float-child" id="mainPart">
                <FindPals />
            </div>
        </div>
            
        <div className="returnHomeButtonOnProfile">
            <button className="goHomeButton"><Link to="/">Return Home</Link></button>
        </div>
        </div>
    )
}

export default FindPalsPage;


