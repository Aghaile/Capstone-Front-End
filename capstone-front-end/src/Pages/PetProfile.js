// import axios from "axios";
// import React, { useContext , useState, useEffect} from "react";
// import {Link} from "react-router-dom";
// import BigSquare from '../Components/BigSquare';
// import { useLocation } from "react-router-dom";
// import "./PetProfile.css";
// import ThemeContext from "../ThemeContext";
// // import { UserContext } from "./UserContext";

// // const msg = useContext(UserContext);

// const PetProfile=()=>{
    
//     const myContext = useContext(ThemeContext);
//     const petId = myContext.petVariable.id;
//     const [petInfo, setPetInfo] = useState({});
//     // const navigate = useNavigate();
//     const location = useLocation();
//     // const id   = location.state; 
//     const [petSelf, setPetSelf] = useState(false);
//     // const [showError, setShowError] = useState(false);
//     const [editProfile, setEditProfile] = useState(false);
//     const [deleteProfile, setDeleteProfile] = useState(false);
//     const [profileExists, setProfileExists] = useState(true);
//     const [profileFields, setProfileFields] = useState({
//         name: petInfo.name,
//         bio: petInfo.bio,
//         age: petInfo.age,
//         gender: petInfo.gender,
//         species: petInfo.species,
//         zipcode: petInfo.zipcode,
//         phone: petInfo.phonea
//     });

//     // console.log(id)
//     console.log("location", location)
//     console.log("petId", petId)
//     useEffect(()=>{
//         axios
//             // .get(`${process.env.REACT_APP_BACKEND_URL}/pet/${id}`)
//             .get("http://127.0.0.1:5000/pet" + "/" + petId)
//             .then((response)=> {
//                 setPetInfo(response.data);
//                 if(petId ===parseInt(petId)){
//                     setPetSelf(true)
//                 }})
            
//             .catch((err)=>{
//                 console.log(err)
//             });
//     }, [petId])

//     const deleteProfileSubmit = () => {
//         axios
//             .delete(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}`)
//             .then(() => {
//                 setDeleteProfile(true)
//                 setProfileExists(false)
//             })
//             console.log("Profile Deleted")
//             .catch((err) => {
//                 console.log(err)
//             })
//         }


//     const profileInfo=
//     <div>
//     {profileExists ? 
//     <div>
//         <p>Name: {petInfo.name}</p>
//         {petInfo.bio ? <p>Bio: {petInfo.bio}</p> : <p></p>}
//         {petInfo.age ? <p>Age: {petInfo.age}</p> : <p></p>}
//         {petInfo.gender ? <p>Gender: {petInfo.gender}</p> : <p></p>}
//         {petInfo.species ? <p>Species: {petInfo.species}</p> : <p></p>}
//         <p>Zipcode: {petInfo.zipcode}</p>
//     </div> : <p></p>
//     }
//     </div>

// <<<<<<< Updated upstream

//   const onNameChange = (event) => {
//     setProfileFields({
//       ...profileFields,
//       name: event.target.value,
//     });
//   };

//   const onZipcodeChange = (event) => {
//     setProfileFields({
//       ...profileFields,
//       zipcode: event.target.value,
//     });
//   };

//   const onBioChange = (event) => {
//     setProfileFields({
//       ...profileFields,
//       bio: event.target.value,
//     });
//   };

//   const onAgeChange = (event) => {
//     setProfileFields({
//       ...profileFields,
//       age: event.target.value,
//     });
//   };

//   const onGenderChange = (event) => {
//     setProfileFields({
//       ...profileFields,
//       gender: event.target.value,
//     });
//   };

//   const onSpeciesChange = (event) => {
//     setProfileFields({
//       ...profileFields,
//       species: event.target.value,
//     });
//   };

//     const editProfileForm= () => {
//         <form onSubmit={editProfileFormSubmit}>
//             <div>
//                 <p>Name: </p>
//                 <input
//                     id="name"
//                     name="name"
//                     minLength={1}
//                     maxLength={50}
//                     value={profileFields.name}
//                     onChange={onNameChange}
//                 ></input>
//                 <p>Bio: </p>
//                 <input
//                     id="bio"
//                     name="bio"
//                     maxLength={300}
//                     value={profileFields.bio}
//                     onChange={onBioChange}
//                 ></input>
//                 <p>Age: </p>
//                 <input
//                     id="age"
//                     name="age"
//                     minLength={1}
//                     maxLength={2}
//                     value={profileFields.age}
//                     onChange={onAgeChange}
//                 ></input>
//                 <p>Gender: </p>
//                 <input
//                     id="gender"
//                     name="gender"
//                     minLength={1}
//                     maxLength={20}
//                     value={profileFields.gender}
//                     onChange={onGenderChange}
//                 ></input>
//                 <p>Species: </p>
//                 <input
//                     id="species"
//                     name="species"
//                     minLength={1}
//                     maxLength={20}
//                     value={profileFields.species}
//                     onChange={onSpeciesChange}
//                 ></input>
//                 <p>Zipcode: </p>
//                 <input
//                     id="zipcode"
//                     name="zipcode"
//                     length={5}
//                     value={profileFields.zipcode}
//                     onChange={onZipcodeChange}
//                 ></input>
//             </div>
//         </form>
//     }

//     const editProfileFormSubmit = () => {

//         axios
//             .patch(`${process.env.REACT_APP_BACKEND_URL}/pet/${petId}`,{  
//                 name: profileFields.name,
//                 bio: profileFields.bio,
//                 age: profileFields.age,
//                 gender: profileFields.gender,
//                 species:profileFields.species,
//                 zipcode: profileFields.zipcode
//             })

//         .then(function (response) {
//         setEditProfile(true);
//         console.log(response)
//         setProfileFields({
//             ...profileFields,
//             name: "",
//             bio: "",
//             age: "",
//             gender: "",
//             species: "",
//             zipcode:"",
//         });      
//         })

//         .catch(function (error) {
//         console.log(error);
//         });
//     }


//     const profileButtons=
//     <div>
//         {petSelf ? <button onClick={editProfileForm}>Edit Profile</button> : <p></p>}
//         {petSelf ? <button onClick={deleteProfileSubmit}>Delete Profile</button> : <p></p>}
//     </div>


//     return (
//         <div>
//         <div className="greeting">
//             <BigSquare {...petInfo}/>
//         </div>
//         <div>
//             {profileInfo}
//             {petSelf ? <p>{editProfileForm}</p> : <p></p>}
//         </div>
//         <div className="manageProfileButtons">
//             {profileButtons}
//         </div>
//         <div className="returnHomeButtonOnProfile">
//             <button className="goHomeButton"><Link to="/welcome">Return Home</Link></button>
//         </div>
// =======
//     return (
//         <div>
//             <YourProfile />
// >>>>>>> Stashed changes
//         </div>
//     )
// }

// export default PetProfile;





