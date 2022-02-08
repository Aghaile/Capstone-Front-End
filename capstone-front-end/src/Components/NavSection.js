import React from 'react';
import "./NavSection.css";
import {Link} from "react-router-dom";

const NavSection = (props) => {
    return (<div className="navBar">
                <h1>Hi,
                    <button className="name"><Link to="/profile/:login">{props.petName}</Link></button>
                </h1>
            </div>)
}
export default NavSection;