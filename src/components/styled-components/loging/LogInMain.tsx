import { Link } from "react-router-dom";
import StyledLogIn from "./LogInMain.style";

function LogInMain() {
    return (
        <StyledLogIn>
            <h1>Log in</h1>
            <form method="POST">
                <div className="formGroup">
                    <label htmlFor="email">email</label>
                    <input 
                        type="email" 
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
            <p className="signUpHere">Dont have an account yet? Sign up <Link to="/signup">here</Link> </p>
        </StyledLogIn>
    );
}

export default LogInMain;
