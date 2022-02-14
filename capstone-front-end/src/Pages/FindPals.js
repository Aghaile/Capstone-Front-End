// import axios from "axios";
// import React,  { useContext , useState, useEffect} from "react";
// import {Link} from "react-router-dom";
// import NavSection from "../Components/NavSection";
// import ThemeContext from "../ThemeContext";
// import "./FindPals.css";


// function FindPals(){

//     const myContext = useContext(ThemeContext);
//     const petId = myContext.petVariable.id;
//     const [palsData, setPalsData] = useState([]);

//     // const selectPal = (pet) => {
//     //     let palsEndpoint =
//     //       process.env.REACT_APP_BACKEND_URL + "/" + pet.id + "/findpals";

//     //       const nextPalId =
//     //       Math.max(...newPalList.map((friendship) => friendship.friendship_id)) + 1;
    
//     //     axios
//     //       .get(palsEndpoint)
//     //       .then((response) => {
//     //         setPalsData([...response.data]);
//     //         setSelectedPal(pal);
//     //       })
//     //       .catch((err) => console.log(err));
//     //   };
//     useEffect(()=>{
//         axios
//             .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}/findpals`)
//             .then((response)=>{
//                 console.log(response.data);
//                 setPalsData([...response.data]);
//             })
//             .catch((err)=> console.log(err))
//     }, [palsData]);

//     const addNewPal = () => {
//         const newPalList = [...palsData];
    
//         const nextFriendshipId =
//           Math.max(...newPalList.map((friendship) => friendship.friendship_id)) + 1;
    
//         newPalList.push({
//           friendship_id: nextFriendshipId,
//           adding_pet: petId, 
          
//         });
    
//         setPalsData(newPalList);
//       };
    
//     return (
//         <div>
//         <div class="float-container">

//             <div class="float-child" id='navBar'>
//                 <NavSection />
//             </div>

//             <div class="float-child" id="mainPart">
//                 <button onClick={addNewPal}>Pounce</button>
//             </div>
//         </div>
            
//         <div className="returnHomeButtonOnProfile">
//             <button className="goHomeButton"><Link to="/welcome">Return Home</Link></button>
//         </div>
//         </div>
//     )
// }

// export default FindPals;


