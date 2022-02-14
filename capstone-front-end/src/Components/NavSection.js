import "./NavSection.css";
import axios from "axios";
import React, { useContext , useState, useEffect} from "react";
import ThemeContext from "../ThemeContext";

const NavSection = (props, { variant }) => {

    const myContext = useContext(ThemeContext);
    const petName = myContext.petVariable.name;
    const petId = myContext.petVariable.id; 
    const [pals, setPals] = useState(props.pals);
    const [palComponents, setPalComponents] = useState([]);
    const [searchedForPals, setSearchedForPals] = useState(variant ? false : true);

    const findPals=()=>{
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}/findpals`)
            .then((response)=>{
                setPals(response.data);
                setPalComponents(response.data);
                setSearchedForPals(true);
            }, [palComponents])
            .catch((err)=> console.log(err))
   
                console.log(palComponents);
                setPalComponents(palComponents);
            }

    return (
        <div className="navBar">
            <h1>Hi, {petName}!
            </h1>
            <div>
                <button className="yourPals">Your Pals</button>
                <button className="findPals" onClick={findPals}>Find Pals</button>
            </div>
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
        </div>
    )
}

       
export default NavSection;