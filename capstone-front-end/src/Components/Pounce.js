// import axios from "axios";
// import React, { useContext , useEffect, useState} from "react";
// import ThemeContext from "../ThemeContext";
// import { useNavigate } from "react-router-dom";

// const Pounce=()=>{
//     const myContext = useContext(ThemeContext);
//     const petId = myContext.petVariable.id; 
//     const [palsList, setPalsList] = useState({});
//     let navigate = useNavigate();

//     const pounce =()=>{
//         axios
//             .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}/findpals`)
//             .then((response)=>{
//                 setPalsList(response.data)
//                 navigate('/yourpals')
//             })
//             .catch((err)=>console.log(err))
//     }

//     return(
//         <div>
//             {palsList ? <p></p> : <button onClick={pounce}>Pounce</button>}
//         </div>
//     )
// }

// export default Pounce; 