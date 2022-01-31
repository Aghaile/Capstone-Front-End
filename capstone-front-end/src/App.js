import Welcome from './Pages/Welcome';
import NewProfileForm from './Pages/NewProfileForm';
import HumanProfile from './Pages/HumanProfile';
import ErrorPage from './Pages/ErrorPage';
// import SearchBar from './Components/SearchBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return <Router>
    <Routes>
      <Route path="/"element={<Welcome/>} />
      {/* <Route element={<SearchBar/>} /> */}
      <Route path="/createprofile/"element={<NewProfileForm/>} />
      <Route path="/profile/:username"element={<HumanProfile/>} />
      <Route path="*"element={<ErrorPage/>} />
    </Routes>
  </Router>
};

export default App;







// <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <Welcome/>
    //   <NewProfileForm/>
    // </div>