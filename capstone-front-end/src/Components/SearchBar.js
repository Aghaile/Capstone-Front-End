<<<<<<< HEAD
// import React, {useState} from "react";
// import "./SearchBar.css";
=======
import React, {useState} from "react";
import "./SearchBar.css";
import axios from "axios";

>>>>>>> adah

// function SearchBar({placeholder, data}){

//     const [filteredData, setFilteredData] = useState([]);

<<<<<<< HEAD
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
=======
    const handleFilter = (event) => {
        const searchTerm = event.target.value;
        const newFilter = data.filter((value) => {
            return value.username.toLowercase().includes(searchTerm.toLowercase());
        });
        if (searchTerm === ""){
            setFilteredData([])
        }else{
        setFilteredData(newFilter);
        }
    };
    
    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeholder} onChange={handleFilter} ></input>
                <div className="searchIcon"></div>
            </div>
            {filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 10).map((value, key) => {
                    return <a className="usernamesList" href={value.link} target="_self">{value.username}</a> 
                })}
            </div>
            )}
        </div>
    )
            };
>>>>>>> adah


// export default SearchBar; 

// to do: link href on line 13 to the profile. Maybe generate a URL for each new member 
// and include their URL in the dict that gets returned when someone signs up
