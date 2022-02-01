import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Multiselect } from 'multiselect-react-dropdown';



const NewProfileForm = (props) => {
  

  const [formFields, setFormFields] = useState({
    name: "",
    zipcode: Int16Array,
    bio: "",
    age: Int16Array,
    gender: {this.state()= {options:[{name: 'male', id: 1},{name: 'female', id: 2}]}},
    species:"",
    phone_number: Int16Array,
    nameValid: false,
    zipcodeValid: false,
    phone_numberValid:false,
    submitDisabled: true,
  });

  const onNameChange = (event) => {
    let nameValid = event.target.value ? true : false;
    let submitValid = formFields.zipcodeValid && nameValid && phone_number;

    setFormFields({
      ...formFields,
      name: event.target.value,
      nameValid: nameValid,
      submitDisabled: !submitValid,
    });
  };

  const onZipcodeChange = (event) => {
    let zipcodeValid = event.target.value ? true : false;
    let submitValid = formFields.nameValid && zipcodeValid && phone_number;

    setFormFields({
      ...formFields,
      zipcode: event.target.value,
      zipcodeValid: zipcodeValid,
      submitDisabled: !submitValid,
    });
  };

  const onPhone_NumberChange = (event) => {
    let phone_numberValid = event.target.value ? true : false;
    let submitValid = formFields.nameValid && phone_numberValid && zipcodeValid;

    setFormFields({
      ...formFields,
      phone_number: event.target.value,
      phone_numberValid: phone_numberValid,
      submitDisabled: !submitValid,
    });
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

  // When submitting this button, should make a POST, request to /boards to add title and owner info
  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addProfileCallback({
      usernameData: formFields.username,
      zipcodeData: formFields.zipcode,
    });

    axios
      .post(process.env.REACT_APP_BACKEND_URL, {
        username: formFields.username,
        zipcode: formFields.zipcode,
      })

      .then(function (response) {
        console.log(response);
        setFormFields({
          ...formFields,
          username: "",
          zipcode: "",
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
            Username:
            <input
              type="text"
              name="usernameProfile"
              value={formFields.username}
              onChange={onUsernameChange}
            />
          </p>
          <p>
            Zip Code:
            <input
              type="text"
              name="zipcodeProfile"
              value={formFields.zipcode}
              onChange={onZipcodeChange}
            />
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
