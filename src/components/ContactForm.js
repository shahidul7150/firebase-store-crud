import React, { useState } from "react";
import UsersConfig from "../userConfig/UsersConfig";

const ContactForm = ({id,setUserId}) => {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
  };
  const [values, setValues] = useState(initialFormValues);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    console.log(value)
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit =async (e) => {
    e.preventDefault();
    const newUser = {
        ...values
      };
      console.log(newUser);

      try {
          await UsersConfig.addUser(newUser);
        }
      catch (err) {
        
      }
  
  
  };
  return (
    <form onSubmit={handleFormSubmit} >
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="form3Example1"
              class="form-control"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
            <label class="form-label" for="form3Example1">
              First name
            </label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="form3Example2"
              class="form-control"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
            <label class="form-label" for="form3Example2">
              Last name
            </label>
          </div>
        </div>
      </div>

      <div class="form-outline mb-4">
        <input
          type="email"
          id="form3Example3"
          class="form-control"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <label class="form-label" for="form3Example3">
          Email address
        </label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="text"
          id="form3Example4"
          class="form-control"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label class="form-label" for="form3Example4">
          Mobile
        </label>
      </div>

      <div class="form-outline mb-4">
        <textarea
          class="form-control"
          id="form4Example3"
          rows="4"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
        <label class="form-label" for="form4Example3">
          Address
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">
        SAVE
      </button>
    </form>
  );
};

export default ContactForm;
