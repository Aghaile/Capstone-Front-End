import "./NavSection.css";
import React, { useContext} from "react";
import ThemeContext from "../ThemeContext";
import {Link} from "react-router-dom";

const NavSection = ({ variant }) => {

    const myContext = useContext(ThemeContext);
    const petName = myContext.petVariable.name;

    return (
        <div className="navBar">
            <h1>Hi, {petName}!
            </h1>
            <div>
                <button className="yourPals">Your Pals</button>
                <button className="findPals"><Link to='/findpals'>Find Pals</Link></button>
            </div>
        </div>
            );}
export default NavSection;