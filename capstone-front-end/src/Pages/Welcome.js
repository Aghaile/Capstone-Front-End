import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import ThemeContext from "../ThemeContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Welcome.css";
// import Title from "../Components/Title";
// import PetProfile from "./PetProfile";
// import {BrowserRouter as Routes} from "react-router-dom";
// import PetProfile from "./PetProfile";
const Welcome = () => {
const myContext = useContext(ThemeContext);
let navigate = useNavigate();

const [loginField, setLoginField] = useState({id: "Enter your pet ID"});
// const [errorMessage, setErrorMessage] = useState(false);

const onIdChange = (event) => {
    setLoginField({
    ...loginField,
    [event.target.name]: event.target.value,
    });
};
const onLoginFormSubmit = (event) => {
    event.preventDefault();
    // const currentId = document.getElementById("id");
    let validId = true;
    if (loginField.id.length === 0){
    validId = false;
    }
    if (validId){
    console.log(loginField);
    const loginId = parseInt(loginField.id)
    let profileEndpoint = "http://127.0.0.1:5000/pet" + "/" + loginId;
    console.log(loginId);
    axios
        .get(profileEndpoint)
        .then((response)=> {
        myContext.setCurrentPet(response.data);
            navigate('/profile');
            console.log("response data", response.data);
        })
        .catch((err)=>{
        console.log(err);
        }
        )
    }
}
const onCreateProfile = () => {
    navigate('/createprofile');
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> ro
return (
    <div>
    <form>
        {/* <div className= "errorMessageContainer" value={errorMessage}><p>Valid pet ID required.</p></div> */}
        <input
        id="id"
        name="id"
        minLength={1}
        value={loginField.id}
        onChange={onIdChange}
        />
    </form>
    <button onClick={onLoginFormSubmit}>Login</button>
    <button onClick={onCreateProfile}><Link to='/createprofile'>Create Profile</Link></button>
=======
  return (
    <div className="welcomeBackground">
      {/* <Title className="titleBox"/> */}
        <div className="welcomeBox" style={{position:"absolute",top:"40%",transform:"translate(0, 50%)",marginLeft:600}}><h1>Paw Pals</h1>
        <form>
            {/* <div className= "errorMessageContainer" value={errorMessage}><p>Valid pet ID required.</p></div> */}
            <input
            id="id"
            name="id"
            minLength={1}
            value={loginField.id}
            onChange={onIdChange}
            />
        </form>
        <button onClick={onLoginFormSubmit}>Login</button>
        <button onClick={onCreateProfile}><Link to='/createprofile'>Create Profile</Link></button>
        </div>
>>>>>>> 496392846dea521f1e6386c884f26cfca3c7ea97
    </div>
)
}
export default Welcome;