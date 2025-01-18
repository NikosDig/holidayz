
import React, { useState, useEffect } from 'react';
import StyledEditProfile from "./editProfileMain.style";
import StyledLogIn from "../loging/LogInMain.style";
import { API_KEY } from '../../hooks/url';
import { useNavigate } from 'react-router-dom';

interface UpdatedProfileData {
    bio?: string; 
    avatar: { url: string };
    banner: { url: string };
    venueManager: boolean;
}

function EditProfile() {
    const [avatar, setAvatar] = useState<string>(""); 
    const [banner, setBanner] = useState<string>(""); 
    const [venueManager, setVenueManager] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);

    const authToken = localStorage.getItem("authToken");
    const apiKey = API_KEY; 
    const apiUrl = "https://v2.api.noroff.dev/holidaze/profiles";

    
    const navigate = useNavigate();

    
    function setUserData() {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUser(userData);
        } else {
            console.error("User data not found in localStorage.");
        }
    }

    
    useEffect(() => {
        setUserData();
    }, []);

    async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!user) {
            console.error("User data not found.");
            return;
        }

        try {
            let avatarUrl = user.data.avatar?.url || ''; 
            let bannerUrl = user.data.banner?.url || ''; 

            if (avatar) {
                avatarUrl = avatar;
            }

            if (banner) {
                bannerUrl = banner;
            }

            const updatedData: UpdatedProfileData = {
                avatar: { url: avatarUrl },
                banner: { url: bannerUrl },
                venueManager,
            };

            const updatedUser = await updateProfile(updatedData);

            // Fetch and store the updated profile data
            await fetchAndStoreUpdatedUserData(updatedUser);

            // Redirect to the profile page after successful update
            navigate('/profile');

        } catch (error) {
            console.error("Error updating profile:", error);
        }
    }

    async function updateProfile(updatedData: UpdatedProfileData) {
        const userData = localStorage.getItem("userData");
        if (!userData) {
            throw new Error("User data not found in localStorage");
        }

        const user = JSON.parse(userData);

        const headers = {
            'Authorization': `Bearer ${authToken}`,
            'X-Noroff-API-Key': apiKey,
            'Content-Type': 'application/json',
        };

        const userName = user.data.name; 
        
        if (!userName) {
            throw new Error("User name is missing.");
        }

        const response = await fetch(`${apiUrl}/${userName}`, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: headers,
        });

        if (response.ok) {
            const updatedUser = await response.json();
            return updatedUser;
        } else {
            throw new Error(`Error updating profile: ${response.statusText}`);
        }
    }

    async function fetchAndStoreUpdatedUserData(updatedUser: any) {
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        
        setUser(updatedUser);
    }

    function onAvatarChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAvatar(event.target.value);
    }

    function onBannerChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBanner(event.target.value); 
    }

    function onVenueManagerChange(event: React.ChangeEvent<HTMLInputElement>) {
        setVenueManager(event.target.checked);
    }

    return (
        <StyledEditProfile>
            <StyledLogIn>
                <h1>Edit Profile</h1>
                <form onSubmit={onFormSubmit}>
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
                        {avatar && <img src={avatar} alt="Avatar Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />}
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
                        {banner && <img src={banner} alt="Banner Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />}
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
                    <button className="btn" type="submit">Save Changes</button>
                </form>
            </StyledLogIn>
        </StyledEditProfile>
    );
}

export default EditProfile;
