// import React from "react";
// import "./SearchBar.css";

// const SearchBar=()=>{

//     const [filteredData, setFilteredData] = useState([]);

//     const handleFilter = (event) => {
//        const searchTerm = event.target.value;
//        const newFilter = data.filter((value) => {
//             return value.username.toLowercase().includes(searchTerm.toLowercase());
//        });
//        if (searchTerm === ""){
//            setFilteredData([])
//        }else{
//        setFilteredData(newFilter);
//        }
//     };

//     return (
//         <div className="search">
//             <div className="searchInput">
//                 <input type="text" placeholder={placeholder} onChange={handleFilter} ></input>
//                 <div className="searchIcon"></div>
            // {/* </div>
            // {/* {filteredData.length != 0 && (
            // <div className="dataResult">
            //     {filteredData.slice(0, 10).map((value, key) => {
            //         return <a className="usernamesList" href={value.link} target="_self">{value.username}</a> 
            //     })} */}
            // {/* </div> 
            // )} */}
//         </div>
//     )


// export default SearchBar; 

// to do: link href on line 13 to the profile. Maybe generate a URL for each new member 
// and include their URL in the dict that gets returned when someone signs up


//     return ( 
//         <div>
//             <button onClick={onLoginFormSubmit}>Login</button>
//             <button onClick={onCreateProfile}><Link to='/createprofile'>Create Profile</Link></button>
//         </div>
//     )
// }

// export default SearchBar;



