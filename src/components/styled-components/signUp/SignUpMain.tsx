import StyledSignUp from "./SignUpMain.style";
import StyledLogIn from "../loging/LogInMain.style";
import React, { useState } from 'react';
import { registerNewProfileUrl } from "../../hooks/url";

function SignUpMain() {
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [role, setRole] = useState("");

        async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const body = {
                email,
                password,
                name,
                image,
                role,
            };

            try {
                
                const response = await fetch(registerNewProfileUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });

                
                if (!response.ok) {
                    throw new Error("Failed to register");
                }

                
                const data = await response.json();
                console.log("User registered successfully:", data);
            } catch (error) {
                
                console.error("Error:", error);
            }
        }

        function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
            setEmail(event.target.value);
        }
        function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
            setPassword(event.target.value);
        }

        function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
            setName(event.target.value);
        }

        function onImageChange(event: React.ChangeEvent<HTMLInputElement>) {
            setImage(event.target.value);
        }

        function onRoleChange(event: React.ChangeEvent<HTMLInputElement>) {
            setRole(event.target.value);
        }

    return (
        <StyledSignUp>
            <StyledLogIn>
                <h1>Sign up</h1>
                <form onSubmit={onFormSubmit}>
                    <div className="formGroup">
                        <label htmlFor="signUpEmail">Email (must be @noroff.no or stud.noroff.no)</label>
                        <input 
                            type="email" 
                            id="signUpEmail" 
                            name="signUpEmail" 
                            placeholder="Enter your email"
                            value={email} 
                            onChange={onEmailChange}
                            pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="signUpPassword">Password</label>
                        <input 
                            value={password}
                            onChange={onPasswordChange}
                            type="password" 
                            id="signUpPassword" 
                            name="signUpPassword" 
                            placeholder="Enter your password"
                            minLength={8}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="SignUpName">Name</label>
                        <input 
                            value={name}
                            onChange={onNameChange}
                            type="text" 
                            id="SignUpName" 
                            name="SignUpName" 
                            placeholder="Enter your name" 
                            minLength={3}
                            maxLength={20}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="signUpImage">Image</label>
                        <input 
                            value={image}
                            onChange={onImageChange}
                            type="text" 
                            id="signUpImage" 
                            name="signUpImage" 
                            placeholder="Enter your profile picture" 
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label></label>
                        <div className="radioGroup">
                            <label htmlFor="roleUser">
                                <input 
                                    type="radio" 
                                    id="roleUser" 
                                    name="roleUser" 
                                    value="user" 
                                    checked={role === "user"}
                                    onChange={onRoleChange}
                                    required
                                />
                                User
                            </label>
                            <label htmlFor="roleManager">
                                <input 
                                    type="radio" 
                                    id="roleManager" 
                                    name="roleManager" 
                                    value="manager"
                                    checked={role === "manager"}
                                    onChange={onRoleChange}
                                />
                                Manager
                            </label>
                        </div>
                    </div>
                    <button className="btn" type="submit">Sign up</button>
                </form>
            </StyledLogIn>
        </StyledSignUp>
    );
};

export default SignUpMain;
