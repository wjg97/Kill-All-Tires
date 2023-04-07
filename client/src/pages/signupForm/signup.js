import React, { useState} from "react";
import { ADD_USER } from "../../utils/mutations"; // import the mutation
import { ApolloProvider, useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility
// import carGif from '../../assets/cargif.mp4';
// import logo from '../../assets/logo.png';
import './signup.css';


const SignUp = () => {
  console.log("You are signing up for an account");
  const [formState, setFormState] = useState({ username: "", email: "", password: "" });
  const [addUser, { error, data }] = useMutation(ADD_USER); // use the useMutation hook to execute the ADD_USER mutation in the handleFormSubmit function

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      // setErrorMessage(e.message);
    }
  };


  return (
    <div className="main">
        {/* <video src={carGif} className="video" autoPlay loop muted/> */}
      <div className="content">
        {/* <img className="rotate" src={logo} alt="KAT logo" /> */}
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      <div className="signupContainer">
        <h1>Signup for an account</h1>
        <form onSubmit={handleFormSubmit}>
        <p className="inputter">Enter a username</p>
        <input name="username" 
        value={formState.username}
        onChange={handleInputChange}
        type="text"
        placeholder="Username" 
        required />

        <p className="inputter">Enter an email</p>
        <input name="email" 
        value={formState.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Email" 
        required />
        <p className="inputter">Enter a password</p>
        <input
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
        />

        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
