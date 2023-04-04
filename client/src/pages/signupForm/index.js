/* eslint-disable react-hooks/rules-of-hooks */ // this is to disable the linting warning that says we can't use hooks outside of a function component
import React, { useState } from "react";
import { ADD_USER } from "../../utils/mutations"; // import the mutation
import { useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility


const Signup = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleInputChange = (event) => {
  //   const { target } = event;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === "email") {
  //     setEmail(inputValue);
  //   }
  //   if (inputType === "password") {
  //     setPassword(inputValue);
  //   }
  //   if (inputType === "username") {
  //     setUsername(inputValue);
  //   }
  // };

  // const [addUser, { error }] = useMutation(ADD_USER); // use the useMutation hook to execute the ADD_USER mutation in the handleFormSubmit function

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addUser({
  //       variables: { email, password, username },
  //     });

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //     setErrorMessage(e.message);
  //   }

  //   setEmail("");
  //   setPassword("");
  //   setUsername("");
  // };


  return (
    <div className="signupContainer">
      <h1>Signup for an account!</h1>

      <input 
        
        name="username"
        onChange={handleChange}
        type="text"
        placeholder="Username"
      />
        Enter a username
      <input 
        
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Email"
      >
        Enter an email
      </input>
      <input 
        
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      >
      </input>
      <button type="button" onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Signup;
