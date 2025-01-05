import React from "react";
import StyledLogIn from "./LogInMain.style";

function LogInMain() {
    return (
        <StyledLogIn>
            <h1>Log in</h1>
            <form>
                <div className="formGroup">
                    <label htmlFor="email">email</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        required
                    />
                </div>
                <button className="btn" type="submit">Log In</button>
            </form>
        </StyledLogIn>
    );
}

export default LogInMain;
