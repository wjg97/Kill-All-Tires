import React from "react"

const login = () => {
    console.log("You are signing into an account")
}

return (
    <div className="loginContainer">
        <h1>Login to an account!</h1>

        <input
            name="username"
            placeholder="username"
            required
        > 
        Enter a username
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

export default login;