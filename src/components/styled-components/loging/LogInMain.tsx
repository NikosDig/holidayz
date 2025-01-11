import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import StyledLogIn from "./LogInMain.style";
import { LogInUser } from "../../hooks/url"; 

function LogInMain() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate(); 

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = { email, password };

        try {
            
            const url = `${LogInUser}?_holidaze=true`;

            
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

            
            const data = await response.json();
            console.log("Response Data:", data);

            
            if (data.data && data.data.accessToken) {
                
                console.log("Storing user data in localStorage:", data.data);
                localStorage.setItem("userData", JSON.stringify(data.data)); 

                
                localStorage.setItem("authToken", data.data.accessToken);

                
                console.log("Redirecting to /profile");
                navigate("/profile");
            } else {
                throw new Error("Authentication failed. No accessToken returned.");
            }
        } catch (error: any) {
            setError(error.message); 
        }
    };

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <StyledLogIn>
            <h1>Log in</h1>
            {error && <div className="error">{error}</div>} 
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
