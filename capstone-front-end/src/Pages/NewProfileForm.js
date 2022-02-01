import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { Multiselect } from 'multiselect-react-dropdown';

const NewProfileForm = (props) => {
  
  const [genderValue, genderInputProps] = useRadioButtons("gender");
  const [formFields, setFormFields] = useState({
    name: "",
    zipcode: "",
    bio: "",
    age: "",
    // gender: this.state = {options:[{"female":"male"}]},
    gender: 
      <fieldset>
          Male
          <input
            value="male"
            checked={genderValue === "male"}
            {...genderInputProps}
          />
          Female
          <input
            value="female"
            checked={genderValue === "female"}
            {...genderInputProps}
          />
      </fieldset>,
    species:"",
    phone: "",
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
    let submitValid = formFields.nameValid && formFields.phone_numberValid && formFields.zipcodeValid;

    setFormFields({
      ...formFields,
      phone: event.target.value,
      phoneNumberValid: phone_numberValid,
      submitDisabled: !submitValid,
    });
  };

  const onBioChange = (event) => {
    let submitValid = formFields.zipcodeValid && formFields.nameValid && formFields.phoneNumberValid;
    setFormFields({
      ...formFields,
      bio: event.target.value,
      submitDisabled: !submitValid,
    });
  };

  const onAgeChange = (event) => {
    let submitValid = formFields.zipcodeValid && formFields.nameValid && formFields.phoneNumberValid;
    setFormFields({
      ...formFields,
      age: event.target.value,
      submitDisabled: !submitValid,
    });
  };

  const onGenderChange = (event) => {
    let submitValid = formFields.zipcodeValid && formFields.nameValid && formFields.phoneNumberValid;
    setFormFields({
      ...formFields,
      gender: event.target.value,
      submitDisabled: !submitValid,
    });
  };

  const onSpeciesChange = (event) => {
    let submitValid = formFields.zipcodeValid && formFields.nameValid && formFields.phoneNumberValid;
    setFormFields({
      ...formFields,
      species: event.target.value,
      submitDisabled: !submitValid,
    });
  };

  function useRadioButtons(name) {
    const [value, setState] = useState(null);
  
    const handleChange = e => {
      setState(e.target.value);
    };
  
    const inputProps = {
      name,
      type: "radio",
      onChange: handleChange
    };
  
    return [value, inputProps];
  }
  

  // When submitting this button, should make a POST, request to /boards to add title and owner info
  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addProfileCallback({
      nameData: formFields.name,
      zipcodeData: formFields.zipcode,
      bioData: formFields.bio,
      ageData: formFields.age,
      genderData: formFields.gender,
      speciesData:formFields.species,
      phoneData: formFields.phone
    });

    axios
      .post(process.env.REACT_APP_BACKEND_URL, {
        name: formFields.name,
        zipcode: formFields.zipcode,
        bio: formFields.bio,
        age: formFields.age,
        gender: formFields.gender,
        species:formFields.species,
        phone: formFields.phone
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
        <form onSubmit={onFormSubmit}>
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
            Female:
          <input
            type="radio"
            name="genderProfile"
            value={formFields.gender}
            onChange={onGenderChange}
            />
          </p>
          <p>
            Male:
          <input
            type="radio"
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
          <p>
            Phone Number:
          <input
            type="number"
            name="ageProfile"
            value={formFields.phone_number}
            onChange={onPhoneNumberChange}
            />
          </p>
          </p>
          <input
            disabled={formFields.submitDisabled}
            type="submit"
            value="submit"
          />
        </form>
    </div>
  );
};

NewProfileForm.propTypes = {
  addProfileCallback: PropTypes.func.isRequired,
};

export default NewProfileForm;
