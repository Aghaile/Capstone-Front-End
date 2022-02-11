import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {Link} from "react-router-dom";
// import UploadImage from "../Components/ImageUpload";
// import { Multiselect } from 'multiselect-react-dropdown';

const NewProfileForm = () => {
  
  const [formFields, setFormFields] = useState({
    name: "",
    // photo: <UploadImage />,
    zipcode: "",
    bio: "",
    age: "",
    gender: "",
      // <fieldset>
      //     Male
      //     <input
      //       value="male"
      //       checked={genderValue === "male"}
      //       {...genderInputProps}
      //     />
      //     Female
      //     <input
      //       value="female"
      //       checked={genderValue === "female"}
      //       {...genderInputProps}
      //     />
      // </fieldset>,
    species:"",
    phone_number: "",
    nameValid: false,
    zipcodeValid: false,
    phoneNumberValid:false,
    submitDisabled: true,
  });

  const onNameChange = (event) => {
    let nameValid = event.target.value ? true : false;
    let submitValid = formFields.zipcodeValid && formFields.nameValid && formFields.phoneNumberValid;

    setFormFields({
      ...formFields,
      name: event.target.value,
      nameValid: nameValid,
      submitDisabled: !submitValid,
    });
  };

  const onZipcodeChange = (event) => {
    let zipcodeValid = event.target.value ? true : false;
    let submitValid = formFields.nameValid && formFields.zipcodeValid && formFields.phoneNumberValid;

    setFormFields({
      ...formFields,
      zipcode: event.target.value,
      zipcodeValid: zipcodeValid,
      submitDisabled: !submitValid,
    });
  };

  const onPhoneNumberChange = (event) => {
    let phone_numberValid = event.target.value ? true : false;
    // let new_phone_number = event.target.value.length > this.maxLength ? this.value : this.value.slice(0, this.maxLength)
    let submitValid = formFields.nameValid && formFields.phoneNumberValid && formFields.zipcodeValid;
    // const new_phone = event.target.value
    setFormFields({
      ...formFields,
      phone_number: event.target.value,
      phoneNumberValid: phone_numberValid,
      submitDisabled: !submitValid,
    });

    // return (
    //   <div>
    //     {new_phone.length > 10 && 
    //     <h2>"Phone number must be 10 digits long."</h2>
    //     } 
    //   </div>
    // )
  };

  const onBioChange = (event) => {
    setFormFields({
      ...formFields,
      bio: event.target.value,
    });
  };

  const onAgeChange = (event) => {
    setFormFields({
      ...formFields,
      age: event.target.value,
    });
  };

  const onGenderChange = (event) => {
    setFormFields({
      ...formFields,
      gender: event.target.value,
    });
  };

  const onSpeciesChange = (event) => {
    setFormFields({
      ...formFields,
      species: event.target.value,
    });
  };

  // function useRadioButtons(name) {
  //   const [value, setState] = useState(null);
  
  //   const handleChange = e => {
  //     setState(e.target.value);
  //   };
  
  //   const inputProps = {
  //     name,
  //     type: "radio",
  //     onChange: handleChange
  //   };
  
  //   return [value, inputProps];
  // }
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:5000/pet",{  
        name: formFields.name,
        zipcode: formFields.zipcode,
        bio: formFields.bio,
        age: formFields.age,
        gender: formFields.gender,
        species:formFields.species,
        phone_number: formFields.phone_number
      })

      .then(function (response) {
        console.log(response);
        setFormFields({
          ...formFields,
          username: "",
          zipcode: "",
          bioData: "",
          ageData: "",
          genderData: "",
          speciesData:"",
          phoneData: "",
          submitDisabled: true,
        });      
      })

      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="text-center">
      <h2>Create Profile</h2>
        <form 
    
        onSubmit={onFormSubmit}>
          <p className="">
            Name:
            <input
              type="text"
              name="usernameProfile"
              value={formFields.name}
              onChange={onNameChange}
            />
          </p>
          <p>
            Zip Code:
            <input
              type="number"
              name="zipcodeProfile"
              value={formFields.zipcode}
              onChange={onZipcodeChange}
            />
          </p>
          <p>
            Bio:
          <input
            type="text"
            name="bioProfile"
            value={formFields.bio}
            onChange={onBioChange}
            />
          </p>
          <p>
            Age:
          <input
            type="number" 
            name="ageProfile"
            value={formFields.age}
            onChange={onAgeChange}
            />
          </p>
          <p>
            Gender:
          <input
            type="text"
            name="genderProfile"
            value={formFields.gender}
            onChange={onGenderChange}
            />
          </p>
          <p>
            Species:
          <input
            type="text"
            name="speciesProfile"
            value={formFields.species}
            onChange={onSpeciesChange}
            /> 
          </p>
          <p>
            Phone Number:
            <input 
            name="phoneNum"
            type = "text"
            value={formFields.phone}
            onChange={onPhoneNumberChange}
            />
          </p>
          <input
            disabled={formFields.submitDisabled}
            type="submit"
            value="submit"
          />
        </form>
    <button className="goHomeButton"><Link to="/welcome">Return Home</Link></button>
  </div>
  );
};

NewProfileForm.propTypes = {
  // addProfileCallback: PropTypes.func.isRequired,
  addProfileCallback: PropTypes.func
};

export default NewProfileForm;


// capture keystrokes
//check onSubmit and reject non-numbers
//phone number component (String type in db)