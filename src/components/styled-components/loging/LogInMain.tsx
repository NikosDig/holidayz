import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import StyledLogIn from "./LogInMain.style";
import { LogInUser } from "../../hooks/url"; 


/**
 * LogInMain Component
 * Handles user login by collecting email and password, sending authentication request,
 * and managing login state. If successful, stores user data in localStorage and redirects to profile.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function LogInMain(): JSX.Element {
    /** 
     * State variables for email, password, and error handling.
     * @constant {string} email - User's email input.
     * @constant {string} password - User's password input.
     * @constant {string | null} error - Stores any login error messages.
     */
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate(); 

    /**
     * Handles form submission for user login.
     * Sends a POST request to authenticate the user and stores the access token on success.
     *
     * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
     * @async
     */
    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = { email, password };

        try {
            // Construct the login request URL
            const url = `${LogInUser}?_holidaze=true`;

            // Send login request
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error("Failed to log in. Please check your credentials.");
            }

            // Parse response data
            const data = await response.json();
           // console.log("Response Data:", data);

            // Store user data and authentication token if login is successful
            if (data.data && data.data.accessToken) {
               // console.log("Storing user data in localStorage:", data.data);
                localStorage.setItem("userData", JSON.stringify(data.data)); 
                localStorage.setItem("authToken", data.data.accessToken);

                // Redirect user to profile page after successful login
               // console.log("Redirecting to /profile");
                navigate("/profile");
            } else {
                throw new Error("Authentication failed. No accessToken returned.");
            }
        } catch (error: any) {
            setError(error.message); // Set error message in state
        }
    };

    /**
     * Handles email input change.
     * Updates the `email` state with the input value.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The email input change event.
     */
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    /**
     * Handles password input change.
     * Updates the `password` state with the input value.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The password input change event.
     */
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <StyledLogIn>
            <h1>Log in</h1>
            {error && <div className="error">{error}</div>} {/* Display error message if login fails */}
            <form onSubmit={onFormSubmit}>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={onEmailChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={onPasswordChange}
                        required
                    />
                </div>
                <button className="btn" type="submit">Log In</button>
            </form>
            <p className="signUpHere">
                Don't have an account yet? Sign up <Link to="/signup">here</Link>
            </p>
        </StyledLogIn>
    );
}

export default LogInMain;
