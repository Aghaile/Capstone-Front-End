import React from "react";

const homePage = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <div className="searchBox">
                <input type="text"></input>
            </div>
            <div className="welcomeButtons">        
                <button>Search Username</button>
            </div>
        </div>
    );
};

export default homePage;