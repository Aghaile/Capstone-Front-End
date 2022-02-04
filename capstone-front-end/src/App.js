import Welcome from './Pages/Welcome';
import NewProfileForm from './Pages/NewProfileForm';
import PetProfile from './Pages/PetProfile';
import ErrorPage from './Pages/ErrorPage';
import React, {useEffect, useState} from 'react';
import BigSquare from './Components/BigSquare';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

       // const [petsData, setPetsData] = useState([]);

  // const createNewProfile = (newPet) => {
  //   const newPetList = [...petsData];

  //   const nextPetId =
  //     Math.max(...newPetList.map((pet) => pet.pet_id)) + 1;

  //   newPetList.push({
  //     pet_id: nextPetId,
  //     login: newPet.loginData,
  //     name: newPet.nameData,
  //   });

  //   setPetsData(newPetList);
  // };

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL)
  //     .then((response) => {
  //       setPetsData([...response.data]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
  <Router>
    <Routes>
      <Route path="/welcome"element={<Welcome/>}/>
      <Route path="/profile/:login"element={<PetProfile/>} />
      <Route path="/"element={<NewProfileForm/>} />
      {/* <Route path="*"element={<ErrorPage/>} /> */}
    </Routes>
  </Router>
  )
};

export default App;





