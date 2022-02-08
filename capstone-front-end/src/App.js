import Welcome from './Pages/Welcome';
import NewProfileForm from './Pages/NewProfileForm';
import PetProfile from './Pages/PetProfile';
import ErrorPage from './Pages/ErrorPage';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import AppContext from './components/AppContext';

function App() {

  // const [activePet, setActivePet] = useState('Null');
  // const userSettings = {
  //   user: activePet,
  //   setActivePet,
  // };

  return (
    <div>
    {/* <AppContext.Provider value={userSettings}>
    </AppContext.Provider> */}
  
  <Router>
    <Routes>
      <Route path="/"element={<Welcome/>}/>
      <Route path="/createprofile/"element={<NewProfileForm/>} />
      <Route path="/profile/:login"element={<PetProfile/>} />
      <Route path="*"element={<ErrorPage/>} />
    </Routes>
  </Router>
</div>
  );
};

export default App;





