import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Welcome = () => {
      
    return (
        <div>
        <input type="text" placeholder="Enter your pet id!"/> 
        <button><Link to="/profile/:login">Log In</Link></button>
        <button><Link to="/">Create Profile</Link></button>
        </div>
    );
    };
      

export default Welcome;