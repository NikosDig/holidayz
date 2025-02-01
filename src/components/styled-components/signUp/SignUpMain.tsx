/**
 * SignUpMain component handles the user registration process.
 * It includes form inputs for email, password, name, profile image, and role selection.
 * When the user submits the form, a request is sent to register the new user profile.
 * 
 * @component
 * @example
 * // Usage:
 * <SignUpMain />
 */

import StyledSignUp from "./SignUpMain.style";
import StyledLogIn from "../loging/LogInMain.style";
import React, { useState } from 'react';
import { registerNewProfileUrl } from "../../hooks/url";

/**
 * Represents the SignUpMain component for user registration.
 *
 * @function SignUpMain
 * @returns {JSX.Element} The SignUp form component
 */
function SignUpMain() {
    // State hooks to track user input for the registration form
    const [email, setEmail] = useState("");  // Email input state
    const [password, setPassword] = useState("");  // Password input state
    const [name, setName] = useState("");  // Name input state
    const [image, setImage] = useState("");  // Image input state (for profile image URL)
    const [role, setRole] = useState("");  // Role input state (either "user" or "manager")

    /**
     * Handles the form submission event for user registration.
     * Sends the registration data to the backend API to create a new profile.
     * 
     * @param {React.FormEvent<HTMLFormElement>} event - The form submit event
     * @returns {Promise<void>} No return value
     */
    async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevents the default form submission behavior

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

            // If the response is not OK, throw an error
            if (!response.ok) {
                throw new Error("Failed to register");
            }

            const data = await response.json();
            console.log("User registered successfully:", data); // Log successful registration
        } catch (error) {
            console.error("Error:", error); // Log error if something goes wrong
        }
    }

    /**
     * Handles the email input change and updates the email state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event triggered by the email input
     * @returns {void}
     */
    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    /**
     * Handles the password input change and updates the password state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event triggered by the password input
     * @returns {void}
     */
    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    /**
     * Handles the name input change and updates the name state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event triggered by the name input
     * @returns {void}
     */
    function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    /**
     * Handles the image input change and updates the image state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event triggered by the image input
     * @returns {void}
     */
    function onImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }

    /**
     * Handles the role selection change and updates the role state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event triggered by the role input
     * @returns {void}
     */
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
