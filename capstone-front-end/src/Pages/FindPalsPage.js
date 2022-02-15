<<<<<<< HEAD
import React from "react";
import {Link} from "react-router-dom";
import NavSection from "../Components/NavSection"
import FindPalsSection from "../Components/FindPalsSection";
import "./FindPalsPage.css";


function FindPalsPage(){
    return (
        <div>
        <div class="float-container">

            <div class="float-child" id='navBar'>
                <NavSection />
            </div>

            <div class="float-child" id="mainPart">
                <FindPalsSection />
            </div>
        </div>
            
        <div className="returnHomeButtonOnProfile">
            <button className="goHomeButton"><Link to="/">Return Home</Link></button>
        </div>
        </div>
    )
}

export default FindPalsPage;
=======
// import React from "react";
// import {Link} from "react-router-dom";
// import NavSection from "../Components/NavSection"
// import FindPalsSection from "../Components/FindPalsSection";
// import "./FindPalsPage.css";


// function FindPalsPage(){
//     return (
//         <div>
//         <div class="float-container">

//             <div class="float-child" id='navBar'>
//                 <NavSection />
//             </div>

//             <div class="float-child" id="mainPart">
//                 <FindPalsSection />
//             </div>
//         </div>
//         </div>
//     )
// }

// export default FindPalsPage;
>>>>>>> ro


