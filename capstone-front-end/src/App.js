import Welcome from './Pages/Welcome';
import NewProfileForm from './Pages/NewProfileForm';
import PetProfile from './Pages/PetProfile';
import ErrorPage from './Pages/ErrorPage';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
     
  return <Router>
    <Routes>
      <Route path="/"element={<Welcome/>}/>
      <Route path="/createprofile/"element={<NewProfileForm/>} />
      <Route path="/profile/:login"element={<PetProfile/>} />
      <Route path="*"element={<ErrorPage/>} />
    </Routes>
  </Router>
};

export default App;





