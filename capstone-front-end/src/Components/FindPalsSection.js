import "./FindPalsSection.css";
import axios from "axios";
import React, { useContext , useEffect, useState} from "react";
// import {Link} from "react-router-dom";
// import { useLocation } from "react-router-dom";
import ThemeContext from "../ThemeContext";

const FindPalsSection=({variant})=>{
    const myContext = useContext(ThemeContext);
            const petId = myContext.petVariable.id; 
            const [palComponents, setPalComponents] = useState([]);
            const [searchedForPals, setSearchedForPals] = useState(variant ? false : true);
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

        
            

        return(<div>
            {palComponents.map((pal)=>(
                <div className="palsList">
                    <p>{pal.name}</p>
                    <p>{pal.bio}</p>
                    <p>{pal.age}</p> 
                    <p>{pal.gender}</p> 
                    <p>{pal.species}</p>
                    <p>{pal.zipcode}</p>
                </div>
            ))}
        </div>)}
    export default FindPalsSection;