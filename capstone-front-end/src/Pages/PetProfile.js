import {Link} from "react-router-dom";
import "./PetProfile.css";
import YourProfile from "../Components/YourProfile"
import NavSection from "../Components/NavSection";

const PetProfile=()=>{


    return (
        <div>
            <div>

            <div className="greeting">
                <div class="float-container">

                    <div class="float-child" id='navBar'>
                        <NavSection />
                    </div>

                    <div class="float-child" id="mainPart">
                        <YourProfile />
                    </div>
                </div>
            </div>
        </div>
            <div className="returnHomeButtonOnProfile">
                <button className="goHomeButton"><Link to="/welcome">Return Home</Link></button>
            </div>
        </div>
    )
}

export default PetProfile;





