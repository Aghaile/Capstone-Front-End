import "./FindPalsSection.css";
import axios from "axios";
import React, { useContext , useState, useEffect} from "react";
// import {Link} from "react-router-dom";
// import { useLocation } from "react-router-dom";
import ThemeContext from "../ThemeContext";



const FindPals = () => {

    const myContext = useContext(ThemeContext);
    const petId = myContext.petVariable.id;


    // state variable to keep track of potential pals  check
    // populate empty pal recs  check
    // update context  check
    // callback function =>post request to create a relationship  

    const [palRecs, setPalRecs] = useState({});
    
    // const palRecProfile = () => ({
    //     name: palRecs.name,
    //     bio: palRecs.bio,
    //     age: palRecs.age,
    //     gender: palRecs.gender,
    //     species: palRecs.species,
    //     zipcode: palRecs.zipcode,
    //     phone: palRecs.phone
    // });

        // useEffect(()=> {
        //     console.log(palId);
        // }, [palId]);

        // useEffect(()=>{
        //     axios
        //         // .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${id}`)
        //         .get("http://127.0.0.1:5000/pet" + "/" + petId + "/findpals")
        //         .then((response)=> {
        //                 console.log(response)
        //             })
        //         .catch((err)=>{
        //             console.log(err)
        //         });
        // }, [petId])

        // const getPalRecs = (pet) => {
        //     axios
        //         // .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${id}`)
        //         .get("http://127.0.0.1:5000/pet" + "/" + pet.id+ "/findpals")
        //         .then((response)=> {
        //             setPalRec(response.data);
        //             // if(palId ===parseInt(palId)){
        //             //     setPetSelf(true)
        //             // }})
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //         });
        // }

        // const palRecProfile=
        // <div>
        // <div>
        //     <p>Name: {palRec.name}</p>
        //     {palRec.bio ? <p>Bio: {palRec.bio}</p> : <p></p>}
        //     {palRec.age ? <p>Age: {palRec.age}</p> : <p></p>}
        //     {palRec.gender ? <p>Gender: {palRec.gender}</p> : <p></p>}
        //     {palRec.species ? <p>Species: {palRec.species}</p> : <p></p>}
        //     <p>Zipcode: {palRec.zipcode}</p>
        // </div> : <p></p>
        // </div>

        // const palRecButtons=
        // <div>
        //     {petSelf ? <button onClick={setPounce}>Pounce</button> : <p></p>}
        //     {petSelf ? <button onClick={setProwl}>Prowl</button> : <p></p>}
        // </div>;


        // return(<div>    
        //     {palRecProfile}
        //     <div className="manageProfileButtons">
        //     {palRecButtons}
        //     </div>
            
        // </div>)
        console.log(petId)
        
        useEffect(()=>{
            axios
                // .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${id}`)
                .get("http://127.0.0.1:5000/pet" + "/" + petId + "/findpals")
                .then((response)=> {
                    setPalRecs(response.data);
                })
                .catch((err)=>{
                    console.log(err)
                });
        }, [petId])
        
        const palProfileInfo=
            <div>
                <p>Name: {palRecs.name}</p>
                {palRecs.bio ? <p>Bio: {palRecs.bio}</p> : <p></p>}
                {palRecs.age ? <p>Age: {palRecs.age}</p> : <p></p>}
                {palRecs.gender ? <p>Gender: {palRecs.gender}</p> : <p></p>}
                {palRecs.species ? <p>Species: {palRecs.species}</p> : <p></p>}
                <p>Zipcode: {palRecs.zipcode}</p> : <p></p>
            </div>


        return (
            <div>
                {/* {palRecProfile} */}
                {/* <button onClick={()=> setPalId((c)=> c + 1)}>Pounce</button> */}
                <div>{palProfileInfo}</div>
            </div>
        )
        }

    export default FindPals;