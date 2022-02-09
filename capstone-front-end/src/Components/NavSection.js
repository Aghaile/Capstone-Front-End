import React from 'react';
import "./NavSection.css";
import {Link} from "react-router-dom";

const NavSection = (props) => {
    return (<div className="navBar">
                <h1>Hi,
                    <button className="name"><Link to="/profile/:login">{props.pet}</Link></button>
                </h1>
                <h2>
                    <button className="yourPals"><Link to="/profile/:yourpals">Your Pals</Link></button>
                </h2>
                <h2>
                    <button className="findPals"><Link to="/profile/:findpals">Find Pals</Link></button>
                </h2>
            </div>)
}
export default NavSection;