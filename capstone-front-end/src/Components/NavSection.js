import "./NavSection.css";
import "./Footer.js";
import React, { useContext} from "react";
import ThemeContext from "../ThemeContext";
import {Link} from "react-router-dom";

const NavSection = () => {

    const myContext = useContext(ThemeContext);
    const petName = myContext.petVariable.name;

    return (
        <div className="nav">
            <h1>Hi, {petName}!
            </h1>
            <div style={{margin: 10}}>
                <button className="yourPals" style={{marginLeft:150, marginRight: 270, marginBottom: 10}}>Your Pals</button>
                <button className="findPals" style={{marginRight: 270, marginBottom: 10}}><Link to='/findpals'>Find Pals</Link></button>
                <button className="logOutButton"style={{marginRight: 270, marginBottom: 10}}><Link to="/welcome">Log Out</Link></button>
                <button className="goHomeButton"style={{marginBottom: 10}}><Link to="/profile">Your Profile</Link></button>
            </div>
        </div>
        )}
export default NavSection;