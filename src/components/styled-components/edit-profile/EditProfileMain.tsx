/**
 * @file EditProfile.js
 * @description This file defines the EditProfile component which allows users to update their profile information.
 * Users can edit their bio, avatar, banner, and venue manager status.
 */

import React, { useState, useEffect } from 'react';
import StyledEditProfile from "./editProfileMain.style";
import StyledLogIn from "../loging/LogInMain.style";
import { API_KEY } from '../../hooks/url';
import { useNavigate } from 'react-router-dom';

/**
 * Interface for the updated profile data.
 * @typedef {Object} UpdatedProfileData
 * @property {string} [bio] - The user's bio.
 * @property {Object} [avatar] - The user's avatar.
 * @property {string} avatar.url - The URL of the avatar image.
 * @property {string} avatar.alt - The alt text for the avatar image.
 * @property {Object} [banner] - The user's banner.
 * @property {string} banner.url - The URL of the banner image.
 * @property {string} banner.alt - The alt text for the banner image.
 * @property {boolean} venueManager - Whether the user is a venue manager.
 */

interface UpdatedProfileData {
    bio?: string;
    avatar?: { url: string; alt: string };
    banner?: { url: string; alt: string };
    venueManager: boolean;
}

/**
 * EditProfile component to update the user's profile information.
 * @component
 */
function EditProfile() {
    const [bio, setBio] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [avatarAlt, setAvatarAlt] = useState<string>("Avatar image");
    const [banner, setBanner] = useState<string>("");
    const [bannerAlt, setBannerAlt] = useState<string>("Banner image");
    const [venueManager, setVenueManager] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true); // Loading state

    const authToken = localStorage.getItem("authToken");
    const apiKey = API_KEY;
    const apiUrl = "https://v2.api.noroff.dev/holidaze/profiles";

    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            try {
                const userData = JSON.parse(storedUserData);

                // Directly set state from root-level properties
                setUser(userData);
                setBio(userData.bio || "");
                setAvatar(userData.avatar?.url || "");
                setAvatarAlt(userData.avatar?.alt || "Avatar image");
                setBanner(userData.banner?.url || "");
                setBannerAlt(userData.banner?.alt || "Banner image");
                setVenueManager(userData.venueManager || false);
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        } else {
            console.error("User data not found in localStorage.");
        }

        setLoading(false);
    }, []);

    /**
     * Handle form submission to update the user's profile.
     * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
     */
    async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!user) {
            console.error("User data is not loaded or invalid.");
            return;
        }

        try {
            const updatedData: UpdatedProfileData = {
                bio: bio || undefined,
                venueManager,
            };

            if (avatar) {
                updatedData.avatar = { url: avatar, alt: avatarAlt };
            }

            if (banner) {
                updatedData.banner = { url: banner, alt: bannerAlt };
            }

            const updatedUser = await updateProfile(updatedData);

            // Update user data in localStorage and state
            await fetchAndStoreUpdatedUserData(updatedUser);

            // Redirect to profile page
            navigate('/profile');
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    }

    /**
     * Update the user's profile data via the API.
     * @param {UpdatedProfileData} updatedData - The updated profile data.
     * @returns {Promise<any>} - The updated user data from the API response.
     * @throws Will throw an error if updating the profile fails.
     */
    async function updateProfile(updatedData: UpdatedProfileData) {
        if (!user?.name) {
            throw new Error("User name is missing.");
        }

        const headers = {
            'Authorization': `Bearer ${authToken}`,
            'X-Noroff-API-Key': apiKey,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`${apiUrl}/${user.name}`, {
            method: "PUT",
            headers,
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error(`Error updating profile: ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        return jsonResponse.data;
    }

    /**
     * Fetch the updated user data and store it in localStorage and state.
     * @param {any} updatedUser - The updated user data.
     * @returns {Promise<void>}
     */
    async function fetchAndStoreUpdatedUserData(updatedUser: any) {
        try {
            localStorage.setItem("userData", JSON.stringify(updatedUser));
            setUser(updatedUser);
        } catch (error) {
            console.error("Error storing updated user data:", error);
        }
    }

    const onBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBio(e.target.value);
    const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => setAvatar(e.target.value);
    const onAvatarAltChange = (e: React.ChangeEvent<HTMLInputElement>) => setAvatarAlt(e.target.value);
    const onBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => setBanner(e.target.value);
    const onBannerAltChange = (e: React.ChangeEvent<HTMLInputElement>) => setBannerAlt(e.target.value);
    const onVenueManagerChange = (e: React.ChangeEvent<HTMLInputElement>) => setVenueManager(e.target.checked);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User data is not available. Please log in.</div>;
    }

    return (
        <StyledEditProfile>
            <StyledLogIn>
                <h1>Edit Profile</h1>
                <form onSubmit={onFormSubmit}>
                    <div className="formGroup">
                        <label htmlFor="editBio">Bio</label>
                        <textarea
                            id="editBio"
                            name="editBio"
                            placeholder="Enter your bio"
                            value={bio}
                            onChange={onBioChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="editAvatar">Avatar (Image URL)</label>
                        <input
                            type="text"
                            id="editAvatar"
                            name="editAvatar"
                            placeholder="Enter your avatar image URL"
                            value={avatar}
                            onChange={onAvatarChange}
                        />
                        <label htmlFor="editAvatarAlt">Avatar Alt Text</label>
                        <input
                            type="text"
                            id="editAvatarAlt"
                            name="editAvatarAlt"
                            placeholder="Enter avatar alt text"
                            value={avatarAlt}
                            onChange={onAvatarAltChange}
                        />
                        {avatar && <img src={avatar} alt={avatarAlt} style={{ maxWidth: "200px", marginTop: "10px" }} />}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="editBanner">Banner (Image URL)</label>
                        <input
                            type="text"
                            id="editBanner"
                            name="editBanner"
                            placeholder="Enter your banner image URL"
                            value={banner}
                            onChange={onBannerChange}
                        />
                        <label htmlFor="editBannerAlt">Banner Alt Text</label>
                        <input
                            type="text"
                            id="editBannerAlt"
                            name="editBannerAlt"
                            placeholder="Enter banner alt text"
                            value={bannerAlt}
                            onChange={onBannerAltChange}
                        />
                        {banner && <img src={banner} alt={bannerAlt} style={{ maxWidth: "200px", marginTop: "10px" }} />}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="editManager">Are you a Venue Manager?</label>
                        <input
                            type="checkbox"
                            id="editManager"
                            name="editManager"
                            checked={venueManager}
                            onChange={onVenueManagerChange}
                        />
                    </div>
                    <button className="btn" type="submit">
                        Save Changes
                    </button>
                </form>
            </StyledLogIn>
        </StyledEditProfile>
    );
}

export default EditProfile;
