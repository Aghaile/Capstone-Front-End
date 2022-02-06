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

  return (
  <Router>
    <Routes>
      <Route path="/welcome"element={<Welcome/>}/>
      <Route path="/profile"element={<PetProfile/>} />
      <Route path="/"element={<NewProfileForm/>} />
      {/* <Route path="*"element={<ErrorPage/>} /> */}
    </Routes>
  </Router>
  )
};

export default App;





