import "./FindPalsSection.css";
import axios from "axios";
import React, { useContext , useEffect, useState} from "react";
// import {Link} from "react-router-dom";
// import { useLocation } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import Footer from "./Footer";
import NavSection from "./NavSection";
import Pounce from "./Pounce";
import { useNavigate } from "react-router-dom";


const FindPalsSection=({variant})=>{
    const myContext = useContext(ThemeContext);
    const petId = myContext.petVariable.id; 
    const [palComponents, setPalComponents] = useState([]);
    const [palsList, setPalsList] = useState([]);
    const [searchedForPals, setSearchedForPals] = useState(variant ? false : true);
    let navigate = useNavigate();


    useEffect(()=>{
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}/findpals`)
            .then((response)=>{
                setPalComponents(response.data);
                setSearchedForPals(true);
            }, [palComponents])
            .catch((err)=> console.log(err))

                console.log(palComponents);
                // setPalComponents(palComponents);
    }, [palComponents, petId])

    // const pounce =()=>{
    //     axios
    //         .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}/findpals`)
    //         .then((response)=>{
    //             setPalsList(response.data)
    //             navigate('/yourpals')
    //         })
    //         .catch((err)=>console.log(err))
    // } 
    // }

        return(<div>
            <NavSection/>
            {palComponents.map((pal)=>(
                <div style={{borderRadius:12, width:200, height:225, margin:25, border: "solid rgba(99,172,190)", display: "inline-block"}}>
                    <p>Name: {pal.name}</p>
                    <p>Bio: {pal.bio}</p>
                    <p>Age: {pal.age}</p> 
                    <p>Gender: {pal.gender}</p> 
                    <p>Species: {pal.species}</p>
                    <p>Zipcode: {pal.zipcode}</p>
                </div>
            ))}
            <Footer/>
        </div>)
}
    export default FindPalsSection;