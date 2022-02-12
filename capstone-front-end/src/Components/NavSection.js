import "./NavSection.css";
import {Link} from "react-router-dom";
import axios from "axios";
import React, { useContext , useState, useEffect} from "react";
// import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import ThemeContext from "../ThemeContext";


const NavSection = (props) => {

    // const myContext = useContext(ThemeContext);
    // const petId = myContext.petVariable.id;
    // const location = useLocation();

    // console.log("petID", petId)
    // console.log("location", location)

    return (<div className="navBar">
                <h1>Hi,
                    <button className="name"><Link to="/profile/:login">{props.pet}</Link></button>
                </h1>
                <h2>
                    <button className="yourPals">Your Pals</button>
                </h2>
                <h2>
                    <button className="findPals"><Link to="/findpals/">Find Pals</Link></button>
                </h2>
            </div>)
}
export default NavSection;