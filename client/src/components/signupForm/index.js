import React from "react"

const signup = () => {
    console.log("You are signing up for an account")
}

return (
    <div className="signupContainer">
        <h1>Signup for an account!</h1>

        <input
            name="username"
            placeholder="username"
            required
        > 
        Enter a username
        </input>
        <input
            name="email"
            placeholder="email"
            required
        > 
        Enter an email
        </input>
        <input
            name="password"
            placeholder="password"
            required
        > 
        Enter a password
        </input>
    </div>
)

export default signup;

