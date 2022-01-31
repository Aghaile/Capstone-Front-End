import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewProfileForm = (props) => {
  const [formFields, setFormFields] = useState({
    username: "",
    zipcode: Int16Array,
    usernameValid: false,
    zipcodeValid: false,
    submitDisabled: true,
  });

  const onUsernameChange = (event) => {
    let usernameValid = event.target.value ? true : false;
    let submitValid = formFields.zipcodeValid && usernameValid;

    setFormFields({
      ...formFields,
      username: event.target.value,
      usernameValid: usernameValid,
      submitDisabled: !submitValid,
    });
  };

  const onZipcodeChange = (event) => {
    let zipcodeValid = event.target.value ? true : false;
    let submitValid = formFields.usernameValid && zipcodeValid;

    setFormFields({
      ...formFields,
      zipcode: event.target.value,
      zipcodeValid: zipcodeValid,
      submitDisabled: !submitValid,
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
